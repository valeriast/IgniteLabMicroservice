import { Notification } from '@application/entities/notification';
import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRespository } from '../../../test/repositories/in-memory-notifications-repository';
import { NotificationNotFound } from './errors/notification-not-found-error';
import { UnreadNotification } from './unread-notification';

describe('Unread Notification', () => {
    it('should be able to unread a notification', async () =>{
        const notificationsRespository = new InMemoryNotificationsRespository();
        const unreadNotification = new UnreadNotification(notificationsRespository);

        const notification = new Notification(makeNotification({
            readAt: new Date(),
        }));
        await notificationsRespository.create(notification);

        await unreadNotification.execute({
            notificationId: notification.id
        });

        expect(notificationsRespository.notifications[0].readAt).toBeNull();
    }) 

    it('should not be able to unread a notification if it does not exist', async () =>{
        const notificationsRespository = new InMemoryNotificationsRespository();
        const unreadNotification = new UnreadNotification(notificationsRespository);

        await 

        expect(()=>{
            return unreadNotification.execute({
                notificationId: 'fake-id'
            });
        }).rejects.toThrowError(NotificationNotFound)
    })
})