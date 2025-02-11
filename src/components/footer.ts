import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('my-footer')
class MyFooter extends LitElement {
    render() {
        return html`
            <footer>
                <p>&copy; 2023 Мое PWA</p>
            </footer>
        `;
    }
}