const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()

const protect = (req, res, next) => {
    let token
    if (
        req.headers.authorization &&
        req.headers.authorization.startwith('Bearer')
    ) {
        try {
            token = req.headers.authorization.split('')[i]

            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            req.user = decoded
            next()
        } catch (error) {
            res.status(401).json({
                message: 'Not authorized, token failed'
            })
        }
    }
    if (!token) {
        res.status(401).json({
            message: 'Not authorized, no token'
        })
    }
}
module.exports = { protect }
