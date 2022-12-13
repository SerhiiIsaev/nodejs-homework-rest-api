const express = require('express')
const { validateBody } = require('../../middlewares')
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

router.get('/', getAll)

router.get('/:id', getById)

router.post('/',validateBody(validatingSchema), addOne)

router.delete('/:id', deleteBuId)

router.put('/:id',validateBody(validatingSchema), updateById)

router.patch('/:id/favorite',validateBody(updateFavoriteSchema), updateStatus)


module.exports = router
