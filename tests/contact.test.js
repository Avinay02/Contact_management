const request = require('supertest')
const app = require('../index')

describe('Contact API', () => {
  it('should create a new contact', async () => {
    const res = await request(app).post('/contacts').send({
      name: 'John Doe',
      email: 'john@example.com',
      phone: '1234567890',
      address: '123 Main St',
    })

    expect(res.status).toBe(201)
    expect(res.body.name).toBe('John Doe')
    expect(res.body.email).toBe('john@example.com')
  })
})
