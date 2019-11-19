import jwt from 'jsonwebtoken';
import { jwtkey } from 'secret/key';

export const generateJsonWebToken = (id, password) => {
    const token = jwt.sign({ password, id }, jwtkey)
    return token;
}

export const decodeJsonWebToken = token => {
    try {

        const decoded = jwt.verify(token, jwtkey);
        return decoded;
    } catch (err) {
        window.localStorage.removeItem('kbu')
        window.localStorage.removeItem('token')
        window.localStorage.removeItem('jwt')
        window.location.href = '/'
    }
}