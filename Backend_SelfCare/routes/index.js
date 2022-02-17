var express = require('express');
var router = express.Router();


const usuarioRouter = require('./usuario.router');


function routerApi(app){
  const router = express.Router();
  app.use('/api/v1',router);
  router.use('/usuario',usuarioRouter);
}
module.exports = routerApi;
