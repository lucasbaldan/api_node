import * as yup from 'yup';
import { Conn } from '../../database/knex';
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { EstadosModels, UsuariosModels } from "../../database/models";
import { YupMiddleware } from "../../shared/middlewares";
import { defaultResponse, IEstado } from '../../entities';
import { AuditoriaModels } from '../../database/models/auditoria';

export const insertValidator = YupMiddleware({
    body: yup.object().shape({
        id: yup.number().optional().moreThan(0),
        nome: yup.string().required("Atributo --nome-- não informado").min(4, "Atributo --nome-- deve possuir pelo menos 4 caracteres"),
        codigo_ibge: yup.number().required("Atributo --codigo_ibge-- não informado"),
        ativo: yup.boolean().required("Atributo --ativo-- não informado")
    })
});

export const insertOrUpdate = async (req: Request<{}, {}, IEstado>, res: Response) => {
    const response: defaultResponse = { statusCode: StatusCodes.INTERNAL_SERVER_ERROR, status: false, errors: '', data: '' };
    let result: void | number | Error;

    const usuarioRequisicao = await UsuariosModels.getUsuario(undefined, Number(req.headers.idUsuario));
    if (usuarioRequisicao instanceof Error) {
        response.errors = { default: usuarioRequisicao.message };
        return res.status(response.statusCode).json(response);
    }

    const transaction = await Conn.transaction();

    try {

        if (req.body.id === undefined) {
            result = await EstadosModels.Insert(req.body, transaction);
        } else {
            result = await EstadosModels.Update(req.body);
        }

        if (result instanceof Error) {
            throw result;
        }

        const resultAuditoria = await AuditoriaModels.Insert(
            {
                acao: 'INSERT',
                dados_acao: `Estado -> id: ${result} ` + JSON.stringify(req.body),
                dados_requisicao: JSON.stringify(req.headers),
                id_usuario: String(usuarioRequisicao.items[0].id),
                nome_pessoa_usuario: typeof usuarioRequisicao.items[0].id_pessoa === 'object' ? usuarioRequisicao.items[0].id_pessoa.nome : String(usuarioRequisicao.items[0].id_pessoa),
                nome_usuario: usuarioRequisicao.items[0].login,
                dthr_acao: new Date().toString()
            },
            transaction);

        if (resultAuditoria instanceof Error) {
            throw resultAuditoria;
        }

        if (typeof result === 'number') response.data = result;
        response.status = true;
        response.statusCode = StatusCodes.OK;

        await transaction.commit();
    }
    catch (e) {
        await transaction.rollback();
        response.errors = { default: e instanceof Error ? e.message : "Erro ao processar insert na base de dados" };
    }
    res.status(response.statusCode).json(response);
} 