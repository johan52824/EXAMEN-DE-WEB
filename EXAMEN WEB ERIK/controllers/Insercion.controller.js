const Insercion = require('../models/Insercion');
require('../mongodb');

exports.obtenerTodasLasInserciones = (req, res) => {

    Insercion.find({}).then( Inserciones =>{

        const Inserciones_errores = Inserciones.filter( Insercion => Insercion.tipoerror )
        res.status(200).send(Inserciones_errores);

    } )
    
}

//Generando una nueva insercion para guardarla en mongo
exports.insertarInsercion = (req, res) => {
    const {  Identificacion,Ruta,tipodevehiculo,Numerodepasajero,Placa,Cobro,TipoError} = req.body;

    const new_Insercion = new Insercion({
        Identificacion,
        Ruta,
        tipodevehiculo,
        Numerodepasajero,
        Placa,
        Cobro,
        TipoError
    });

    new_Insercion.save().then( new_Insercion => res.status(201).send(new_Insercion));

}