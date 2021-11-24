const { NotFound } = require('http-errors')

const { Contact } = require('../../models/contacts')

const removeContact = async (req, res, next) => {
  try {
    const { contactId } = req.params
    const result = await Contact.findByIdAndRemove(contactId)
    if (!result) {
      throw new NotFound(`Product with id=${contactId} not found`)
    }
    res.status(200).json({ message: 'contact deleted' })
  } catch (error) {
    next(error)
  }
}

module.exports = removeContact
