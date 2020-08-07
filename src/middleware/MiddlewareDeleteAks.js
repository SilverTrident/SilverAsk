const MiddlewareFindAsk = require("./MiddlewareFindAsk");

const MiddlewareDeleteASk = (req, res, next) => {
    
const id = req.body.idinput;
console.log(id);
if(!id){
    res.redirect('/')
}else if(isNaN(id)){
    res.redirect('/')
}else{
    next();
}


}
module.exports = MiddlewareDeleteASk;
