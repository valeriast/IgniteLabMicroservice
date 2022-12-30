import { Injectable } from "@nestjs/common/decorators";
import { Notification } from "@application/entities/notification";
import { NotificationsRepository } from "@application/repositories/notifications-repository";
import { PrismaService } from "../prisma.service";
import { PrismaNotificationMapper } from "../mappers/prisma-notification-mapper";

@Injectable()
export class PrismaNotificationsRepository implements NotificationsRepository{
    constructor(private prisma: PrismaService){}

    async findById(notificationId: string): Promise<Notification> {
        const notification = await this.prisma.notification.findUnique({
            where: {
                id: notificationId,
            }
        })

        return PrismaNotificationMapper.toDomain(notification);
    }
    
    async findManyByRecipientId(recipientId: string): Promise<Notification[]> {
        const notifictions = await this.prisma.notification.findMany({
            where:{
                recipientId: recipientId,
            }
        })

        return notifictions.map(PrismaNotificationMapper.toDomain)
    }

    async countManyByRecipientId(recipientId: string): Promise<number> {
        const count = await this.prisma.notification.count({
            where: {
                recipientId,
            }
        })

        return count;
    }
    async create(notification: Notification): Promise<void> {
       const raw = PrismaNotificationMapper.toPrsima(notification);     
        await this.prisma.notification.create({ data: raw })
    }

    async save(notification: Notification): Promise<void> {
        const raw = PrismaNotificationMapper.toPrsima(notification);
        await this.prisma.notification.update({
            where: {
                id: raw.id,
            },
            data: raw,
        })
    }

}