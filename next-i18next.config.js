const path = require('path');

module.exports = {
  i18n: {
    locales: ['en', 'pl'],
    defaultLocale: 'pl',
    localeDetection: false,
    localePath: path.resolve('./public/locales'),
  },
};
