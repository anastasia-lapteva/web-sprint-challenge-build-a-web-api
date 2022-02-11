const Action = require("./actions-model");

async function checkActionId(req, res, next)
{
    try
    {
        const possibleAction = await Action.get(req.params.id);
        if (possibleAction)
        {
            req.action = possibleAction;
            next();
        } else
        {
            next({ status: 404, message: `No Action ${req.params.id}` });
        }
    }
    catch (err)
    {
        next(err);
    }
}

function validateAction(req, res, next)
{
    if (!req.body.project_id || !req.body.description || !req.body.notes)
    {
        next({ status: 400, message: "Please provide project_id, description, and notes" });
    } else
    {
        next();
    }
}

module.exports =
{
    checkActionId,
    validateAction
};