import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { globalStyles } from '../styles/global-styles';

interface PaymentDetails {
    fio: string;
    inn: string;
    docData: string;
    docDate: string;
}

@customElement('advance-payment')
// @ts-ignore
class AdvancePayment extends LitElement {

    static readonly styles = [css`
        .link-container {
            margin-top: 20px;
            display: flex;
            gap: 8px;
            align-items: center;
        }

        .link-field {
            flex-grow: 1;
            padding: 12px 16px;
            border: 2px solid #6200ee;
            border-radius: 8px;
            font-size: 14px;
            color: #333;
            background: #f8f8f8;
            cursor: text;
            user-select: all;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .share-button {
            background: none;
            border: none;
            cursor: pointer;
            padding: 5px;
            display: flex;
            align-items: center;
        }

        .share-icon {
            width: 24px;
            height: 24px;
            fill: #6200ee;
        }
    `, globalStyles];

    @property({ type: String }) generatedLink: string = '';

    @property({ type: Object }) paymentDetails: PaymentDetails = {
        fio: '',
        inn: '',
        docData: '',
        docDate: ''
    };

    generateRandomLink() {
        // Генерация случайного хэша из 8 символов
        const randomHash = Math.random().toString(36).substr(2, 8);
        this.generatedLink = `${window.location.origin}/payment/${randomHash}`;
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
            <input type="text" .value="${this.paymentDetails.fio}" @input="${(e: Event) => this.paymentDetails.fio = (e.target as HTMLInputElement).value}" placeholder="ФИО плательщика">
            <input type="text" .value="${this.paymentDetails.inn}" @input="${(e: Event) => this.paymentDetails.inn = (e.target as HTMLInputElement).value}" placeholder="ИНН плательщика">
            <input type="text" .value="${this.paymentDetails.docData}" @input="${(e: Event) => this.paymentDetails.docData = (e.target as HTMLInputElement).value}" placeholder="Серия и номер паспорта РФ плательщика">
            <input type="date" .value="${this.paymentDetails.docDate}" @input="${(e: Event) => this.paymentDetails.docDate = (e.target as HTMLInputElement).value}" placeholder="Дата выдачи паспорта РФ плательщика">
            <button class="nav-button" @click="${this.generateRandomLink}">Создать ссылку</button>

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