import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('my-header')
class MyHeader extends LitElement {
    @property({ type: Function }) navigateTo: (page: string) => void = () => {};

    render() {
        return html`
            <header>
                <h1>Мое PWA</h1>
                <nav>
                    <button @click="${() => this.navigateTo('search-tpo')}">Поиск ТПО</button>
                    <button @click="${() => this.navigateTo('create-payment-link')}">Создать ссылку</button>
                    <button @click="${() => this.navigateTo('change-password')}">Сменить пароль</button>
                    <button @click="${() => this.navigateTo('payment-history')}">История платежей</button>
                </nav>
            </header>
        `;
    }
}