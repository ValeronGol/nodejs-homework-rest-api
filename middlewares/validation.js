const validation = schema => {
  const validationMiddleware = (req, res, next) => {
    const { error } = schema.validate(req.body)
    if (error) {
      res.status(400).json({ message: 'missing required name field' })
      next(error)
    }
    next()
  }

  return validationMiddleware
}

module.exports = validation
