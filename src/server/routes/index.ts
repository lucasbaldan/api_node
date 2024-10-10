import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

const router = Router();


router.get('/', (_, res) => {
    res.status(StatusCodes.UNAUTHORIZED).json('Hello World');
});

export { router };