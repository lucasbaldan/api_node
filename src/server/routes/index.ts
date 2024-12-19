import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import { CidadesController, EstadosController, UsuariosController } from '../controllers';
import { authenticator } from '../shared/middlewares';

const router = Router();


router.get('/', (_, res) => {
    res.status(StatusCodes.UNAUTHORIZED).json('Hello World');
});

/**
 * ROTA DE CADASTRO DE CIDADE
 * @param ICidades
 */
router.post('/cidades', authenticator, CidadesController.insertValidator, CidadesController.insertOrUpdate);

/**
 * ROTA DE CONSULTA DE CIDADE -- TODAS AS CIDADES
 * @param ICidadesID
 */
router.post('/cidades/get', CidadesController.getAllvalidator, CidadesController.getAll);

/**
 * ROTA DE CONSULTA DE CIDADE -- POR ID
 * @param getAllCidadesProps
 */
router.post('/cidade/id', CidadesController.getByIdValidator, CidadesController.getById);

/**
 * ROTA DE DELETE DE CIDADE
 * @param ICidadesID
 */
router.delete('/cidades', CidadesController.deleteValidator, CidadesController.deleteById);


router.post('/estados', authenticator, EstadosController.insertValidator, EstadosController.insertOrUpdate);
router.post('/estados/get', authenticator, EstadosController.getAllvalidator, EstadosController.getAll);
router.post('/estados/id', authenticator, EstadosController.getByIdValidator, EstadosController.getById);
router.delete('/estados', authenticator, EstadosController.deleteValidator, EstadosController.deleteById);

router.post('/usuarios', authenticator, UsuariosController.insertValidator, UsuariosController.insertOrUpdate);
router.post('/usuarios/get', authenticator, UsuariosController.getAllvalidator, UsuariosController.getAll);
router.post('/usuarios/id', authenticator, UsuariosController.getByIdValidator, UsuariosController.getById);
router.delete('/usuarios', authenticator, UsuariosController.deleteValidator, UsuariosController.deleteById);
router.post('/usuarios/login', UsuariosController.loginUsuarioSenhaValidator, UsuariosController.LoginUsuarioSenha);


export { router }; 