import { Content } from "./Content";
import { Notification } from "./notification";

describe('Notification', () => {
    test('it should be able to create a notification', () => {
        const notification = new Notification({
            category: 'Social',
            content: new Content('Nova solicitacao'),
            recipientId: 'test',
        });
    
        expect(notification).toBeTruthy();
    });
});
