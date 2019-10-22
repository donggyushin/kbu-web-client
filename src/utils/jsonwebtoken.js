import jwt from 'jsonwebtoken';

export const generateJsonWebToken = (id, password) => {
    const token = jwt.sign({ password, id }, '1234567890123456')
    return token;
}

export const decodeJsonWebToken = token => {
    const decoded = jwt.verify(token, '1234567890123456');
    return decoded;
}