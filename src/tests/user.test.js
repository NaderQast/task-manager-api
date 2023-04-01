const app = require('../src/app')
const request = require('supertest')

test('signup test', async()=>{
        await request(app).post('/users').send({
                name: 'nader',
                email:'nader@example.com',
                password:'nader7777'
        }).expect(201)
})