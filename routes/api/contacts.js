const express = require('express')
const router = express.Router()
const { contacts: ctrl } = require('../../controllers')
const { validation, ctrlWrapper } = require('../../middlewares')
const { joiSchema, statusJoiSchema } = require('../../models')

router.get('/', ctrlWrapper(ctrl.listContacts))

router.get('/:contactId', ctrlWrapper(ctrl.getContactById))

router.post('/', validation(joiSchema), ctrlWrapper(ctrl.addContact))

router.patch(
  '/:contactId/favorite',
  validation(statusJoiSchema),
  ctrlWrapper(ctrl.updateStatusContact),
)

router.delete('/:contactId', ctrlWrapper(ctrl.removeContact))

router.put(
  '/:contactId',
  validation(joiSchema),
  ctrlWrapper(ctrl.updateContactById),
)

module.exports = router
