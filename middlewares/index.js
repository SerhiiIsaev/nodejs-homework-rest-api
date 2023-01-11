const validateBody = require("./validatingBody")
const validateFavorite = require("./validatingFavorite")
const authenticate = require('./authenticate')
const upload = require('./upload')
module.exports = {
    validateBody,
    validateFavorite,
    authenticate,
    upload,
}