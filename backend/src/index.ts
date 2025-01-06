import { Hono } from 'hono'

const app = new Hono()

app.post('/api/v1/signup', (c) => {
  return c.text('Hello Hono!')
})

app.post('/api/v1/signin', (c) => {
  return c.text('Hello Hono!')
  
})

app.put('/api/v1/blog', (c) => {
  return 
})

app.get('/api/v1/blog/:id', (c) => {
  return
})

export default app
