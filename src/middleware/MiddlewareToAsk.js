const ToAskMiddleware = async (req,res,next)=>{
    const {
        titleask,
        areaask
    } = req.body;

    if(!titleask){
        return res.send('Erro! title obrigatorio')
    }else if(!areaask){
        return res.send('Erro! pergunta obrigatoria')
    }else{
        next();
    }
}

module.exports = ToAskMiddleware;