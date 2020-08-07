const ModelAsk = require('../model/ModelAsk');
const MiddlewareFindAsk = async (req,res,next)=>{
 
    ModelAsk.findOne({
     where : {id:req.params.id}
    }).then((id)=>{
        if(id){
            next();
        }else{
        res.redirect("/");
        }
    }).catch((error)=>{
        console.log(error);
    })
}
module.exports = MiddlewareFindAsk;