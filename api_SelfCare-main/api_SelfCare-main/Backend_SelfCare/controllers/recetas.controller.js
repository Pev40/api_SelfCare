/**
 * Librerias
 */
const express = require("express");
const router = express.Router();

/*
  Modelos
  */
const RecetasModel = require("../models/recetas.model");
const ValoracionModel = require("../models/valoracion.model");
const FavoritosModel = require("../models/favoritos.model");
const recetasDb = new RecetasModel();
const favoritoDb = new FavoritosModel();
const valorarDb = new ValoracionModel();
class RecetasController {
  async FiltroRecetas(
    NivelCaloriasCLI,
    ProteinasCLI,
    CarboidratosCLI,
    GrasasCLI,
    ComidasCLI,
    TiempoCLI,
    DificultadCLI
  ) {
    try {
      let result = recetasDb.filterDinamico(
        NivelCaloriasCLI,
        ProteinasCLI,
        CarboidratosCLI,
        GrasasCLI,
        ComidasCLI,
        TiempoCLI,
        DificultadCLI
      );
      const data = await result.catch((err) => {
        console.log("Controller Error: ", err);
        return null;
      });
      return data;
    } catch (error) {
      console.log("Error Controller Try: ", error);
      return new Error("Error De Controlador Quiz");
    }
  }

  async getAllRecetas() {
    try {
      let result = recetasDb.getAll();
      const data = await result.catch((err) => {
        console.log("Controller Error: ", err);
        return null;
      });
      return data;
    } catch (error) {
      console.log("Error Controller Try: ", error);
      return new Error("Error De Controlador Quiz");
    }
  }

  async valorarReceta(idReceta, Puntuacion) {
    try {
      if(Puntuacion<0 || Puntuacion >= 5){Puntuacion = 0}
      let result = valorarDb.createValoracion(idReceta, Puntuacion);
      const data = await result.catch((err) => {
        console.log("Controller Error: ", err);
        return null;
      });
      return data;
    } catch (error) {
      console.log("Error Controller Try: ", error);
      return new Error("Error De Controlador Quiz");
    }
  }

  async agregarAFavoritos(idUsuario, idReceta) {
    try {
      let result = favoritoDb.createFavorito(idUsuario, idReceta);
      const data = await result.catch((err) => {
        console.log("Controller Error: ", err);
        return null;
      });
      return data;
    } catch (error) {
      console.log("Error Controller Try: ", error);
      return new Error("Error De Controlador Quiz");
    }
  }

  async eliminarDeFavoritos(idUsuario, idReceta) {
    try {
      let result = favoritoDb.deleteFavorito(idUsuario, idReceta);
      const data = await result.catch((err) => {
        console.log("Controller Error: ", err);
        return null;
      });
      return data;
    } catch (error) {
      console.log("Error Controller Try: ", error);
      return new Error("Error De Controlador Quiz");
    }
  }

  async RecetasFavoritasDelUsuario(idUsuario) {
    try {
      let result = favoritoDb.getRecetasFavoritasUsuario(idUsuario);
      const data = await result.catch((err) => {
        console.log("Controller Error: ", err);
        return null;
      });
      return data;
    } catch (error) {
      console.log("Error Controller Try: ", error);
      return new Error("Error De Controlador Quiz");
    }
  }
}

module.exports = RecetasController;
