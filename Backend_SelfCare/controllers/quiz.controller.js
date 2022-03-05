/**
 * Librerias
 */
 const express = require("express");
const PreguntasModel = require("../models/preguntas.model");
const RespuestasModel = require("../models/respuestas.model");
 const router = express.Router();
 
 /*
  Modelos
  */

const PreguntasDb = new PreguntasModel;
const RespuestaDb = new RespuestasModel;

  class QuizController{
    
    async getCuestionario(NivelDificultad){
        try {
            const result = PreguntasDb.createPregunta(NivelDificultad);

            const data = await result.catch((err) => {
              console.log("Controller Error: ", err);
              return null;
            });
            for (let i = 0; i < data.length; i++) {
                let arrayRespuestas = []
                for (let j = 0; j < 4; j++) {
                    let numAletorio = Math.random() * (47-1) + 1
                    if(numAletorio != data[i].RespuestaCorrecta){
                    let respuestaAletaoria = await RespuestaDb.createRespuesta(numAletorio);
                    arrayRespuestas.push(respuestaAletaoria);
                }}
                data[i].respuestasAleatorias = arrayRespuestas;
                arrayRespuestas = []
            }
            
           return data;
        } catch (error) {
            console.log("Error Controller Try: ",error)  
            return new Error('Error De Controlador Quiz');
        }

    }


  }
  module.exports = QuizController;