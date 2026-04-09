import Fastify, { fastify } from 'fastify';

export const app = Fastify({
  logger: true,
});

app.get('/health', async () => {
  return { ok: true };
});

const port = Number(process.env.PORT ?? 3000);
const host = process.env.HOST ?? '0.0.0.0';

const startApp = async () => {
  try {
    await app.listen({ port, host });
    app.log.info(`Server is running at http://${host}:${port}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

startApp();
