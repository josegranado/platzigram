if (!window.Intl)
{
  window.Intl = require('intl');
  require('intl/locale-data/jsonp/en-US.js');
  require('intl/locale-data/jsonp/es.js');
}
let IntlRelativeFormat = require('intl-relativeformat');
window.IntlRelativeFormat = require('intl-relativeformat');

require('intl-relativeformat/dist/locale-data/en.js');
require('intl-relativeformat/dist/locale-data/es.js');

const rf = new IntlRelativeFormat('es');
const IntlMessageFormat = require('intl-messageformat');
const es = require('./es');
const en = require('./en-US');

const MESSAGES = {};
MESSAGES['es'] = es;
MESSAGES['en-US'] = en;

const locale = localStorage.locale || 'es';
module.exports = 
{
  message: (text,opts) => 
  {
    opts = opts || {};
    let msg = new IntlMessageFormat(MESSAGES[locale][text], locale, null);
    return msg.format(opts);
  
  },
  date: new IntlRelativeFormat(locale)
}


