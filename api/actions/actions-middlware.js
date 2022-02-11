const Action = require("./actions-model");

async function checkActionId(req, res, next)
{
    try
    {
        const possibleAction = await Action.get(req.params.id);
        if (possibleAction)
        {
            // we already have the action
            req.action = possibleAction;
            next();
        } else
        {
            // send an error to the err handling middleware in server.js
            next({ status: 404, message: `No Action ${req.params.id}` });
        }
    }
    catch (err)
    {
        next(err);
    }
}

module.exports =
{
    checkActionId
};