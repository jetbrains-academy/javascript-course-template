import request from 'supertest';
import {customizeError} from '#utils/utils.js'
import { httpServer } from '../backend/src/index.js';

beforeAll(() => {

});

afterAll((done) => {
    httpServer.close(done);
})


test('Test /sum route with valid parameters', async () => {
    try {
        const response = await request(httpServer).get('/sum?a=10&b=-20')
            .timeout(4000);
        expect(response.status).toBe(200);
        expect(response.body).toEqual({ sum: -10 });
    } catch (e){
        customizeError(e, 'Wrong response (or status code) from the route /sum with parameters a=10&b=-20', true)
        throw e
    }
});

test('Test /sum route with invalid parameters', async () => {
    try {
        const response = await request(httpServer).get('/sum?a=Hello&b=20')
            .timeout(4000);
        expect(response.status).toBe(400);
        expect(response.body).toEqual({ message: 'Invalid query parameters. Ensure "a" and "b" are numbers.' });
    } catch (e){
        customizeError(e, 'Wrong response (or status code) from the route /sum with parameters a=Hello&b=20', true)
        throw e
    }
});

test('Test /sum route with missing parameters', async () => {
    try {
        const response = await request(httpServer).get('/sum')
            .timeout(4000);
        expect(response.status).toBe(400);
        expect(response.body).toEqual({ message: 'Invalid query parameters. Ensure "a" and "b" are numbers.' });
    } catch (e){
        customizeError(e, 'Wrong response (or status code) from the route /sum with missing parameters', true)
        throw e
    }
});
