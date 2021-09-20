const Condition = require('../models/Condition');

class ConditionsController {

    getAll(req, res, next) {
        Condition.find({}).populate('zoneRuleId').exec((err, response) => {
            if (err) return next(err);
            res.status(200).send({
                success: true,
                response
            });
        })
    }

    get(req, res, next) {
        let { id } = req.params;
        Condition.findById(id, (err, response) => {
            if (err) return next(err);
            res.status(200).send({
                success: true,
                response
            });
        });
    }

    post(req, res, next) {
        let body = req.body;
        let post = new Condition(body);
        post.save((err, response) => {
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
        Condition.updateOne({ _id: id }, {
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
        Condition.deleteOne({ _id: id }, (err, response) => {
            if (err) return next(err);
            res.status(200).send({
                success: true,
                response
            });
        })
    }

}

const conditionsController = new ConditionsController();
module.exports = conditionsController;