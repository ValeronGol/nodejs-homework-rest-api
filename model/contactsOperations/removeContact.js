const listContacts = require('./listContacts')
const updateContacts = require('./updateContacts')

async function removeContact(contactId) {
  try {
    const contacts = await listContacts()
    // eslint-disable-next-line eqeqeq
    const idx = contacts.findIndex(({ id }) => id == contactId)
    if (idx === -1) {
      return null
    }
    const newContacts = contacts.filter(({ id }) => id !== contactId)
    await updateContacts(newContacts)
    return contacts[idx]
  } catch (error) {
    console.error(error)
  }
}

module.exports = removeContact
