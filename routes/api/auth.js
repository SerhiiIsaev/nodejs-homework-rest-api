const express = require('express')
const router = express.Router()

const { registerSchema, loginSchema } = require('../../Schemas/authShemas')
const {validateBody, authenticate} = require("../../middlewares")
const ctrl = require("../../controllers/auth")


router.post("/register", validateBody(registerSchema), ctrl.register)

router.post("/login", validateBody(loginSchema), ctrl.login)

router.get("/current", authenticate, ctrl.getCurrent)

router.post("/logout", authenticate, ctrl.logout)

module.exports = router;