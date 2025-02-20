import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { authService } from './services/auth-service';
import { PopupNotificationService } from './services/popup-notification-service';
import { LoadingOverlayService } from './services/loading-overlay-service';
import './components/header';
import './pages/search-tpo';
import './pages/advance-payment';
import './pages/payment-history';
import './pages/login-page';

import { globalStyles } from './styles/global-styles';

@customElement('app-home')
// @ts-ignore
class AppHome extends LitElement {
    static readonly styles = [globalStyles];

    private readonly isInStandaloneMode: boolean = (window.matchMedia('(display-mode: standalone)').matches)
        || (window.navigator as any).standalone === true
        || document.referrer.includes('android-app://');

    @property({ type: String }) currentPage: string = window.location.pathname;
    @property({ type: Boolean }) showBackButton: boolean = false;

    private get basePath() {
        return import.meta.env.BASE_URL;
    }

    private checkAuth() {
        if (!authService.isAuthenticated() && this.currentPage !== 'login-page') {
            this.navigateTo('login-page');
        }
    }

    private async registerServiceWorker() {
        if ('serviceWorker' in navigator) {
            try {
                const registration = await navigator.serviceWorker.register(`${this.basePath}sw.js`,
                    {
                        scope: this.basePath
                    }
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

        // Регистрация Notification
        PopupNotificationService.initialize();

        // Регистрация Loading
        LoadingOverlayService.initialize();

        // Проставляем текущую страницу в зависимости от URL
        this.handlePopState();

        // Обработка перехода на другую страницу
        window.addEventListener('navigateto', this.handleNavigateTo);

        // Обработка нажатия кнопки "Назад" в браузере
        this.setupBackButtonHandler();
        window.addEventListener('popstate', this.handlePopState);

        this.checkAuth();
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        window.removeEventListener('navigateto', this.handleNavigateTo);
        window.removeEventListener('popstate', this.handlePopState);
    }

    isHomePage(): boolean {
        return this.currentPage == ''
            || this.currentPage == '/'
            || this.currentPage == 'login-page'
            || this.currentPage == this.basePath;
    }

    private setupBackButtonHandler() {
        // Блокировка кнопки "Назад" только для главной в standalone
        window.onpopstate = (event) => {
            if (this.isInStandaloneMode) {
                if (LoadingOverlayService.isVisible()) {
                    event.preventDefault();
                    return false;
                }

                if (this.isHomePage()) {
                    event.preventDefault();
                    this.handleExit();
                    return false;
                }
            }

            return true;
        };
    }

    private handleExit() {
        // Попытка закрыть приложение
        if (this.isInStandaloneMode) {
            (window.navigator as any).app.exitApp();
        } else {
            window.close();
            window.stop();
        }
    }

    handlePopState = () => {
        const path = window.location.pathname;
        const basePath = this.basePath;

        // Убираем базовый путь и начальный слэш
        const page = path.startsWith(basePath)
            ? path.slice(basePath.length).replace(/^\//, '')
            : path.replace(/^\//, '');

        this.currentPage = page || '';

        this.checkAuth();
        this.requestUpdate();
    };

    handleNavigateTo = (e: CustomEventInit<string>) => {
        this.navigateTo(e.detail ?? '');
    };

    navigateTo(page: string) {
        history.pushState({}, '', `${this.basePath}${page}`);
        this.currentPage = page;
        this.requestUpdate();
    }

    getPageTitle() {
        switch (this.currentPage) {
            case 'login-page':
                return 'Авторизация';
            case 'search-tpo':
                return 'Поиск квитанции по реквизитам';
            case 'advance-payment':
                return 'Авансовый платеж';
            case 'payment-history':
                return 'История платежей';
            default:
                return 'Меню';
        }
    }

    renderPage() {
        this.checkAuth();

        switch (this.currentPage) {
            case 'search-tpo':
                return html`<search-tpo></search-tpo>`;
            case 'advance-payment':
                return html`<advance-payment></advance-payment>`;
            case 'payment-history':
                return html`<payment-history></payment-history>`;
            case 'login-page':
                return this.renderLoginPage();
            default:
                return this.renderHome();
        }
    }

    renderLoginPage() {
        return html`<login-page
            .onSuccessLogin="${() => window.dispatchEvent(new CustomEvent("navigateto", { detail: '' }))}"
        ></login-page>`;
    }

    renderHome() {
        return html`
            <button class="action-button" @click="${() => window.dispatchEvent(new CustomEvent("navigateto", { detail: 'search-tpo' }))}">Поиск квитанции по реквизитам</button>
            <button class="action-button" @click="${() => window.dispatchEvent(new CustomEvent("navigateto", { detail: 'advance-payment' }))}">Авансовый платеж</button>
            <button class="action-button" @click="${() => window.dispatchEvent(new CustomEvent("navigateto", { detail: 'payment-history' }))}">История платежей</button>
            <button class="action-button" @click="${() => authService.logout()}">Смена пользователя</button>
        `;
    }

    render() {
        LoadingOverlayService.show();

        const page = html`
            <app-header
                .currentPage="${this.currentPage}"
                .basePath="${this.basePath}"
                .title="${this.getPageTitle()}"
                .showBackButton="${!this.isHomePage()}"
                .isLoginPage="${this.currentPage === 'login-page'}"
                .onBack="${() => window.dispatchEvent(new CustomEvent("navigateto", { detail: '' }))}"
            ></app-header>
            <main>
                ${this.renderPage()}
            </main>
        `;

        LoadingOverlayService.hide();
        return page;
    }
}