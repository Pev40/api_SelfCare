var express = require("express");
const router = express.Router();
/**
 * Documentación Completa
 */
const RecetasController = require("../controllers/recetas.controller");
const RecetasControlador = new RecetasController();

router.get("/", async (req, res) => {
  try {
    const info = await RecetasControlador.getAllRecetas();
    res.setHeader("Content-Type", "application/json");
    if (info == null) {
      res.status(502).end(JSON.stringify(info)).json({
        status: "ERROR",
      });
      return;
    }
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(info));
  } catch (error) {
    console.log("Ruta Error: ", error);
    return res.status(501);
  }
});

router.post("/filter", async (req, res) => {
  try {
    const info = await RecetasControlador.FiltroRecetas(
      req.body.NivelCalorias,
      req.body.Proteinas,
      req.body.Carboidratos,
      req.body.Grasas,
      req.body.Comidas,
      req.body.Tiempo,
      req.body.Dificultad
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

router.post("/especifico", async (req, res) => {
  try {
    console.log(req.body.idReceta);
    const info = await RecetasControlador.RecetasEspecifica(req.body.idReceta);
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
