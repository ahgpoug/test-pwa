import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { ModalWindowService } from '../services/modal-window-service';

import { globalStyles } from '../styles/global-styles';

export type DownloadModalWindowType = 'android' | 'ios' | 'other';

@customElement('download-modal-window')
export class DownloadModalWindow extends LitElement {
    static readonly styles = [globalStyles, css`
        .platform-section {
            align-items: center;
            text-align: center;
        }

        .store-link {
            cursor: pointer;
            align-items: center;
            margin: auto;
        }

        .store-icon {
            max-width: 300px;
            height: auto;
        }

        .pwa-button {
            width: 100%;
            margin-top: 1rem;
        }
  `];

    @state() private type: DownloadModalWindowType = 'other';
    @state() private deferredPrompt: any = null;
    @state() private visible: boolean = false;

    private get basePath() {
        return import.meta.env.BASE_URL;
    }

    show(type: DownloadModalWindowType = 'other', deferredPrompt: any = null) {
        this.type = type;
        this.deferredPrompt = deferredPrompt;
        this.visible = true;
    }

    hide() {
        this.visible = false;
    }

    render() {
        if (!this.visible) {
            return html``;
        }

        return html`
            <div class="modal" @click="${this.hide}">
                <div class="modal-content" @click="${(e: Event) => e.stopPropagation()}">
                    <button class="modal-close-button" @click="${() => this.visible = false}">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M18 6L6 18M6 6l12 12" stroke-width="2"/>
                        </svg>
                    </button>

                    <h3>Скачать приложение</h3>

                    <div class="platform-section">
                        ${this.type === 'android' ? this.renderAndroid() : ''}
                        ${this.type === 'ios' ? this.renderIOS() : ''}
                        ${this.type === 'other' ? this.renderOther() : ''}
                    </div>

                </div>
            </div>
        `;
    }

    private renderAndroid() {
        return html`
            ${this.deferredPrompt ? html`
                <a @click="${this.installPWA}" class="store-link">
                    <img src="${this.basePath + '/assets/icons/INSTALL.png'}" class="store-icon" type="image/png" alt="Установить сейчас">
                </a>
            ` : ''}

            <a href="https://play.google.com/store" class="store-link">
                <img src="${this.basePath + '/assets/icons/GOOGLE.png'}" class="store-icon" type="image/png" alt="Google Play">
            </a>

            <a href="https://play.google.com/store" class="store-link">
                <img src="${this.basePath + '/assets/icons/RUSTORE.png'}" class="store-icon" type="image/png" alt="RuStore">
            </a>

            <a href="https://appgallery.huawei.com" class="store-link">
                <img src="${this.basePath + '/assets/icons/HUAWEI.png'}" class="store-icon" type="image/png" alt="Huawei AppGallery">
            </a>
        `;
    }

    private renderIOS() {
        return html`
            <a href="https://apps.apple.com" class="store-link">
                <img src="${this.basePath + '/assets/icons/APPLE.png'}" class="store-icon" type="image/png" alt="App Store">
            </a>


            <a @click="${this.showAddToHomeScreen}" class="store-link">
                <img src="${this.basePath + '/assets/icons/ADD_TO_HOME_SCREEN.png'}" class="store-icon" type="image/png" alt="Добавить на главный экран">
            </a>
        `;
    }

    private renderOther() {
        return html`
            ${this.renderAndroid()}
            ${this.renderIOS()}
        `;
    }

    private installPWA() {
        if (this.deferredPrompt) {
            this.deferredPrompt.prompt();
        }
        this.hide();
    }

    private showAddToHomeScreen() {
        ModalWindowService.show('Добавить на главный экран', '1. Нажмите на кнопку "Поделиться"\n2. Выберите "Добавить на главный экран"\n3. Нажмите "Добавить"');
    }
}

export const downloadModalWindow = new DownloadModalWindow();