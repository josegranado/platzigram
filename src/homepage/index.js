const page  = require('page');

page('/', (ctx,next) => 
{
    const $main = document.getElementById('main-container');
    $main.innerHTML = 'Home <a href="/signup">Signup</a>';
})