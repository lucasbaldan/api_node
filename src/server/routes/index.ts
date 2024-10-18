import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import { CidadesController } from '../controllers';

const router = Router();


router.get('/', (_, res) => {
    res.status(StatusCodes.UNAUTHORIZED).json('Hello World');
});

router.get('/cidades', CidadesController.create);

export { router };