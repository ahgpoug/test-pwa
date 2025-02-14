import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';

export type PopupNotificationType = 'success' | 'error' | 'info' | 'warning';

@customElement('popup-notification')
// @ts-ignore
export class PopupNotification extends LitElement {
    static readonly styles = css`
        :host {
            position: fixed;
            left: 50%;
            transform: translateX(-50%);
            z-index: 9000;
        }

        .popup-notification {
            padding: 12px 24px;
            border-radius: 28px; /* Закругленные углы, как в Android Toast */
            background-color: rgba(0, 0, 0, 0.9); /* Полупрозрачный черный фон */
            color: white; /* Белый текст */
            font-size: 14px;
            display: flex;
            align-items: center;
            gap: 12px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .popup-notification-hidden {
            top: 24px;
            opacity: 0;
            visibility: hidden;
            transition:
                opacity 0.3s ease,
                top 0.3s ease,
                visibility 0s linear 0.3s;
        }

        .popup-notification-visible {
            top: 32px;
            opacity: 1;
            visibility: visible;
            transition:
                opacity 0.3s ease,
                top 0.3s ease,
                visibility 0s linear 0s;
        }

        .success .icon {
            fill: #4CAF50; /* Зеленый для успеха */
        }

        .error .icon {
            fill: #F44336; /* Красный для ошибки */
        }

        .info .icon {
            fill: #2196F3; /* Синий для информации */
        }

        .warning .icon {
            fill: #FF9800; /* Оранжевый для предупреждения */
        }

        .icon {
            width: 24px;
            height: 24px;
        }
    `;

    @state() private message: string = '';
    @state() private type: PopupNotificationType = 'info';
    @state() private visible: boolean = false;
    private timeoutId?: number;

    show(message: string, type: PopupNotificationType = 'info', duration: number = 3000) {
        this.message = message;
        this.type = type;
        this.visible = true;

        if (this.timeoutId) {
            window.clearTimeout(this.timeoutId);
        }

        this.timeoutId = window.setTimeout(() => {
            this.hide();
        }, duration);
    }

    hide() {
        this.visible = false;
    }

    render() {
        console.log(`popup-notification ${this.visible ? 'popup-notification-visible' : 'popup-notification-hidden'}`);
        return html`
            <div class="popup-notification ${this.type} ${this.visible ? 'popup-notification-visible' : 'popup-notification-hidden'}">
                <svg class="icon" viewBox="0 0 24 24">
                    ${this.renderIcon()}
                </svg>
                ${this.message}
            </div>
        `;
    }

    private renderIcon() {
        switch (this.type) {
            case 'success':
                return html`<path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"/>`;
            case 'error':
                return html`<path fill="currentColor" d="M12 2C6.47 2 2 6.47 2 12S6.47 22 12 22 22 17.53 22 12 17.53 2 12 2M15.59 7L12 10.59L8.41 7L7 8.41L10.59 12L7 15.59L8.41 17L12 13.41L15.59 17L17 15.59L13.41 12L17 8.41L15.59 7Z"/>`;
            case 'warning':
                return html`<path fill="currentColor" d="M12 2L1 21H23M12 6L19.53 19H4.47M11 10V14H13V10M11 16V18H13V16"/>`;
            default:
                return html`<path fill="currentColor" d="M11 7H13V9H11V7M11 11H13V17H11V11M12 2C6.47 2 2 6.5 2 12C2 17.5 6.5 22 12 22S22 17.5 22 12 17.5 2 12 2M12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4S20 7.58 20 12C20 16.42 16.42 20 12 20Z"/>`;
        }
    }
}

export const popupNotification = new PopupNotification();