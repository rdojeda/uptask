const express = require('express');
const routes = require('./routes');
const path =  require('path');
const bodyParser = require('body-parser');

//crear una app de express
const app = express();
//Donde cargar los archivos estáticos
app.use(express.static('public'));

//Habilitar pug
app.set('view engine', 'pug');

//añadir carpetas de las vistas
app.set(`views`, path.join(__dirname, './views'));

//Habilitar body-parser para leer datos del formulario
app.use(bodyParser.urlencoded({ extended: true }));

//rutas
app.use('/', routes() );

//escuchar/conectar puerto
app.listen(3000);
