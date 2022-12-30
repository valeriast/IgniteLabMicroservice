import { Content } from '@application/entities/Content';
import { Notification } from '@application/entities/notification';
import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRespository } from '../../../test/repositories/in-memory-notifications-repository';
import { CancelNotification } from './cancel-notification';
import { NotificationNotFound } from './errors/notification-not-found-error';

describe('Cancel Notification', () => {
    it('should be able to cancel a notification', async () =>{
        const notificationsRespository = new InMemoryNotificationsRespository();
        const cancelNotification = new CancelNotification(notificationsRespository);

        const notification = new Notification(makeNotification());

        await notificationsRespository.create(notification);

        await cancelNotification.execute({
            notificationId: notification.id
        });

        expect(notificationsRespository.notifications[0].canceledAt).toEqual(expect.any(Date));
    }) 

    it('should not be able to cancel a notification if it does not exist', async () =>{
        const notificationsRespository = new InMemoryNotificationsRespository();
        const cancelNotification = new CancelNotification(notificationsRespository);

        await 

        expect(()=>{
            return cancelNotification.execute({
                notificationId: 'fake-id'
            });
        }).rejects.toThrowError(NotificationNotFound)
    })
})