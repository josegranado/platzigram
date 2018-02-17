const express = require('express');

const app = express();

app.set('view engine','pug');

app.get('/', (req, res) => 
{
    res.render('index');
});

app.listen(8080, err =>
{
    if (err) return console.log('Hubo un error'),process.exit(1);
    console.log('Platzigram escuchando en el puerto 8080');
});
// BOWER LIBRERIA PARA FRONTEND

//Automatizadores