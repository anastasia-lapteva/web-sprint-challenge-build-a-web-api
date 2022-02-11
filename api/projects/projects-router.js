const express = require('express');
const Projects = require('./projects-model.js');
const {
    checkProjectId,
    validateProject
} = require('./projects-middleware.js');

const router = express.Router();

router.get('/', (req, res, next) =>
{
    Projects.getAll()
        .then(projects =>
        {
            res.status(200).json(projects);
        })
        .catch(next);
});

router.get('/:id', checkProjectId, (req, res) =>
{
    res.json(req.project);
});

router.post('/', validateProject, (req, res, next) =>
{
    Projects.insert(req.body)
        .then(project =>
        {
            res.status(201).json(project);
        })
        .catch(next);
});

router.put('/:id', validateProject, checkProjectId, (req, res, next) =>
{
    Projects.update(req.params.id, req.body)
        .then(project =>
        {
            res.status(200).json(project);
        })
        .catch(next);
});

router.delete('/:id', checkProjectId, (req, res, next) =>
{
    Projects.remove(req.params.id)
        .then(() =>
        {
            res.status(200).json({ message: 'The project has been deleted' });
        })
        .catch(next);
});

router.get('/:id/actions', checkProjectId, (req, res, next) =>
{
    Projects.getProjectActions(req.project.id)
        .then(actions => 
        {
            res.status(200).json(actions);
        })
        .catch(next);
});

module.exports = router;