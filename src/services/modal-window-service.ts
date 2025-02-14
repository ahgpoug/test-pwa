import { ModalWindow, modalWindow } from '../components/modal-window';

export class ModalWindowService {
    private static instance: ModalWindow | null = null;

    static initialize() {
        if (!this.instance) {
            this.instance = modalWindow;
            document.body.appendChild(this.instance);
        }
    }

    static show(heading: string, message: string) {
        this.initialize();
        this.instance!.show(heading, message);
    }

    static hide() {
        if (this.instance) {
            this.instance.hide();
        }
    }
}