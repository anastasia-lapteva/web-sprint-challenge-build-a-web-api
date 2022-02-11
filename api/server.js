const express = require('express');
const cors = require('cors');
const projectsRouter = require("./projects/projects-router.js");

const server = express();

server.use(cors());

server.use(express.json());

server.use("/api/projects", projectsRouter);

server.get('/', (req, res) =>
{
    res.send(`
      <h2>Home Page</h2>
      <p>Welcome to the Home Page API</p>
    `);
});

server.use('*', (req, res) =>
{
    // catch all 404 errors middleware
    res.status(404).json({ message: `${req.method} ${req.baseUrl} not found!` });
});

module.exports = server;