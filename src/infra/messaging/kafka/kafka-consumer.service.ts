import { Injectable, OnModuleDestroy, OnModuleInit } from "@nestjs/common";
import { ServerKafka } from "@nestjs/microservices";

@Injectable()
export class KafkaConsumerService 
    extends ServerKafka 
    implements OnModuleDestroy{
        constructor(){
            super({
                client: {
                    clientId: 'notifications',
                    brokers: ['mighty-quetzal-8328-us1-kafka.upstash.io:9092'],
                    sasl: {
                        mechanism: 'scram-sha-256',
                        username: 'bWlnaHR5LXF1ZXR6YWwtODMyOCTUcz_3R4wjVEodWIJMKxNdP36Egcyt2GKY7nI',
                        password: '200176ba93ad413da2594e3faefaef46',
                    },
                    ssl: true,
                }
            })
        }
        
    async onModuleDestroy() {
        await this.close();
    }
}