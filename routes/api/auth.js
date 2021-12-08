const express = require('express')
const { auth, validation, ctrlWrapper } = require('../../middlewares')
const { auth: ctrl } = require('../../controllers')
const { joiUsersSchema } = require('../../models')

const router = express.Router()

router.post('/signup', validation(joiUsersSchema), ctrlWrapper(ctrl.signup))
router.post('/login', validation(joiUsersSchema), ctrlWrapper(ctrl.login))
router.post('/logout', auth, ctrlWrapper(ctrl.logout))

module.exports = router
