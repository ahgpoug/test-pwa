import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import './pages/search-tpo';
import './pages/create-payment-link';
import './pages/change-password';
import './pages/payment-history';
import './components/header';
import './components/footer';
import './styles/global-styles';

type Page = 'search-tpo' | 'create-payment-link' | 'change-password' | 'payment-history';

@customElement('app-home')
class AppHome extends LitElement {
    @property({ type: String }) currentPage: Page = 'search-tpo';

    navigateTo(page: Page) {
        this.currentPage = page;
    }

    renderPage() {
        switch (this.currentPage) {
            case 'search-tpo':
                return html`<search-tpo></search-tpo>`;
            case 'create-payment-link':
                return html`<create-payment-link></create-payment-link>`;
            case 'change-password':
                return html`<change-password></change-password>`;
            case 'payment-history':
                return html`<payment-history></payment-history>`;
            default:
                return html`<p>Страница не найдена</p>`;
        }
    }

    render() {
        return html`
            <my-header .navigateTo=${(page: Page) => this.navigateTo(page)}></my-header>
            <main>
                ${this.renderPage()}
            </main>
            <my-footer></my-footer>
        `;
    }
}