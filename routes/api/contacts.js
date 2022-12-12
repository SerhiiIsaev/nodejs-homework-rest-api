const express = require('express')
const Contact = require('../../models/contacts')
const {HttpError} = require('../../helpers')

const { validateBody } = require('../../middlewares')
const {validatingSchema} = require('../../Schemas/validatingShema')
const router = express.Router()



router.get('/', async (req, res, next) => {
  try {
    const result = await Contact.find()
    res.json(result)
  } catch (error) {
    next(error)
  }
  
})

// router.get('/:id', async (req, res, next) => {
//   try {
//     const { id } = req.params
//     const result = await contacts.getContactById(id)
//     if (!result) {
//       throw HttpError(404, 'Not Found')
//     }
//     res.json(result)
//   } catch (error) {
//     next(error)
//   }
  
// })

// router.post('/',validateBody(validatingSchema), async (req, res, next) => {
//   try {
//     const result = await contacts.addContact(req.body)
//     res.status(201).json(result)
//   } catch (error) {
//     next(error)
//   }
// })

// router.delete('/:contactId', async (req, res, next) => {
//   try {
//     const { contactId } = req.params
//     const result = await contacts.removeContact(contactId)
//     if (!result) {
//       throw HttpError(404, "Not found")
//     }
//     res.json({
//       message: "Contact deleted"
//     })
//   } catch (error) {
//     next(error)
//   }
// })

// router.put('/:contactId',validateBody(validatingSchema), async (req, res, next) => {
//   try {
//     const { contactId } = req.params
//     const result = await contacts.updateContact(contactId, req.body)
//     if (!result) {
//       throw HttpError(404, "Not found")
//     }
//     res.json(result)
//   } catch (error) {
//     next(error)
//   }
// })

module.exports = router
