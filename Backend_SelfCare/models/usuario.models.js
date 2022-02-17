const express = require('express');
const router = express.Router();
const connectionDb = require('../config/dbconnections');

class UsuarioModel{

    async createAsincrono(Nombres,Email,Password){
        const con = connectionDb.promise();
        const bcrypt = require("bcryptjs");
        const SALT_PASSWORD =  10;
        let PasswordEncriptada = bcrypt.hashSync(Password, SALT_PASSWORD);
        const data = await con.query("CALL CrearNuevoUsuario(?,?,?)",[PasswordEncriptada,Nombres,Email]);
        console.log("Error:",data);
        return data;
    }

    async delete(Email){
        console.log(Email);
        const con = connectionDb.promise();
        const data = await con.query("CALL EliminarUsuario(?)",Email);
        console.log("Error:",data);
        return data;
    }

    async getAll(){
        const con = connectionDb.promise();
        const data = await con.query("CALL VerUsuarios()");
        console.log("Error Model:",data);
        return data;
    }

}
module.exports = UsuarioModel;