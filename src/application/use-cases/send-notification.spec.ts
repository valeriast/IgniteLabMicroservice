import { InMemoryNotificationsRespository } from '../../../test/repositories/in-memory-notifications-repository';
import { SendNotification } from './send-notification' 

describe('Sendo Notification', () => {
    it('should be able to send a notification', async () =>{
        const notificationsRespository = new InMemoryNotificationsRespository();
        const sendNotification = new SendNotification(notificationsRespository);

        const {notification} = await sendNotification.execute({
            category: 'Social',
            content: 'This is a notificatio',
            recipientId: 'example-recipient-id',
        })
        expect(notificationsRespository.notifications).toHaveLength(1);
        expect(notificationsRespository.notifications[0]).toEqual(notification);
    })  
})