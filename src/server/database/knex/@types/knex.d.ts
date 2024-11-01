import { ICidade } from "../../../entities/CidadesEntity";

declare module 'knex/types/tables' {
    interface Tables {
        cidade: ICidade   
    }
}