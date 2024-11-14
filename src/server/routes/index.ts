import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import { CidadesController } from '../controllers';

const router = Router();


router.get('/', (_, res) => {
    res.status(StatusCodes.UNAUTHORIZED).json('Hello World');
});

/**
 * ROTA DE CADASTRO DE CIDADE
 * @param ICidades
 */
router.post('/cidades', CidadesController.insertValidator, CidadesController.insertOrUpdate);

/**
 * ROTA DE CONSULTA DE CIDADE -- TODAS AS CIDADES
 * @param getAllCidadesProps
 */
router.get('/cidades', CidadesController.getAllvalidator, CidadesController.getAll);

/**
 * ROTA DE CONSULTA DE CIDADE -- POR ID
 * @param getAllCidadesProps
 */
router.get('/cidade', CidadesController.getByIdValidator, CidadesController.getById);

/**
 * ROTA DE DELETE DE CIDADE
 * @param ICidades
 */
router.delete('/cidades', CidadesController.deleteValidator, CidadesController.deleteById);


export { router }; 