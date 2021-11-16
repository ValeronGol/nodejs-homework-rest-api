/* eslint-disable eqeqeq */
const listContacts = require('./listContacts')

async function getContactById(contactId) {
  try {
    const contacts = await listContacts()
    const [contactById] = contacts.filter(({ id }) => id == contactId)
    if (!contactById) {
      console.log(contactById)
      return null
    }
    return contactById
  } catch (error) {
    console.error(error)
    throw error
  }
}

module.exports = getContactById
