import { Content } from "./Content"
import { Replace } from '../../helpers/replace'

export interface NotificationProps{
    content: Content;
    category: string;
    recipientId: string;
    createdAt: Date;
    readAt?: Date | null;
};

export class Notification{

    private props: NotificationProps;

    constructor(props: Replace<NotificationProps, { createdAt?: Date}>){
        this.props = {
            ...props,
            createdAt: props.createdAt ?? new Date()
        };
    }

    public get content() : Content{
        return this.props.content;
    }

    public set content(content: Content){
        this.props.content = content;
    }
    
    public get category() : string {
        return this.category;
    }
    public set category(category : string) {
        this.category = category;
    }

    public get recipientId() : string {
        return this.recipientId;
    }
    public set recipientId(recipientId : string) {
        this.recipientId = recipientId;
    }
    
    public get createdAt() : Date {
        return this.createdAt;
    }
      
    public get readAt() : Date | null | undefined{
        return this.readAt;
    }
    public set readAt(readAt : Date | null | undefined) {
        this.readAt = readAt;
    }
    
};


