const express = require('express');
const router = express.Router();
const connectionDb = require('../config/dbconnections');

class ValoracionModel{

    async createValoracion(idReceta,Puntuacion){
        try{
            const con = connectionDb.promise();
            const data = await con.query("CALL CrearValoracion(?,?)",[idReceta,Puntuacion]);
            return data;
        }
        catch(error){
            console.log("Error Controller Try: ", error);
            
            return new Error("Error De Controlador Quiz");
        }
    }

    


}
module.exports = ValoracionModel