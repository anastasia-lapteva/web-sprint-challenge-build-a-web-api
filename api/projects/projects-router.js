const express = require('express');
const Projects = require('./projects-model.js');
const {
    checkProjectId
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

module.exports = router;