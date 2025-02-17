import { PopupNotificationService } from './popup-notification-service';

export class ShareService {

    static async shareLink(link: string) {
        try {
            if (navigator.share) {
                await navigator.share({
                    title: 'Ссылка на платеж',
                    text: 'Ссылка для оплаты:',
                    url: link
                });
            } else {
                await navigator.clipboard.writeText(link);
                PopupNotificationService.show('Ссылка скопирована в буфер обмена', 'success');
            }
        } catch (err: any) {
            if (!err.toString().includes('AbortError')) {
                PopupNotificationService.show('Произошла ошибка. Пожалуйста, попробуйте позже', 'error');
            }
        }
    }
}