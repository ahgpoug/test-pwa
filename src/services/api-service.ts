// @ts-ignore
import { authService } from './auth-service';
// @ts-ignore
import { TPO } from '../models/tpo';
import { PaymentLink } from '../models/payment-link';

class ApiService {
    // @ts-ignore
    private readonly baseUrl = 'https://api.example.com';

    // TODO
    // @ts-ignore
    async login(login: string, password: string): Promise<string> {
        return 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE3Mzk0MjcwNzgsImV4cCI6MTc3MDk2MzA3OCwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJSb2xlIjpbIk1hbmFnZXIiLCJQcm9qZWN0IEFkbWluaXN0cmF0b3IiXX0.jHWRmpyQBaIFL9xd5fk3gqhPe_m0DtnOQx3J_LD-fTA';

        /*const response = await fetch(`/api/log-in`, {
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

    async fetchPaymentHistory(): Promise<PaymentLink[]> {
        // Эмуляция задержки сети TODO
        const delay = Math.random() * 2000 + 1000; // 1-3 секунды
        await new Promise(resolve => setTimeout(resolve, delay));

        return [
            {
                id: '1',
                amount: 1000,
                date: '2023-10-01',
                number: 'ТПО-123456789012',
                link: 'https://example.com/payment/123456789012',
                status: 'Оплачено'
            },
            {
                id: '2',
                amount: 1500,
                date: '2023-10-05',
                number: 'ТПО-123456789012',
                link: 'https://example.com/payment/123456789012',
                status: 'Оплачено'
            },
            {
                id: '3',
                amount: 2000,
                date: '2023-10-10',
                number: 'ТПО-123456789012',
                link: 'https://example.com/payment/123456789012',
                status: 'Оплачено'
            }
        ];
    }

    // @ts-ignore
    async fetchTPOList(fio: string, passportSeriesNumber: string): Promise<TPO[]> {
        // Эмуляция задержки сети TODO
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

        //TODO
        /*const token = authService.getToken();
        if (!token || !authService.isAuthenticated) {
            authService.logout();
            window.dispatchEvent(new CustomEvent("navigateto", { detail: 'login-page' }));
            throw new Error('Требуется авторизация');
        }

        const response = await fetch(`${this.baseUrl}/searchtpoapi`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(
                {
                    'payerList': [
                        {
                            'payerFio': fio,
                            'identityCardSeries': passportSeriesNumber.slice(0, 4),
                            'identityCardNumber': passportSeriesNumber.slice(-6)
                        }
                    ]
                }
            )
        });

        if (!response.ok) {
            throw new Error('Ошибка запроса');
        }

        var tpos: TPO[] = [];
        (await response.json()).tpos.forEach((tpo: any) => {
            tpos.push({
                id: tpo.tpoId,
                amount: tpo.amount,
                date: tpo.date,
                number: tpo.tpoNumber
            })
        });

        return tpos;*/
    }
}

export const apiService = new ApiService();