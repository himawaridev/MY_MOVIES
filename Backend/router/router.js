// Import npm express
const express = require('express');

const {
    homePage,
    menu,
    banners,
    trending,
    trailers,
    popular,
    join,
    progress,
    getPosts,
    createPost
} = require('../controller/homeController'); // khai bao ten router cho file homController.js 
const router = express.Router();

// Cac router de thao tac
router.get('/home', homePage);
router.get('/menu', menu);
router.get('/banners', banners);
router.get('/trending', trending);
router.get('/trailers', trailers);
router.get('/popular', popular);
router.get('/join', join);
router.get('/progress', progress);
router.get('/posts', getPosts);
router.post('/posts', createPost);


// xuat ra router dung cho controller
module.exports = router;