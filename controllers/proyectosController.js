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

exports.nuevoProyecto = (req, res) => {
   //Enviar a consola lo que el usuario envia
    //console.log(req.body)
    //validar que tengamos algo en input
    const { nombre } = req.body;

    const errores = [];

    if(!nombre) {
        errores.push({'texto': 'Agrega un nombre al Proyecto'});
    }

    //si hay errores
    if(errores.length > 0 ) {
        res.render('nuevoProyecto', {
            nombrePagina: 'Nuevo Proyecto',
            errores
        }); 
    } else {
        //No hay errores
        //Insertar en la BD
        
    }
}

