// Require the framework and instantiate it
const fastify = require('fastify')({logger: true})


fastify.register(require('fastify-cors'), { 
   origin: /.*/,
   allowedHeaders: ['Origin', 'X-Requested-With', 'Accept', 'Content-Type', 'Authorization'],
   methods: ['GET', 'PUT', 'PATCH', 'POST', 'DELETE', 'OPTIONS']
});

// Declare a route
fastify.post('/', async (request, reply) => {
  const body = request.body
  return {
    id: Math.random().toString(16).replace('.', ''), name: body.name, age: body.age
  }
})

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3000)
    fastify.log.info(`server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
