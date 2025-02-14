import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { globalStyles } from '../styles/global-styles';

@customElement('app-header')
// @ts-ignore
class AppHeader extends LitElement {
    static readonly styles = [css`
        :host {
            position: sticky;
            top: 0;
        }

        header {
            display: flex;
            align-items: center;
            padding: 16px;
            background-color: #6200ee; /* Material Design primary color */
            color: white;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            position: sticky;
            top: 0;
            z-index: 1000;
            height: 32px;
        }

        .back-button {
            background: none;
            border: none;
            color: white;
            font-size: 24px;
            cursor: pointer;
            padding: 8px;
            margin-right: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            transition: background-color 0.3s ease;
        }

        .back-button:hover {
            background-color: rgba(255, 255, 255, 0.1);
        }

        .back-button:active {
            background-color: rgba(255, 255, 255, 0.2);
        }

        .title {
            font-size: 20px;
            font-weight: 500;
            flex-grow: 1;
        }

        .install-button {
            background: none;
            border: none;
            cursor: pointer;
            padding: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            transition: background-color 0.3s ease;
        }

        .install-button:hover {
            background-color: rgba(255, 255, 255, 0.1);
        }

        .install-button:active {
            background-color: rgba(255, 255, 255, 0.2);
        }

        .install-icon {
            width: 24px;
            height: 24px;
            fill: white;
        }

        .install-modal {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1001;
        }

        .modal-content {
            background: white;
            padding: 24px;
            border-radius: 12px;
            max-width: 400px;
            width: 90%;
            position: relative;
        }

        .close-button {
            position: absolute;
            top: 12px;
            right: 12px;
            background: none;
            border: none;
            cursor: pointer;
            padding: 4px;
        }

        .instructions {
            margin: 16px 0;
            line-height: 1.5;
        }
    `, globalStyles];

    @state() private showInstallButton: boolean = false;
    @state() private showInstallModal: boolean = false;
    private deferredPrompt: any = null;
    private readonly isIOS: boolean = /iPad|iPhone|iPod/.test(navigator.userAgent);
    private readonly isAndroid: boolean = /Android/.test(navigator.userAgent);
    private readonly isInStandaloneMode: boolean = (window.matchMedia('(display-mode: standalone)').matches)
        || (window.navigator as any).standalone === true
        || document.referrer.includes('android-app://');

    @property({ type: Boolean }) showBackButton: boolean = false;
    @property({ type: Boolean }) isLoginPage: boolean = false;
    @property({ type: Function }) onBack: () => void = () => {};

    connectedCallback() {
        super.connectedCallback();
        window.addEventListener('beforeinstallprompt', this.handleBeforeInstallPrompt);
        window.addEventListener('appinstalled', this.handleAppInstalled);
    }

    handleBeforeInstallPrompt = (e: any) => {
        e.preventDefault();
        this.deferredPrompt = e;
        this.showInstallButton = true;
    };

    handleInstallClick = async () => {
        if (this.deferredPrompt) {
            // Стандартная установка PWA
            this.deferredPrompt.prompt();
            const { outcome } = await this.deferredPrompt.userChoice;
            if (outcome === 'accepted') this.showInstallButton = false;
        } else {
            // Показать инструкции для ручной установки
            this.showInstallModal = true;
        }
    };

    handleAppInstalled = () => {
        // Скрываем кнопку "Установить" после установки
        this.showInstallButton = false;
    };

    renderInstallModal() {
        return html`
            <div class="install-modal" @click="${() => this.showInstallModal = false}">
                <div class="modal-content" @click="${(e: Event) => e.stopPropagation()}">
                    <button class="close-button" @click="${() => this.showInstallModal = false}">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M18 6L6 18M6 6l12 12" stroke-width="2"/>
                        </svg>
                    </button>

                    ${this.isIOS ? this.renderIOSContent() : this.isAndroid ? this.renderAndroidContent() : this.renderDesktopContent()}
                </div>
            </div>
        `;
    }

    renderIOSContent() {
        return html`
            <h3>Добавить на экран "Домой"</h3>
            <div class="instructions">
                1. Нажмите на кнопку "Поделиться"<br>
                2. Выберите 'На экран "Домой"'<br>
                3. Нажмите "Добавить"
            </div>`;
    }

    renderAndroidContent() {
        return html`
            <h3>Добавить на главный экран</h3>
            <div class="instructions">
                1. Откройте меню браузера (три точки)<br>
                2. Выберите "Добавить на главный экран"<br>
                3. Нажмите "Добавить"
            </div>`;
    }

    renderDesktopContent() {
        return html`
            <h3>Сохранить в закладки</h3>
            <div class="instructions">
                Нажмите Ctrl+D чтобы добавить в закладки<br>
                Или используйте меню браузера
            </div>`;
    }

    render() {
        return html`
            <header>
                ${this.showBackButton ? html`<button class="back-button" @click="${this.onBack}">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
						<path d="M0 0h24v24H0z" fill="none"/>
						<path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" fill="white"/>
					</svg>
                </button>` : ''}

                <div class="title">${this.title}</div>

                ${!this.isInStandaloneMode && !this.isLoginPage && (this.showInstallButton || !this.deferredPrompt) ? html`
                    <button class="install-button" @click="${this.handleInstallClick}">
                        <svg class="install-icon" viewBox="0 0 24 24">
                            <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                        </svg>
                    </button>
                ` : ''}
            </header>

            ${this.showInstallModal ? this.renderInstallModal() : ''}
        `;
    }
}