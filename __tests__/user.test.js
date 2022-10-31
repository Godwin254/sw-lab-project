//test userRouter.js
const mongoose = require('mongoose');
const { describe } = require('node:test');
const request = require('supertest');

const app = require('../app');
require('dotenv').config();

//connect to db before tests
beforeAll(async () => {
    await mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
});

//close db connection after tests
afterAll(async () => {
    await mongoose.connection.close();
});


//test user routes (endpoints)
describe('GET /api/users', () => {
    it('should return 200 OK', () => {
        return request(app).get('/api/users').expect(200);
    });
});

describe('GET /api/users/:id', () => {
    it('should return 200 OK', () => {
        return request(app).get('/api/users/5f4a1f7d8e3f1a3a3c3e3e3e').expect(200);
    });
});

describe('POST /api/users', () => {
    it('should return 201 OK', () => {
        return request(app).post('/api/users').expect(201);
    });
});

describe('PATCH /api/users/:id', () => {
    it('should return 200 OK', () => {
        return request(app).patch('/api/users/5f4a1f7d8e3f1a3a3c3e3e3e').expect(200);
    });
});

describe('DELETE /api/users/:id', () => {
    it('should return 200 OK', () => {
        return request(app).delete('/api/users/5f4a1f7d8e3f1a3a3c3e3e3e').expect(200);
    });
});