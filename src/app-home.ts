import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { globalStyles } from './styles/global-styles';
import './components/header';
import './pages/search-tpo';
import './pages/advance-payment';
import './pages/change-password';
import './pages/payment-history';

type Page = '' | 'search-tpo' | 'advance-payment' | 'change-password' | 'payment-history';

@customElement('app-home')
// @ts-ignore
class AppHome extends LitElement {
    static readonly styles = [globalStyles];

    @property({ type: String }) currentPage: string = window.location.pathname;
    @property({ type: Boolean }) showBackButton: boolean = false;

    private get basePath() {
        return import.meta.env.BASE_URL;
    }

    private async registerServiceWorker() {
        if ('serviceWorker' in navigator) {
            try {
                const registration = await navigator.serviceWorker.register(
                    `${this.basePath}sw.js`,
                    { scope: this.basePath }
                );
                console.log('ServiceWorker registration successful with scope:', registration.scope);
            } catch (err) {
                console.error('ServiceWorker registration failed:', err);
            }
        }
    }

    connectedCallback() {
        super.connectedCallback();

        // Регистрация Service Worker
        this.registerServiceWorker();

        // Проставляем текущую страницу в зависимости от URL
        this.handlePopState();

        // Обработка нажатия кнопки "Назад" в браузере
        window.addEventListener('popstate', this.handlePopState);
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        window.removeEventListener('popstate', this.handlePopState);
    }

    handlePopState = () => {
        const path = window.location.pathname;
        const basePath = this.basePath;

        // Убираем базовый путь и начальный слэш
        const page = path.startsWith(basePath)
            ? path.slice(basePath.length).replace(/^\//, '')
            : path.replace(/^\//, '');

        this.currentPage = page || '';
        this.requestUpdate();
    };

    navigateTo(page: Page) {
        history.pushState({}, '', `${this.basePath}${page}`);
        this.currentPage = page;
        this.requestUpdate();
    }

    getPageTitle() {
        switch (this.currentPage) {
            case 'search-tpo':
                return 'Поиск квитанции по реквизитам';
            case 'advance-payment':
                return 'Авансовый платеж';
            case 'change-password':
                return 'Сменить пароль';
            case 'payment-history':
                return 'История платежей';
            default:
                return 'Меню';
        }
    }

    renderPage() {
        switch (this.currentPage) {
            case 'search-tpo':
                return html`<search-tpo></search-tpo>`;
            case 'advance-payment':
                return html`<advance-payment></advance-payment>`;
            case 'change-password':
                return html`<change-password></change-password>`;
            case 'payment-history':
                return html`<payment-history></payment-history>`;
            default:
                return this.renderHome();
        }
    }

    renderHome() {
        return html`
            <button class="action-button" @click="${() => this.navigateTo('search-tpo')}">Поиск квитанции по реквизитам</button>
            <button class="action-button" @click="${() => this.navigateTo('advance-payment')}">Авансовый платеж</button>
            <button class="action-button" @click="${() => this.navigateTo('change-password')}">Сменить пароль</button>
            <button class="action-button" @click="${() => this.navigateTo('payment-history')}">История платежей</button>
        `;
    }

    render() {
        console.log(`Current page: ${this.currentPage}`);

        return html`
            <app-header
                .currentPage="${this.currentPage}"
                .basePath="${this.basePath}"
                .title="${this.getPageTitle()}"
                .showBackButton="${this.currentPage != ''}"
                .onBack="${() => this.navigateTo('')}"
            ></app-header>
            <main>
                ${this.renderPage()}
            </main>
        `;
    }
}