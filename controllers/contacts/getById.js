const Contact = require('../../models/contacts')
const {HttpError} = require('../../helpers')

const getById = async (req, res, next) => {
  try {
    console.log(req.params.id)
    const result = await Contact.findById(req.params.id)
    if (!result) {
      throw HttpError(404, 'Not Found')
    }
    res.json(result)
  } catch (error) {
    next(error)
  }
  
}

module.exports = getById