const express = require('express');
const routes = express.Router();

    routes.post('/users', (request, response) => {
        const body = request.body;
        console.log(body);
        return response.json({ evento: 'Semana OmiStack 11.0', aluno: 'Diego Fernandes' });
    });

        module.exports = routes;