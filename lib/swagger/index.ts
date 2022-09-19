import swLogin from "./login.swagger";
import swProjectTests from "./projects/tests.swagger";


const port = Number(process.env.PORT) || 4000;

console.log({ port })

const swagger = {
  openapi: '3.0.0',
  info: {
    title: 'QA guild',
    version: '1.0.0',
    description: 'The API for QA guild',
  },
  servers: [
    {
      url: `http://localhost:${port}`,
      description: 'Local server',
    }
  ],
  paths: {
    ...swLogin,
    ...swProjectTests,
    //   ...swIdeaRoute,
    //   ...swStockRoute,
    //   ...swUserRoute,
    // },
  }
}

export default swagger;
