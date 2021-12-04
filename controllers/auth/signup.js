const { Conflict } = require('http-errors')

const { User } = require('../../models')

const signup = async (req, res) => {
  const { email, password, subscription } = req.body
  const user = await User.findOne({ email })
  if (user) {
    throw new Conflict(`User with email=${email} in use`)
  }

  const newUser = new User({ email })

  newUser.setPassword(password)

  await newUser.save()

  res.status(201).json({
    status: 'success',
    code: 201,
    data: {
      user: {
        email,
        password,
        subscription,
      },
    },
  })
}

module.exports = signup
