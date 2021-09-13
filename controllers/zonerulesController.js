const Zonerule = require('../models/Zone_rule');

class ZonerulesController {

    getAll(req, res, next) {
        Zonerule.find({}).populate('ruleId', 'rule_name').
        populate('zoneId', 'zone_name').
        populate('rulesvariantsId', 'rules_variants_name').
        exec((err, response) => {
            if (err) return next(err);
            res.status(200).send(response);
        })
    }

    get(req, res, next) {
        let { id } = req.params;
        Zonerule.findById(id, (err, response) => {
            if (err) return next(err);
            res.status(200).send(response);
        });
    }

    post(req, res, next) {
        let body = req.body;
        let post = new Zonerule(body);
        post.save((err, response) => {
            if (err) return next(err);
            res.status(200).send(response);
        });
    }

    put(req, res, next) {
        let { id } = req.params;
        let body = req.body;
        Zonerule.updateOne({ _id: id }, {
            $set: body
        }, (err, response) => {
            if (err) return next(err);
            res.status(200).send(response);
        });
    }

    delete(req, res, next) {
        let { id } = req.params;
        Zonerule.deleteOne({ _id: id }, (err, response) => {
            if (err) return next(err);
            res.status(200).send(response);
        })
    }

}

const zonerulesController = new ZonerulesController();
module.exports = zonerulesController;