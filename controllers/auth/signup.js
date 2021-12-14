const { Conflict } = require('http-errors')
const { nanoid } = require('nanoid')
const gravatar = require('gravatar')

const { User } = require('../../models')
const { sendMail } = require('../../helpers')

const signup = async (req, res) => {
  const { email, password, subscription } = req.body
  const user = await User.findOne({ email })
  if (user) {
    throw new Conflict(`User with email=${email} in use`)
  }

  const verificationToken = nanoid()
  const avatarURL = gravatar.url(email)
  const newUser = new User({ email, avatarURL, verificationToken })

  newUser.setPassword(password)

  await newUser.save()

  const mail = {
    to: email,
    subject: 'Подтверждение регистрации',
    html: `<a href="http://localhost:3000/api/auth/verify/${verificationToken}">Click it to confirm a registration</a>`,
  }

  await sendMail(mail)

  res.status(201).json({
    status: 'success',
    code: 201,
    data: {
      user: {
        email,
        password,
        subscription,
        avatarURL,
      },
    },
  })
}

module.exports = signup
