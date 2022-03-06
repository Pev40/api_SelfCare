var express = require("express");
const router = express.Router();
/**
 * Documentación Completa
 */
const UsuarioController = require("../controllers/usuario.controller");
const usuarioControl = new UsuarioController();

router.get("/", async (req, res) => {
  try {
    const info = await usuarioControl.getAllUsuarios();
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


router.post("/register", async (req, res) => {
    try {
      const info = await usuarioControl.createUsuario(req.body.Nombres,req.body.Email,req.body.Password);
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

router.post("/login", async (req, res) => {
    try {
      const info = await usuarioControl.login(req.body.Email,req.body.Password);
      console.log(info);
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

  router.delete('/delete',async(req,res)=>{
      try {
          const info = await usuarioControl.deleteUsuario(req.body.Email);
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
  })
  

  router.patch('/password',async(req,res)=>{
    try {
    const info = await usuarioControl.actualizarPassword(req.body.PasswordNueva,req.body.PasswordNueva,req.body.Email);
    res.setHeader("Content-Type", "application/json");
    if (info.error) {
      res.status(info.error).end(JSON.stringify(info)).json({
        status: "ERROR",
      });
      return;
    }
    return res.end(JSON.stringify(info));
    } catch (error) {
        console.log(error);
        return res.status(500);
    }

  })


  router.post('/usuario',async(req,res)=>{
    try {
    const info = await usuarioControl.getUsuarioEspecifico(req.body.email);
    res.setHeader("Content-Type", "application/json");
    if (info.error) {
      res.status(info.error).end(JSON.stringify(info)).json({
        status: "ERROR",
      });
      return;
    }
    return res.end(JSON.stringify(info));
    } catch (error) {
        console.log(error);
        return res.status(500);
    }

  })  

module.exports = router;
