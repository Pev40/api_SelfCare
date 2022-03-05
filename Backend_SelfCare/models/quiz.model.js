const express = require('express');
const router = express.Router();
const connectionDb = require('../config/dbconnections');

class QuizModel{

    async registrarQuiz(idUsuario, Puntaje){
        const con = connectionDb.promise();
        const data = await con.query("CALL RegistrarQuizUsuario(?)",[idUsuario, Puntaje]);
        return data;
    }

    async getPuntosUsuario(idUsuario){
        const con = connectionDb.promise();
        const data = await con.query("CALL PuntajeUsuarioQuiz(?)",idUsuario);
        return data[0][0][0];
    }

}
module.exports = QuizModel;