// eslint-disable-next-line no-undef
const fastify = require('fastify')({ logger: true });
fastify.register(require('@fastify/formbody'));

// Resto do seu código...


let users = [];

fastify.post('/api/users', async (request, reply) => {
  const { email, name } = request.body;

  if (!email || !name) {
    reply.code(400).send({ error: 'Email e nome são obrigatórios' });
    return;
  }

  const newUser = { id: users.length + 1, email, name };
  users.push(newUser);

  reply.code(201).send(newUser);
});

fastify.get('/api/users', async (request, reply) => {
  reply.send(users);
});

const start = async () => {
  try {
    await fastify.listen(3000, '0.0.0.0');
    console.log(`Servidor rodando em http://localhost:3000`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

start();
