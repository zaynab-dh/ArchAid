const Project = require('../models/Project');

class ProjectsController {

    getAll(req, res, next) {
        Project.find({}).populate('userId', 'user_name').
        populate('propertyId', 'property_name').
        exec((err, response) => {
            if (err) return next(err);
            res.status(200).send({
                success: true,
                response
            });
        })
    }

    get(req, res, next) {
        let { id } = req.params;
        Project.findById(id, (err, response) => {
            if (err) return next(err);
            res.status(200).send({
                success: true,
                response
            });
        });
    }

    post(req, res, next) {
        let body = req.body;
        let post = new Project(body);
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
        Project.updateOne({ _id: id }, {
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
        Project.deleteOne({ _id: id }, (err, response) => {
            if (err) return next(err);
            res.status(200).send({
                success: true,
                response
            });
        })
    }

}

const projectsController = new ProjectsController();
module.exports = projectsController;