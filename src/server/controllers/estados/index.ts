import * as create from './InsertUpdate';
import * as getAll from './GetAll';
import * as getById from './GetById';
import * as deleteById from './DeleteById';

export const EstadosController = {
    ...create,
    ...getAll,
    ...getById,
    ...deleteById,
}