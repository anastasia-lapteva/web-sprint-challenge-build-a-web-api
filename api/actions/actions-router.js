const express = require("express");
const Actions = require("./actions-model");

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

module.exports = router;