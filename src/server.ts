import fastify from 'fastify'

const app = fastify()

app.get('/', (req, res) => {
  return res.status(200).send('Hello')
})

app
  .listen({
    port: 4000,
  })
  .then(() => {
    console.log('listening on port 4000. 🔥')
  })
