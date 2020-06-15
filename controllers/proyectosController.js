exports.proyectosHome = (req, res) => {
    res.render('index', {
        nombrePagina: 'Proyecto'
    });
}

exports.formularioProyecto = (req, res) => {
    res.render('nuevoProyecto', {
        nombrePagina: 'Nuevo Proyecto'
    });
}

