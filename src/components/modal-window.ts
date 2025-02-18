import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';

import { globalStyles } from '../styles/global-styles';

@customElement('modal-window')
// @ts-ignore
export class ModalWindow extends LitElement {
    static readonly styles = [globalStyles, css`
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
        return html`
            <div class="modal ${this.visible ? 'modal-visible' : 'modal-hidden'}" @click="${this.hide}">
                <div class="modal-content" @click="${(e: Event) => e.stopPropagation()}">
                    <div class="modal-header-container">
                        <h3 class="modal-header-text">${this.heading}</h3>
                        <button class="modal-header-close-button" @click="${() => this.visible = false}">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path d="M18 6L6 18M6 6l12 12" stroke-width="2"/>
                            </svg>
                        </button>
                    </div>
                    <div class="modal-text">${this.message}</div>
                </div>
            </div>
        `;
    }
}

export const modalWindow = new ModalWindow();