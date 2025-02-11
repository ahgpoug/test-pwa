import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

interface PassportDetails {
    series: string;
    number: string;
    issuedBy: string;
    issueDate: string;
    birthDate: string;
}

@customElement('create-payment-link')
class CreatePaymentLink extends LitElement {
    @property({ type: Object }) passportDetails: PassportDetails = {
        series: '',
        number: '',
        issuedBy: '',
        issueDate: '',
        birthDate: ''
    };

    handleCreateLink() {
        console.log('Создание ссылки:', this.passportDetails);
    }

    render() {
        return html`
            <h2>Создание ссылки на авансовый платеж</h2>
            <input type="text" .value="${this.passportDetails.series}" @input="${(e: Event) => this.passportDetails.series = (e.target as HTMLInputElement).value}" placeholder="Серия паспорта">
            <input type="text" .value="${this.passportDetails.number}" @input="${(e: Event) => this.passportDetails.number = (e.target as HTMLInputElement).value}" placeholder="Номер паспорта">
            <input type="text" .value="${this.passportDetails.issuedBy}" @input="${(e: Event) => this.passportDetails.issuedBy = (e.target as HTMLInputElement).value}" placeholder="Кем выдан">
            <input type="date" .value="${this.passportDetails.issueDate}" @input="${(e: Event) => this.passportDetails.issueDate = (e.target as HTMLInputElement).value}" placeholder="Дата выдачи">
            <input type="date" .value="${this.passportDetails.birthDate}" @input="${(e: Event) => this.passportDetails.birthDate = (e.target as HTMLInputElement).value}" placeholder="Дата рождения">
            <button @click="${this.handleCreateLink}">Создать ссылку</button>
        `;
    }
}