import { Notification as RawNotification} from '@prisma/client'
import { Notification } from "@application/entities/notification";
import { Content } from '@application/entities/Content';

export class PrismaNotificationMapper{
    static toPrsima(notification: Notification){
        return {
            id: notification.id,
            content: notification.content.value,
            category: notification.category,
            recipientId: notification.recipientId,
            readAt: notification.readAt,
            createdAt: notification.createdAt,
         }
    }

    static toDomain(raw: RawNotification ) : Notification{
        return new Notification({
            category: raw.category,
            content: new Content(raw.content),
            recipientId: raw.recipientId,
            readAt: raw.readAt,
            canceledAt: raw.canceledAt,
            createdAt: raw.createdAt,
        }, raw.id)
    }
}