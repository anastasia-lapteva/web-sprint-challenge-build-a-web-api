const Project = require('./projects-model.js');

async function checkProjectId(req, res, next)
{
    try
    {
        const possibleProject = await Project.get(req.params.id);
        if (possibleProject)
        {
            req.project = possibleProject;
            next();
        } else
        {
            next({ status: 404, message: `No Project ${req.params.id}` });
        }
    } catch (err)
    {
        next(err);
    }
}

module.exports =
{
    checkProjectId
};