import { Conn } from "../../knex";

export const DeleteById = async (id: number): Promise<void | Error> => {
    try {
        const result = await Conn('usuarios')
        .where('id', '=', id)
        .delete();

        if (result > 0) {
            return;
        } else {
            return new Error('Erro ao processar delete na base de dados, ou o registro não existe mais');
        }
    } catch (error) {
        console.log(error);
        return Error(error instanceof Error ? error.message : "Erro ao processar update na base de dados");
    }
}