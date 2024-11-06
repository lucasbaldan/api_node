import { Conn } from "../../knex";

export const DeleteById = async (id_cidade: number): Promise<void | Error> => {
    try {
        const result = await Conn('cidades')
        .where('codigo', '=', id_cidade)
        .delete();

        if (result === 1) {
            return;
        } else {
            return new Error('Erro ao processar inserção na base de dados');
        }
    } catch (error) {
        console.log(error);
        return Error('Erro ao processar inserção na base de dados');
    }
}