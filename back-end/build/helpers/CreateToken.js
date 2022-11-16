"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("jsonwebtoken");
const JWT_SECRET = 'jwt_secret';
const generateToken = (username) => {
    const token = jwt.sign({ username }, JWT_SECRET, {
        algorithm: 'HS256',
        expiresIn: '24h',
    });
    return token;
};
exports.default = {
    generateToken,
};
//# sourceMappingURL=CreateToken.js.map