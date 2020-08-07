/*==============================================PROBLEMAS================================================================*/

const modelAsk = require('../model/ModelAsk');
const ModelAnswer = require('../model/ModelAnswer');


class AskController {

    async toAsk(req, res) {
        res.render('ask');
    }

    async create(req, res) {
        const titleask = req.body.titleask;
        const areaask = req.body.areaask;

        await modelAsk.create({
            title: titleask,
            description: areaask
        }).then(() => {
            res.redirect('/');
        }).catch((error) => {
            console.log(error);
        })
    }

    async delete(req, res) {
        let id = req.body.idinput;
        await modelAsk.destroy({
            where: {
                id: id
            }
        }).then(() => {
             ModelAnswer.destroy({
                where: {
                    questionId: id
                }
            }).then(() => {
                res.redirect('/');
            }).catch((err) => {
                console.log(err);
            })
        }).catch((err) => {
            console.log(err);
        });
        
        
    }

    async listAll(req, res) {
        await modelAsk.findAll({
            raw: true, order: [
                ["id", "DESC"]
            ]
        }).then((ask) => {
            res.render("index", {
                ask: ask
            });
        });
    }

    async viewAsk(req, res) {
        let numberId = req.params.id;
        modelAsk.findOne({

            where: { id: numberId }
        }).then((id) => {

            ModelAnswer.findAll({
                where: { questionId: numberId },
                order: [['id', 'DESC']]
            }).then((question) => {
                res.render('viewask', {
                    id: id,
                    question: question
                })
    
            })



        }
        ).catch((error) => {
            console.log("erro aqui"+error);
        });

    }

}
module.exports = new AskController();