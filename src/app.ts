import { fastify } from 'fastify';

export {setupApp}

async function setupApp() {
    const app = fastify();
  
    app.get("/", (req, res) =>{
        res.send({ hello: 'world' })
    })
  
    return app;
  }