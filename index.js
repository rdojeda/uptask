const express = require('express');
const routes = require('./routes');
const path =  require('path');

//crear una app de express
const app = express();

//Habilitar oug
app.set('view engine', 'pug');

//añadir carpetas de las vistas
app.set(`views`, path.join(__dirname, './views'));

app.use('/', routes() );


//escuchar/conectar puerto
app.listen(3000);
