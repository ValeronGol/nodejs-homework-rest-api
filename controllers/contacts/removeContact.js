const contactsOperations = require('../../model/contactsOperations')

const removeContact = async (req, res, next) => {
  try {
    const { contactId } = req.params
    const remove = await contactsOperations.removeContact(contactId)
    if (!remove) {
      return res.status(404).json({ message: 'Not found' })
    }
    res.status(200).json({ message: 'contact deleted' })
  } catch (error) {
    next(error)
  }
}

module.exports = removeContact
