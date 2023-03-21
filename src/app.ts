import { fastify } from 'fastify';

export {setupApp}

async function setupApp() {
    const app = fastify();
  
    app.get("/", (req, res) =>{
        res.send({ who: 'John Smith', what: "", howMuch: "2000000" })
    })
  
    return app;
  }