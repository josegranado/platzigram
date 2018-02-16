const express = require('express');

const app = express();

app.get('/', (req, res) => 
{
    res.send('Hola mundo');
});

app.listen(8080, err =>
{
    if (err) return console.log('Hubo un error'),process.exit(1);
    console.log('Platzigram escuchando en el puerto 8080');
});
// BOWER LIBRERIA PARA FRONTEND

//Automatizadores