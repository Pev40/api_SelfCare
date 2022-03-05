var express = require("express");
const router = express.Router();
/**
 * Documentación Completa
 */
const RecetasController = require("../controllers/recetas.controller");
const RecetasControlador = new RecetasController();

router.post("/push", async (req, res) => {
  try {
    const info = await RecetasControlador.agregarAFavoritos(
      req.body.idCliente,
      req.body.idReceta
    );
    res.setHeader("Content-Type", "application/json");
    if (info.error) {
      res.status(info.error).end(JSON.stringify(info)).json({
        status: "ERROR",
      });
      return;
    }
    res.end(JSON.stringify(info));
  } catch (error) {
    console.log(error);
    return res.status(501);
  }
});

router.post("/find", async (req, res) => {
  try {
    const info = await RecetasControlador.RecetasFavoritasDelUsuario(
      req.body.idCliente
    );
    res.setHeader("Content-Type", "application/json");
    if (info.error) {
      res.status(info.error).end(JSON.stringify(info)).json({
        status: "ERROR",
      });
      return;
    }
    res.end(JSON.stringify(info));
  } catch (error) {
    console.log(error);
    return res.status(501);
  }
});

router.delete("/delete", async (req, res) => {
  try {
    const info = await RecetasControlador.eliminarDeFavoritos(
      req.body.idCliente,
      req.body.idReceta
    );
    res.setHeader("Content-Type", "application/json");
    if (info.error) {
      res.status(info.error).end(JSON.stringify(info)).json({
        status: "ERROR",
      });
      return;
    }
    res.end(JSON.stringify(info));
  } catch (error) {
    console.log(error);
    return res.status(501);
  }
});

router.post("/valorar", async (req, res) => {
  try {
    const info = await RecetasControlador.valorarReceta(
      req.body.idReceta,
      req.body.Puntuacion
    );
    res.setHeader("Content-Type", "application/json");
    if (info.error) {
      res.status(info.error).end(JSON.stringify(info)).json({
        status: "ERROR",
      });
      return;
    }
    res.end(JSON.stringify(info));
  } catch (error) {
    console.log(error);
    return res.status(501);
  }
});

module.exports = router;
