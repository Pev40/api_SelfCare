const express = require('express');
const connectionDb = require('../config/dbconnections');

class LoginModel{
    async login(email,Password){
        const con = connectionDb.promise();
        const RecuperacionContraseña = await con.query("CALL ComprobarPassword(?)",email);
        let data =0,data2;
        let contrasenaGuardada = RecuperacionContraseña[0][0][0].Password;
        const bcrypt = require("bcryptjs");
        let coinciden = bcrypt.compareSync(Password,contrasenaGuardada);
            //console.log('Aceptado? : ',coinciden);
                if(coinciden == true){
                    data2 = await this.verToken(email);
              //      console.log('error bycryps: ',data2);
                    return data2;
                }else{
                    console.log('Error comparativa: ', coinciden);
                    return data;
                }
        }

        async verToken(email){
            const con = connectionDb.promise();
            const data = await con.query("CALL AccederLogin(?)",email)
            //console.log('error SQL: ',data[0][0]);
            return data[0][0][0];
        }

        async updatePassword(Email,Password){
  
            const con = connectionDb.promise();
            const bcrypt = require("bcryptjs");
            const SALT_PASSWORD =  10;
            let PasswordEncriptada = bcrypt.hashSync(Password, SALT_PASSWORD);
            const data = await con.query("CALL ActualizarPassword(?,?)",[PasswordEncriptada,Email]);
            console.log("Error:",data);
            return data;
    
        }
}
module.exports = LoginModel;