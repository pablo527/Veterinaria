const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes')
const bodyParser = require('body-parser');
const cors = require('cors');

// crear el servidor
const app = express();

// habilitar cors

app.use(cors());



// Conexion con MongoDb
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/veterinaria', {
    useNewUrlParser : true,
    useUnifiedTopology: true,
    useFindAndModify : false
})

// habilitar body-Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// accdimos a las routes
app.use('/', routes());



//asignar puerto y arrancar servidor
app.listen(4000, ()=> {
    console.log('Servidor iniciado');
})

