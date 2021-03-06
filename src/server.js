const express = require("express");
var cors = require("cors");

const Router= require("./routes/routes");

const app = express();

const corsOptions = {credentials:true, origin: process.env.URL || '*'};
app.use(cors(corsOptions));
require('dotenv').config();
app.use(express.json()); //Cuando llegue un json se puede manipularlo y transformarlo a js
app.use(express.urlencoded({extended: false})); //Cuando llegue un formulario se puede manipular y convertirlo en un objeto

//middlewares
app.use(express.json()); //Cuando llegue un json se puede manipularlo y transformarlo a js
app.use(express.urlencoded({extended: false})); //Cuando llegue un formulario se puede manipular y convertirlo en un objeto

//contenido estatico
app.use('/static', express.static('public'));

//routes
app.use('/router/',Router);

const port = process.env.PORT || 3000;
app.listen(port, ()=>{  
    console.log(`El servidor esta escuchando en el puerto ${port}`);
});