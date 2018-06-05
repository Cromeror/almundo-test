const FeathersErrors = require("@feathersjs/errors"),
  errorMsgs = require("./error.msgs")

/**
 * Valida los atributos requeridos.
 * 
 * @param {Hotel} hotel 
 */
function requiredValidations(hotel) {
  if (!hotel)
    throw new FeathersErrors["400"]("The hotel data is required.")

  let errors = new Object(),
    showErrors = false

  if (!hotel.name) {
    errors.name = errorMsgs.nameRequired
    showErrors = true
  }
  if (!hotel.stars) {
    errors.stars = errorMsgs.starsRequired
    showErrors = true
  }
  if (!hotel.price) {
    errors.price = errorMsgs.priceRequired
    showErrors = true
  }
  if (showErrors)
    throw new FeathersErrors["400"](errorMsgs, Object.assign(hotel, { errors }))
}

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [
      (hook) => requiredValidations(hook.data)
    ],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
