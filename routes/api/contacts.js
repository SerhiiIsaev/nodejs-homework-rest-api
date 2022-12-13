const express = require('express')
const Contact = require('../../models/contacts')
const {HttpError} = require('../../helpers')

const { validateBody } = require('../../middlewares')
const {validatingSchema, updateFavoriteSchema} = require('../../Schemas/validatingShema')
const router = express.Router()



router.get('/', async (req, res, next) => {
  try {
    const result = await Contact.find()
    res.json(result)
  } catch (error) {
    next(error)
  }
  
})

router.get('/:id', async (req, res, next) => {
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
  
})

router.post('/',validateBody(validatingSchema), async (req, res, next) => {
  try {
    const result = await Contact.create(req.body)
    res.status(201).json(result)
  } catch (error) {
    next(error)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    const result = await Contact.findByIdAndRemove(req.params.id)
    if (!result) {
      throw HttpError(404, "Not found")
    }
    res.json({
      message: "Contact deleted"
    })
  } catch (error) {
    next(error)
  }
})

router.put('/:id',validateBody(validatingSchema), async (req, res, next) => {
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
})

router.patch('/:id/favorite',validateBody(updateFavoriteSchema), async (req, res, next) => {
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
})

module.exports = router
