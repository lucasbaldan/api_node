import * as jwt from 'jsonwebtoken';
import { JWTData } from '../../entities';
import { HistoricoAcessosModels } from '../../database/models/historicoAcessos';
import { Formatadores } from '../helpers/Formatters';

const gerarJWT = async (dados: JWTData): Promise<string | 'SECRET_NOT_FOUND' | 'SERVER_ERROR'> => {

    if (process.env.JWT_SECRET_KEY === undefined) return 'SECRET_NOT_FOUND';

    const jwtsExpirados = await HistoricoAcessosModels.getByUserId(String(dados.userID));
    if (jwtsExpirados instanceof Error) return 'SERVER_ERROR';

    if (jwtsExpirados.items.length > 0) {
        jwtsExpirados.items.forEach(jwtExpirado => {
            jwtExpirado.revogacao = true;
            jwtExpirado.dthr_revogacao = Formatadores.FormatarDateTimeBanco();
            HistoricoAcessosModels.Update(jwtExpirado);
        });
    }

    const newJWT = jwt.sign(dados, process.env.JWT_SECRET_KEY, { expiresIn: '3h' });

    const novoAcesso = await HistoricoAcessosModels.Insert({id_usuario: String(dados.userID), token: newJWT, dthr_autenticao: Formatadores.FormatarDateTimeBanco(), revogacao: false, quant_requisicoes: 1});
    if(novoAcesso instanceof Error) return 'SERVER_ERROR';

    return newJWT;
}

const validarJWT = async (token: string): Promise<{jwtDataAtual: JWTData, novoJWT: string} | 'SECRET_NOT_FOUND' | 'INVALID_JWT_TOKEN'> => {
    try {
        if (process.env.JWT_SECRET_KEY === undefined) return 'SECRET_NOT_FOUND';

        const jwtData = jwt.verify(token, process.env.JWT_SECRET_KEY);

        if (typeof jwtData === 'string') return 'INVALID_JWT_TOKEN';

        const jwtAtual = await HistoricoAcessosModels.getByToken(token);
        if(jwtAtual instanceof Error) return 'INVALID_JWT_TOKEN';
        if(jwtAtual.items.length === 0) return 'INVALID_JWT_TOKEN';
        if(jwtAtual.items[0].revogacao === true) return 'INVALID_JWT_TOKEN';

        const { iat, exp, ...objJWT } = jwtData as Record<string, unknown>;
        const newJWT = jwt.sign(objJWT, process.env.JWT_SECRET_KEY, { expiresIn: '3h' });

        jwtAtual.items[0].token = newJWT;
        jwtAtual.items[0].quant_requisicoes += 1;
        HistoricoAcessosModels.Update(jwtAtual.items[0]);

        return {jwtDataAtual: jwtData as JWTData, novoJWT: newJWT};

    } catch (e) {
        console.log(e);
        return 'INVALID_JWT_TOKEN';
    }
}

export const JWTService = {
    gerarJWT,
    validarJWT,

}