const contactsOperations = require('../../model/contactsOperations')
const { contactsValidation } = require('../../validation')

const updateContactById = async (req, res, next) => {
  try {
    const { error } = await contactsValidation.validate(req.body)
    if (error) {
      return res.status(400).json({ message: 'missing required name field' })
    }
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
