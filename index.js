const { request, response } = require('express');
const express = require('express');

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();

app.get('/', (request, response) => {
    response.send('Teste Dockerfile com nodejs')
});

app.listen(PORT, HOST);