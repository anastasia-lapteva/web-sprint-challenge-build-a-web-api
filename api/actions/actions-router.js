const express = require("express");
const Actions = require("./actions-model");
const {
    checkActionId,
    validateAction
} = require('./actions-middlware.js');

const router = express.Router();


router.get('/', (req, res, next) =>
{
    Actions.getAll()
        .then(actions =>
        {
            res.status(200).json(actions);
        })
        .catch(error =>
        {
            next(error);
        });
});

router.get('/:id', checkActionId, (req, res) =>
{
    res.json(req.action);
});

router.post('/', validateAction, (req, res, next) =>
{
    Actions.insert(req.body)
        .then(action =>
        {
            res.status(201).json(action);
        })
        .catch(error =>
        {
            next(error);
        });
});

module.exports = router;