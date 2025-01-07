export interface IPessoa {
    id: number,
    nome: string,
    pessoa_juridica: boolean,
    razao_social?: string,
    nome_fantasia?: string,
    cpf_cnpj?: string,
    logradouro?: string,
    numero_endereco?: string,
    numero_telefone?: string,
    data_nascimento?: Date,
    id_pessoa_gestor?: number,
    id_cidade?: number,
    ativo: boolean,
}

export interface GetAllPessoaProps {
    page?: number,
    limit?: number,
    pessoa: IPessoa
}