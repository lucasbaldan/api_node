import { Knex } from "knex";
import { IEstado } from "../../entities";

export const seed = async (Conn: Knex) => {
  const [{ count }] = await Conn('estados').count<[{ count: number }]>('* as count');
  if (!Number.isInteger(count) || Number(count)) {
    // console.log('-- seed estados não executado -> a tabela possui registros -- ');
    return;
  }

  const dadosEstados: Omit<Omit<IEstado, 'id'>, 'ativo'>[] = [
    {
      codigo_ibge: 12,
      nome: "Acre",
      uf: "AC",
    },
    {
      codigo_ibge: 27,
      nome: "Alagoas",
      uf: "AL",
    },
    {
      codigo_ibge: 16,
      nome: "Amapá",
      uf: "AP",
    },
    {
      codigo_ibge: 13,
      nome: "Amazonas",
      uf: "AM",
    },
    {
      codigo_ibge: 29,
      nome: "Bahia",
      uf: "BA",
    },
    {
      codigo_ibge: 23,
      nome: "Ceará",
      uf: "CE",
    },
    {
      codigo_ibge: 53,
      nome: "Distrito Federal",
      uf: "DF",
    },
    {
      codigo_ibge: 32,
      nome: "Espírito Santo",
      uf: "ES",
    },
    {
      codigo_ibge: 52,
      nome: "Goiás",
      uf: "GO",
    },
    {
      codigo_ibge: 21,
      nome: "Maranhão",
      uf: "MA",
    },
    {

      codigo_ibge: 51,
      nome: "Mato Grosso",
      uf: "MT",
    },
    {

      codigo_ibge: 50,
      nome: "Mato Grosso do Sul",
      uf: "MS",
    },
    {

      codigo_ibge: 31,
      nome: "Minas Gerais",
      uf: "MG",
    },
    {
      codigo_ibge: 15,
      nome: "Pará",
      uf: "PA",
    },
    {
      codigo_ibge: 25,
      nome: "Paraíba",
      uf: "PB",
    },
    {
      codigo_ibge: 41,
      nome: "Paraná",
      uf: "PR",
    },
    {
      codigo_ibge: 26,
      nome: "Pernambuco",
      uf: "PE",
    },
    {
      codigo_ibge: 22,
      nome: "Piauí",
      uf: "PI",
    },
    {
      codigo_ibge: 33,
      nome: "Rio de Janeiro",
      uf: "RJ",
    },
    {
      codigo_ibge: 24,
      nome: "Rio Grande do Norte",
      uf: "RN",
    },
    {
      codigo_ibge: 43,
      nome: "Rio Grande do Sul",
      uf: "RS",
    },
    {
      codigo_ibge: 11,
      nome: "Rondônia",
      uf: "RO",
    },
    {
      codigo_ibge: 14,
      nome: "Roraima",
      uf: "RR",
    },
    {
      codigo_ibge: 42,
      nome: "Santa Catarina",
      uf: "SC",
    },
    {
      codigo_ibge: 35,
      nome: "São Paulo",
      uf: "SP",
    },
    {
      codigo_ibge: 28,
      nome: "Sergipe",
      uf: "SE",
    },
    {
      codigo_ibge: 17,
      nome: "Tocantins",
      uf: "TO",
    }
  ]

  console.log(" -- executando carga de estados --");
  await Conn('estados').insert(dadosEstados);
}