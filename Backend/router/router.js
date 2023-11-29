// Import npm express
const express = require('express');

const {
    homePage,
    menu,
} = require('../controller/homeController'); // khai bao ten router cho file homController.js 
const router = express.Router();

// Cac router de thao tac
router.get('/home', homePage);
router.get('/menu', menu);






// xuat ra router dung cho controller
module.exports = router;