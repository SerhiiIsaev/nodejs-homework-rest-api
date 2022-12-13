const Contact = require('../../models/contacts')
const {HttpError} = require('../../helpers')

const updateById = async (req, res, next) => {
  try {
    const result = await Contact.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )
    if (!result) {
      throw HttpError(404, "Not found")
    }
    res.json(result)
  } catch (error) {
    next(error)
  }
}

module.exports = updateById