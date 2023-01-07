const express = require('express')
const { validateBody, authenticate } = require('../../middlewares')
const {
  addOne,
  deleteBuId,
  getAll,
  getById,
  updateById,
  updateStatus
} = require("../../controllers/contacts");
const {validatingSchema, updateFavoriteSchema} = require('../../Schemas/validatingShema')
const router = express.Router()

router.get('/', authenticate, getAll)

router.get('/:id', authenticate, getById)

router.post('/', authenticate, validateBody(validatingSchema), addOne)

router.delete('/:id', authenticate, deleteBuId)

router.put('/:id', authenticate,validateBody(validatingSchema), updateById)

router.patch('/:id/favorite', authenticate, validateBody(updateFavoriteSchema), updateStatus)


module.exports = router
