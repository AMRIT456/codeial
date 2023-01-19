const express = require('express');

const router = express.Router();
const homeController = require('../controllers/home_controler');

console.log('router loaded');


router.get('/', homeController.home);
router.use('/users', require('./users'));

// for any further routes, access from here
// router.use('/routerName', require('./routerfile));


<<<<<<< HEAD
module.exports = router;
=======
module.exports = router;
>>>>>>> 319221a7e23df3cad8f0cf8b3148209cd477894d
