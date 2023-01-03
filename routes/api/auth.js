const express = require('express')
const router = express.Router()

const { registerSchema, loginSchema } = require('../../Schemas/authShemas')
const {validateBody, authenticate} = require("../../middlewares")

const ctrl = require("../../controllers/auth")




// signup
router.post("/register", validateBody(registerSchema), ctrl.register)

// signin
router.post("/login", validateBody(loginSchema), ctrl.login)

// router.get("/current", authenticate, ctrlWrapper(ctrl.getCurrent))

// router.post("/logout", authenticate, ctrlWrapper(ctrl.logout))

module.exports = router;