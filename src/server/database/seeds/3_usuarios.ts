import { Knex } from "knex";
import { ICidade, IUsuario } from "../../entities";
import { UsuariosModels } from "../models";

export const seed = async (Conn: Knex) => {
    const [{ count }] = await Conn('usuarios').count<[{count: number}]>('* as count');
    if(!Number.isInteger(count) || Number(count)) {
      // console.log('-- seed não executado -> a tabela possui registros -- ');
      return;
    }

    const usuarios: Omit<IUsuario, 'id'> = {login: "sysadmin", ativo: true, id_pessoa: 1, senha: String(123456)} 
      
    console.log(" -- executando carga de usuários -- ");
    await UsuariosModels.Insert(usuarios);
    
}