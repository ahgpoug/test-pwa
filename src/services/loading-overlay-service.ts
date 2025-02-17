import { LoadingOverlay, loadingOverlay } from '../components/loading-overlay';

export class LoadingOverlayService {
    private static instance: LoadingOverlay | null = null;

    static initialize() {
        if (!this.instance) {
            this.instance = loadingOverlay;
            document.body.appendChild(this.instance);
        }
    }

    static show() {
        this.initialize();
        this.instance!.show();
    }

    static hide() {
        if (this.instance) {
            this.instance.hide();
        }
    }

    static isVisible() {
        if (this.instance) {
            return this.instance.isVisible();
        }
        return false;
    }
}