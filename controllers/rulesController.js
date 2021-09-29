const Rule = require('../models/Rule');

class RulesController {

    getAll(req, res, next) {
        Rule.find({}).populate('categoryId', 'category_name').exec((err, response) => {
            if (err) return next(err);
            res.status(200).send({
                success: true,
                response
            });
        })
    }

    getFields(req, res, next) {
        Rule
            .find({
                _id: {
                    $nin: [
                        '613f5120c506768e700e1e13',
                        '613f512fc506768e700e1e15',
                        '613f514bc506768e700e1e17',
                        '613f5178c506768e700e1e19',
                        '613f518fc506768e700e1e1b',
                        '613f5198c506768e700e1e1d'
                    ]
                }
            })
            .populate('categoryId', 'category_name')
            .exec((err, response) => {
                if (err) return next(err);
                res.status(200).send({
                    success: true,
                    response
                });
            })
    }

    get(req, res, next) {
        let { id } = req.params;
        Rule.findById(id, (err, response) => {
            if (err) return next(err);
            res.status(200).send({
                success: true,
                response
            });
        });
    }

    post(req, res, next) {
        let body = req.body;
        let rule = new Rule(body);
        rule.save((err, response) => {
            if (err) return next(err);
            res.status(200).send({
                success: true,
                response
            });
        });
    }

    put(req, res, next) {
        let { id } = req.params;
        let body = req.body;
        Rule.updateOne({ _id: id }, {
            $set: body
        }, (err, response) => {
            if (err) return next(err);
            res.status(200).send({
                success: true,
                response
            });
        });
    }

    delete(req, res, next) {
        let { id } = req.params;
        Rule.deleteOne({ _id: id }, (err, response) => {
            if (err) return next(err);
            res.status(200).send({
                success: true,
                response
            });
        })
    }

}

const rulesController = new RulesController();
module.exports = rulesController;