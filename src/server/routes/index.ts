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
router.post('/cidades', CidadesController.validator, CidadesController.create);

export { router };