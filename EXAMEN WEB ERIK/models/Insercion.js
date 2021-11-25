//Los esquemas a usar para la insercion
const { model, Schema } = require('mongoose');

const NotaSchema = new Schema({

    
    Identificaion: String,
    Ruta: String,
    tipodevehiculo: String,
    numerodepsajero: String,
    Placa: String,
    Cobro: String,
    TipoError: String,
});
  
const Insercion = model('Insercion', NotaSchema);
module.exports = Insercion;