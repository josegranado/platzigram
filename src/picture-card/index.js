const yo = require('yo-yo');
const translate = require('../translate');



module.exports = pic => 
{
  let $el;
  function render(picture){
      return   yo `
      <div class="card ${picture.liked ? 'liked' : 'disliked'}">
      <div class="card-image waves-effect waves-block waves-light">
        <img class="activator" src="public/img/${picture.url}">
      </div>
      <div class="card-content">
        <a href="/user/${picture.user.username}" class="card-title activator ">
          <img src="public/img/${picture.user.avatar}" class="avatar" />
          <span class="username">${picture.user.username}</span>
        </a>
        <small class="right time">${translate.date.format(picture.createdAt)}</small>
        <p>
          <a class="left" href="#" disabled="true" onclick=${like.bind(null, true)}><i class="far fa-heart"></i></a>
          <a class="left" href="#" disabled="true" onclick=${like.bind(null, false)}><i class="fas fa-heart"></i></a>
          <span class="left likes"> ${translate.message('likes' ,{ likes: picture.likes })}</span>
        </p>
      </div>
      </div>
      `;
  }
  const like = liked => 
  {
    pic.liked = liked;
    pic.likes+= liked ? 1 : -1;
    const $newEl = render(pic);
    yo.update($el, $newEl);
    return false;
  }
  $el = render(pic);
  return $el;
};