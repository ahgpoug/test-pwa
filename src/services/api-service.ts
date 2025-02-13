import { authService } from './auth-service';
import { TPOCard } from '../models/TPOCard';

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

    // @ts-ignore
    async fetchTPOList(params: { fio: string; passportSeriesNumber: string }): Promise<TPOCard[]> {
        // Эмуляция задержки сети
        const delay = Math.random() * 2000 + 1000; // 1-3 секунды
        await new Promise(resolve => setTimeout(resolve, delay));

        // Генерация случайных карточек
        const count = Math.floor(Math.random() * 10) + 1;
        return Array.from({ length: count }, (_, __) => ({
            id: Math.random().toString(36).substring(2, 9),
            amount: Math.floor(Math.random() * 100000) + 1000,
            date: new Date(Date.now() - Math.random() * 31536000000)
                .toISOString()
                .split('T')[0],
            number: `ТПО-${Math.floor(Math.random() * 1000000)}`
        }));
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