var express = require("express");
const router = express.Router();
/**
 * Documentación Completa
 */
 const QuizController = require("../controllers/quiz.controller");
const quizController = new QuizController;

 router.get("/facil", async (req, res) => {
    try {
      const info = await quizController.getCuestionario(1);
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
      console.log("Ruta Error: ",error);
      return res.status(501);
    }
  });

  router.get("/medio", async (req, res) => {
    try {
      const info = await quizController.getCuestionario(2);
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
      console.log("Ruta Error: ",error);
      return res.status(501);
    }
  });

  router.get("/dificil", async (req, res) => {
    try {
      const info = await quizController.getCuestionario(3);
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
      console.log("Ruta Error: ",error);
      return res.status(501);
    }
  });


module.exports = router;