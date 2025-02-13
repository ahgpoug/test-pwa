import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { globalStyles } from '../styles/global-styles';

@customElement('advance-payment')
// @ts-ignore
class AdvancePayment extends LitElement {

    static readonly styles = [globalStyles];

    @state() private fio: string = '';
    @state() private inn: string = '';
    @state() private passportSeriesNumber: string = '';
    @state() private passportIssueDate: string = '';
    @state() private isFormValid: boolean = false;

    @property({ type: String }) generatedLink: string = '';

    // Регулярные выражения для валидации
    private readonly fioRegex = /^((?![\s’(),.-])+[А-Яа-яЁёIV’(),.-]{2,}\s(?<![’(),.-]))+((?![\s’(),.-])+[А-Яа-яЁёIV’(),.-]{2,}(?<![\s’(),.-]))+$/;
    private readonly innRegex = /^\d{12}$/;
    private readonly passportSeriesNumberRegex = /^\d{4}\s\d{6}$/;

    generateRandomLink() {
        // Генерация случайного хэша из 8 символов
        const randomHash = Math.random().toString(36).substring(2, 8);
        this.generatedLink = `${window.location.origin}/payment/${randomHash}`;
    }

    validateForm() {
        const isFioValid = this.fioRegex.test(this.fio);
        const isInnValid = this.innRegex.test(this.inn);
        const isPassportSeriesNumberValid = this.passportSeriesNumberRegex.test(this.passportSeriesNumber);
        const isPassportIssueDateValid = this.validatePassportIssueDate(this.passportIssueDate);

        this.isFormValid = isFioValid && isInnValid && isPassportSeriesNumberValid && isPassportIssueDateValid;
    }

    validatePassportIssueDate(date: string): boolean {
        if (!date) {
            return false;
        }
        const inputDate = new Date(date);
        const currentDate = new Date();
        return inputDate <= currentDate;
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

    handleInnInput(e: Event) {
        this.inn = (e.target as HTMLInputElement).value.replace(/\D/g, '');

        const input = e.target as HTMLInputElement;
        const cursorPosition = input.selectionStart;

        // Удаляем все нецифровые символы и пробелы
        let value = input.value.replace(/[^\d]/g, '');

        // Форматируем по маске XXXXXXXXXXXX
        let formatted = '';
        if (value.length > 0) {
            formatted = value.slice(0, 12);
        }

        // Сохраняем новое значение
        this.inn = formatted;

        // Восстанавливаем позицию курсора
        requestAnimationFrame(() => {
            if (cursorPosition) {
                const newCursorPos = this.calculateNewCursorPosition(cursorPosition, input.value, formatted);
                input.setSelectionRange(newCursorPos, newCursorPos);
            }
        });

        this.validateForm();
        input.value = this.inn; // Обновляем значение в DOM
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

    handlePassportIssueDateInput(e: Event) {
        this.passportIssueDate = (e.target as HTMLInputElement).value;
        this.validateForm();
    }

    async shareLink() {
        try {
            if (navigator.share) {
                await navigator.share({
                    title: 'Авансовый платеж',
                    text: 'Ссылка для авансового платежа:',
                    url: this.generatedLink
                });
            } else {
                await navigator.clipboard.writeText(this.generatedLink);
                alert('Ссылка скопирована в буфер обмена!');
            }
        } catch (err) {
            console.error('Ошибка при попытке поделиться:', err);
        }
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
                <label for="inn">ИНН плательщика</label>
                <input
                    id="inn"
                    type="text"
                    .value="${this.inn}"
                    @input="${this.handleInnInput}"
                    class="${!this.innRegex.test(this.inn) && this.inn ? 'invalid' : ''}"
                    placeholder="123456789012"
                    inputmode="numeric"
                    pattern="${this.innRegex}"
                    maxlength="12"
                />
                <div class="error-message">ИНН должен состоять из 12 цифр</div>
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

            <div class="form-group">
                <label for="issue-date">Дата выдачи паспорта РФ плательщика</label>
                <input
                    id="issue-date"
                    type="date"
                    .value="${this.passportIssueDate}"
                    @input="${this.handlePassportIssueDateInput}"
                    class="${!this.validatePassportIssueDate(this.passportIssueDate) && this.passportIssueDate ? 'invalid' : ''}"
                    max="${new Date().toISOString().split('T')[0]}"
                />
                <div class="error-message">Дата выдачи паспорта РФ не может быть позже текущей</div>
            </div>

            <button
                class="action-button"
                @click="${this.generateRandomLink}"
                ?disabled="${!this.isFormValid}"
            >
                Создать ссылку
            </button>

            ${this.generatedLink ? html`
                <div class="link-container">
                    <div class="link-field">${this.generatedLink}</div>
                    <button class="share-button" @click=${this.shareLink}>
                        <svg class="share-icon" viewBox="0 0 24 24">
                            <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92z"/>
                        </svg>
                    </button>
                </div>
            ` : ''}
        `;
    }
}