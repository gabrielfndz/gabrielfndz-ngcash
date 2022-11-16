import * as jwt from 'jsonwebtoken';

const JWT_SECRET = 'jwt_secret';

const generateToken = (username: jwt.JwtPayload): string => {
  const token = jwt.sign({ username }, JWT_SECRET, {
    algorithm: 'HS256',
    expiresIn: '24h',
  });
  return token;
}

export default {
  generateToken,
}