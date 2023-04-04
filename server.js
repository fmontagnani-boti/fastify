const fastify = require('fastify')({ logger: true })
const multipart = require('@fastify/multipart')

const { handleUpload } = require('./handleUpload')

fastify.register(multipart)

fastify.put('/upload', async (request, reply) => {
  const data = await request.file()
  await handleUpload(data.file)

  return { status: 201 }
})


const start = async () => {
  try {
    await fastify.listen({ port: 3000 })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()