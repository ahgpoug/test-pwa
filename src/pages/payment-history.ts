import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { globalStyles } from '../styles/global-styles';

interface Payment {
    id: number;
    amount: number;
    date: string;
}

@customElement('payment-history')
// @ts-ignore
class PaymentHistory extends LitElement {

    static readonly styles = [globalStyles];

    @property({ type: Array }) payments: Payment[] = [
        { id: 1, amount: 1000, date: '2023-10-01' },
        { id: 2, amount: 1500, date: '2023-10-05' },
        { id: 3, amount: 2000, date: '2023-10-10' }
    ];

    render() {
        return html`
            <ul>
                ${this.payments.map(payment => html`
                    <li>${payment.date} - ${payment.amount} руб.</li>
                `)}
            </ul>
        `;
    }
}