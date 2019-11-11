const requireHTTPS = (req, res, next) => {
  if (!req.secure && req.get('x-forwarded-proto') !== 'https' && process.env.NODE_ENV !== 'development') {
    return res.redirect(301, `https://${req.get('host')}${req.url}`)
  }
  next()
  return null
}

export default requireHTTPS
