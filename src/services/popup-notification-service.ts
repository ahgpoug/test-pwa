import { PopupNotification, PopupNotificationType, popupNotification } from '../components/popup-notification';

export class PopupNotificationService {
    private static instance: PopupNotification | null = null;

    static initialize() {
        if (!this.instance) {
            this.instance = popupNotification;
            document.body.appendChild(this.instance);
        }
    }

    static show(message: string, type?: PopupNotificationType, duration?: number) {
        this.initialize();
        this.instance!.show(message, type, duration);
    }

    static hide() {
        if (this.instance) {
            this.instance.hide();
        }
    }
}