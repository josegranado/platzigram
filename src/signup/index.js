const page = require('page');
const empty = require('empty-element');
const yo = require('yo-yo');
const template = require('./template.js');

page('/signup', (ctx, next) => 
{
    let $main = document.getElementById('main-container');
    empty($main).appendChild(template);
})