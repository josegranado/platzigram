const page = require('page');
const empty = require('empty-element');
const yo = require('yo-yo');
const $template = require('./template.js');

page('/', (ctx, next) => 
{
    const user = {
        user: {
            username: 'JoseGranado',
            avatar: 'user.png'
        },
        url: 'office.jpg',
        likes: 1024,
        liked: false
    };
    const $main = $('#main-container');
    const $pictures = [
        user, user, user, user, user
    ];
    $('title').html('Platzigram');
    $main.empty().append($template($pictures));
})