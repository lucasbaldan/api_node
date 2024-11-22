import * as insert from './Insert';
import * as get from './Get';
import * as count from './Count';
import * as update from './Update';
import * as deleteById from './Delete';


export const EstadosModels = {
    ...insert,
    ...get,
    ...deleteById,
    ...update,
    ...count
}