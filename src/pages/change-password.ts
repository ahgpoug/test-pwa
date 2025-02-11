import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { globalStyles } from '../styles/global-styles';

@customElement('change-password')
// @ts-ignore
class ChangePassword extends LitElement {

    static readonly styles = [globalStyles];

    @property({ type: String }) oldPassword: string = '';
    @property({ type: String }) newPassword: string = '';
    @property({ type: String }) confirmPassword: string = '';

    handleChangePassword() {
        if (this.newPassword === this.confirmPassword) {
            console.log('Смена пароля:', this.oldPassword, this.newPassword);
        } else {
            console.error('Пароли не совпадают');
        }
    }

    render() {
        return html`
            <input type="password" .value="${this.oldPassword}" @input="${(e: Event) => this.oldPassword = (e.target as HTMLInputElement).value}" placeholder="Старый пароль">
            <input type="password" .value="${this.newPassword}" @input="${(e: Event) => this.newPassword = (e.target as HTMLInputElement).value}" placeholder="Новый пароль">
            <input type="password" .value="${this.confirmPassword}" @input="${(e: Event) => this.confirmPassword = (e.target as HTMLInputElement).value}" placeholder="Подтвердите пароль">
            <button class="nav-button" @click="${this.handleChangePassword}">Сменить пароль</button>
        `;
    }
}