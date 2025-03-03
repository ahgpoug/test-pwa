import { LoadingOverlayService } from './loading-overlay-service';

class AuthService {
    async getToken(): Promise<string | null> {
        if ('serviceWorker' in navigator) {
            const registration = await navigator.serviceWorker.ready;
            return new Promise((resolve) => {
                const channel = new MessageChannel();
                channel.port1.onmessage = (event) => resolve(event.data);
                registration.active?.postMessage({ type: 'GET_TOKEN' }, [channel.port2]);
            });
        }

        return null;
    }

    async setToken(token: string): Promise<void> {
        if ('serviceWorker' in navigator) {
            const registration = await navigator.serviceWorker.ready;
            registration.active?.postMessage({ type: 'SET_TOKEN', token });
        }
    }
    
    async clearToken(): Promise<void> {
        if ('serviceWorker' in navigator) {
            const registration = await navigator.serviceWorker.ready;
            registration.active?.postMessage({ type: 'SET_TOKEN', token: null });
        }
    }

    async isAuthenticated(): Promise<boolean> {
        const token = await this.getToken();
        
        if (!token) {
            return false;
        }

        // Проверка срока действия токена
        const payload = JSON.parse(atob(token.split('.')[1]));
        return payload.exp * 1000 > Date.now();
    }

    supportsCredentialsAPI(): boolean {
        return 'credentials' in navigator && 'PasswordCredential' in window;
    }

    async saveCredentials(login: string, password: string): Promise<void> {
        if (!authService.supportsCredentialsAPI()) {
            return;
        }

        const cred = new PasswordCredential({
            id: login,
            password: password,
            name: login
        });

        await navigator.credentials.store(cred);
    }

    async tryRequestCredentials(): Promise<CredentialType | null> {
        if (!authService.supportsCredentialsAPI()) {
            return null;
        }

        const credential = await navigator.credentials.get({
            password: true,
            mediation: 'optional'
        });

        return credential;
    }

    async logout(): Promise<void> {
        this.clearToken();
        sessionStorage.clear();

        if (this.supportsCredentialsAPI()) {
            LoadingOverlayService.show();

            try {
                await navigator.credentials.preventSilentAccess();
                await new Promise(resolve => setTimeout(resolve, 500));
            } catch (err) {
                window.alert(err);
                console.error('Failed to prevent silent access: ', err);
            }

            LoadingOverlayService.hide();
        }

        window.dispatchEvent(new CustomEvent("navigateto", { detail:{ page: 'login-page', replace: true } }));
    }
}

export const authService = new AuthService();