const { User } = require('../../models')

const logout = async (req, res) => {
  const { _id } = req.user
  const result = await User.findByIdAndUpdate(_id, { token: null })
  res.json({
    status: '204 No Content',
    code: 200,
    data: {
      result,
    },
  })
}

module.exports = logout
