const express = require('express');
require('dotenv').config({path: './config/.env'})
const app = express ();
const cors = require("cors");
const Pool = require('pg');



app.listen(process.env.PORT, () =>{
    console.log(`Listening on port ${process.env.PORT}`);
});
/*
const Pool = newPool({
    user: 'postgres',
    host: 'localhost',
    database: 'groupomania',
    password: 'Kemet88360',
    dialect: 'postgres',
    port: 5432
});
console.log("Connexion réussie à la base de données");
*/
