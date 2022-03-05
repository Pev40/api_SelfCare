var express = require('express');
const router = express.Router();

const usuarioRouter = require('./usuario.router');
const quizRouter = require('./quiz.router');
const recetasRouter = require('./recetas.router');
const favoritosRouter = require('./favoritos.router');

function routerApi(app){
  app.use('/api/v1',router);
  router.use('/usuario',usuarioRouter);
  router.use('/quiz',quizRouter);
  router.use('/recetas',recetasRouter);
  router.use('/favoritos',favoritosRouter);
}
module.exports = routerApi;
