const Condition = require('../models/Condition');

class ConditionsController {

    getAll(req, res, next) {
        Condition.find({}).populate('zoneruleId').exec((err, response) => {
            if (err) return next(err);
            res.status(200).send(response);
        })
    }

    get(req, res, next) {
        let { id } = req.params;
        Condition.findById(id, (err, response) => {
            if (err) return next(err);
            res.status(200).send(response);
        });
    }

    post(req, res, next) {
        let body = req.body;
        let post = new City(body);
        post.save((err, response) => {
            if (err) return next(err);
            res.status(200).send(response);
        });
    }

    put(req, res, next) {
        let { id } = req.params;
        let body = req.body;
        Condition.updateOne({ _id: id }, {
            $set: body
        }, (err, response) => {
            if (err) return next(err);
            res.status(200).send(response);
        });
    }

    delete(req, res, next) {
        let { id } = req.params;
        Condition.deleteOne({ _id: id }, (err, response) => {
            if (err) return next(err);
            res.status(200).send(response);
        })
    }

}

const conditionsController = new ConditionsController();
module.exports = conditionsController;