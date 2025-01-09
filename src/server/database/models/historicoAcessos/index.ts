import * as insert from './Insert';
import * as getByToken from './GetByToken';
import * as getByUserId from './GetByUserId';
import * as update from './Update';


export const HistoricoAcessosModels = {
    ...insert,
    ...getByToken,
    ...getByUserId,
    ...update,
}