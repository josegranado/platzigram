const page = require('page');
const empty = require('empty-element');
const yo = require('yo-yo');
const template = require('./template.js');

page('/signin', (ctx, next) => 
{
    const $main = $('#main-container');
    $('title').html('Platzigram - Signin');
    $main.addClass('signin').empty().append(template);
})