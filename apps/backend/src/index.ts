import Fastify from 'fastify'

const app = Fastify({
  logger: true,
})

app.get('/health', async () => {
  return { ok: true }
})

const port = Number(process.env.PORT ?? 3000)
const host = process.env.HOST ?? '0.0.0.0'

await app.listen({ port, host })
