const ModelAnswer = require('../model/ModelAnswer');

class AnswerController {


    async create(req, res) {
        const answerbody = req.body.answerbody;
        const idquestion = req.body.idquestion;
     
        await ModelAnswer.create({
            questionId : idquestion,
            body: answerbody     
        }).then(() => {
            res.redirect("/viewask/"+idquestion);
        }).catch((error) => {
            console.log(error);
        })
    }

    async delete(req,res){
        let id = req.body.idnote;
        let idquestion = req.body.toidquestion;
        await ModelAnswer.destroy({
            where: {
                id: id
            }
        }).then(() => {
            res.redirect('/viewask/'+idquestion);
        }).catch((err) => {
            console.log(err);
        })
    }

} 
module.exports = new AnswerController();