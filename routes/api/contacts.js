const express = require('express')
const router = express.Router()

const controllerslContacts = require('../../controllers/contacts')

router.get('/', controllerslContacts.listContacts)

router.get('/:contactId', controllerslContacts.getContactById)

router.post('/', controllerslContacts.addContact)

router.delete('/:contactId', controllerslContacts.removeContact)

router.put('/:contactId', controllerslContacts.updateContactById)

module.exports = router
