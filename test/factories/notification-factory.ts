import { Content } from "@application/entities/Content";
import { Notification, NotificationProps } from "@application/entities/notification";

type Override = Partial<NotificationProps> 

export function makeNotification(override: Override = {}){
    return new Notification({
        category: 'social2',
        content: new Content('Nova solicitacao'),
        recipientId: 'recipient-1',
        ...override
    })
}