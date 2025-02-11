import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { globalStyles } from './styles/global-styles';
import './components/header';
import './pages/search-tpo';
import './pages/advance-payment';
import './pages/change-password';
import './pages/payment-history';

type Page = 'home' | 'search-tpo' | 'advance-payment' | 'change-password' | 'payment-history';

@customElement('app-home')
// @ts-ignore
class AppHome extends LitElement {
    static readonly styles = [globalStyles];

    @property({ type: String }) currentPage: Page = 'home';
    @property({ type: String }) pageTitle: string = 'Главная страница';
    @property({ type: Boolean }) showBackButton: boolean = false;

    connectedCallback() {
        super.connectedCallback();
        // Обработка нажатия кнопки "Назад" в браузере
        window.addEventListener('popstate', () => this.handlePopState());
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        window.removeEventListener('popstate', () => this.handlePopState());
    }

    handlePopState() {
        // Восстанавливаем состояние из истории
        const state = history.state || { page: 'home', title: 'Главная страница' };
        this.currentPage = state.page;
        this.pageTitle = state.title;
        this.showBackButton = state.page !== 'home';
    }

    navigateTo(page: Page, title: string) {
        // Обновляем состояние
        this.currentPage = page;
        this.pageTitle = title;
        this.showBackButton = page !== 'home';

        // Добавляем состояние в историю браузера
        history.pushState({ page, title }, '', `#${page}`);
    }

    goBack() {
        // Возвращаемся назад в истории
        history.back();
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
            case 'home':
            default:
                return html`
                    <button class="nav-button" @click="${() => this.navigateTo('search-tpo', 'Поиск квитанции по реквизитам')}">Поиск квитанции по реквизитам</button>
                    <button class="nav-button" @click="${() => this.navigateTo('advance-payment', 'Авансовый платеж')}">Авансовый платеж</button>
                    <button class="nav-button" @click="${() => this.navigateTo('change-password', 'Сменить пароль')}">Сменить пароль</button>
                    <button class="nav-button" @click="${() => this.navigateTo('payment-history', 'История платежей')}">История платежей</button>
                `;
        }
    }

    render() {
        return html`
            <app-header
                .title="${this.pageTitle}"
                .showBackButton="${this.showBackButton}"
                .onBack="${() => this.goBack()}"
            ></app-header>
            <main>
                ${this.renderPage()}
            </main>
        `;
    }
}