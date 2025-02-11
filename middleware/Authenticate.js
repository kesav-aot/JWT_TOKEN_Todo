const secret_key = 'your_secret_key';

const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) return res.status(401).json({ message: 'Access denied' });

    try {
        const verified = jwt.verify(token, secret_key);
        req.decode = verified;
        next();
    } catch (err) {
        res.status(400).json({ message: 'Invalid token' });
    }
};
module.exports = { authenticateToken }