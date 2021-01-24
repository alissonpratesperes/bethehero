const express = require('express');
const app = express();

    app.use(express.json());
    app.post('/users', (request, response) => {
        const body = request.body;
        console.log(body);
        return response.json({ evento: 'Semana OmiStack 11.0', aluno: 'Diego Fernandes' });
    });
    app.listen(3333);