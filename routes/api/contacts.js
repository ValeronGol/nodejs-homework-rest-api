const express = require('express')
const router = express.Router()
const controllerslContacts = require('../../controllers/contacts')
const { validation } = require('../../middlewares')
const { contactsValidation } = require('../../validations')

router.get('/', controllerslContacts.listContacts)

router.get('/:contactId', controllerslContacts.getContactById)

router.post(
  '/',
  validation(contactsValidation),
  controllerslContacts.addContact,
)

router.delete('/:contactId', controllerslContacts.removeContact)

router.put(
  '/:contactId',
  validation(contactsValidation),
  controllerslContacts.updateContactById,
)

module.exports = router
