const Contact = require('../../models/contacts')

const addOne = async (req, res, next) => {
  try {
    const {_id: owner} = req.user;
    const result = await Contact.create({ ...req.body, owner })
    res.status(201).json(result)
  } catch (error) {
    next(error)
  }
}

module.exports = addOne