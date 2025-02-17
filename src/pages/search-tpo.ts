import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { apiService } from '../services/api-service';
import { TPO } from '../models/tpo';
import { PopupNotificationService } from '../services/popup-notification-service';
import { LoadingOverlayService } from '../services/loading-overlay-service';
import { ShareService } from '../services/share-service';

import { globalStyles } from '../styles/global-styles';

@customElement('search-tpo')
// @ts-ignore
class SearchTPO extends LitElement {

    static readonly styles = [css`
        .search-results {
            margin-top: 20px;
            display: grid;
            gap: 16px;
        }

        .tpo-card {
            padding: 16px;
            border: 1px solid #6200ee;
            border-radius: 8px;
            background: white;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            overflow: hidden;
        }

        .tpo-field {
            margin: 8px 0;
        }
      `, globalStyles];

    @state() private tpos: TPO[] = [];
    @state() private fio: string = '';
    @state() private passportSeriesNumber: string = '';
    @state() private isFormValid: boolean = false;

    // Регулярные выражения для валидации
    private readonly fioRegex = /^((?![\s’(),.-])+[А-Яа-яЁёIV’(),.-]{2,}\s(?<![’(),.-]))+((?![\s’(),.-])+[А-Яа-яЁёIV’(),.-]{2,}(?<![\s’(),.-]))+$/;
    private readonly passportSeriesNumberRegex = /^\d{4}\s\d{6}$/;

    async handleSearchTPO() {
        LoadingOverlayService.show();

        this.tpos = [];

        try {
            const tpos = await apiService.fetchTPOList(this.fio.trim(), this.passportSeriesNumber);
            this.tpos = tpos;
        } catch (error) {
            PopupNotificationService.show('Произошла ошибка. Пожалуйста, попробуйте позже', 'error');
        } finally {
            this.clearForm();
            LoadingOverlayService.hide();
        }
    }

    clearForm() {
        this.fio = '';
        this.passportSeriesNumber = '';
        this.validateForm();
    }

    validateForm() {
        const isFioValid = this.fioRegex.test(this.fio);
        const isPassportSeriesNumberValid = this.passportSeriesNumberRegex.test(this.passportSeriesNumber);

        this.isFormValid = isFioValid && isPassportSeriesNumberValid;
    }

    handleFioInput(e: Event) {
        this.fio = (e.target as HTMLInputElement).value;

        const input = e.target as HTMLInputElement;
        const cursorPosition = input.selectionStart;

        // Удаляем лишние символы
        let value = input.value
            .replace(/[^А-Яа-яЁёIV’()\s,.-]+/g, '')
            .replace(/\s+/g, ' ');

        // Сохраняем новое значение
        this.fio = value;

        // Восстанавливаем позицию курсора
        requestAnimationFrame(() => {
            if (cursorPosition) {
                const newCursorPos = this.calculateNewCursorPosition(cursorPosition, input.value, value);
                input.setSelectionRange(newCursorPos, newCursorPos);
            }
        });

        this.validateForm();
        input.value = this.fio; // Обновляем значение в DOM
    }

    handlePassportSeriesNumberInput(e: Event) {
        const input = e.target as HTMLInputElement;
        const cursorPosition = input.selectionStart;

        // Удаляем все нецифровые символы и пробелы
        let value = input.value.replace(/[^\d]/g, '');

        // Форматируем по маске XXXX XXXXXX
        let formatted = '';
        if (value.length > 0) {
            formatted = value.slice(0, 4);
            if (value.length > 4) {
                formatted += ' ' + value.slice(4, 10);
            }
        }

        // Сохраняем новое значение
        this.passportSeriesNumber = formatted;

        // Восстанавливаем позицию курсора
        requestAnimationFrame(() => {
            if (cursorPosition) {
                const newCursorPos = this.calculateNewCursorPosition(cursorPosition, input.value, formatted);
                input.setSelectionRange(newCursorPos, newCursorPos);
            }
        });

        this.validateForm();
        input.value = this.passportSeriesNumber; // Обновляем значение в DOM
    }

    calculateNewCursorPosition(oldPos: number, oldValue: string, newValue: string): number {
        // Корректируем позицию курсора при добавлении/удалении символов
        const diff = newValue.length - oldValue.length;
        return oldPos + diff;
    }

    async generateLink(tpo: TPO) {
        LoadingOverlayService.show();

        // Эмуляция задержки сети TODO
        const delay = Math.random() * 2000 + 1000; // 1-3 секунды
        await new Promise(resolve => setTimeout(resolve, delay));

        const randomHash = Math.random().toString(36).substring(2, 8);
        const newTpos = this.tpos.map(c => {
          if (c.id === tpo.id) {
            return { ...c, link: `${window.location.origin}/payment/${randomHash}` };
          }
          return c;
        });
        this.tpos = newTpos;

        LoadingOverlayService.hide();
    }

    render() {
        return html`
            <div class="form-group">
                <label for="fio">ФИО плательщика</label>
                <input
                    id="fio"
                    type="text"
                    .value="${this.fio}"
                    @input="${this.handleFioInput}"
                    class="${!this.fioRegex.test(this.fio) && this.fio ? 'invalid' : ''}"
                    placeholder="Иванов Иван Иванович"
                />
                <div class="error-message">Введите корректное ФИО (например, Иванов Иван Иванович)</div>
            </div>

            <div class="form-group">
                <label for="passport">Серия и номер паспорта РФ плательщика</label>
                <input
                    id="passport"
                    type="text"
                    .value="${this.passportSeriesNumber}"
                    @input="${this.handlePassportSeriesNumberInput}"
                    class="${!this.passportSeriesNumberRegex.test(this.passportSeriesNumber) && this.passportSeriesNumber ? 'invalid' : ''}"
                    placeholder="1234 567890"
                    inputmode="numeric"
                    pattern="${this.passportSeriesNumberRegex}"
                    maxlength="11"
                />
                <div class="error-message">Введите серию и номер паспорта РФ в формате "1234 567890"</div>
            </div>

            <button
                class="action-button"
                @click="${this.handleSearchTPO}"
                ?disabled="${!this.isFormValid}"
            >
                Поиск
            </button>

            <div class="search-results">
                ${this.tpos.map(tpo => html`
                <div class="tpo-card">
                    <div class="tpo-field"><strong>Сумма: </strong>${tpo.amount} руб.</div>
                    <div class="tpo-field"><strong>Дата: </strong>${tpo.date}</div>
                    <div class="tpo-field"><strong>Номер ТПО: </strong>${tpo.number}</div>

                    <button
                        class="action-button"
                        @click="${() => this.generateLink(tpo)}"
                        ?disabled="${tpo.link}"
                    >
                        Создать ссылку
                    </button>

                    ${tpo.link ? html`
                    <div class="link-container">
                        <div class="link-field">${tpo.link}</div>
                        <button
                            class="share-button"
                            @click=${() => ShareService.shareLink(tpo.link!)}
                        >
                            <svg class="share-icon" viewBox="0 0 24 24">
                                <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92z"/>
                            </svg>
                        </button>
                    </div>
                    ` : ''}
                </div>
                `)}
            </div>
        `;
    }
}