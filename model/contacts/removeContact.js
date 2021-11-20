const listContacts = require('./listContacts')
const getContactById = require('./getContactById')
const update = require('./updateContacts')

async function removeContact(contactId) {
  try {
    const contacts = await listContacts()
    const contact = await getContactById(contactId)
    // eslint-disable-next-line eqeqeq
    const newContactList = contacts.filter(item => item.id != contactId)
    await update(newContactList)
    console.log(contact)
    return contact
  } catch (error) {
    console.error(error)
  }
}

module.exports = removeContact
