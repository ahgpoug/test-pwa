import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { DownloadModalWindowService } from '../services/download-modal-window-service';
import { DownloadModalWindowType } from './download-modal-window';

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
            background-color: #6200ee;
            color: white;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 1000;
            height: 32px; /* Увеличиваем высоту для лучшего отображения */
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
    `, globalStyles];

    @state() private showInstallButton: boolean = false;
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
        let platform : DownloadModalWindowType  = this.isIOS ? 'ios' : this.isAndroid ? 'android' : 'other';
        let deferredPrompt = this.deferredPrompt;
        DownloadModalWindowService.show(platform, deferredPrompt);
    };

    handleAppInstalled = () => {
        // Скрываем кнопку "Установить" после установки
        this.showInstallButton = false;
    };

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
        `;
    }
}