const express = require('express');
const router = express.Router();

module.exports = () => {
    //ruta para el Home
    router.get('/', (req, res) => {
        res.send('Index');
    });
    //ruta para Nosotros
    router.get('/nosotros', (req, res) => {
        res.send('Nosotros');
    });
    return router;
}

