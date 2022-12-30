import { Content } from '@application/entities/Content';
import { Notification } from '@application/entities/notification';
import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRespository } from '../../../test/repositories/in-memory-notifications-repository';
import { CountRecipientNotifications } from './count-recipient-notifications';

describe('Count recipient Notifications', () => {
    it('should be able to count recipient notifications', async () =>{
        const notificationsRespository = new InMemoryNotificationsRespository();
        const countRecipientNotifications = new CountRecipientNotifications( notificationsRespository );

        await notificationsRespository.create(makeNotification({recipientId: 'recipient-1'}));
        await notificationsRespository.create(makeNotification({recipientId: 'recipient-1'}));
        await notificationsRespository.create(makeNotification({recipientId: 'recipient-2'}));
        
        
        const{count} = await countRecipientNotifications.execute({
            recipientId: 'recipient-1'
        });

        expect(count).toEqual(2);
    }) 
})