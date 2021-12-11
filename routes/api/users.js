const express = require('express')
const {
  auth,
  validation,
  ctrlWrapper,
  upload,
  sizeChanger,
} = require('../../middlewares')
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
router.patch(
  '/avatars',
  auth,
  upload.single('avatar'),
  sizeChanger,
  ctrlWrapper(ctrl.updateAvatar),
)

module.exports = router
