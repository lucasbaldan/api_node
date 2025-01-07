import { Knex } from "knex";
import { IPessoa } from "../../entities";
import { UsuariosModels } from "../models";

export const seed = async (Conn: Knex) => {
    const [{ count }] = await Conn('pessoas').count<[{count: number}]>('* as count');
    if(!Number.isInteger(count) || Number(count)) {
      // console.log('-- seed não executado -> a tabela possui registros -- ');
      return;
    }

    const pessoas: Omit<IPessoa, 'id'>[] = [
      {ativo: true, nome: "Administrador", pessoa_juridica: false, nome_fantasia: undefined, razao_social: undefined, cpf_cnpj: undefined, logradouro: undefined, numero_endereco: undefined, numero_telefone: undefined, data_nascimento: undefined, id_pessoa_gestor: undefined, id_cidade: undefined}, 
      {ativo: true, nome: "Administrador", pessoa_juridica: false, nome_fantasia: undefined, razao_social: undefined, cpf_cnpj: undefined, logradouro: undefined, numero_endereco: undefined, numero_telefone: undefined, data_nascimento: undefined, id_pessoa_gestor: undefined, id_cidade: undefined}
    ]; 
      
    console.log(" -- executando carga de pessoas -- ");
    await Conn('pessoas').insert(pessoas).catch(e => console.error('FALHA AO EXECUTAR SEED DE PESSOAS => ' + e));
    
}