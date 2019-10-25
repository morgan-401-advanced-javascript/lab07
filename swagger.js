const express = require('express');
const app = express();
const expressSwagger = require('express-swagger-generator')(app);

let options = {
  swaggerDefinition: {
    info: {
      description: 'API Server',
      title: 'Swaggertastic Docs!',
      version: '1.0.1',
    },
    host: 'localhost:3000',
    basePath: '',
    produces: ['application/json'],
    schemes: ['http'],
    securityDefinitions: {
      basicAuth: {
        type: 'basic',
      },
    },
  },
  basedir: '/Users/morgantatums/codefellows/401/labs/lab07/lib', //app absolute path

  files: ['../routes/*.js', './*.js'], //Path to the API handle folder
};
expressSwagger(options);
// start up a specific standalone swagger server on a specific port
app.listen(3500);