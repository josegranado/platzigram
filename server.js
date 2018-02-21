const express = require('express');

const app = express();

app.set('view engine','pug');

app.use('/public',express.static('public'));



app.get(['/', '/signup', '/signin'], (req, res) => 
{
    res.render('index');
});

app.get('/api/pictures', (req,res) => 
{
    const user = {
        user: {
            username: 'JoseGranado',
            avatar: 'user.png'
        },
        url: 'office.jpg',
        likes: 24,
        liked: false,
        createdAt: new Date().setDate(new Date().getDate())
    };
    const pictures = [
        user, user, user, user, user
    ]
    setTimeout(() => res.send(pictures),2000);
});

app.listen(8080, err =>
{
    if (err) return console.log('Hubo un error'),process.exit(1);
    console.log('Platzigram escuchando en el puerto 8080');
});
// BOWER LIBRERIA PARA FRONTEND

//Automatizadores