import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';

@customElement('loading-overlay')
// @ts-ignore
export class LoadingOverlay extends LitElement {
    static readonly styles = css`
        :host {
        }

        .loading-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(255, 255, 255, 0.8);
            backdrop-filter: blur(3px);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
            transition:
                transform 0.3s ease,
                opacity 0.3s ease;
        }

        .loading-overlay-hidden {
            pointer-events: none;
            opacity: 0;
        }

        .loading-overlay-visible {
            opacity: 1;
        }

        .spinner {
            width: 40px;
            height: 40px;
            border: 4px solid #f3f3f3;
            border-top: 4px solid #882499;
            border-radius: 50%;
            animation: spin 1s linear infinite;
        }

        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;

    @state() private visible: boolean = false;

    show() {
        this.visible = true;
    }

    hide() {
        this.visible = false;
    }

    isVisible() {
        return this.visible;
    }

    render() {
        return html`
            <div class="loading-overlay ${this.visible ? 'loading-overlay-visible' : 'loading-overlay-hidden'}">
                <div class="spinner"></div>
            </div>
        `;
    }
}

export const loadingOverlay = new LoadingOverlay();