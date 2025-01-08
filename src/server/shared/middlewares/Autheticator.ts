import { RequestHandler } from "express";
import { defaultResponse } from "../../entities";
import { StatusCodes } from "http-status-codes";
import { JWTService } from "./JWTService";

export const authenticator: RequestHandler = (req, res, next) => {

    const { authorization } = req.headers;
    const response: defaultResponse = { data: "", errors: "", status: false, statusCode: StatusCodes.UNAUTHORIZED };

    if (!authorization) {
        response.errors = { auth: "Erro ao autenticar. Formato de Autenticação inválido" };
        response.statusCode = StatusCodes.BAD_REQUEST;

        res.status(response.statusCode).json(response);
        return;
    }

    const [type, token] = authorization.split(' ');

    if (type !== 'Bearer') {
        response.errors = { auth: "Erro ao autenticar. Formato de Autenticação inválido" };
        response.statusCode = StatusCodes.BAD_REQUEST;

        res.status(response.statusCode).json(response);
        return;
    }

    const jwtValidado = JWTService.validarJWT(token);
    if (jwtValidado === 'SECRET_NOT_FOUND') {
        response.errors = { auth: "Erro ao autenticar. Chave de Criptografia não encontrado no servidor" };
        response.statusCode = StatusCodes.INTERNAL_SERVER_ERROR;
        res.status(response.statusCode).json(response);
        return;
    } else if (jwtValidado === 'INVALID_JWT_TOKEN') {
        response.errors = { auth: "Erro ao autenticar. Autenticação inválida para o tipo de serviço requisitado" };
        response.statusCode = StatusCodes.BAD_REQUEST;
        res.status(response.statusCode).json(response);
        return;
    }

    req.headers.idUsuario = jwtValidado.userID.toString();

    next();

} 