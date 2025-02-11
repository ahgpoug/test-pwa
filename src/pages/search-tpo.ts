import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { globalStyles } from '../styles/global-styles';

interface PaymentDetails {
    fio: string;
    docData: string;
}

@customElement('search-tpo')
// @ts-ignore
class SearchTPO extends LitElement {

    static readonly styles = [globalStyles];

    @property({ type: String }) surname: string = '';
    @property({ type: String }) passportNumber: string = '';

    @property({ type: Object }) paymentDetails: PaymentDetails = {
        fio: '',
        docData: ''
    };

    handleSearch() {
        console.log('Поиск ТПО:', this.surname, this.passportNumber);
    }

    render() {
        return html`
            <input type="text" .value="${this.paymentDetails.fio}" @input="${(e: Event) => this.paymentDetails.fio = (e.target as HTMLInputElement).value}" placeholder="ФИО плательшика">
            <input type="text" .value="${this.paymentDetails.docData}" @input="${(e: Event) => this.paymentDetails.docData = (e.target as HTMLInputElement).value}" placeholder="Серия и номер паспорта РФ плательщика">
            <button class="nav-button" @click="${this.handleSearch}">Поиск</button>
        `;
    }
}