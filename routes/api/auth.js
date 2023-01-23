const express = require('express')
const router = express.Router()

const { registerSchema, loginSchema, emailSchema } = require('../../Schemas/authShemas')
const {validateBody, authenticate, upload} = require("../../middlewares")
const ctrl = require("../../controllers/auth")


router.post("/register", validateBody(registerSchema), ctrl.register)

router.get("/verify/:verificationToken", ctrl.verify)

router.post("/verify", validateBody(emailSchema), ctrl.resendVerifyEmail)

router.post("/login", validateBody(loginSchema), ctrl.login)

router.get("/current", authenticate, ctrl.getCurrent)

router.post("/logout", authenticate, ctrl.logout)

router.patch("/avatars", authenticate, upload.single("avatar"), ctrl.updateAvatar)

module.exports = router;
