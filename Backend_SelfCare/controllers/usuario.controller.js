/**
 * Librerias
 */
 const express = require("express");
 const router = express.Router();
 
 /*
  Modelos
  */

  const UsuarioModel = require('../models/usuario.models')
  const usuarioDb = new UsuarioModel;
  const LoginModel = require("../models/login.models");
  const loginDb = new LoginModel;

  class UsuarioController{
      async createUsuario(Nombre,Email,Password){
          try {
          var result = usuarioDb.createAsincrono(Nombre,Email,Password);   
          const data = await result.catch((err) => {
            console.log("Controller Error: ", err);
            return null;
          });
          return data;
        } catch (error) {
            console.log("Error Controller Try: ",error)  
            return new Error('Error De Controlador Usuario');

          }
      }

    async getAllUsuarios(){
        try {
         
        var result = usuarioDb.getAll();
        const data = await result.catch((err) => {
            console.log("Controller Error: ", err);
            return data;
          });
          return data[0][0];
        } catch (error) {
            console.log("Error Controller Try: ",error)  
            return new Error('Error De Controlador Usuario');

        }
    }

    async deleteUsuario(Email){
        try {
            var result = usuarioDb.delete(Email);
            const data = await result.catch((err) => {
            console.log("Controller Error: ", err);
            return null;
            })
            return data;
        } catch (error) {
            console.log("Error Controller Try: ",error)  
            return new Error('Error De Controlador Usuario');
        }
    }


    async login(email, Password) {
        try {
        const result = loginDb.login(email, Password);
        console.log("Controlador Resultado", result);
        const data = await result.catch((err) => {
          console.log("Controller Error: ", err);
          return null;
        });
        return data;   
        } catch (error) {
            console.log("Error Controller Try: ",error)  
            return new Error('Error De Controlador Usuario');
        }
      }
    
    async getUsuarioEspecifico(Email){
        try {
            const result = loginDb.verToken(email);
            console.log("Controlador Resultado", result);
            const data = await result.catch((err) => {
              console.log("Controller Error: ", err);
              return null;
            });
        } catch (error) {
            console.log("Error Controller Try: ",error)  
            return new Error('Error De Controlador Usuario');
        }
    }


    async actualizarPassword(Password, Confirmación, Email) {
        if (Password === Confirmación) {
          var result = loginDb.updatePassword(Email, Password);
          const data = await result.catch((err) => {
            console.log("Controller Error: ", err);
            return null;
          });
          return data;
        } else {
          alert("Error");
          return new Error("Error de controlador");
        }
      }

  }
  module.exports = UsuarioController;