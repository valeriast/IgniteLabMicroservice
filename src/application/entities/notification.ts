import { Content } from "./Content"
import { Replace } from '@helpers/replace'
import { randomUUID } from "crypto";

export interface NotificationProps{
    content: Content;
    category: string;
    recipientId: string;
    createdAt: Date;
    canceledAt?: Date | null;
    readAt?: Date | null;
};

export class Notification{
    private _id: string;
    private props: NotificationProps;

    constructor(props: Replace<NotificationProps, { createdAt?: Date}>, id?: string){
        this._id = id ?? randomUUID();
        this.props = {
            ...props,
            createdAt: props.createdAt ?? new Date()
        };
    }

    public get id(){
        return this._id;
    }

    public get content() : Content{
        return this.props.content;
    }

    public set content(content: Content){
        this.props.content = content;
    }
    
    public get category() : string {
        return this.props.category;
    }
    public set category(category : string) {
        this.props.category = category;
    }

    public get recipientId() : string {
        return this.props.recipientId;
    }
    public set recipientId(recipientId : string) {
        this.props.recipientId = recipientId;
    }
    
    public get createdAt() : Date {
        return this.props.createdAt;
    }
      
    public get readAt() : Date | null | undefined{
        return this.props.readAt;
    }
    
    public read(){
        this.props.readAt = new Date();
    }

    public unread(){
        this.props.readAt = null;
    }

    public cancel(){
        this.props.canceledAt = new Date();
    }

    public get canceledAt() : Date | null | undefined{
        return this.props.canceledAt;
    }
    
};


