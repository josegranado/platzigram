const yo = require('yo-yo');
const translate = require('../translate')

const $el = yo`
<nav class="header">
<div class="nav-wraper">
    <div class="container">
        <div class="row">
            <div class="col s12 m6 offset-m1">
                <a href="/" class="brand-logo platzigram">Platzigram</a>
            </div>         
        <div class="col s2 push-s11 m2 push-m4 l2 push-l3" style="right:0;">
            
            <a href="" style="float:right" class="btn btn-large btn-flat dropdown-button" data-activates="drop-user">
                <i class="fa fa-user" aria-hidden="true"></i>
            </a>
            
        </div>
        </div>
    </div>
    <ul id="drop-user" class="dropdown-content">
        <li><a href="#">${translate.message('logout')}</a></li>
    </ul>
</div>
</nav>
`;
module.exports = function header (ctx, next)
{
    $('#header-container').empty().append($el);
    next();
}
