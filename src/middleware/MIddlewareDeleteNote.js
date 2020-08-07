const MiddlewareDeleteNote = (req, res, next) => {
    
let id = req.body.idnote;
console.log(id);
if(!id){
    res.redirect('/')
}else if(isNaN(id)){
    res.redirect('/')
}else{
    next();
}


}
module.exports = MiddlewareDeleteNote;
