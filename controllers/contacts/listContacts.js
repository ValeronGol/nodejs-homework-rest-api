const { Contact } = require('../../models')

const listContacts = async (req, res) => {
  const { _id } = req.user
  const { page = 1, limit = 5, favorite = true } = req.query
  const skip = (page - 1) * limit

  const contacts = await Contact.find(
    { owner: _id, favorite },
    '_id name phone owner',
    { skip, limit: +limit },
  ).populate('owner', 'email')
  res.json({
    status: 'success',
    code: 200,
    data: {
      result: contacts,
    },
  })
}

module.exports = listContacts
