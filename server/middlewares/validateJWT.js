const jwt = require("jsonwebtoken");

module.exports = async function validateJwt(req, res, next) {
    if (req.headers.authorization) {
        try {
            let token = req.headers.authorization;
            let decoded = jwt.verify(token, process.env.JWT_SECRET);
            res.user = decoded;
            next();
        } catch (error) {
            return res.status(403).json({
                status: "AUTH FAILED",
                message: "Invalid Token! Failed to authenticate the user",
            });
        }
    }
    else {
        return res.status(400).json({
            status: "AUTH FAILED",
            message: "Missing authorization headers",
        });
    }
};