import { Notification } from "@application/entities/notification";
import { NotificationsRepository } from "@application/repositories/notifications-repository"

export class InMemoryNotificationsRespository implements NotificationsRepository{
    public notifications:Notification[] = []; 
    
    async findById(notificationId: string): Promise<Notification> {
        throw new Error("Method not implemented.");
    }

    async create(notification: Notification){
        this.notifications.push(notification)
    }

    async save(notificatio: Notification): Promise<void> {
        throw new Error("Method not implemented.");
    }

}