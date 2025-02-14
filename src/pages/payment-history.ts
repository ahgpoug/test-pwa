import { LitElement, html, css } from 'lit';
import { until } from 'lit/directives/until.js';
import { customElement } from 'lit/decorators.js';
import { globalStyles } from '../styles/global-styles';
import { PaymentLink } from '../models/payment-link';
import { apiService } from '../services/api-service';

@customElement('payment-history')
// @ts-ignore
class PaymentHistory extends LitElement {

    static readonly styles = [css`
        .search-results {
            margin-top: 20px;
            display: grid;
            gap: 16px;
        }

        .payment-link-card {
            padding: 16px;
            border: 1px solid #6200ee;
            border-radius: 8px;
            background: white;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            overflow: hidden;
        }

        .payment-link-field {
            margin: 8px 0;
        }

        .payment-link-status-container {
            display: block;
            width: 100%;
            padding: 1rem;
            margin: 0.5rem 0;
            font-size: 1rem;
            background-color: #6200ee;
            color: white;
            border: none;
            border-radius: 8px;
            text-align: center;
            transition: background-color 0.3s ease;
            box-sizing: border-box;
            cursor: inherit;
        }

        .payment-link-status-field {
            text-align: center;
            box-sizing: border-box;
        }
        `, globalStyles];

    async shareLink(link: string) {
        try {
            if (navigator.share) {
                await navigator.share({
                    title: 'Ссылка на платеж',
                    text: 'Ссылка для оплаты:',
                    url: link
                });
            } else {
                await navigator.clipboard.writeText(link);
                alert('Ссылка скопирована в буфер обмена!');
            }
        } catch (err) {
            console.error('Ошибка при попытке поделиться:', err);
        }
    }

    async renderPaymentLinks() {
        window.dispatchEvent(new CustomEvent("setloadingstate", { detail: true }));

        const paymentLinks = await apiService.fetchPaymentHistory();
        const content = html`${paymentLinks.map(paymentLink => this.renderPaymentLinkCard(paymentLink))}`;

        window.dispatchEvent(new CustomEvent("setloadingstate", { detail: false }));
        return content;
    }

    renderPaymentLinkCard(paymentLink: PaymentLink) {
        return html`
            <div class="payment-link-card">
                ${paymentLink.amount ? html`<div class="payment-link-field"><strong>Сумма: </strong>${paymentLink.amount}</div>` : ''}
                <div class="payment-link-field"><strong>Дата: </strong>${paymentLink.date}</div>
                ${paymentLink.number ? html`<div class="payment-link-field"><strong>Номер ТПО: </strong>${paymentLink.number}</div>` : ''}

                ${paymentLink.link ? html`
                <div class="link-container">
                    <div class="link-field">${paymentLink.link}</div>
                    <button
                        class="share-button"
                        @click=${() => this.shareLink(paymentLink.link!)}
                    >
                        <svg class="share-icon" viewBox="0 0 24 24">
                            <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92z"/>
                        </svg>
                    </button>
                </div>
                ` : ''}

                <div class="payment-link-status-container">
                    <div class="payment-link-status-field">${paymentLink.status}</div>
                </div>
            </div>
        `;
    }

    render() {
        return html`
            <div class="search-results">
                ${until(this.renderPaymentLinks(), html``)}
            </div>`;
    }
}