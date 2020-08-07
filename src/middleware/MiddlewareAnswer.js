const MiddlewareAnswer = (req, res, next) => {
    const {
        answerbody,
        idquestion
    } = req.body;

    if (!answerbody) {
        return res.send('Erro! resposta obrigatorio')
    } else if (!idquestion) {
        return res.send('Erro! sem id da pergunta')
    } else {
        next();
    }
}

module.exports = MiddlewareAnswer;