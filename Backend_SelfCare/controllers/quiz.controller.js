/**
 * Librerias
 */
 const express = require("express");
const PreguntasModel = require("../models/preguntas.model");
const QuizModel = require("../models/quiz.model");
const RespuestasModel = require("../models/respuestas.model");
 const router = express.Router();
 
 /*
  Modelos
  */

const PreguntasDb = new PreguntasModel;
const RespuestaDb = new RespuestasModel;

const quizDb = new QuizModel;
  class QuizController{
    
    async getCuestionario(NivelDificultad){
        try {
            const result = PreguntasDb.createPregunta(NivelDificultad);

            const data = await result.catch((err) => {
              console.log("Controller Error: ", err);
              return null;
            });
            for (let i = 0; i < data.length; i++) {
                let answerOptions = []
                for (let j = 0; j < 3; j++) {
                    let numAletorio = Math.random() * (47-1) + 1
                    if(numAletorio != data[i].RespuestaCorrecta){
                    let answerText = await RespuestaDb.createRespuesta(numAletorio);
                    let isCorrect=false;
                    let construido = {answerText,isCorrect}
                    answerOptions.push(construido);
                }}
                let isCorrect=true;
                let answerText = data[i].NombreRespuesta;
                let construido = {answerText,isCorrect}
                answerOptions.push(construido)
                answerOptions.sort();
                let questionText = data[i].Nombre;
                let fact = data[i].fact;
                let construtorSalida = {questionText,answerOptions,fact}
                data[i] = construtorSalida;
                answerOptions = []
            }

            
           return data;
        } catch (error) {
            console.log("Error Controller Try: ",error)  
            return new Error('Error De Controlador Quiz');
        }

    }

    async savePoints(idUsuario, Puntuacion){
      try {
       
      const result = quizDb.registrarQuiz(idUsuario,Puntuacion);
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
  module.exports = QuizController;