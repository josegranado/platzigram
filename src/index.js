const page = require('page');

var $main = document.getElementById('main-container');

page('/', (ctx, next) => 
{
    $main.innerHTML = 'Home';
})

page('/signup', (ctx, next) => 
{
    $main.innerHTML = 'Signup';
})

page();