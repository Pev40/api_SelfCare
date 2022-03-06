const express = require('express');
const router = express.Router();
const connectionDb = require('../config/dbconnections');

class RespuestasModel{
    async createRespuesta(Numero){
        const con = connectionDb.promise();
        const data = await con.query("CALL RespuestaAletaroriaQuiz(?)",[Numero]);
        return data[0][0][0].NombreRespuesta;
    }
}
module.exports = RespuestasModel;