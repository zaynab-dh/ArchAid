const City = require('../models/City');

class CitiesController {

    getAll(req, res, next) {
        City.find({}).populate('countryId', 'country_name').exec((err, response) => {
            if (err) return next(err);
            res.status(200).send(response);
        })
    }

    get(req, res, next) {
        let { id } = req.params;
        City.findById(id, (err, response) => {
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
        City.updateOne({ _id: id }, {
            $set: body
        }, (err, response) => {
            if (err) return next(err);
            res.status(200).send(response);
        });
    }

    delete(req, res, next) {
        let { id } = req.params;
        City.deleteOne({ _id: id }, (err, response) => {
            if (err) return next(err);
            res.status(200).send(response);
        })
    }

}

const citiesController = new CitiesController();
module.exports = citiesController;