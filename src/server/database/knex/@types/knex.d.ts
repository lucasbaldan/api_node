import { ICidade, IEstado } from "../../../entities";

declare module 'knex/types/tables' {
    interface Tables {
        cidades: ICidade, 
        estados: IEstado 
    }
}