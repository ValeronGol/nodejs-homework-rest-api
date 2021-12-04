const express = require('express')
const { auth, validation, ctrlWrapper } = require('../../middlewares')
const { users: ctrl } = require('../../controllers')
const { subscriptionJoiSchema } = require('../../models')

const router = express.Router()

router.get('/current', auth, ctrlWrapper(ctrl.getCurrent))
router.patch(
  '/',
  auth,
  validation(subscriptionJoiSchema),
  ctrlWrapper(ctrl.updateSubscriptionUser),
)

module.exports = router
