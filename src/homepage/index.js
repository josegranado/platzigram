const page = require('page');
const empty = require('empty-element');
const yo = require('yo-yo');
const $template = require('./template.js');
const request = require('superagent');
const header = require('../header');
const axios = require('axios');
page('/', header, loadPicturesFetch,(ctx, next) => 
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
    const $main = $('#main-container');
    const $pictures = [
        user, user, user, user, user
    ];
    $('title').html('Platzigram');
    $main.empty().append($template($pictures));
});

function loadPictures (ctx,next)
{
    request
        .get('/api/pictures')
        .end( (err, res) => 
        {
            if (err) return console.log(err)
            
            ctx.pictures = res.body;
            next();
        })
}

function loadPicturesAxios (ctx,next)
{
    axios
        .get('/api/pictures')
        .then(res => {
            ctx.pictures = res.data;
            next();
        })
        .catch( err => 
        {

        })
    
}

function loadPicturesFetch(ctx, next)
{
    fetch('/api/pictures')
        .then(res => res.json() )
        .then(pictures => 
        {
            ctx.pictures = pictures;
            next();
        })
        .catch( err => console.log(err));
        
}