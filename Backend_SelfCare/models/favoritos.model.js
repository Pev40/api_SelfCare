const express = require('express');
const router = express.Router();
const connectionDb = require('../config/dbconnections');

class FavoritosModel{

    async createFavorito(idUsuario,idReceta){
        const con = connectionDb.promise();
        const data = await con.query("CALL AgregarAFavorito(?,?)",[idUsuario,idReceta]);
        return data;
    }

    async deleteFavorito(idUsuario,idReceta){
        const con = connectionDb.promise();
        const data = await con.query("CALL EliminarFavorito(?,?)",[idUsuario,idReceta]);
        return data;
    }

    async getPuntajePorReceta(idReceta){
        const con = connectionDb.promise();
        const data = await con.query("CALL ConsultarCantidadFavoritoRecetas(?)",idReceta);
        return data[0][0];
    }

    async getRecetasFavoritasUsuario(idUsuario){
        const con = connectionDb.promise();
        const data = await con.query("CALL ConsultarFavoritoUsuario(?)",idUsuario);
        return data[0][0];
    }

    



}
module.exports = FavoritosModel;