import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { globalStyles } from '../styles/global-styles';

interface PaymentDetails {
    fio: string;
    docData: string;
}

@customElement('search-tpo')
// @ts-ignore
class SearchTPO extends LitElement {

    static readonly styles = [globalStyles];

    @state() private fio: string = '';
    @state() private passportSeriesNumber: string = '';
    @state() private isFormValid: boolean = false;

    // Регулярные выражения для валидации
    private readonly fioRegex = /^((?![\s’(),.-])*[А-Яа-яЁёIV’(),.-]{2,}(?<![\s’(),.-])\s?){2,}(?<!\s)$/;
    private readonly passportSeriesNumberRegex = /^\d{4}\s\d{6}$/;

    @property({ type: Object }) paymentDetails: PaymentDetails = {
        fio: '',
        docData: ''
    };

    handleSearch() {
        console.log('Поиск ТПО:', this.fio, this.passportSeriesNumber);
    }

    validateForm() {
        const isFioValid = this.fioRegex.test(this.fio);
        const isPassportSeriesNumberValid = this.passportSeriesNumberRegex.test(this.passportSeriesNumber);

        this.isFormValid = isFioValid && isPassportSeriesNumberValid;
    }

    handleFioInput(e: Event) {
        this.fio = (e.target as HTMLInputElement).value;
        this.validateForm();
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
                ?disabled="${!this.isFormValid}"
            >
                Поиск
            </button>
        `;
    }
}