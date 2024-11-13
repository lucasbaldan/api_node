import { ICidade } from "../../../entities";

declare module 'knex/types/tables' {
    interface Tables {
        cidades: ICidade   
    }
}