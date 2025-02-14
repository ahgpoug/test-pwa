import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';

import { globalStyles } from '../styles/global-styles';

@customElement('modal-window')
// @ts-ignore
export class ModalWindow extends LitElement {
    static readonly styles = [globalStyles, css`
        .modal {
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

        .modal-close-button {
            position: absolute;
            top: 12px;
            right: 12px;
            background: none;
            border: none;
            cursor: pointer;
            padding: 4px;
        }

        .modal-text {
            margin: 16px 0;
            line-height: 1.5;
            white-space: pre-line;
        }
    `];

    @state() private heading: string = '';
    @state() private message: string = '';
    @state() private visible: boolean = false;

    show(heading: string, message: string) {
        this.heading = heading;
        this.message = message;
        this.visible = true;
    }

    hide() {
        this.visible = false;
        this.heading = '';
        this.message = '';
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

                    <h3>${this.heading}</h3>
                    <div class="modal-text">${this.message}</div>
                </div>
            </div>
        `;
    }
}

export const modalWindow = new ModalWindow();