import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

@customElement('app-header')
// @ts-ignore
class AppHeader extends LitElement {
    static styles = css`
        :host {
            display: block;
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
            color: white;
            font-size: 14px;
            cursor: pointer;
            padding: 8px 16px;
            border-radius: 20px;
            border: 1px solid white;
            transition: background-color 0.3s ease;
        }

        .install-button:hover {
            background-color: rgba(255, 255, 255, 0.1);
        }

        .install-button:active {
            background-color: rgba(255, 255, 255, 0.2);
        }
    `;

    @property({ type: String }) title: string = '';
    @property({ type: Boolean }) showBackButton: boolean = false;
    @property({ type: Function }) onBack: () => void = () => {};

    @state() private showInstallButton: boolean = false;
    private deferredPrompt: any = null;

    connectedCallback() {
        super.connectedCallback();
        // Отслеживаем событие beforeinstallprompt
        window.addEventListener('beforeinstallprompt', this.handleBeforeInstallPrompt);
        // Отслеживаем, установлено ли приложение
        window.addEventListener('appinstalled', this.handleAppInstalled);
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        window.removeEventListener('beforeinstallprompt', this.handleBeforeInstallPrompt);
        window.removeEventListener('appinstalled', this.handleAppInstalled);
    }

    handleBeforeInstallPrompt = (event: Event) => {
        // Предотвращаем автоматическое отображение подсказки установки
        event.preventDefault();
        // Сохраняем событие для использования позже
        this.deferredPrompt = event;
        // Показываем кнопку "Установить"
        this.showInstallButton = true;
    };

    handleAppInstalled = () => {
        // Скрываем кнопку "Установить" после установки
        this.showInstallButton = false;
    };

    handleInstallClick = async () => {
        if (this.deferredPrompt) {
            // Запускаем стандартный процесс установки
            this.deferredPrompt.prompt();
            // Ждем, пока пользователь примет решение
            const { outcome } = await this.deferredPrompt.userChoice;
            if (outcome === 'accepted') {
                console.log('Пользователь согласился установить PWA');
            } else {
                console.log('Пользователь отказался от установки PWA');
            }
            // Очищаем сохраненное событие
            this.deferredPrompt = null;
        }
    };

    render() {
        return html`
            <header>
                ${this.showBackButton
                    ? html`<button class="back-button" @click="${this.onBack}">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                                <path d="M0 0h24v24H0z" fill="none"/>
                                <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" fill="white"/>
                            </svg>
                        </button>`
                    : ''}
                <div class="title">${this.title}</div>
                ${this.showInstallButton
                    ? html`<button class="install-button" @click="${this.handleInstallClick}">Установить</button>`
                    : ''}
            </header>
        `;
    }
}