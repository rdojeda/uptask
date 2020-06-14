const express = require('express');
const router = express.Router();

// Importar el controlador
const proyectosController = require('../controllers/proyectosController');


module.exports = () => {
    //ruta para el Home
    router.get('/', proyectosController.proyectosHome);
    //ruta para Nosotros
    router.get('/nosotros', proyectosController.proyectosNosotros);
    
    return router;
}

