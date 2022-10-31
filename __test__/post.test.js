//test postRouter.js
const mongoose = require('mongoose');
const { describe } = require('node:test');
const request = require('supertest');

const app = require('../app');
require('dotenv').config();

//connect to db before tests
beforeAll(async () => {
    await mongoose.connect(process.env.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true});
});

//close db connection after tests
afterAll(async () => {
    await mongoose.connection.close();
});

//test post routes (endpoints)
describe('GET /api/posts', () => {
    it('should return 200 OK', () => {
        return request(app).get('/api/posts').expect(200);
    });
});

describe('GET /api/posts/:postId', () => {
    it('should return 200 OK', () => {
        return request(app).get('/api/posts/5f4a1f7d8e3f1a3a3c3e3e3e').expect(200);
    });
});

describe('POST /api/posts', () => {
    it('should return 201 OK', () => {
        return request(app).post('/api/posts').expect(201);
    });
});

describe('PATCH /api/posts/:postId', () => {
    it('should return 200 OK', () => {
        return request(app).patch('/api/posts/5f4a1f7d8e3f1a3a3c3e3e3e').expect(200);
    });
});

describe('DELETE /api/posts/:postId', () => {
    it('should return 200 OK', () => {
        return request(app).delete('/api/posts/5f4a1f7d8e3f1a3a3c3e3e3e').expect(200);
    });
});