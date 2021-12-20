const { User } = require('../../models')
const { sendMail } = require('../../helpers')

const verifyAgain = async (req, res) => {
  const { email } = req.body
  if (!email) {
    res.json({
      code: 400,
      message: 'Missing required field email',
    })
    return
  }
  const user = await User.findOne({ email })
  if (!user) {
    res.json({
      code: 400,
      message: 'User not found',
    })
    return
  }
  if (user.verify) {
    res.json({
      code: 400,
      message: 'Verification has already been passed',
    })
    return
  }
  const mail = {
    to: email,
    subject: 'Registration confirm',
    html: `<a href = "http://localhost:3000/api/users/verify/${user.verificationToken}">Click it to confirm a registration</a>`,
  }
  sendMail(mail)

  res.json({
    status: 'success',
    code: 200,
    message: 'Verification email sent',
  })
}

module.exports = verifyAgain
