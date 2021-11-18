const updateContacts = require('./updateContacts')
const listContacts = require('./listContacts')

const updateContactById = async (contactId, update) => {
  try {
    const contacts = await listContacts()
    // eslint-disable-next-line eqeqeq
    const idx = contacts.findIndex(item => item.id == contactId)
    if (idx === -1) {
      return null
    }
    contacts[idx] = { ...contacts[idx], ...update }
    await updateContacts(contacts)
    return contacts[idx]
  } catch (error) {
    console.error(error)
    throw error
  }
}

module.exports = updateContactById
