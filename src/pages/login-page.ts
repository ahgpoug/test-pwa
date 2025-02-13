import { LitElement, html } from 'lit';
import { customElement, state, property } from 'lit/decorators.js';
import { apiService } from '../services/api-service';
import { authService } from '../services/auth-service';
import { globalStyles } from '../styles/global-styles';

@customElement('login-page')
// @ts-ignore
class LoginPage extends LitElement {

    static readonly styles = [globalStyles];

    @state() private login: string = '';
    @state() private password: string = '';
    @state() private error: string = '';
    @property({ type: Function }) onSuccessLogin: () => void = () => {};

    private async handleLogin() {
        try {
            const token = await apiService.login(this.login, this.password);
            authService.setToken(token);
            this.onSuccessLogin();
        } catch (err) {
            this.error = 'Ошибка авторизации';
        }
    }

    render() {
        if (authService.isAuthenticated()) {
            this.onSuccessLogin();
        }

        return html`
            <input type="text" .value="${this.login}" @input="${(e: Event) => this.login = (e.target as HTMLInputElement).value}" placeholder="Логин">
            <input type="password" .value="${this.password}" @input="${(e: Event) => this.password = (e.target as HTMLInputElement).value}" placeholder="Пароль">
            <button class="action-button" @click="${this.handleLogin}">Войти</button>
            ${this.error ? html`<div class="error">${this.error}</div>` : ''}
        `;
    }
}