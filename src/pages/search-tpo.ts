import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('search-tpo')
class SearchTPO extends LitElement {
    @property({ type: String }) surname: string = '';
    @property({ type: String }) passportNumber: string = '';

    handleSearch() {
        console.log('Поиск ТПО:', this.surname, this.passportNumber);
    }

    render() {
        return html`
            <h2>Поиск ТПО</h2>
            <input type="text" .value="${this.surname}" @input="${(e: Event) => this.surname = (e.target as HTMLInputElement).value}" placeholder="Фамилия">
            <input type="text" .value="${this.passportNumber}" @input="${(e: Event) => this.passportNumber = (e.target as HTMLInputElement).value}" placeholder="Номер паспорта">
            <button @click="${this.handleSearch}">Поиск</button>
        `;
    }
}