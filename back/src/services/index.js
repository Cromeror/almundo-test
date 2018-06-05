const hotels = require('./hotels/hotels.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(hotels);
};
