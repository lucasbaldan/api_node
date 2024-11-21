import { Knex } from "knex";
import { IEstado } from "../../entities";

export const seed = async (Conn: Knex) => {
    const [{ count }] = await Conn('estados').count<[{count: number}]>('* as count');
    if(!Number.isInteger(count) || Number(count)) {
      console.log('-- seed estados não executado -> a tabela possui registros -- ');
      return;
    }

    const dados = [
        "Espírito Santo",
      ];

      const dadosEstados: IEstado[] = dados.map((estado) => ({
        ativo: true,
        codigo_ibge: 1,
        nome: estado
      })) as IEstado[];

    await Conn('estados').insert(dadosEstados);
}