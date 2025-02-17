import { LitElement, html, svg, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';

export type PopupNotificationType = 'success' | 'error' | 'info' | 'warning';

@customElement('popup-notification')
// @ts-ignore
export class PopupNotification extends LitElement {
    static readonly styles = css`
        :host {
            position: fixed;
            left: 0;
            right: 0;
            bottom: 20px; /* Отступ от низа экрана */
            z-index: 9000;
            display: flex;
            justify-content: center;
            pointer-events: none;
            font-family: 'Roboto', sans-serif;
        }

        .popup-notification {
            padding: 12px 24px;
            border-radius: 28px;
            background-color: #6200ee;
            color: white;
            font-size: 14px;
            display: flex;
            align-items: center;
            gap: 12px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            pointer-events: auto;
        }

        .popup-notification-hidden {
            transform: translateY(calc(100% + 20px)); /* Уезжает за пределы экрана + отступ */
            opacity: 0;
            transition:
                transform 0.3s ease,
                opacity 0.3s ease;
        }

        .popup-notification-visible {
            transform: translateY(0);
            opacity: 1;
        }

       .popup-notification.success svg path {
            fill: #4CAF50 !important;
        }

        .popup-notification.error svg path {
            fill: #F44336 !important;
        }

        .popup-notification.info svg path {
            fill:rgb(255, 255, 255) !important;
        }

        .popup-notification.warning svg path {
            fill: #FF9800 !important;
        }

        .icon {
            width: 24px;
            height: 24px;
            /* Убираем наследование, явно задаем цвет по умолчанию */
            fill: white;
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
                return svg`<path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"/>`;
            case 'error':
                return svg`<path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm4.242,14.829a1,1,0,0,1,0,1.414,1.026,1.026,0,0,1-1.414,0L12,13.414,9.172,16.243a1.01,1.01,0,0,1-1.414,0,1,1,0,0,1,0-1.414L10.586,12,7.758,9.171A1,1,0,1,1,9.172,7.757L12,10.586l2.828-2.829a1,1,0,1,1,1.414,1.414L13.414,12Z"></path>`;
            case 'warning':
                return svg`<path d="M12 2L1 21H23M12 6L19.53 19H4.47M11 10V14H13V10M11 16V18H13V16"/>`;
            default:
                return svg`<path d="M11 7H13V9H11V7M11 11H13V17H11V11M12 2C6.47 2 2 6.5 2 12C2 17.5 6.5 22 12 22S22 17.5 22 12 17.5 2 12 2M12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4S20 7.58 20 12C20 16.42 16.42 20 12 20Z"/>`;
        }
    }
}

export const popupNotification = new PopupNotification();