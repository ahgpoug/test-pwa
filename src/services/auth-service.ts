class AuthService {
    private readonly tokenKey = 'auth_token';

    getToken(): string | null {
        return localStorage.getItem(this.tokenKey);
    }

    setToken(token: string): void {
        localStorage.setItem(this.tokenKey, token);
    }

    clearToken(): void {
        localStorage.removeItem(this.tokenKey);
    }

    isAuthenticated(): boolean {
        const token = this.getToken();
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
            try {
                await navigator.credentials.preventSilentAccess();
                await new Promise(resolve => setTimeout(resolve, 500));
            } catch (err) {
                window.alert(err);
                console.error('Failed to prevent silent access: ', err);
            }
        }

        window.dispatchEvent(new CustomEvent("navigateto", { detail:{ page: 'login-page', replace: true } }));
    }
}

export const authService = new AuthService();