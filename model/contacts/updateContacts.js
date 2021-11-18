const fs = require('fs/promises')

const contactsPath = require('./contactsPath')

const updateContacts = async contacts => {
  const contactsString = JSON.stringify(contacts)
  await fs.writeFile(contactsPath, contactsString)
}

module.exports = updateContacts
