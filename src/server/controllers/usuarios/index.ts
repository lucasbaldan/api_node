import * as create from './InsertUpdate';
import * as getAll from './GetAll';
import * as getById from './GetById';
import * as deleteById from './DeleteById';

export const UsuariosController = {
    ...create,
    ...getAll,
    ...getById,
    ...deleteById,
}