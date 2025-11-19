var express = require('express');
var router = express.Router();

//importar el archivo dataService aquí a las rutas
var dataService = require("../data/dataService");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {});
});

/*ruta para la subpágina archivo.ejs */
router.get('/archivo', function(req, res, next) {
  let nombres = dataService.getNombres();
  res.render('archivo', { arrayNombres: nombres });
});

router.get('/archivo/:pid', function(req, res, next) {
  let item1 = dataService.getNombresById(req.params.pid);
  res.render('item', { item: item1 });
});

module.exports = router;
