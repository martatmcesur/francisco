const path = require('path');
const fs = require('fs');

//de json a js
const nombres = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'archivo.json'), 'utf8')
);

function getNombres() {
    return nombres;
}

function getNombresById(id) {
    return nombres.filter((nombre) => nombre.id == id)[0];
}

//Exportar todas las funciones
module.exports = {
    getNombres,
    getNombresById
};
