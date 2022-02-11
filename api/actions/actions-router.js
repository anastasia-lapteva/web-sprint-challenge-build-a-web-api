const express = require("express");
const Actions = require("./actions-model");
const {
    checkActionId
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
    // an earlier middleware had the action
    // and put it in the req object
    res.json(req.action);
});

module.exports = router;