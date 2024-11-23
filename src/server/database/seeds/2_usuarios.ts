import { Knex } from "knex";
import { ICidade, IUsuario } from "../../entities";

export const seed = async (Conn: Knex) => {
    const [{ count }] = await Conn('usuarios').count<[{count: number}]>('* as count');
    if(!Number.isInteger(count) || Number(count)) {
      // console.log('-- seed não executado -> a tabela possui registros -- ');
      return;
    }

    const usuarios: IUsuario = {login: "sysadmin", ativo: true, id_pessoa: 1, senha: String(123456), id: Number(undefined)} 
      
    console.log(" -- executando carga de usuários -- ");
    await Conn('usuarios').insert(usuarios);
    
}