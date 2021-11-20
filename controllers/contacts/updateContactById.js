const contactsOperations = require('../../model/contacts')

const updateContactById = async (req, res, next) => {
  try {
    const { contactId } = req.params
    const contact = await contactsOperations.updateContactById(
      contactId,
      req.body,
    )
    if (!contact) {
      return res.status(404).json({ message: 'Not found' })
    }
    res.status(200).json({ contact })
  } catch (error) {
    next(error)
  }
}

module.exports = updateContactById
