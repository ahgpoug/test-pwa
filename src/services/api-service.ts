import { authService } from './auth-service';

class ApiService {
    private readonly baseUrl = 'https://api.example.com';

    // TODO
    // @ts-ignore
    async login(login: string, password: string): Promise<string> {
        return 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE3Mzk0MjcwNzgsImV4cCI6MTc3MDk2MzA3OCwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJSb2xlIjpbIk1hbmFnZXIiLCJQcm9qZWN0IEFkbWluaXN0cmF0b3IiXX0.jHWRmpyQBaIFL9xd5fk3gqhPe_m0DtnOQx3J_LD-fTA';

        /*const response = await fetch(`${this.baseUrl}/log-in`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ login, password }),
        });

        if (!response.ok) {
            throw new Error('Ошибка авторизации');
        }

        const { token } = await response.json();
        return token;*/
    }

    async fetchProtectedData(): Promise<any> {
        const token = authService.getToken();
        if (!token) {
            throw new Error('Требуется авторизация');
        }

        const response = await fetch(`${this.baseUrl}/protected`, {
            headers: { Authorization: `Bearer ${token}` },
        });

        if (!response.ok) {
            throw new Error('Ошибка запроса');
        }

        return response.json();
    }
}

export const apiService = new ApiService();