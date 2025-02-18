import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { ModalWindowService } from '../services/modal-window-service';

import { globalStyles } from '../styles/global-styles';

export type DownloadModalWindowType = 'android' | 'ios' | 'other';

@customElement('download-modal-window')
export class DownloadModalWindow extends LitElement {
    static readonly styles = [globalStyles, css`
        .platform-section {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
            align-items: center;
            justify-items: center;
            text-align: center;
        }

        .store-link {
            cursor: pointer;
            margin: auto;
            width: 100%; /* Чтобы ссылки занимали всю ширину ячейки */
        }

        .image-container {
            position: relative;
            width: auto;
            height: auto;
        }

        .skeleton {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: #e0e0e0;
            border-radius: 8px;
            animation: pulse 1.5s infinite;
        }

        @keyframes pulse {
            0% { opacity: 0.8; }
            50% { opacity: 0.5; }
            100% { opacity: 0.8; }
        }

        .store-icon {
            width: 100%;
            max-width: 195px;
            height: auto;
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        .store-icon.loaded {
            opacity: 1;
        }
  `];

    @state() private type: DownloadModalWindowType = 'other';
    @state() private deferredPrompt: any = null;
    @state() private visible: boolean = false;
    @state() private loadedImages: { [key: string]: boolean } = {};

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

    private renderStoreIcon(url: string, alt: string) {
        const isLoaded = this.loadedImages[url];
        return html`
            <div class="image-container">
                ${!isLoaded ? html`<div class="skeleton"></div>` : ''}
                <img
                    src=${url}
                    class="store-icon ${isLoaded ? 'loaded' : ''}"
                    type="image/png"
                    alt=${alt}
                    @load=${() => this.handleImageLoad(url)}
                />
          </div>
        `;
    }

    private handleImageLoad(url: string) {
        this.loadedImages = { ...this.loadedImages, [url]: true };
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
                        ${this.renderPlatformSection()}
                    </div>

                </div>
            </div>
        `;
    }

    private renderPlatformSection() {
        return html`
            ${this.deferredPrompt ? html`
                <a @click="${this.installPWA}" class="store-link">
                    ${this.renderStoreIcon(this.basePath + '/assets/icons/INSTALL.png', 'Установить сейчас')}
                </a>
            ` : ''}

            ${this.type === 'android' || this.type === 'other' ? html`
                <a target="_blank" rel="noopener noreferrer" href="https://play.google.com/store" class="store-link">
                    ${this.renderStoreIcon(this.basePath + '/assets/icons/GOOGLE.png', 'Google Play')}
                </a>
            `: ``}

            ${this.type === 'android' || this.type === 'other' ? html`
                <a target="_blank" rel="noopener noreferrer" href="https://apps.rustore.ru" class="store-link">
                    ${this.renderStoreIcon(this.basePath + '/assets/icons/RUSTORE.png', 'RuStore')}
                </a>
            `: ``}

            ${this.type === 'android' || this.type === 'other' ? html`
                <a target="_blank" rel="noopener noreferrer" href="https://galaxystore.ru/" class="store-link">
                    ${this.renderStoreIcon(this.basePath + '/assets/icons/GALAXY_STORE.png', 'Galaxy Store')}
                </a>
            `: ``}

            ${this.type === 'android' || this.type === 'other' ? html`
                <a target="_blank" rel="noopener noreferrer" href="https://appgallery.huawei.com" class="store-link">
                    ${this.renderStoreIcon(this.basePath + '/assets/icons/HUAWEI.png', 'Huawei AppGallery')}
                </a>
            `: ``}

            ${this.type === 'ios' || this.type === 'other' ? html`
                <a target="_blank" rel="noopener noreferrer" href="https://apps.apple.com" class="store-link">
                    ${this.renderStoreIcon(this.basePath + '/assets/icons/APPLE.png', 'App Store')}
                </a>
            `: ``}

            ${this.type === 'ios' ? html`
                <a @click="${this.showAddToHomeScreen}" class="store-link">
                    ${this.renderStoreIcon(this.basePath + '/assets/icons/ADD_TO_HOME_SCREEN.png', 'Добавить на главный экран')}
                </a>
            `: ``}
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