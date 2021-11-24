const { NotFound } = require('http-errors')

const { Contact } = require('../../models/contacts')

const updateContactById = async (req, res, next) => {
  try {
    const { contactId } = req.params
    const result = await Contact.findByIdAndUpdate(contactId, req.body, {
      new: true,
    })
    if (!result) {
      throw new NotFound(`Product with id=${contactId} not found`)
    }
    res.status(200).json({ result })
  } catch (error) {
    next(error)
  }
}

module.exports = updateContactById
