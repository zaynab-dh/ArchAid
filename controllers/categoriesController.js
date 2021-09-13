const Category = require('../models/Category');

class CategoriesController {

    getAll(req, res, next) {
        Category.find({}, (err, response) => {
            if (err) return next(err);
            res.status(200).send(response);
        })
    }

    get(req, res, next) {
        let { id } = req.params;
        Category.findById(id, (err, response) => {
            if (err) return next(err);
            res.status(200).send(response);
        });
    }

    post(req, res, next) {
        let body = req.body;
        let category = new Category(body);
        category.save((err, response) => {
            if (err) return next(err);
            res.status(200).send(response);
        });
    }

    put(req, res, next) {
        let { id } = req.params;
        let body = req.body;
        Category.updateOne({ _id: id }, {
            $set: body
        }, (err, response) => {
            if (err) return next(err);
            res.status(200).send(response);
        });
    }

    delete(req, res, next) {
        let { id } = req.params;
        Category.deleteOne({ _id: id }, (err, response) => {
            if (err) return next(err);
            res.status(200).send(response);
        })
    }

}

const categoriesController = new CategoriesController();
module.exports = categoriesController;