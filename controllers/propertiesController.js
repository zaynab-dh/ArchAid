const Property = require('../models/Property');
const Zone = require('../models/Zone');

class PropertiesController {

    getAll(req, res, next) {
        Property.find({}).populate('zoneId', 'zone_name').exec((err, response) => {
            if (err) return next(err);
            res.status(200).send({
                success: true,
                response
            });
        })
    }

    get(req, res, next) {
        let { id } = req.params;
        Property.findById(id, (err, response) => {
            if (err) return next(err);
            res.status(200).send({
                success: true,
                response
            });
        });
    }

    
    getByPropertyName(req, res, next) {
        let { property_name } = req.params;
        Property.findOne({ property_name: property_name }, (err, response) => {
            if (err) return next(err);
            res.status(200).send({
                success: true,
                response
            });
        });
    } 

    post(req, res, next) {
        let body = req.body;
        let property = new Property(body);
        property.save((err, response) => {
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
        Property.updateOne({ _id: id }, {
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
        Property.deleteOne({ _id: id }, (err, response) => {
            if (err) return next(err);
            res.status(200).send({
                success: true,
                response
            });
        })
    }

}

const propertiesController = new PropertiesController();
module.exports = propertiesController;