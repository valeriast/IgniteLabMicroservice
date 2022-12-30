import { Notification } from '@application/entities/notification';
import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRespository } from '../../../test/repositories/in-memory-notifications-repository';
import { NotificationNotFound } from './errors/notification-not-found-error';
import { ReadNotification } from './read-notification';

describe('Read Notification', () => {
    it('should be able to read a notification', async () =>{
        const notificationsRespository = new InMemoryNotificationsRespository();
        const readNotification = new ReadNotification(notificationsRespository);

        const notification = new Notification(makeNotification());
        await notificationsRespository.create(notification);

        await readNotification.execute({
            notificationId: notification.id
        });

        expect(notificationsRespository.notifications[0].readAt).toEqual(expect.any(Date));
    }) 

    it('should not be able to read a notification if it does not exist', async () =>{
        const notificationsRespository = new InMemoryNotificationsRespository();
        const readNotification = new ReadNotification(notificationsRespository);

        await 

        expect(()=>{
            return readNotification.execute({
                notificationId: 'fake-id'
            });
        }).rejects.toThrowError(NotificationNotFound)
    })
})