const express = require('express');
const app = express();

    app.get('/', (request, response) => {
        return response.json({ evento: 'Semana OmiStack 11.0', aluno: 'Alisson Prates Peres' });
    });
    app.listen(3333);