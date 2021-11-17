const listContacts = require('./listContacts')

async function getContactById(contactId) {
  try {
    const contacts = await listContacts()
    const contact = contacts.find(item => item.id === Number(contactId))
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
