var express = require('express');
var router = express.Router();
var {index, enviar, siguiente, olvidar} = require("../controllers/indexController")
var validation = require("../validations/formValidation")
/* GET home page. */
router.get('/', index)
router.post('/', validation, enviar)
router.get("/siguiente", siguiente)
router.post("/siguiente", olvidar);

module.exports = router;
