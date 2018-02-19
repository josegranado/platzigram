const page = require('page');
const empty = require('empty-element');
const yo = require('yo-yo');
const template = require('./template.js');

page('/signup', (ctx, next) => 
{
    const $main = $('#main-container');
    $('title').html('Platzigram - Signup');
    $main.addClass('signup').empty().append(template);
})