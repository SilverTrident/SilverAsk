const MiddlewareToAsk = require('../middleware/MiddlewareToAsk');
const MiddlewareFindAsk = require('../middleware/MiddlewareFindAsk')
const MiddewareDelete = require('../middleware/MiddlewareDeleteAks');
const MiddlewareDeleteASk = require('../middleware/MiddlewareDeleteAks');
const ControllerAsk = require('../controller/ConstrollerAsk');
const express = require('express');
const router = express.Router();

const modelAsk = require('../model/ModelAsk');


router.get("/", ControllerAsk.listAll);
router.get('/toask', ControllerAsk.toAsk)
router.post('/saveask', MiddlewareToAsk, ControllerAsk.create);
router.post('/destroyask',MiddlewareDeleteASk, ControllerAsk.delete);
router.get('/viewask/:id', MiddlewareFindAsk, ControllerAsk.viewAsk);



module.exports = router;