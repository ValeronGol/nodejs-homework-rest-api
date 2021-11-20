const contactsOperations = require('../../model/contacts')

const addContact = async (req, res, next) => {
  try {
    const contacts = await contactsOperations.addContact(req.body)
    res.status(201).json({ contacts })
  } catch (error) {
    next(error)
  }
}

module.exports = addContact
