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
        if (!token) return false;

        console.log(JSON.parse(atob(token.split('.')[1])));

        // Проверка срока действия токена
        const payload = JSON.parse(atob(token.split('.')[1]));
        return payload.exp * 1000 > Date.now();
    }
}

export const authService = new AuthService();