const express = require('express');
const Projects = require('./projects-model.js');

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

module.exports = router;