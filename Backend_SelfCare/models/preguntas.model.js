const express = require('express');
const router = express.Router();
const connectionDb = require('../config/dbconnections');

class PreguntasModel{
    async createPregunta(NivelDificultad){
        const con = connectionDb.promise();
        const data = await con.query("CALL PreguntasQuiz(?)",[NivelDificultad]);
        return data[0][0];
    }
}
module.exports = PreguntasModel;