const Zone = require('../models/Zone');

class ZonesController {

    getAll(req, res, next) {
        Zone.find({}).populate('cityId', 'city_name').exec((err, response) => {
            if (err) return next(err);
            res.status(200).send(response);
        })
    }

    get(req, res, next) {
        let { id } = req.params;
        Zone.findById(id, (err, response) => {
            if (err) return next(err);
            res.status(200).send(response);
        });
    }

    post(req, res, next) {
        let body = req.body;
        let zone = new Zone(body);
        zone.save((err, response) => {
            if (err) return next(err);
            res.status(200).send(response);
        });
    }

    put(req, res, next) {
        let { id } = req.params;
        let body = req.body;
        Zone.updateOne({ _id: id }, {
            $set: body
        }, (err, response) => {
            if (err) return next(err);
            res.status(200).send(response);
        });
    }

    delete(req, res, next) {
        let { id } = req.params;
        Zone.deleteOne({ _id: id }, (err, response) => {
            if (err) return next(err);
            res.status(200).send(response);
        })
    }

}

const zonesController = new ZonesController();
module.exports = zonesController;