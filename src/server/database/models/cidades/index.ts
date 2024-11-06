import * as insert from './Insert';
import * as getAll from './GetAll';
//import * as getById from './GetById';
import * as update from './Update';
import * as deleteById from './Delete';


export const CidadesModels = {
    ...insert,
    ...getAll,
    ...deleteById,
    ...update
}