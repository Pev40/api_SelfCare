const express = require('express');
const router = express.Router();
const connectionDb = require('../config/dbconnections');

class RecetasModel{

    async getAll(){
        const con = connectionDb.promise();
        const data = await con.query("CALL RecetasPortada()");
        return data[0][0];
    }

    async filterDinamico(NivelCaloriasCLI,ProteinasCLI,CarboidratosCLI,GrasasCLI,ComidasCLI,TiempoCLI,DificultadCLI){
        const con = connectionDb.promise();
        const data = await con.query("CALL FiltroRecetas(?,?,?,?,?,?,?);",[NivelCaloriasCLI,ProteinasCLI,CarboidratosCLI,GrasasCLI,ComidasCLI,TiempoCLI,DificultadCLI]);
        return data[0][0];  
    }

}
module.exports = RecetasModel;