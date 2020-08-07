const ControllerAnswer = require('../controller/ControllerAnswer');
const MiddlewareAnswer = require('../middleware/MiddlewareAnswer');
const MiddlewareDeleteNote = require('../middleware/MIddlewareDeleteNote');

const express = require('express');
const router = express.Router();

router.post("/response",MiddlewareAnswer,ControllerAnswer.create);
router.post('/deletenote',MiddlewareDeleteNote,ControllerAnswer.delete);


module.exports = router;