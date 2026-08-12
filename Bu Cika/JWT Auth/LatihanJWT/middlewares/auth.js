const jwt = require('jsonwebtoken');
require('dotenv').config();

// kita cek dulu nih sudah ada atau blm
const jwtSecret = process.env.JWT_SECRET;
if (!jwtSecret) throw new Error("JWT_SECRET belum di set di .env");

module.exports = function auth(req, res, next) {
    try {
        const authHeader = req.headers['authorization'];
        if (!authHeader) return res.status(401).json({message: 'No Token Provided'});

        const parts = authHeader.split(' ');
        if (parts.length !== 2 || parts[0] !== 'Bearer') {
            return res.status(401).json({message: 'Invalid Authorization Header Format'})
        }

        const token = parts[1];

        // verifikasi token
        jwt.verify(token, jwtSecret, (err, decoded) => {
            if (err) return res.status(401).json({ message: 'Invalid Token'}); 

            // else kalau valid token
            req.user = { id: decoded.id, email: decoded.email};
            next();
        });
    } catch (err) {
        next(err)
    }
};
