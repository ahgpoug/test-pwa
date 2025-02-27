import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { apiService } from '../services/api-service';
import { authService } from '../services/auth-service';
import { PopupNotificationService } from '../services/popup-notification-service';
import { globalStyles } from '../styles/global-styles';

@customElement('login-page')
// @ts-ignore
class LoginPage extends LitElement {
    static readonly styles = [globalStyles, css`
        .remember-me {
            display: flex;
            align-items: center;
            margin: 0.5rem 0;
            padding: 0.75rem;
            cursor: pointer;
            transition: border-color 0.3s ease;
            user-select: none;
        }

        .remember-me:hover {
            border-color: #882499;
        }

        .remember-me input[type="checkbox"] {
            margin: 0 0.75rem 0 0;
            width: 20px;
            height: 20px;
            cursor: pointer;
        }

        /* Для мобильных устройств */
        @media (max-width: 480px) {
            .remember-me {
                padding: 1rem;
            }

            .remember-me input[type="checkbox"] {
                width: 24px;
                height: 24px;
            }
        }`];

    @state() private login: string = '';
    @state() private password: string = '';
    @state() private rememberMe: boolean = false;
    @state() private isFormValid: boolean = false;

    onSuccessLogin() {
        window.dispatchEvent(new CustomEvent("navigateto", { detail:{ page: '', replace: true } }));
    }

    validateForm() {
        const isLoginValid = this.login.length > 0;
        const isPasswordValid = this.password.length > 0;

        this.isFormValid = isLoginValid && isPasswordValid;
    }

    async firstUpdated() {
        if (authService.supportsCredentialsAPI()) {
            const credentials = await authService.tryRequestCredentials();

            if (credentials && 'password' in credentials) {
                this.login = credentials.id;
                this.password = credentials.password ?? '';
                this.handleLogin();
            }
        }
    }

    handleLoginInput(e: Event) {
        this.login = (e.target as HTMLInputElement).value;
        this.validateForm();
    }

    handlePasswordInput(e: Event) {
        this.password = (e.target as HTMLInputElement).value;
        this.validateForm();
    }

    private async handleLogin() {
        try {
            if (!this.login || !this.password) {
                return;
            }

            const token = await apiService.login(this.login, this.password);
            authService.setToken(token);

            if (this.rememberMe && authService.supportsCredentialsAPI()) {
                await authService.saveCredentials(this.login, this.password);
            }

            this.onSuccessLogin();
        } catch (err) {
            PopupNotificationService.show('Ошибка авторизации', 'error');
        }
    }

    render() {
        if (authService.isAuthenticated()) {
            this.onSuccessLogin();
        }

        return html`
            <input id="login"
                type="text"
                .value="${this.login}"
                @input="${this.handleLoginInput}"
                @change="${this.validateForm}"
                placeholder="Логин">

            <input id="password"
                type="password"
                .value="${this.password}"
                @input="${this.handlePasswordInput}"
                @change="${this.validateForm}"
                placeholder="Пароль">

            ${authService.supportsCredentialsAPI() ? html`
                <label class="remember-me">
                    <input type="checkbox"
                        .checked="${this.rememberMe}"
                        @change="${(e: Event) => this.rememberMe = (e.target as HTMLInputElement).checked}">
                    Запомнить меня
                </label>
            ` : ''}

            <button class="action-button"
                @click="${this.handleLogin}"
                ?disabled="${!this.isFormValid}"
            >Войти</button>
        `;
    }
}