// Initializes the `hotels` service on path `/hotels`
const createService = require('feathers-mongodb');
const hooks = require('./hotels.hooks');

module.exports = function (app) {
  const paginate = app.get('paginate');
  const mongoClient = app.get('mongoClient');
  const options = { paginate };

  // Initialize our service with any options it requires
  app.use('/hotels', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('hotels');

  mongoClient.then(db => {
    service.Model = db.collection('hotels');
  });

  service.hooks(hooks);
};
