// Levantando un server
// 1. npm init para inicializar un proyecto
// 2. npm install express
const express = require('express');
const path = require('path')
const app = express(); 

app.use(express.static('public'));

app.listen(3030, () =>
    console.log('Servidor corriendo.')
);
// Si vamos a localhost:3030 vamos a recibir el siguiente error:
// Cannot GET / Significa que el server funciona.

app.get('/', (req, res) => {
    let htmlPath = path.resolve(__dirname, './views/home.html');
    res.sendFile(htmlPath);
})

app.get('*', (req, res) => {
    let htmlPath = path.resolve(__dirname, './views/404.html');
    res.sendFile(htmlPath);
})