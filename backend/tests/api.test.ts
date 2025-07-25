import request from 'supertest';
import app from '../src/app';

describe('API Tests', () => {
  it('should login with valid credentials', async () => {
    const res = await request(app).post('/api/login').send({ username: 'admin', password: 'admin' });
    expect(res.statusCode).toBe(200);
    expect(res.body.token).toBeDefined();
  });

  it('should fail login with invalid credentials', async () => {
    const res = await request(app).post('/api/login').send({ username: 'admin', password: 'wrong' });
    expect(res.statusCode).toBe(401);
  });

  it('should create, get, update and delete an item', async () => {
    const create = await request(app).post('/api/items').send({ title: 'Test item' });
    expect(create.statusCode).toBe(201);

    const id = create.body.id;

    const get = await request(app).get('/api/items');
    expect(get.body.length).toBeGreaterThan(0);

    const update = await request(app).put(`/api/items/${id}`).send({ title: 'Updated' });
    expect(update.body.title).toBe('Updated');

    const del = await request(app).delete(`/api/items/${id}`);
    expect(del.statusCode).toBe(204);
  });
});
