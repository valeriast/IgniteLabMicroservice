import { Content } from "./Content"


describe('Notification content', () => {
    test('it should be able to create a notification content', () => {
        const content = new Content('Uma notificacao aleatoria');
    
        expect(content).toBeTruthy();
    });
    
    test('it should not be able to create a notification content when content is less than 5 characters', () => {
        expect( () => new Content('123')).toThrow();
    });
    
    test('it should not be able to create a notification content when content is higher than 240 characters', () => {
        expect( () => new Content('a'.repeat(241))).toThrow();
    });
});
