import * as jwt from 'jsonwebtoken';
import { JWTData } from '../../entities';

const gerarJWT = (dados: JWTData): string | 'SECRET_NOT_FOUND' => {

    if (process.env.JWT_SECRET_KEY === undefined) return 'SECRET_NOT_FOUND';

    return jwt.sign(dados, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });
}

const validarJWT = (token: string): JWTData | 'SECRET_NOT_FOUND' | 'INVALID_JWT_TOKEN' => {
    try {
        if (process.env.JWT_SECRET_KEY === undefined) return 'SECRET_NOT_FOUND';

        const jwtData = jwt.verify(token, process.env.JWT_SECRET_KEY);

        if (typeof jwtData === 'string') return 'INVALID_JWT_TOKEN';

        return jwtData as JWTData;

    } catch (e) {
        console.log(e);
        return 'INVALID_JWT_TOKEN';
    }
}

export const JWTService = {
    gerarJWT,
    validarJWT,

}