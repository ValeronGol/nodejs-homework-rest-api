const listContacts = require('./listContacts')

async function getContactById(contactId) {
  try {
    const contacts = await listContacts()
    // eslint-disable-next-line eqeqeq
    const contact = contacts.find(item => item.id == contactId)
    if (!contact) {
      return null
    }
    return contact
  } catch (error) {
    console.error(error)
    throw error
  }
}

module.exports = getContactById
