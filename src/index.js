//====================APP=========================
const express  = require("express");
const app = express();
//===============Imports=========================
const mainRoute = require('./routes/RouteMain');
const answerRoute = require('./routes/RouteAnswer');
const bodyparser = require('body-parser');
const path = require('path');
const bodyParser = require("body-parser");
const connection = require('./database/index');
//============config============================
//database
connection.authenticate()
.then(()=>console.log('db connected...'))
.catch((err)=>{console.log(err)});
//ejs
app.set('views', path.join(__dirname,'views'));
app.set('view engine','ejs');
//static files
app.use(express.static('public'));
//bodyparser
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyParser.json());
//routes
app.use('/',mainRoute);
app.use('/',answerRoute);
//====================Valores=====================
const PORT = "3000";
//======================Server====================
app.listen(PORT, ()=>{
    console.log(`connect app to port ${PORT}`);
})

