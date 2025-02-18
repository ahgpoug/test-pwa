import { DownloadModalWindow, DownloadModalWindowType, downloadModalWindow } from '../components/download-modal-window';

export class DownloadModalWindowService {
    private static instance: DownloadModalWindow | null = null;

    static initialize() {
        if (!this.instance) {
            this.instance = downloadModalWindow;
            document.body.appendChild(this.instance);
        }
    }

    static show(type: DownloadModalWindowType = 'other', deferredPrompt: any = null) {
        this.initialize();
        this.instance!.show(type, deferredPrompt);
    }

    static hide() {
        if (this.instance) {
            this.instance.hide();
        }
    }
}