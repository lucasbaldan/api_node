import { Knex } from "knex";
import { ICidade, IEstado } from "../../entities";

export const seed = async (Conn: Knex) => {
  const [{ count }] = await Conn('cidades').count<[{ count: number }]>('* as count');
  if (!Number.isInteger(count) || Number(count)) {
    // console.log('-- seed cidades não executado -> a tabela possui registros -- ');
    return;
  }

  const cidadesBrasilIbge: Omit<Omit<ICidade, 'id'>, 'ativo'>[] = [
          {
              codigo_ibge: 1100015,
              nome: "Alta Floresta D'Oeste",
              id_estado: 22
          },
          {
              codigo_ibge: 1100023,
              nome: "Ariquemes",
              id_estado: 22
          },
          {
              codigo_ibge: 1100031,
              nome: "Cabixi",
              id_estado: 22
          },
          {
              codigo_ibge: 1100049,
              nome: "Cacoal",
              id_estado: 22
          },
          {
              codigo_ibge: 1100056,
              nome: "Cerejeiras",
              id_estado: 22
          },
          {
              codigo_ibge: 1100064,
              nome: "Colorado do Oeste",
              id_estado: 22
          },
          {
              codigo_ibge: 1100072,
              nome: "Corumbiara",
              id_estado: 22
          },
          {
              codigo_ibge: 1100080,
              nome: "Costa Marques",
              id_estado: 22
          },
          {
              codigo_ibge: 1100098,
              nome: "Espigão D'Oeste",
              id_estado: 22
          },
          {
              codigo_ibge: 1100106,
              nome: "Guajará-Mirim",
              id_estado: 22
          },
          {
              codigo_ibge: 1100114,
              nome: "Jaru",
              id_estado: 22
          },
          {
              codigo_ibge: 1100122,
              nome: "Ji-Paraná",
              id_estado: 22
          },
          {
              codigo_ibge: 1100130,
              nome: "Machadinho D'Oeste",
              id_estado: 22
          },
          {
              codigo_ibge: 1100148,
              nome: "Nova Brasilândia D'Oeste",
              id_estado: 22
          },
          {
              codigo_ibge: 1100155,
              nome: "Ouro Preto do Oeste",
              id_estado: 22
          },
          {
              codigo_ibge: 1100189,
              nome: "Pimenta Bueno",
              id_estado: 22
          },
          {
              codigo_ibge: 1100205,
              nome: "Porto Velho",
              id_estado: 22
          },
          {
              codigo_ibge: 1100254,
              nome: "Presidente Médici",
              id_estado: 22
          },
          {
              codigo_ibge: 1100262,
              nome: "Rio Crespo",
              id_estado: 22
          },
          {
              codigo_ibge: 1100288,
              nome: "Rolim de Moura",
              id_estado: 22
          },
          {
              codigo_ibge: 1100296,
              nome: "Santa Luzia D'Oeste",
              id_estado: 22
          },
          {
              codigo_ibge: 1100304,
              nome: "Vilhena",
              id_estado: 22
          },
          {
              codigo_ibge: 1100320,
              nome: "São Miguel do Guaporé",
              id_estado: 22
          },
          {
              codigo_ibge: 1100338,
              nome: "Nova Mamoré",
              id_estado: 22
          },
          {
              codigo_ibge: 1100346,
              nome: "Alvorada D'Oeste",
              id_estado: 22
          },
          {
              codigo_ibge: 1100379,
              nome: "Alto Alegre dos Parecis",
              id_estado: 22
          },
          {
              codigo_ibge: 1100403,
              nome: "Alto Paraíso",
              id_estado: 22
          },
          {
              codigo_ibge: 1100452,
              nome: "Buritis",
              id_estado: 22
          },
          {
              codigo_ibge: 1100502,
              nome: "Novo Horizonte do Oeste",
              id_estado: 22
          },
          {
              codigo_ibge: 1100601,
              nome: "Cacaulândia",
              id_estado: 22
          },
          {
              codigo_ibge: 1100700,
              nome: "Campo Novo de Rondônia",
              id_estado: 22
          },
          {
              codigo_ibge: 1100809,
              nome: "Candeias do Jamari",
              id_estado: 22
          },
          {
              codigo_ibge: 1100908,
              nome: "Castanheiras",
              id_estado: 22
          },
          {
              codigo_ibge: 1100924,
              nome: "Chupinguaia",
              id_estado: 22
          },
          {
              codigo_ibge: 1100940,
              nome: "Cujubim",
              id_estado: 22
          },
          {
              codigo_ibge: 1101005,
              nome: "Governador Jorge Teixeira",
              id_estado: 22
          },
          {
              codigo_ibge: 1101104,
              nome: "Itapuã do Oeste",
              id_estado: 22
          },
          {
              codigo_ibge: 1101203,
              nome: "Ministro Andreazza",
              id_estado: 22
          },
          {
              codigo_ibge: 1101302,
              nome: "Mirante da Serra",
              id_estado: 22
          },
          {
              codigo_ibge: 1101401,
              nome: "Monte Negro",
              id_estado: 22
          },
          {
              codigo_ibge: 1101435,
              nome: "Nova União",
              id_estado: 22
          },
          {
              codigo_ibge: 1101450,
              nome: "Parecis",
              id_estado: 22
          },
          {
              codigo_ibge: 1101468,
              nome: "Pimenteiras do Oeste",
              id_estado: 22
          },
          {
              codigo_ibge: 1101476,
              nome: "Primavera de Rondônia",
              id_estado: 22
          },
          {
              codigo_ibge: 1101484,
              nome: "São Felipe D'Oeste",
              id_estado: 22
          },
          {
              codigo_ibge: 1101492,
              nome: "São Francisco do Guaporé",
              id_estado: 22
          },
          {
              codigo_ibge: 1101500,
              nome: "Seringueiras",
              id_estado: 22
          },
          {
              codigo_ibge: 1101559,
              nome: "Teixeirópolis",
              id_estado: 22
          },
          {
              codigo_ibge: 1101609,
              nome: "Theobroma",
              id_estado: 22
          },
          {
              codigo_ibge: 1101708,
              nome: "Urupá",
              id_estado: 22
          },
          {
              codigo_ibge: 1101757,
              nome: "Vale do Anari",
              id_estado: 22
          },
          {
              codigo_ibge: 1101807,
              nome: "Vale do Paraíso",
              id_estado: 22
          },
          {
              codigo_ibge: 1200013,
              nome: "Acrelândia",
              id_estado: 1
          },
          {
              codigo_ibge: 1200054,
              nome: "Assis Brasil",
              id_estado: 1
          },
          {
              codigo_ibge: 1200104,
              nome: "Brasiléia",
              id_estado: 1
          },
          {
              codigo_ibge: 1200138,
              nome: "Bujari",
              id_estado: 1
          },
          {
              codigo_ibge: 1200179,
              nome: "Capixaba",
              id_estado: 1
          },
          {
              codigo_ibge: 1200203,
              nome: "Cruzeiro do Sul",
              id_estado: 1
          },
          {
              codigo_ibge: 1200252,
              nome: "Epitaciolândia",
              id_estado: 1
          },
          {
              codigo_ibge: 1200302,
              nome: "Feijó",
              id_estado: 1
          },
          {
              codigo_ibge: 1200328,
              nome: "Jordão",
              id_estado: 1
          },
          {
              codigo_ibge: 1200336,
              nome: "Mâncio Lima",
              id_estado: 1
          },
          {
              codigo_ibge: 1200344,
              nome: "Manoel Urbano",
              id_estado: 1
          },
          {
              codigo_ibge: 1200351,
              nome: "Marechal Thaumaturgo",
              id_estado: 1
          },
          {
              codigo_ibge: 1200385,
              nome: "Plácido de Castro",
              id_estado: 1
          },
          {
              codigo_ibge: 1200393,
              nome: "Porto Walter",
              id_estado: 1
          },
          {
              codigo_ibge: 1200401,
              nome: "Rio Branco",
              id_estado: 1
          },
          {
              codigo_ibge: 1200427,
              nome: "Rodrigues Alves",
              id_estado: 1
          },
          {
              codigo_ibge: 1200435,
              nome: "Santa Rosa do Purus",
              id_estado: 1
          },
          {
              codigo_ibge: 1200450,
              nome: "Senador Guiomard",
              id_estado: 1
          },
          {
              codigo_ibge: 1200500,
              nome: "Sena Madureira",
              id_estado: 1
          },
          {
              codigo_ibge: 1200609,
              nome: "Tarauacá",
              id_estado: 1
          },
          {
              codigo_ibge: 1200708,
              nome: "Xapuri",
              id_estado: 1
          },
          {
              codigo_ibge: 1200807,
              nome: "Porto Acre",
              id_estado: 1
          },
          {
              codigo_ibge: 1300029,
              nome: "Alvarães",
              id_estado: 4
          },
          {
              codigo_ibge: 1300060,
              nome: "Amaturá",
              id_estado: 4
          },
          {
              codigo_ibge: 1300086,
              nome: "Anamã",
              id_estado: 4
          },
          {
              codigo_ibge: 1300102,
              nome: "Anori",
              id_estado: 4
          },
          {
              codigo_ibge: 1300144,
              nome: "Apuí",
              id_estado: 4
          },
          {
              codigo_ibge: 1300201,
              nome: "Atalaia do Norte",
              id_estado: 4
          },
          {
              codigo_ibge: 1300300,
              nome: "Autazes",
              id_estado: 4
          },
          {
              codigo_ibge: 1300409,
              nome: "Barcelos",
              id_estado: 4
          },
          {
              codigo_ibge: 1300508,
              nome: "Barreirinha",
              id_estado: 4
          },
          {
              codigo_ibge: 1300607,
              nome: "Benjamin Constant",
              id_estado: 4
          },
          {
              codigo_ibge: 1300631,
              nome: "Beruri",
              id_estado: 4
          },
          {
              codigo_ibge: 1300680,
              nome: "Boa Vista do Ramos",
              id_estado: 4
          },
          {
              codigo_ibge: 1300706,
              nome: "Boca do Acre",
              id_estado: 4
          },
          {
              codigo_ibge: 1300805,
              nome: "Borba",
              id_estado: 4
          },
          {
              codigo_ibge: 1300839,
              nome: "Caapiranga",
              id_estado: 4
          },
          {
              codigo_ibge: 1300904,
              nome: "Canutama",
              id_estado: 4
          },
          {
              codigo_ibge: 1301001,
              nome: "Carauari",
              id_estado: 4
          },
          {
              codigo_ibge: 1301100,
              nome: "Careiro",
              id_estado: 4
          },
          {
              codigo_ibge: 1301159,
              nome: "Careiro da Várzea",
              id_estado: 4
          },
          {
              codigo_ibge: 1301209,
              nome: "Coari",
              id_estado: 4
          },
          {
              codigo_ibge: 1301308,
              nome: "Codajás",
              id_estado: 4
          },
          {
              codigo_ibge: 1301407,
              nome: "Eirunepé",
              id_estado: 4
          },
          {
              codigo_ibge: 1301506,
              nome: "Envira",
              id_estado: 4
          },
          {
              codigo_ibge: 1301605,
              nome: "Fonte Boa",
              id_estado: 4
          },
          {
              codigo_ibge: 1301654,
              nome: "Guajará",
              id_estado: 4
          },
          {
              codigo_ibge: 1301704,
              nome: "Humaitá",
              id_estado: 4
          },
          {
              codigo_ibge: 1301803,
              nome: "Ipixuna",
              id_estado: 4
          },
          {
              codigo_ibge: 1301852,
              nome: "Iranduba",
              id_estado: 4
          },
          {
              codigo_ibge: 1301902,
              nome: "Itacoatiara",
              id_estado: 4
          },
          {
              codigo_ibge: 1301951,
              nome: "Itamarati",
              id_estado: 4
          },
          {
              codigo_ibge: 1302009,
              nome: "Itapiranga",
              id_estado: 4
          },
          {
              codigo_ibge: 1302108,
              nome: "Japurá",
              id_estado: 4
          },
          {
              codigo_ibge: 1302207,
              nome: "Juruá",
              id_estado: 4
          },
          {
              codigo_ibge: 1302306,
              nome: "Jutaí",
              id_estado: 4
          },
          {
              codigo_ibge: 1302405,
              nome: "Lábrea",
              id_estado: 4
          },
          {
              codigo_ibge: 1302504,
              nome: "Manacapuru",
              id_estado: 4
          },
          {
              codigo_ibge: 1302553,
              nome: "Manaquiri",
              id_estado: 4
          },
          {
              codigo_ibge: 1302603,
              nome: "Manaus",
              id_estado: 4
          },
          {
              codigo_ibge: 1302702,
              nome: "Manicoré",
              id_estado: 4
          },
          {
              codigo_ibge: 1302801,
              nome: "Maraã",
              id_estado: 4
          },
          {
              codigo_ibge: 1302900,
              nome: "Maués",
              id_estado: 4
          },
          {
              codigo_ibge: 1303007,
              nome: "Nhamundá",
              id_estado: 4
          },
          {
              codigo_ibge: 1303106,
              nome: "Nova Olinda do Norte",
              id_estado: 4
          },
          {
              codigo_ibge: 1303205,
              nome: "Novo Airão",
              id_estado: 4
          },
          {
              codigo_ibge: 1303304,
              nome: "Novo Aripuanã",
              id_estado: 4
          },
          {
              codigo_ibge: 1303403,
              nome: "Parintins",
              id_estado: 4
          },
          {
              codigo_ibge: 1303502,
              nome: "Pauini",
              id_estado: 4
          },
          {
              codigo_ibge: 1303536,
              nome: "Presidente Figueiredo",
              id_estado: 4
          },
          {
              codigo_ibge: 1303569,
              nome: "Rio Preto da Eva",
              id_estado: 4
          },
          {
              codigo_ibge: 1303601,
              nome: "Santa Isabel do Rio Negro",
              id_estado: 4
          },
          {
              codigo_ibge: 1303700,
              nome: "Santo Antônio do Içá",
              id_estado: 4
          },
          {
              codigo_ibge: 1303809,
              nome: "São Gabriel da Cachoeira",
              id_estado: 4
          },
          {
              codigo_ibge: 1303908,
              nome: "São Paulo de Olivença",
              id_estado: 4
          },
          {
              codigo_ibge: 1303957,
              nome: "São Sebastião do Uatumã",
              id_estado: 4
          },
          {
              codigo_ibge: 1304005,
              nome: "Silves",
              id_estado: 4
          },
          {
              codigo_ibge: 1304062,
              nome: "Tabatinga",
              id_estado: 4
          },
          {
              codigo_ibge: 1304104,
              nome: "Tapauá",
              id_estado: 4
          },
          {
              codigo_ibge: 1304203,
              nome: "Tefé",
              id_estado: 4
          },
          {
              codigo_ibge: 1304237,
              nome: "Tonantins",
              id_estado: 4
          },
          {
              codigo_ibge: 1304260,
              nome: "Uarini",
              id_estado: 4
          },
          {
              codigo_ibge: 1304302,
              nome: "Urucará",
              id_estado: 4
          },
          {
              codigo_ibge: 1304401,
              nome: "Urucurituba",
              id_estado: 4
          },
          {
              codigo_ibge: 1400027,
              nome: "Amajari",
              id_estado: 23
          },
          {
              codigo_ibge: 1400050,
              nome: "Alto Alegre",
              id_estado: 23
          },
          {
              codigo_ibge: 1400100,
              nome: "Boa Vista",
              id_estado: 23
          },
          {
              codigo_ibge: 1400159,
              nome: "Bonfim",
              id_estado: 23
          },
          {
              codigo_ibge: 1400175,
              nome: "Cantá",
              id_estado: 23
          },
          {
              codigo_ibge: 1400209,
              nome: "Caracaraí",
              id_estado: 23
          },
          {
              codigo_ibge: 1400233,
              nome: "Caroebe",
              id_estado: 23
          },
          {
              codigo_ibge: 1400282,
              nome: "Iracema",
              id_estado: 23
          },
          {
              codigo_ibge: 1400308,
              nome: "Mucajaí",
              id_estado: 23
          },
          {
              codigo_ibge: 1400407,
              nome: "Normandia",
              id_estado: 23
          },
          {
              codigo_ibge: 1400456,
              nome: "Pacaraima",
              id_estado: 23
          },
          {
              codigo_ibge: 1400472,
              nome: "Rorainópolis",
              id_estado: 23
          },
          {
              codigo_ibge: 1400506,
              nome: "São João da Baliza",
              id_estado: 23
          },
          {
              codigo_ibge: 1400605,
              nome: "São Luiz",
              id_estado: 23
          },
          {
              codigo_ibge: 1400704,
              nome: "Uiramutã",
              id_estado: 23
          },
          {
              codigo_ibge: 1500107,
              nome: "Abaetetuba",
              id_estado: 14
          },
          {
              codigo_ibge: 1500131,
              nome: "Abel Figueiredo",
              id_estado: 14
          },
          {
              codigo_ibge: 1500206,
              nome: "Acará",
              id_estado: 14
          },
          {
              codigo_ibge: 1500305,
              nome: "Afuá",
              id_estado: 14
          },
          {
              codigo_ibge: 1500347,
              nome: "Água Azul do Norte",
              id_estado: 14
          },
          {
              codigo_ibge: 1500404,
              nome: "Alenquer",
              id_estado: 14
          },
          {
              codigo_ibge: 1500503,
              nome: "Almeirim",
              id_estado: 14
          },
          {
              codigo_ibge: 1500602,
              nome: "Altamira",
              id_estado: 14
          },
          {
              codigo_ibge: 1500701,
              nome: "Anajás",
              id_estado: 14
          },
          {
              codigo_ibge: 1500800,
              nome: "Ananindeua",
              id_estado: 14
          },
          {
              codigo_ibge: 1500859,
              nome: "Anapu",
              id_estado: 14
          },
          {
              codigo_ibge: 1500909,
              nome: "Augusto Corrêa",
              id_estado: 14
          },
          {
              codigo_ibge: 1500958,
              nome: "Aurora do Pará",
              id_estado: 14
          },
          {
              codigo_ibge: 1501006,
              nome: "Aveiro",
              id_estado: 14
          },
          {
              codigo_ibge: 1501105,
              nome: "Bagre",
              id_estado: 14
          },
          {
              codigo_ibge: 1501204,
              nome: "Baião",
              id_estado: 14
          },
          {
              codigo_ibge: 1501253,
              nome: "Bannach",
              id_estado: 14
          },
          {
              codigo_ibge: 1501303,
              nome: "Barcarena",
              id_estado: 14
          },
          {
              codigo_ibge: 1501402,
              nome: "Belém",
              id_estado: 14
          },
          {
              codigo_ibge: 1501451,
              nome: "Belterra",
              id_estado: 14
          },
          {
              codigo_ibge: 1501501,
              nome: "Benevides",
              id_estado: 14
          },
          {
              codigo_ibge: 1501576,
              nome: "Bom Jesus do Tocantins",
              id_estado: 14
          },
          {
              codigo_ibge: 1501600,
              nome: "Bonito",
              id_estado: 14
          },
          {
              codigo_ibge: 1501709,
              nome: "Bragança",
              id_estado: 14
          },
          {
              codigo_ibge: 1501725,
              nome: "Brasil Novo",
              id_estado: 14
          },
          {
              codigo_ibge: 1501758,
              nome: "Brejo Grande do Araguaia",
              id_estado: 14
          },
          {
              codigo_ibge: 1501782,
              nome: "Breu Branco",
              id_estado: 14
          },
          {
              codigo_ibge: 1501808,
              nome: "Breves",
              id_estado: 14
          },
          {
              codigo_ibge: 1501907,
              nome: "Bujaru",
              id_estado: 14
          },
          {
              codigo_ibge: 1501956,
              nome: "Cachoeira do Piriá",
              id_estado: 14
          },
          {
              codigo_ibge: 1502004,
              nome: "Cachoeira do Arari",
              id_estado: 14
          },
          {
              codigo_ibge: 1502103,
              nome: "Cametá",
              id_estado: 14
          },
          {
              codigo_ibge: 1502152,
              nome: "Canaã dos Carajás",
              id_estado: 14
          },
          {
              codigo_ibge: 1502202,
              nome: "Capanema",
              id_estado: 14
          },
          {
              codigo_ibge: 1502301,
              nome: "Capitão Poço",
              id_estado: 14
          },
          {
              codigo_ibge: 1502400,
              nome: "Castanhal",
              id_estado: 14
          },
          {
              codigo_ibge: 1502509,
              nome: "Chaves",
              id_estado: 14
          },
          {
              codigo_ibge: 1502608,
              nome: "Colares",
              id_estado: 14
          },
          {
              codigo_ibge: 1502707,
              nome: "Conceição do Araguaia",
              id_estado: 14
          },
          {
              codigo_ibge: 1502756,
              nome: "Concórdia do Pará",
              id_estado: 14
          },
          {
              codigo_ibge: 1502764,
              nome: "Cumaru do Norte",
              id_estado: 14
          },
          {
              codigo_ibge: 1502772,
              nome: "Curionópolis",
              id_estado: 14
          },
          {
              codigo_ibge: 1502806,
              nome: "Curralinho",
              id_estado: 14
          },
          {
              codigo_ibge: 1502855,
              nome: "Curuá",
              id_estado: 14
          },
          {
              codigo_ibge: 1502905,
              nome: "Curuçá",
              id_estado: 14
          },
          {
              codigo_ibge: 1502939,
              nome: "Dom Eliseu",
              id_estado: 14
          },
          {
              codigo_ibge: 1502954,
              nome: "Eldorado dos Carajás",
              id_estado: 14
          },
          {
              codigo_ibge: 1503002,
              nome: "Faro",
              id_estado: 14
          },
          {
              codigo_ibge: 1503044,
              nome: "Floresta do Araguaia",
              id_estado: 14
          },
          {
              codigo_ibge: 1503077,
              nome: "Garrafão do Norte",
              id_estado: 14
          },
          {
              codigo_ibge: 1503093,
              nome: "Goianésia do Pará",
              id_estado: 14
          },
          {
              codigo_ibge: 1503101,
              nome: "Gurupá",
              id_estado: 14
          },
          {
              codigo_ibge: 1503200,
              nome: "Igarapé-Açu",
              id_estado: 14
          },
          {
              codigo_ibge: 1503309,
              nome: "Igarapé-Miri",
              id_estado: 14
          },
          {
              codigo_ibge: 1503408,
              nome: "Inhangapi",
              id_estado: 14
          },
          {
              codigo_ibge: 1503457,
              nome: "Ipixuna do Pará",
              id_estado: 14
          },
          {
              codigo_ibge: 1503507,
              nome: "Irituia",
              id_estado: 14
          },
          {
              codigo_ibge: 1503606,
              nome: "Itaituba",
              id_estado: 14
          },
          {
              codigo_ibge: 1503705,
              nome: "Itupiranga",
              id_estado: 14
          },
          {
              codigo_ibge: 1503754,
              nome: "Jacareacanga",
              id_estado: 14
          },
          {
              codigo_ibge: 1503804,
              nome: "Jacundá",
              id_estado: 14
          },
          {
              codigo_ibge: 1503903,
              nome: "Juruti",
              id_estado: 14
          },
          {
              codigo_ibge: 1504000,
              nome: "Limoeiro do Ajuru",
              id_estado: 14
          },
          {
              codigo_ibge: 1504059,
              nome: "Mãe do Rio",
              id_estado: 14
          },
          {
              codigo_ibge: 1504109,
              nome: "Magalhães Barata",
              id_estado: 14
          },
          {
              codigo_ibge: 1504208,
              nome: "Marabá",
              id_estado: 14
          },
          {
              codigo_ibge: 1504307,
              nome: "Maracanã",
              id_estado: 14
          },
          {
              codigo_ibge: 1504406,
              nome: "Marapanim",
              id_estado: 14
          },
          {
              codigo_ibge: 1504422,
              nome: "Marituba",
              id_estado: 14
          },
          {
              codigo_ibge: 1504455,
              nome: "Medicilândia",
              id_estado: 14
          },
          {
              codigo_ibge: 1504505,
              nome: "Melgaço",
              id_estado: 14
          },
          {
              codigo_ibge: 1504604,
              nome: "Mocajuba",
              id_estado: 14
          },
          {
              codigo_ibge: 1504703,
              nome: "Moju",
              id_estado: 14
          },
          {
              codigo_ibge: 1504752,
              nome: "Mojuí dos Campos",
              id_estado: 14
          },
          {
              codigo_ibge: 1504802,
              nome: "Monte Alegre",
              id_estado: 14
          },
          {
              codigo_ibge: 1504901,
              nome: "Muaná",
              id_estado: 14
          },
          {
              codigo_ibge: 1504950,
              nome: "Nova Esperança do Piriá",
              id_estado: 14
          },
          {
              codigo_ibge: 1504976,
              nome: "Nova Ipixuna",
              id_estado: 14
          },
          {
              codigo_ibge: 1505007,
              nome: "Nova Timboteua",
              id_estado: 14
          },
          {
              codigo_ibge: 1505031,
              nome: "Novo Progresso",
              id_estado: 14
          },
          {
              codigo_ibge: 1505064,
              nome: "Novo Repartimento",
              id_estado: 14
          },
          {
              codigo_ibge: 1505106,
              nome: "Óbidos",
              id_estado: 14
          },
          {
              codigo_ibge: 1505205,
              nome: "Oeiras do Pará",
              id_estado: 14
          },
          {
              codigo_ibge: 1505304,
              nome: "Oriximiná",
              id_estado: 14
          },
          {
              codigo_ibge: 1505403,
              nome: "Ourém",
              id_estado: 14
          },
          {
              codigo_ibge: 1505437,
              nome: "Ourilândia do Norte",
              id_estado: 14
          },
          {
              codigo_ibge: 1505486,
              nome: "Pacajá",
              id_estado: 14
          },
          {
              codigo_ibge: 1505494,
              nome: "Palestina do Pará",
              id_estado: 14
          },
          {
              codigo_ibge: 1505502,
              nome: "Paragominas",
              id_estado: 14
          },
          {
              codigo_ibge: 1505536,
              nome: "Parauapebas",
              id_estado: 14
          },
          {
              codigo_ibge: 1505551,
              nome: "Pau D'Arco",
              id_estado: 14
          },
          {
              codigo_ibge: 1505601,
              nome: "Peixe-Boi",
              id_estado: 14
          },
          {
              codigo_ibge: 1505635,
              nome: "Piçarra",
              id_estado: 14
          },
          {
              codigo_ibge: 1505650,
              nome: "Placas",
              id_estado: 14
          },
          {
              codigo_ibge: 1505700,
              nome: "Ponta de Pedras",
              id_estado: 14
          },
          {
              codigo_ibge: 1505809,
              nome: "Portel",
              id_estado: 14
          },
          {
              codigo_ibge: 1505908,
              nome: "Porto de Moz",
              id_estado: 14
          },
          {
              codigo_ibge: 1506005,
              nome: "Prainha",
              id_estado: 14
          },
          {
              codigo_ibge: 1506104,
              nome: "Primavera",
              id_estado: 14
          },
          {
              codigo_ibge: 1506112,
              nome: "Quatipuru",
              id_estado: 14
          },
          {
              codigo_ibge: 1506138,
              nome: "Redenção",
              id_estado: 14
          },
          {
              codigo_ibge: 1506161,
              nome: "Rio Maria",
              id_estado: 14
          },
          {
              codigo_ibge: 1506187,
              nome: "Rondon do Pará",
              id_estado: 14
          },
          {
              codigo_ibge: 1506195,
              nome: "Rurópolis",
              id_estado: 14
          },
          {
              codigo_ibge: 1506203,
              nome: "Salinópolis",
              id_estado: 14
          },
          {
              codigo_ibge: 1506302,
              nome: "Salvaterra",
              id_estado: 14
          },
          {
              codigo_ibge: 1506351,
              nome: "Santa Bárbara do Pará",
              id_estado: 14
          },
          {
              codigo_ibge: 1506401,
              nome: "Santa Cruz do Arari",
              id_estado: 14
          },
          {
              codigo_ibge: 1506500,
              nome: "Santa Isabel do Pará",
              id_estado: 14
          },
          {
              codigo_ibge: 1506559,
              nome: "Santa Luzia do Pará",
              id_estado: 14
          },
          {
              codigo_ibge: 1506583,
              nome: "Santa Maria das Barreiras",
              id_estado: 14
          },
          {
              codigo_ibge: 1506609,
              nome: "Santa Maria do Pará",
              id_estado: 14
          },
          {
              codigo_ibge: 1506708,
              nome: "Santana do Araguaia",
              id_estado: 14
          },
          {
              codigo_ibge: 1506807,
              nome: "Santarém",
              id_estado: 14
          },
          {
              codigo_ibge: 1506906,
              nome: "Santarém Novo",
              id_estado: 14
          },
          {
              codigo_ibge: 1507003,
              nome: "Santo Antônio do Tauá",
              id_estado: 14
          },
          {
              codigo_ibge: 1507102,
              nome: "São Caetano de Odivelas",
              id_estado: 14
          },
          {
              codigo_ibge: 1507151,
              nome: "São Domingos do Araguaia",
              id_estado: 14
          },
          {
              codigo_ibge: 1507201,
              nome: "São Domingos do Capim",
              id_estado: 14
          },
          {
              codigo_ibge: 1507300,
              nome: "São Félix do Xingu",
              id_estado: 14
          },
          {
              codigo_ibge: 1507409,
              nome: "São Francisco do Pará",
              id_estado: 14
          },
          {
              codigo_ibge: 1507458,
              nome: "São Geraldo do Araguaia",
              id_estado: 14
          },
          {
              codigo_ibge: 1507466,
              nome: "São João da Ponta",
              id_estado: 14
          },
          {
              codigo_ibge: 1507474,
              nome: "São João de Pirabas",
              id_estado: 14
          },
          {
              codigo_ibge: 1507508,
              nome: "São João do Araguaia",
              id_estado: 14
          },
          {
              codigo_ibge: 1507607,
              nome: "São Miguel do Guamá",
              id_estado: 14
          },
          {
              codigo_ibge: 1507706,
              nome: "São Sebastião da Boa Vista",
              id_estado: 14
          },
          {
              codigo_ibge: 1507755,
              nome: "Sapucaia",
              id_estado: 14
          },
          {
              codigo_ibge: 1507805,
              nome: "Senador José Porfírio",
              id_estado: 14
          },
          {
              codigo_ibge: 1507904,
              nome: "Soure",
              id_estado: 14
          },
          {
              codigo_ibge: 1507953,
              nome: "Tailândia",
              id_estado: 14
          },
          {
              codigo_ibge: 1507961,
              nome: "Terra Alta",
              id_estado: 14
          },
          {
              codigo_ibge: 1507979,
              nome: "Terra Santa",
              id_estado: 14
          },
          {
              codigo_ibge: 1508001,
              nome: "Tomé-Açu",
              id_estado: 14
          },
          {
              codigo_ibge: 1508035,
              nome: "Tracuateua",
              id_estado: 14
          },
          {
              codigo_ibge: 1508050,
              nome: "Trairão",
              id_estado: 14
          },
          {
              codigo_ibge: 1508084,
              nome: "Tucumã",
              id_estado: 14
          },
          {
              codigo_ibge: 1508100,
              nome: "Tucuruí",
              id_estado: 14
          },
          {
              codigo_ibge: 1508126,
              nome: "Ulianópolis",
              id_estado: 14
          },
          {
              codigo_ibge: 1508159,
              nome: "Uruará",
              id_estado: 14
          },
          {
              codigo_ibge: 1508209,
              nome: "Vigia",
              id_estado: 14
          },
          {
              codigo_ibge: 1508308,
              nome: "Viseu",
              id_estado: 14
          },
          {
              codigo_ibge: 1508357,
              nome: "Vitória do Xingu",
              id_estado: 14
          },
          {
              codigo_ibge: 1508407,
              nome: "Xinguara",
              id_estado: 14
          },
          {
              codigo_ibge: 1600055,
              nome: "Serra do Navio",
              id_estado: 3
          },
          {
              codigo_ibge: 1600105,
              nome: "Amapá",
              id_estado: 3
          },
          {
              codigo_ibge: 1600154,
              nome: "Pedra Branca do Amapari",
              id_estado: 3
          },
          {
              codigo_ibge: 1600204,
              nome: "Calçoene",
              id_estado: 3
          },
          {
              codigo_ibge: 1600212,
              nome: "Cutias",
              id_estado: 3
          },
          {
              codigo_ibge: 1600238,
              nome: "Ferreira Gomes",
              id_estado: 3
          },
          {
              codigo_ibge: 1600253,
              nome: "Itaubal",
              id_estado: 3
          },
          {
              codigo_ibge: 1600279,
              nome: "Laranjal do Jari",
              id_estado: 3
          },
          {
              codigo_ibge: 1600303,
              nome: "Macapá",
              id_estado: 3
          },
          {
              codigo_ibge: 1600402,
              nome: "Mazagão",
              id_estado: 3
          },
          {
              codigo_ibge: 1600501,
              nome: "Oiapoque",
              id_estado: 3
          },
          {
              codigo_ibge: 1600535,
              nome: "Porto Grande",
              id_estado: 3
          },
          {
              codigo_ibge: 1600550,
              nome: "Pracuúba",
              id_estado: 3
          },
          {
              codigo_ibge: 1600600,
              nome: "Santana",
              id_estado: 3
          },
          {
              codigo_ibge: 1600709,
              nome: "Tartarugalzinho",
              id_estado: 3
          },
          {
              codigo_ibge: 1600808,
              nome: "Vitória do Jari",
              id_estado: 3
          },
          {
              codigo_ibge: 1700251,
              nome: "Abreulândia",
              id_estado: 27
          },
          {
              codigo_ibge: 1700301,
              nome: "Aguiarnópolis",
              id_estado: 27
          },
          {
              codigo_ibge: 1700350,
              nome: "Aliança do Tocantins",
              id_estado: 27
          },
          {
              codigo_ibge: 1700400,
              nome: "Almas",
              id_estado: 27
          },
          {
              codigo_ibge: 1700707,
              nome: "Alvorada",
              id_estado: 27
          },
          {
              codigo_ibge: 1701002,
              nome: "Ananás",
              id_estado: 27
          },
          {
              codigo_ibge: 1701051,
              nome: "Angico",
              id_estado: 27
          },
          {
              codigo_ibge: 1701101,
              nome: "Aparecida do Rio Negro",
              id_estado: 27
          },
          {
              codigo_ibge: 1701309,
              nome: "Aragominas",
              id_estado: 27
          },
          {
              codigo_ibge: 1701903,
              nome: "Araguacema",
              id_estado: 27
          },
          {
              codigo_ibge: 1702000,
              nome: "Araguaçu",
              id_estado: 27
          },
          {
              codigo_ibge: 1702109,
              nome: "Araguaína",
              id_estado: 27
          },
          {
              codigo_ibge: 1702158,
              nome: "Araguanã",
              id_estado: 27
          },
          {
              codigo_ibge: 1702208,
              nome: "Araguatins",
              id_estado: 27
          },
          {
              codigo_ibge: 1702307,
              nome: "Arapoema",
              id_estado: 27
          },
          {
              codigo_ibge: 1702406,
              nome: "Arraias",
              id_estado: 27
          },
          {
              codigo_ibge: 1702554,
              nome: "Augustinópolis",
              id_estado: 27
          },
          {
              codigo_ibge: 1702703,
              nome: "Aurora do Tocantins",
              id_estado: 27
          },
          {
              codigo_ibge: 1702901,
              nome: "Axixá do Tocantins",
              id_estado: 27
          },
          {
              codigo_ibge: 1703008,
              nome: "Babaçulândia",
              id_estado: 27
          },
          {
              codigo_ibge: 1703057,
              nome: "Bandeirantes do Tocantins",
              id_estado: 27
          },
          {
              codigo_ibge: 1703073,
              nome: "Barra do Ouro",
              id_estado: 27
          },
          {
              codigo_ibge: 1703107,
              nome: "Barrolândia",
              id_estado: 27
          },
          {
              codigo_ibge: 1703206,
              nome: "Bernardo Sayão",
              id_estado: 27
          },
          {
              codigo_ibge: 1703305,
              nome: "Bom Jesus do Tocantins",
              id_estado: 27
          },
          {
              codigo_ibge: 1703602,
              nome: "Brasilândia do Tocantins",
              id_estado: 27
          },
          {
              codigo_ibge: 1703701,
              nome: "Brejinho de Nazaré",
              id_estado: 27
          },
          {
              codigo_ibge: 1703800,
              nome: "Buriti do Tocantins",
              id_estado: 27
          },
          {
              codigo_ibge: 1703826,
              nome: "Cachoeirinha",
              id_estado: 27
          },
          {
              codigo_ibge: 1703842,
              nome: "Campos Lindos",
              id_estado: 27
          },
          {
              codigo_ibge: 1703867,
              nome: "Cariri do Tocantins",
              id_estado: 27
          },
          {
              codigo_ibge: 1703883,
              nome: "Carmolândia",
              id_estado: 27
          },
          {
              codigo_ibge: 1703891,
              nome: "Carrasco Bonito",
              id_estado: 27
          },
          {
              codigo_ibge: 1703909,
              nome: "Caseara",
              id_estado: 27
          },
          {
              codigo_ibge: 1704105,
              nome: "Centenário",
              id_estado: 27
          },
          {
              codigo_ibge: 1704600,
              nome: "Chapada de Areia",
              id_estado: 27
          },
          {
              codigo_ibge: 1705102,
              nome: "Chapada da Natividade",
              id_estado: 27
          },
          {
              codigo_ibge: 1705508,
              nome: "Colinas do Tocantins",
              id_estado: 27
          },
          {
              codigo_ibge: 1705557,
              nome: "Combinado",
              id_estado: 27
          },
          {
              codigo_ibge: 1705607,
              nome: "Conceição do Tocantins",
              id_estado: 27
          },
          {
              codigo_ibge: 1706001,
              nome: "Couto Magalhães",
              id_estado: 27
          },
          {
              codigo_ibge: 1706100,
              nome: "Cristalândia",
              id_estado: 27
          },
          {
              codigo_ibge: 1706258,
              nome: "Crixás do Tocantins",
              id_estado: 27
          },
          {
              codigo_ibge: 1706506,
              nome: "Darcinópolis",
              id_estado: 27
          },
          {
              codigo_ibge: 1707009,
              nome: "Dianópolis",
              id_estado: 27
          },
          {
              codigo_ibge: 1707108,
              nome: "Divinópolis do Tocantins",
              id_estado: 27
          },
          {
              codigo_ibge: 1707207,
              nome: "Dois Irmãos do Tocantins",
              id_estado: 27
          },
          {
              codigo_ibge: 1707306,
              nome: "Dueré",
              id_estado: 27
          },
          {
              codigo_ibge: 1707405,
              nome: "Esperantina",
              id_estado: 27
          },
          {
              codigo_ibge: 1707553,
              nome: "Fátima",
              id_estado: 27
          },
          {
              codigo_ibge: 1707652,
              nome: "Figueirópolis",
              id_estado: 27
          },
          {
              codigo_ibge: 1707702,
              nome: "Filadélfia",
              id_estado: 27
          },
          {
              codigo_ibge: 1708205,
              nome: "Formoso do Araguaia",
              id_estado: 27
          },
          {
              codigo_ibge: 1708254,
              nome: "Fortaleza do Tabocão",
              id_estado: 27
          },
          {
              codigo_ibge: 1708304,
              nome: "Goianorte",
              id_estado: 27
          },
          {
              codigo_ibge: 1709005,
              nome: "Goiatins",
              id_estado: 27
          },
          {
              codigo_ibge: 1709302,
              nome: "Guaraí",
              id_estado: 27
          },
          {
              codigo_ibge: 1709500,
              nome: "Gurupi",
              id_estado: 27
          },
          {
              codigo_ibge: 1709807,
              nome: "Ipueiras",
              id_estado: 27
          },
          {
              codigo_ibge: 1710508,
              nome: "Itacajá",
              id_estado: 27
          },
          {
              codigo_ibge: 1710706,
              nome: "Itaguatins",
              id_estado: 27
          },
          {
              codigo_ibge: 1710904,
              nome: "Itapiratins",
              id_estado: 27
          },
          {
              codigo_ibge: 1711100,
              nome: "Itaporã do Tocantins",
              id_estado: 27
          },
          {
              codigo_ibge: 1711506,
              nome: "Jaú do Tocantins",
              id_estado: 27
          },
          {
              codigo_ibge: 1711803,
              nome: "Juarina",
              id_estado: 27
          },
          {
              codigo_ibge: 1711902,
              nome: "Lagoa da Confusão",
              id_estado: 27
          },
          {
              codigo_ibge: 1711951,
              nome: "Lagoa do Tocantins",
              id_estado: 27
          },
          {
              codigo_ibge: 1712009,
              nome: "Lajeado",
              id_estado: 27
          },
          {
              codigo_ibge: 1712157,
              nome: "Lavandeira",
              id_estado: 27
          },
          {
              codigo_ibge: 1712405,
              nome: "Lizarda",
              id_estado: 27
          },
          {
              codigo_ibge: 1712454,
              nome: "Luzinópolis",
              id_estado: 27
          },
          {
              codigo_ibge: 1712504,
              nome: "Marianópolis do Tocantins",
              id_estado: 27
          },
          {
              codigo_ibge: 1712702,
              nome: "Mateiros",
              id_estado: 27
          },
          {
              codigo_ibge: 1712801,
              nome: "Maurilândia do Tocantins",
              id_estado: 27
          },
          {
              codigo_ibge: 1713205,
              nome: "Miracema do Tocantins",
              id_estado: 27
          },
          {
              codigo_ibge: 1713304,
              nome: "Miranorte",
              id_estado: 27
          },
          {
              codigo_ibge: 1713601,
              nome: "Monte do Carmo",
              id_estado: 27
          },
          {
              codigo_ibge: 1713700,
              nome: "Monte Santo do Tocantins",
              id_estado: 27
          },
          {
              codigo_ibge: 1713809,
              nome: "Palmeiras do Tocantins",
              id_estado: 27
          },
          {
              codigo_ibge: 1713957,
              nome: "Muricilândia",
              id_estado: 27
          },
          {
              codigo_ibge: 1714203,
              nome: "Natividade",
              id_estado: 27
          },
          {
              codigo_ibge: 1714302,
              nome: "Nazaré",
              id_estado: 27
          },
          {
              codigo_ibge: 1714880,
              nome: "Nova Olinda",
              id_estado: 27
          },
          {
              codigo_ibge: 1715002,
              nome: "Nova Rosalândia",
              id_estado: 27
          },
          {
              codigo_ibge: 1715101,
              nome: "Novo Acordo",
              id_estado: 27
          },
          {
              codigo_ibge: 1715150,
              nome: "Novo Alegre",
              id_estado: 27
          },
          {
              codigo_ibge: 1715259,
              nome: "Novo Jardim",
              id_estado: 27
          },
          {
              codigo_ibge: 1715507,
              nome: "Oliveira de Fátima",
              id_estado: 27
          },
          {
              codigo_ibge: 1715705,
              nome: "Palmeirante",
              id_estado: 27
          },
          {
              codigo_ibge: 1715754,
              nome: "Palmeirópolis",
              id_estado: 27
          },
          {
              codigo_ibge: 1716109,
              nome: "Paraíso do Tocantins",
              id_estado: 27
          },
          {
              codigo_ibge: 1716208,
              nome: "Paranã",
              id_estado: 27
          },
          {
              codigo_ibge: 1716307,
              nome: "Pau D'Arco",
              id_estado: 27
          },
          {
              codigo_ibge: 1716505,
              nome: "Pedro Afonso",
              id_estado: 27
          },
          {
              codigo_ibge: 1716604,
              nome: "Peixe",
              id_estado: 27
          },
          {
              codigo_ibge: 1716653,
              nome: "Pequizeiro",
              id_estado: 27
          },
          {
              codigo_ibge: 1716703,
              nome: "Colméia",
              id_estado: 27
          },
          {
              codigo_ibge: 1717008,
              nome: "Pindorama do Tocantins",
              id_estado: 27
          },
          {
              codigo_ibge: 1717206,
              nome: "Piraquê",
              id_estado: 27
          },
          {
              codigo_ibge: 1717503,
              nome: "Pium",
              id_estado: 27
          },
          {
              codigo_ibge: 1717800,
              nome: "Ponte Alta do Bom Jesus",
              id_estado: 27
          },
          {
              codigo_ibge: 1717909,
              nome: "Ponte Alta do Tocantins",
              id_estado: 27
          },
          {
              codigo_ibge: 1718006,
              nome: "Porto Alegre do Tocantins",
              id_estado: 27
          },
          {
              codigo_ibge: 1718204,
              nome: "Porto Nacional",
              id_estado: 27
          },
          {
              codigo_ibge: 1718303,
              nome: "Praia Norte",
              id_estado: 27
          },
          {
              codigo_ibge: 1718402,
              nome: "Presidente Kennedy",
              id_estado: 27
          },
          {
              codigo_ibge: 1718451,
              nome: "Pugmil",
              id_estado: 27
          },
          {
              codigo_ibge: 1718501,
              nome: "Recursolândia",
              id_estado: 27
          },
          {
              codigo_ibge: 1718550,
              nome: "Riachinho",
              id_estado: 27
          },
          {
              codigo_ibge: 1718659,
              nome: "Rio da Conceição",
              id_estado: 27
          },
          {
              codigo_ibge: 1718709,
              nome: "Rio dos Bois",
              id_estado: 27
          },
          {
              codigo_ibge: 1718758,
              nome: "Rio Sono",
              id_estado: 27
          },
          {
              codigo_ibge: 1718808,
              nome: "Sampaio",
              id_estado: 27
          },
          {
              codigo_ibge: 1718840,
              nome: "Sandolândia",
              id_estado: 27
          },
          {
              codigo_ibge: 1718865,
              nome: "Santa Fé do Araguaia",
              id_estado: 27
          },
          {
              codigo_ibge: 1718881,
              nome: "Santa Maria do Tocantins",
              id_estado: 27
          },
          {
              codigo_ibge: 1718899,
              nome: "Santa Rita do Tocantins",
              id_estado: 27
          },
          {
              codigo_ibge: 1718907,
              nome: "Santa Rosa do Tocantins",
              id_estado: 27
          },
          {
              codigo_ibge: 1719004,
              nome: "Santa Tereza do Tocantins",
              id_estado: 27
          },
          {
              codigo_ibge: 1720002,
              nome: "Santa Terezinha do Tocantins",
              id_estado: 27
          },
          {
              codigo_ibge: 1720101,
              nome: "São Bento do Tocantins",
              id_estado: 27
          },
          {
              codigo_ibge: 1720150,
              nome: "São Félix do Tocantins",
              id_estado: 27
          },
          {
              codigo_ibge: 1720200,
              nome: "São Miguel do Tocantins",
              id_estado: 27
          },
          {
              codigo_ibge: 1720259,
              nome: "São Salvador do Tocantins",
              id_estado: 27
          },
          {
              codigo_ibge: 1720309,
              nome: "São Sebastião do Tocantins",
              id_estado: 27
          },
          {
              codigo_ibge: 1720499,
              nome: "São Valério",
              id_estado: 27
          },
          {
              codigo_ibge: 1720655,
              nome: "Silvanópolis",
              id_estado: 27
          },
          {
              codigo_ibge: 1720804,
              nome: "Sítio Novo do Tocantins",
              id_estado: 27
          },
          {
              codigo_ibge: 1720853,
              nome: "Sucupira",
              id_estado: 27
          },
          {
              codigo_ibge: 1720903,
              nome: "Taguatinga",
              id_estado: 27
          },
          {
              codigo_ibge: 1720937,
              nome: "Taipas do Tocantins",
              id_estado: 27
          },
          {
              codigo_ibge: 1720978,
              nome: "Talismã",
              id_estado: 27
          },
          {
              codigo_ibge: 1721000,
              nome: "Palmas",
              id_estado: 27
          },
          {
              codigo_ibge: 1721109,
              nome: "Tocantínia",
              id_estado: 27
          },
          {
              codigo_ibge: 1721208,
              nome: "Tocantinópolis",
              id_estado: 27
          },
          {
              codigo_ibge: 1721257,
              nome: "Tupirama",
              id_estado: 27
          },
          {
              codigo_ibge: 1721307,
              nome: "Tupiratins",
              id_estado: 27
          },
          {
              codigo_ibge: 1722081,
              nome: "Wanderlândia",
              id_estado: 27
          },
          {
              codigo_ibge: 1722107,
              nome: "Xambioá",
              id_estado: 27
          },
          {
              codigo_ibge: 2100055,
              nome: "Açailândia",
              id_estado: 10
          },
          {
              codigo_ibge: 2100105,
              nome: "Afonso Cunha",
              id_estado: 10
          },
          {
              codigo_ibge: 2100154,
              nome: "Água Doce do Maranhão",
              id_estado: 10
          },
          {
              codigo_ibge: 2100204,
              nome: "Alcântara",
              id_estado: 10
          },
          {
              codigo_ibge: 2100303,
              nome: "Aldeias Altas",
              id_estado: 10
          },
          {
              codigo_ibge: 2100402,
              nome: "Altamira do Maranhão",
              id_estado: 10
          },
          {
              codigo_ibge: 2100436,
              nome: "Alto Alegre do Maranhão",
              id_estado: 10
          },
          {
              codigo_ibge: 2100477,
              nome: "Alto Alegre do Pindaré",
              id_estado: 10
          },
          {
              codigo_ibge: 2100501,
              nome: "Alto Parnaíba",
              id_estado: 10
          },
          {
              codigo_ibge: 2100550,
              nome: "Amapá do Maranhão",
              id_estado: 10
          },
          {
              codigo_ibge: 2100600,
              nome: "Amarante do Maranhão",
              id_estado: 10
          },
          {
              codigo_ibge: 2100709,
              nome: "Anajatuba",
              id_estado: 10
          },
          {
              codigo_ibge: 2100808,
              nome: "Anapurus",
              id_estado: 10
          },
          {
              codigo_ibge: 2100832,
              nome: "Apicum-Açu",
              id_estado: 10
          },
          {
              codigo_ibge: 2100873,
              nome: "Araguanã",
              id_estado: 10
          },
          {
              codigo_ibge: 2100907,
              nome: "Araioses",
              id_estado: 10
          },
          {
              codigo_ibge: 2100956,
              nome: "Arame",
              id_estado: 10
          },
          {
              codigo_ibge: 2101004,
              nome: "Arari",
              id_estado: 10
          },
          {
              codigo_ibge: 2101103,
              nome: "Axixá",
              id_estado: 10
          },
          {
              codigo_ibge: 2101202,
              nome: "Bacabal",
              id_estado: 10
          },
          {
              codigo_ibge: 2101251,
              nome: "Bacabeira",
              id_estado: 10
          },
          {
              codigo_ibge: 2101301,
              nome: "Bacuri",
              id_estado: 10
          },
          {
              codigo_ibge: 2101350,
              nome: "Bacurituba",
              id_estado: 10
          },
          {
              codigo_ibge: 2101400,
              nome: "Balsas",
              id_estado: 10
          },
          {
              codigo_ibge: 2101509,
              nome: "Barão de Grajaú",
              id_estado: 10
          },
          {
              codigo_ibge: 2101608,
              nome: "Barra do Corda",
              id_estado: 10
          },
          {
              codigo_ibge: 2101707,
              nome: "Barreirinhas",
              id_estado: 10
          },
          {
              codigo_ibge: 2101731,
              nome: "Belágua",
              id_estado: 10
          },
          {
              codigo_ibge: 2101772,
              nome: "Bela Vista do Maranhão",
              id_estado: 10
          },
          {
              codigo_ibge: 2101806,
              nome: "Benedito Leite",
              id_estado: 10
          },
          {
              codigo_ibge: 2101905,
              nome: "Bequimão",
              id_estado: 10
          },
          {
              codigo_ibge: 2101939,
              nome: "Bernardo do Mearim",
              id_estado: 10
          },
          {
              codigo_ibge: 2101970,
              nome: "Boa Vista do Gurupi",
              id_estado: 10
          },
          {
              codigo_ibge: 2102002,
              nome: "Bom Jardim",
              id_estado: 10
          },
          {
              codigo_ibge: 2102036,
              nome: "Bom Jesus das Selvas",
              id_estado: 10
          },
          {
              codigo_ibge: 2102077,
              nome: "Bom Lugar",
              id_estado: 10
          },
          {
              codigo_ibge: 2102101,
              nome: "Brejo",
              id_estado: 10
          },
          {
              codigo_ibge: 2102150,
              nome: "Brejo de Areia",
              id_estado: 10
          },
          {
              codigo_ibge: 2102200,
              nome: "Buriti",
              id_estado: 10
          },
          {
              codigo_ibge: 2102309,
              nome: "Buriti Bravo",
              id_estado: 10
          },
          {
              codigo_ibge: 2102325,
              nome: "Buriticupu",
              id_estado: 10
          },
          {
              codigo_ibge: 2102358,
              nome: "Buritirana",
              id_estado: 10
          },
          {
              codigo_ibge: 2102374,
              nome: "Cachoeira Grande",
              id_estado: 10
          },
          {
              codigo_ibge: 2102408,
              nome: "Cajapió",
              id_estado: 10
          },
          {
              codigo_ibge: 2102507,
              nome: "Cajari",
              id_estado: 10
          },
          {
              codigo_ibge: 2102556,
              nome: "Campestre do Maranhão",
              id_estado: 10
          },
          {
              codigo_ibge: 2102606,
              nome: "Cândido Mendes",
              id_estado: 10
          },
          {
              codigo_ibge: 2102705,
              nome: "Cantanhede",
              id_estado: 10
          },
          {
              codigo_ibge: 2102754,
              nome: "Capinzal do Norte",
              id_estado: 10
          },
          {
              codigo_ibge: 2102804,
              nome: "Carolina",
              id_estado: 10
          },
          {
              codigo_ibge: 2102903,
              nome: "Carutapera",
              id_estado: 10
          },
          {
              codigo_ibge: 2103000,
              nome: "Caxias",
              id_estado: 10
          },
          {
              codigo_ibge: 2103109,
              nome: "Cedral",
              id_estado: 10
          },
          {
              codigo_ibge: 2103125,
              nome: "Central do Maranhão",
              id_estado: 10
          },
          {
              codigo_ibge: 2103158,
              nome: "Centro do Guilherme",
              id_estado: 10
          },
          {
              codigo_ibge: 2103174,
              nome: "Centro Novo do Maranhão",
              id_estado: 10
          },
          {
              codigo_ibge: 2103208,
              nome: "Chapadinha",
              id_estado: 10
          },
          {
              codigo_ibge: 2103257,
              nome: "Cidelândia",
              id_estado: 10
          },
          {
              codigo_ibge: 2103307,
              nome: "Codó",
              id_estado: 10
          },
          {
              codigo_ibge: 2103406,
              nome: "Coelho Neto",
              id_estado: 10
          },
          {
              codigo_ibge: 2103505,
              nome: "Colinas",
              id_estado: 10
          },
          {
              codigo_ibge: 2103554,
              nome: "Conceição do Lago-Açu",
              id_estado: 10
          },
          {
              codigo_ibge: 2103604,
              nome: "Coroatá",
              id_estado: 10
          },
          {
              codigo_ibge: 2103703,
              nome: "Cururupu",
              id_estado: 10
          },
          {
              codigo_ibge: 2103752,
              nome: "Davinópolis",
              id_estado: 10
          },
          {
              codigo_ibge: 2103802,
              nome: "Dom Pedro",
              id_estado: 10
          },
          {
              codigo_ibge: 2103901,
              nome: "Duque Bacelar",
              id_estado: 10
          },
          {
              codigo_ibge: 2104008,
              nome: "Esperantinópolis",
              id_estado: 10
          },
          {
              codigo_ibge: 2104057,
              nome: "Estreito",
              id_estado: 10
          },
          {
              codigo_ibge: 2104073,
              nome: "Feira Nova do Maranhão",
              id_estado: 10
          },
          {
              codigo_ibge: 2104081,
              nome: "Fernando Falcão",
              id_estado: 10
          },
          {
              codigo_ibge: 2104099,
              nome: "Formosa da Serra Negra",
              id_estado: 10
          },
          {
              codigo_ibge: 2104107,
              nome: "Fortaleza dos Nogueiras",
              id_estado: 10
          },
          {
              codigo_ibge: 2104206,
              nome: "Fortuna",
              id_estado: 10
          },
          {
              codigo_ibge: 2104305,
              nome: "Godofredo Viana",
              id_estado: 10
          },
          {
              codigo_ibge: 2104404,
              nome: "Gonçalves Dias",
              id_estado: 10
          },
          {
              codigo_ibge: 2104503,
              nome: "Governador Archer",
              id_estado: 10
          },
          {
              codigo_ibge: 2104552,
              nome: "Governador Edison Lobão",
              id_estado: 10
          },
          {
              codigo_ibge: 2104602,
              nome: "Governador Eugênio Barros",
              id_estado: 10
          },
          {
              codigo_ibge: 2104628,
              nome: "Governador Luiz Rocha",
              id_estado: 10
          },
          {
              codigo_ibge: 2104651,
              nome: "Governador Newton Bello",
              id_estado: 10
          },
          {
              codigo_ibge: 2104677,
              nome: "Governador Nunes Freire",
              id_estado: 10
          },
          {
              codigo_ibge: 2104701,
              nome: "Graça Aranha",
              id_estado: 10
          },
          {
              codigo_ibge: 2104800,
              nome: "Grajaú",
              id_estado: 10
          },
          {
              codigo_ibge: 2104909,
              nome: "Guimarães",
              id_estado: 10
          },
          {
              codigo_ibge: 2105005,
              nome: "Humberto de Campos",
              id_estado: 10
          },
          {
              codigo_ibge: 2105104,
              nome: "Icatu",
              id_estado: 10
          },
          {
              codigo_ibge: 2105153,
              nome: "Igarapé do Meio",
              id_estado: 10
          },
          {
              codigo_ibge: 2105203,
              nome: "Igarapé Grande",
              id_estado: 10
          },
          {
              codigo_ibge: 2105302,
              nome: "Imperatriz",
              id_estado: 10
          },
          {
              codigo_ibge: 2105351,
              nome: "Itaipava do Grajaú",
              id_estado: 10
          },
          {
              codigo_ibge: 2105401,
              nome: "Itapecuru Mirim",
              id_estado: 10
          },
          {
              codigo_ibge: 2105427,
              nome: "Itinga do Maranhão",
              id_estado: 10
          },
          {
              codigo_ibge: 2105450,
              nome: "Jatobá",
              id_estado: 10
          },
          {
              codigo_ibge: 2105476,
              nome: "Jenipapo dos Vieiras",
              id_estado: 10
          },
          {
              codigo_ibge: 2105500,
              nome: "João Lisboa",
              id_estado: 10
          },
          {
              codigo_ibge: 2105609,
              nome: "Joselândia",
              id_estado: 10
          },
          {
              codigo_ibge: 2105658,
              nome: "Junco do Maranhão",
              id_estado: 10
          },
          {
              codigo_ibge: 2105708,
              nome: "Lago da Pedra",
              id_estado: 10
          },
          {
              codigo_ibge: 2105807,
              nome: "Lago do Junco",
              id_estado: 10
          },
          {
              codigo_ibge: 2105906,
              nome: "Lago Verde",
              id_estado: 10
          },
          {
              codigo_ibge: 2105922,
              nome: "Lagoa do Mato",
              id_estado: 10
          },
          {
              codigo_ibge: 2105948,
              nome: "Lago dos Rodrigues",
              id_estado: 10
          },
          {
              codigo_ibge: 2105963,
              nome: "Lagoa Grande do Maranhão",
              id_estado: 10
          },
          {
              codigo_ibge: 2105989,
              nome: "Lajeado Novo",
              id_estado: 10
          },
          {
              codigo_ibge: 2106003,
              nome: "Lima Campos",
              id_estado: 10
          },
          {
              codigo_ibge: 2106102,
              nome: "Loreto",
              id_estado: 10
          },
          {
              codigo_ibge: 2106201,
              nome: "Luís Domingues",
              id_estado: 10
          },
          {
              codigo_ibge: 2106300,
              nome: "Magalhães de Almeida",
              id_estado: 10
          },
          {
              codigo_ibge: 2106326,
              nome: "Maracaçumé",
              id_estado: 10
          },
          {
              codigo_ibge: 2106359,
              nome: "Marajá do Sena",
              id_estado: 10
          },
          {
              codigo_ibge: 2106375,
              nome: "Maranhãozinho",
              id_estado: 10
          },
          {
              codigo_ibge: 2106409,
              nome: "Mata Roma",
              id_estado: 10
          },
          {
              codigo_ibge: 2106508,
              nome: "Matinha",
              id_estado: 10
          },
          {
              codigo_ibge: 2106607,
              nome: "Matões",
              id_estado: 10
          },
          {
              codigo_ibge: 2106631,
              nome: "Matões do Norte",
              id_estado: 10
          },
          {
              codigo_ibge: 2106672,
              nome: "Milagres do Maranhão",
              id_estado: 10
          },
          {
              codigo_ibge: 2106706,
              nome: "Mirador",
              id_estado: 10
          },
          {
              codigo_ibge: 2106755,
              nome: "Miranda do Norte",
              id_estado: 10
          },
          {
              codigo_ibge: 2106805,
              nome: "Mirinzal",
              id_estado: 10
          },
          {
              codigo_ibge: 2106904,
              nome: "Monção",
              id_estado: 10
          },
          {
              codigo_ibge: 2107001,
              nome: "Montes Altos",
              id_estado: 10
          },
          {
              codigo_ibge: 2107100,
              nome: "Morros",
              id_estado: 10
          },
          {
              codigo_ibge: 2107209,
              nome: "Nina Rodrigues",
              id_estado: 10
          },
          {
              codigo_ibge: 2107258,
              nome: "Nova Colinas",
              id_estado: 10
          },
          {
              codigo_ibge: 2107308,
              nome: "Nova Iorque",
              id_estado: 10
          },
          {
              codigo_ibge: 2107357,
              nome: "Nova Olinda do Maranhão",
              id_estado: 10
          },
          {
              codigo_ibge: 2107407,
              nome: "Olho D'Água das Cunhãs",
              id_estado: 10
          },
          {
              codigo_ibge: 2107456,
              nome: "Olinda Nova do Maranhão",
              id_estado: 10
          },
          {
              codigo_ibge: 2107506,
              nome: "Paço do Lumiar",
              id_estado: 10
          },
          {
              codigo_ibge: 2107605,
              nome: "Palmeirândia",
              id_estado: 10
          },
          {
              codigo_ibge: 2107704,
              nome: "Paraibano",
              id_estado: 10
          },
          {
              codigo_ibge: 2107803,
              nome: "Parnarama",
              id_estado: 10
          },
          {
              codigo_ibge: 2107902,
              nome: "Passagem Franca",
              id_estado: 10
          },
          {
              codigo_ibge: 2108009,
              nome: "Pastos Bons",
              id_estado: 10
          },
          {
              codigo_ibge: 2108058,
              nome: "Paulino Neves",
              id_estado: 10
          },
          {
              codigo_ibge: 2108108,
              nome: "Paulo Ramos",
              id_estado: 10
          },
          {
              codigo_ibge: 2108207,
              nome: "Pedreiras",
              id_estado: 10
          },
          {
              codigo_ibge: 2108256,
              nome: "Pedro do Rosário",
              id_estado: 10
          },
          {
              codigo_ibge: 2108306,
              nome: "Penalva",
              id_estado: 10
          },
          {
              codigo_ibge: 2108405,
              nome: "Peri Mirim",
              id_estado: 10
          },
          {
              codigo_ibge: 2108454,
              nome: "Peritoró",
              id_estado: 10
          },
          {
              codigo_ibge: 2108504,
              nome: "Pindaré-Mirim",
              id_estado: 10
          },
          {
              codigo_ibge: 2108603,
              nome: "Pinheiro",
              id_estado: 10
          },
          {
              codigo_ibge: 2108702,
              nome: "Pio XII",
              id_estado: 10
          },
          {
              codigo_ibge: 2108801,
              nome: "Pirapemas",
              id_estado: 10
          },
          {
              codigo_ibge: 2108900,
              nome: "Poção de Pedras",
              id_estado: 10
          },
          {
              codigo_ibge: 2109007,
              nome: "Porto Franco",
              id_estado: 10
          },
          {
              codigo_ibge: 2109056,
              nome: "Porto Rico do Maranhão",
              id_estado: 10
          },
          {
              codigo_ibge: 2109106,
              nome: "Presidente Dutra",
              id_estado: 10
          },
          {
              codigo_ibge: 2109205,
              nome: "Presidente Juscelino",
              id_estado: 10
          },
          {
              codigo_ibge: 2109239,
              nome: "Presidente Médici",
              id_estado: 10
          },
          {
              codigo_ibge: 2109270,
              nome: "Presidente Sarney",
              id_estado: 10
          },
          {
              codigo_ibge: 2109304,
              nome: "Presidente Vargas",
              id_estado: 10
          },
          {
              codigo_ibge: 2109403,
              nome: "Primeira Cruz",
              id_estado: 10
          },
          {
              codigo_ibge: 2109452,
              nome: "Raposa",
              id_estado: 10
          },
          {
              codigo_ibge: 2109502,
              nome: "Riachão",
              id_estado: 10
          },
          {
              codigo_ibge: 2109551,
              nome: "Ribamar Fiquene",
              id_estado: 10
          },
          {
              codigo_ibge: 2109601,
              nome: "Rosário",
              id_estado: 10
          },
          {
              codigo_ibge: 2109700,
              nome: "Sambaíba",
              id_estado: 10
          },
          {
              codigo_ibge: 2109759,
              nome: "Santa Filomena do Maranhão",
              id_estado: 10
          },
          {
              codigo_ibge: 2109809,
              nome: "Santa Helena",
              id_estado: 10
          },
          {
              codigo_ibge: 2109908,
              nome: "Santa Inês",
              id_estado: 10
          },
          {
              codigo_ibge: 2110005,
              nome: "Santa Luzia",
              id_estado: 10
          },
          {
              codigo_ibge: 2110039,
              nome: "Santa Luzia do Paruá",
              id_estado: 10
          },
          {
              codigo_ibge: 2110104,
              nome: "Santa Quitéria do Maranhão",
              id_estado: 10
          },
          {
              codigo_ibge: 2110203,
              nome: "Santa Rita",
              id_estado: 10
          },
          {
              codigo_ibge: 2110237,
              nome: "Santana do Maranhão",
              id_estado: 10
          },
          {
              codigo_ibge: 2110278,
              nome: "Santo Amaro do Maranhão",
              id_estado: 10
          },
          {
              codigo_ibge: 2110302,
              nome: "Santo Antônio dos Lopes",
              id_estado: 10
          },
          {
              codigo_ibge: 2110401,
              nome: "São Benedito do Rio Preto",
              id_estado: 10
          },
          {
              codigo_ibge: 2110500,
              nome: "São Bento",
              id_estado: 10
          },
          {
              codigo_ibge: 2110609,
              nome: "São Bernardo",
              id_estado: 10
          },
          {
              codigo_ibge: 2110658,
              nome: "São Domingos do Azeitão",
              id_estado: 10
          },
          {
              codigo_ibge: 2110708,
              nome: "São Domingos do Maranhão",
              id_estado: 10
          },
          {
              codigo_ibge: 2110807,
              nome: "São Félix de Balsas",
              id_estado: 10
          },
          {
              codigo_ibge: 2110856,
              nome: "São Francisco do Brejão",
              id_estado: 10
          },
          {
              codigo_ibge: 2110906,
              nome: "São Francisco do Maranhão",
              id_estado: 10
          },
          {
              codigo_ibge: 2111003,
              nome: "São João Batista",
              id_estado: 10
          },
          {
              codigo_ibge: 2111029,
              nome: "São João do Carú",
              id_estado: 10
          },
          {
              codigo_ibge: 2111052,
              nome: "São João do Paraíso",
              id_estado: 10
          },
          {
              codigo_ibge: 2111078,
              nome: "São João do Soter",
              id_estado: 10
          },
          {
              codigo_ibge: 2111102,
              nome: "São João dos Patos",
              id_estado: 10
          },
          {
              codigo_ibge: 2111201,
              nome: "São José de Ribamar",
              id_estado: 10
          },
          {
              codigo_ibge: 2111250,
              nome: "São José dos Basílios",
              id_estado: 10
          },
          {
              codigo_ibge: 2111300,
              nome: "São Luís",
              id_estado: 10
          },
          {
              codigo_ibge: 2111409,
              nome: "São Luís Gonzaga do Maranhão",
              id_estado: 10
          },
          {
              codigo_ibge: 2111508,
              nome: "São Mateus do Maranhão",
              id_estado: 10
          },
          {
              codigo_ibge: 2111532,
              nome: "São Pedro da Água Branca",
              id_estado: 10
          },
          {
              codigo_ibge: 2111573,
              nome: "São Pedro dos Crentes",
              id_estado: 10
          },
          {
              codigo_ibge: 2111607,
              nome: "São Raimundo das Mangabeiras",
              id_estado: 10
          },
          {
              codigo_ibge: 2111631,
              nome: "São Raimundo do Doca Bezerra",
              id_estado: 10
          },
          {
              codigo_ibge: 2111672,
              nome: "São Roberto",
              id_estado: 10
          },
          {
              codigo_ibge: 2111706,
              nome: "São Vicente Ferrer",
              id_estado: 10
          },
          {
              codigo_ibge: 2111722,
              nome: "Satubinha",
              id_estado: 10
          },
          {
              codigo_ibge: 2111748,
              nome: "Senador Alexandre Costa",
              id_estado: 10
          },
          {
              codigo_ibge: 2111763,
              nome: "Senador La Rocque",
              id_estado: 10
          },
          {
              codigo_ibge: 2111789,
              nome: "Serrano do Maranhão",
              id_estado: 10
          },
          {
              codigo_ibge: 2111805,
              nome: "Sítio Novo",
              id_estado: 10
          },
          {
              codigo_ibge: 2111904,
              nome: "Sucupira do Norte",
              id_estado: 10
          },
          {
              codigo_ibge: 2111953,
              nome: "Sucupira do Riachão",
              id_estado: 10
          },
          {
              codigo_ibge: 2112001,
              nome: "Tasso Fragoso",
              id_estado: 10
          },
          {
              codigo_ibge: 2112100,
              nome: "Timbiras",
              id_estado: 10
          },
          {
              codigo_ibge: 2112209,
              nome: "Timon",
              id_estado: 10
          },
          {
              codigo_ibge: 2112233,
              nome: "Trizidela do Vale",
              id_estado: 10
          },
          {
              codigo_ibge: 2112274,
              nome: "Tufilândia",
              id_estado: 10
          },
          {
              codigo_ibge: 2112308,
              nome: "Tuntum",
              id_estado: 10
          },
          {
              codigo_ibge: 2112407,
              nome: "Turiaçu",
              id_estado: 10
          },
          {
              codigo_ibge: 2112456,
              nome: "Turilândia",
              id_estado: 10
          },
          {
              codigo_ibge: 2112506,
              nome: "Tutóia",
              id_estado: 10
          },
          {
              codigo_ibge: 2112605,
              nome: "Urbano Santos",
              id_estado: 10
          },
          {
              codigo_ibge: 2112704,
              nome: "Vargem Grande",
              id_estado: 10
          },
          {
              codigo_ibge: 2112803,
              nome: "Viana",
              id_estado: 10
          },
          {
              codigo_ibge: 2112852,
              nome: "Vila Nova dos Martírios",
              id_estado: 10
          },
          {
              codigo_ibge: 2112902,
              nome: "Vitória do Mearim",
              id_estado: 10
          },
          {
              codigo_ibge: 2113009,
              nome: "Vitorino Freire",
              id_estado: 10
          },
          {
              codigo_ibge: 2114007,
              nome: "Zé Doca",
              id_estado: 10
          },
          {
              codigo_ibge: 2200053,
              nome: "Acauã",
              id_estado: 18
          },
          {
              codigo_ibge: 2200103,
              nome: "Agricolândia",
              id_estado: 18
          },
          {
              codigo_ibge: 2200202,
              nome: "Água Branca",
              id_estado: 18
          },
          {
              codigo_ibge: 2200251,
              nome: "Alagoinha do Piauí",
              id_estado: 18
          },
          {
              codigo_ibge: 2200277,
              nome: "Alegrete do Piauí",
              id_estado: 18
          },
          {
              codigo_ibge: 2200301,
              nome: "Alto Longá",
              id_estado: 18
          },
          {
              codigo_ibge: 2200400,
              nome: "Altos",
              id_estado: 18
          },
          {
              codigo_ibge: 2200459,
              nome: "Alvorada do Gurguéia",
              id_estado: 18
          },
          {
              codigo_ibge: 2200509,
              nome: "Amarante",
              id_estado: 18
          },
          {
              codigo_ibge: 2200608,
              nome: "Angical do Piauí",
              id_estado: 18
          },
          {
              codigo_ibge: 2200707,
              nome: "Anísio de Abreu",
              id_estado: 18
          },
          {
              codigo_ibge: 2200806,
              nome: "Antônio Almeida",
              id_estado: 18
          },
          {
              codigo_ibge: 2200905,
              nome: "Aroazes",
              id_estado: 18
          },
          {
              codigo_ibge: 2200954,
              nome: "Aroeiras do Itaim",
              id_estado: 18
          },
          {
              codigo_ibge: 2201002,
              nome: "Arraial",
              id_estado: 18
          },
          {
              codigo_ibge: 2201051,
              nome: "Assunção do Piauí",
              id_estado: 18
          },
          {
              codigo_ibge: 2201101,
              nome: "Avelino Lopes",
              id_estado: 18
          },
          {
              codigo_ibge: 2201150,
              nome: "Baixa Grande do Ribeiro",
              id_estado: 18
          },
          {
              codigo_ibge: 2201176,
              nome: "Barra D'Alcântara",
              id_estado: 18
          },
          {
              codigo_ibge: 2201200,
              nome: "Barras",
              id_estado: 18
          },
          {
              codigo_ibge: 2201309,
              nome: "Barreiras do Piauí",
              id_estado: 18
          },
          {
              codigo_ibge: 2201408,
              nome: "Barro Duro",
              id_estado: 18
          },
          {
              codigo_ibge: 2201507,
              nome: "Batalha",
              id_estado: 18
          },
          {
              codigo_ibge: 2201556,
              nome: "Bela Vista do Piauí",
              id_estado: 18
          },
          {
              codigo_ibge: 2201572,
              nome: "Belém do Piauí",
              id_estado: 18
          },
          {
              codigo_ibge: 2201606,
              nome: "Beneditinos",
              id_estado: 18
          },
          {
              codigo_ibge: 2201705,
              nome: "Bertolínia",
              id_estado: 18
          },
          {
              codigo_ibge: 2201739,
              nome: "Betânia do Piauí",
              id_estado: 18
          },
          {
              codigo_ibge: 2201770,
              nome: "Boa Hora",
              id_estado: 18
          },
          {
              codigo_ibge: 2201804,
              nome: "Bocaina",
              id_estado: 18
          },
          {
              codigo_ibge: 2201903,
              nome: "Bom Jesus",
              id_estado: 18
          },
          {
              codigo_ibge: 2201919,
              nome: "Bom Princípio do Piauí",
              id_estado: 18
          },
          {
              codigo_ibge: 2201929,
              nome: "Bonfim do Piauí",
              id_estado: 18
          },
          {
              codigo_ibge: 2201945,
              nome: "Boqueirão do Piauí",
              id_estado: 18
          },
          {
              codigo_ibge: 2201960,
              nome: "Brasileira",
              id_estado: 18
          },
          {
              codigo_ibge: 2201988,
              nome: "Brejo do Piauí",
              id_estado: 18
          },
          {
              codigo_ibge: 2202000,
              nome: "Buriti dos Lopes",
              id_estado: 18
          },
          {
              codigo_ibge: 2202026,
              nome: "Buriti dos Montes",
              id_estado: 18
          },
          {
              codigo_ibge: 2202059,
              nome: "Cabeceiras do Piauí",
              id_estado: 18
          },
          {
              codigo_ibge: 2202075,
              nome: "Cajazeiras do Piauí",
              id_estado: 18
          },
          {
              codigo_ibge: 2202083,
              nome: "Cajueiro da Praia",
              id_estado: 18
          },
          {
              codigo_ibge: 2202091,
              nome: "Caldeirão Grande do Piauí",
              id_estado: 18
          },
          {
              codigo_ibge: 2202109,
              nome: "Campinas do Piauí",
              id_estado: 18
          },
          {
              codigo_ibge: 2202117,
              nome: "Campo Alegre do Fidalgo",
              id_estado: 18
          },
          {
              codigo_ibge: 2202133,
              nome: "Campo Grande do Piauí",
              id_estado: 18
          },
          {
              codigo_ibge: 2202174,
              nome: "Campo Largo do Piauí",
              id_estado: 18
          },
          {
              codigo_ibge: 2202208,
              nome: "Campo Maior",
              id_estado: 18
          },
          {
              codigo_ibge: 2202251,
              nome: "Canavieira",
              id_estado: 18
          },
          {
              codigo_ibge: 2202307,
              nome: "Canto do Buriti",
              id_estado: 18
          },
          {
              codigo_ibge: 2202406,
              nome: "Capitão de Campos",
              id_estado: 18
          },
          {
              codigo_ibge: 2202455,
              nome: "Capitão Gervásio Oliveira",
              id_estado: 18
          },
          {
              codigo_ibge: 2202505,
              nome: "Caracol",
              id_estado: 18
          },
          {
              codigo_ibge: 2202539,
              nome: "Caraúbas do Piauí",
              id_estado: 18
          },
          {
              codigo_ibge: 2202554,
              nome: "Caridade do Piauí",
              id_estado: 18
          },
          {
              codigo_ibge: 2202604,
              nome: "Castelo do Piauí",
              id_estado: 18
          },
          {
              codigo_ibge: 2202653,
              nome: "Caxingó",
              id_estado: 18
          },
          {
              codigo_ibge: 2202703,
              nome: "Cocal",
              id_estado: 18
          },
          {
              codigo_ibge: 2202711,
              nome: "Cocal de Telha",
              id_estado: 18
          },
          {
              codigo_ibge: 2202729,
              nome: "Cocal dos Alves",
              id_estado: 18
          },
          {
              codigo_ibge: 2202737,
              nome: "Coivaras",
              id_estado: 18
          },
          {
              codigo_ibge: 2202752,
              nome: "Colônia do Gurguéia",
              id_estado: 18
          },
          {
              codigo_ibge: 2202778,
              nome: "Colônia do Piauí",
              id_estado: 18
          },
          {
              codigo_ibge: 2202802,
              nome: "Conceição do Canindé",
              id_estado: 18
          },
          {
              codigo_ibge: 2202851,
              nome: "Coronel José Dias",
              id_estado: 18
          },
          {
              codigo_ibge: 2202901,
              nome: "Corrente",
              id_estado: 18
          },
          {
              codigo_ibge: 2203008,
              nome: "Cristalândia do Piauí",
              id_estado: 18
          },
          {
              codigo_ibge: 2203107,
              nome: "Cristino Castro",
              id_estado: 18
          },
          {
              codigo_ibge: 2203206,
              nome: "Curimatá",
              id_estado: 18
          },
          {
              codigo_ibge: 2203230,
              nome: "Currais",
              id_estado: 18
          },
          {
              codigo_ibge: 2203255,
              nome: "Curralinhos",
              id_estado: 18
          },
          {
              codigo_ibge: 2203271,
              nome: "Curral Novo do Piauí",
              id_estado: 18
          },
          {
              codigo_ibge: 2203305,
              nome: "Demerval Lobão",
              id_estado: 18
          },
          {
              codigo_ibge: 2203354,
              nome: "Dirceu Arcoverde",
              id_estado: 18
          },
          {
              codigo_ibge: 2203404,
              nome: "Dom Expedito Lopes",
              id_estado: 18
          },
          {
              codigo_ibge: 2203420,
              nome: "Domingos Mourão",
              id_estado: 18
          },
          {
              codigo_ibge: 2203453,
              nome: "Dom Inocêncio",
              id_estado: 18
          },
          {
              codigo_ibge: 2203503,
              nome: "Elesbão Veloso",
              id_estado: 18
          },
          {
              codigo_ibge: 2203602,
              nome: "Eliseu Martins",
              id_estado: 18
          },
          {
              codigo_ibge: 2203701,
              nome: "Esperantina",
              id_estado: 18
          },
          {
              codigo_ibge: 2203750,
              nome: "Fartura do Piauí",
              id_estado: 18
          },
          {
              codigo_ibge: 2203800,
              nome: "Flores do Piauí",
              id_estado: 18
          },
          {
              codigo_ibge: 2203859,
              nome: "Floresta do Piauí",
              id_estado: 18
          },
          {
              codigo_ibge: 2203909,
              nome: "Floriano",
              id_estado: 18
          },
          {
              codigo_ibge: 2204006,
              nome: "Francinópolis",
              id_estado: 18
          },
          {
              codigo_ibge: 2204105,
              nome: "Francisco Ayres",
              id_estado: 18
          },
          {
              codigo_ibge: 2204154,
              nome: "Francisco Macedo",
              id_estado: 18
          },
          {
              codigo_ibge: 2204204,
              nome: "Francisco Santos",
              id_estado: 18
          },
          {
              codigo_ibge: 2204303,
              nome: "Fronteiras",
              id_estado: 18
          },
          {
              codigo_ibge: 2204352,
              nome: "Geminiano",
              id_estado: 18
          },
          {
              codigo_ibge: 2204402,
              nome: "Gilbués",
              id_estado: 18
          },
          {
              codigo_ibge: 2204501,
              nome: "Guadalupe",
              id_estado: 18
          },
          {
              codigo_ibge: 2204550,
              nome: "Guaribas",
              id_estado: 18
          },
          {
              codigo_ibge: 2204600,
              nome: "Hugo Napoleão",
              id_estado: 18
          },
          {
              codigo_ibge: 2204659,
              nome: "Ilha Grande",
              id_estado: 18
          },
          {
              codigo_ibge: 2204709,
              nome: "Inhuma",
              id_estado: 18
          },
          {
              codigo_ibge: 2204808,
              nome: "Ipiranga do Piauí",
              id_estado: 18
          },
          {
              codigo_ibge: 2204907,
              nome: "Isaías Coelho",
              id_estado: 18
          },
          {
              codigo_ibge: 2205003,
              nome: "Itainópolis",
              id_estado: 18
          },
          {
              codigo_ibge: 2205102,
              nome: "Itaueira",
              id_estado: 18
          },
          {
              codigo_ibge: 2205151,
              nome: "Jacobina do Piauí",
              id_estado: 18
          },
          {
              codigo_ibge: 2205201,
              nome: "Jaicós",
              id_estado: 18
          },
          {
              codigo_ibge: 2205250,
              nome: "Jardim do Mulato",
              id_estado: 18
          },
          {
              codigo_ibge: 2205276,
              nome: "Jatobá do Piauí",
              id_estado: 18
          },
          {
              codigo_ibge: 2205300,
              nome: "Jerumenha",
              id_estado: 18
          },
          {
              codigo_ibge: 2205359,
              nome: "João Costa",
              id_estado: 18
          },
          {
              codigo_ibge: 2205409,
              nome: "Joaquim Pires",
              id_estado: 18
          },
          {
              codigo_ibge: 2205458,
              nome: "Joca Marques",
              id_estado: 18
          },
          {
              codigo_ibge: 2205508,
              nome: "José de Freitas",
              id_estado: 18
          },
          {
              codigo_ibge: 2205516,
              nome: "Juazeiro do Piauí",
              id_estado: 18
          },
          {
              codigo_ibge: 2205524,
              nome: "Júlio Borges",
              id_estado: 18
          },
          {
              codigo_ibge: 2205532,
              nome: "Jurema",
              id_estado: 18
          },
          {
              codigo_ibge: 2205540,
              nome: "Lagoinha do Piauí",
              id_estado: 18
          },
          {
              codigo_ibge: 2205557,
              nome: "Lagoa Alegre",
              id_estado: 18
          },
          {
              codigo_ibge: 2205565,
              nome: "Lagoa do Barro do Piauí",
              id_estado: 18
          },
          {
              codigo_ibge: 2205573,
              nome: "Lagoa de São Francisco",
              id_estado: 18
          },
          {
              codigo_ibge: 2205581,
              nome: "Lagoa do Piauí",
              id_estado: 18
          },
          {
              codigo_ibge: 2205599,
              nome: "Lagoa do Sítio",
              id_estado: 18
          },
          {
              codigo_ibge: 2205607,
              nome: "Landri Sales",
              id_estado: 18
          },
          {
              codigo_ibge: 2205706,
              nome: "Luís Correia",
              id_estado: 18
          },
          {
              codigo_ibge: 2205805,
              nome: "Luzilândia",
              id_estado: 18
          },
          {
              codigo_ibge: 2205854,
              nome: "Madeiro",
              id_estado: 18
          },
          {
              codigo_ibge: 2205904,
              nome: "Manoel Emídio",
              id_estado: 18
          },
          {
              codigo_ibge: 2205953,
              nome: "Marcolândia",
              id_estado: 18
          },
          {
              codigo_ibge: 2206001,
              nome: "Marcos Parente",
              id_estado: 18
          },
          {
              codigo_ibge: 2206050,
              nome: "Massapê do Piauí",
              id_estado: 18
          },
          {
              codigo_ibge: 2206100,
              nome: "Matias Olímpio",
              id_estado: 18
          },
          {
              codigo_ibge: 2206209,
              nome: "Miguel Alves",
              id_estado: 18
          },
          {
              codigo_ibge: 2206308,
              nome: "Miguel Leão",
              id_estado: 18
          },
          {
              codigo_ibge: 2206357,
              nome: "Milton Brandão",
              id_estado: 18
          },
          {
              codigo_ibge: 2206407,
              nome: "Monsenhor Gil",
              id_estado: 18
          },
          {
              codigo_ibge: 2206506,
              nome: "Monsenhor Hipólito",
              id_estado: 18
          },
          {
              codigo_ibge: 2206605,
              nome: "Monte Alegre do Piauí",
              id_estado: 18
          },
          {
              codigo_ibge: 2206654,
              nome: "Morro Cabeça no Tempo",
              id_estado: 18
          },
          {
              codigo_ibge: 2206670,
              nome: "Morro do Chapéu do Piauí",
              id_estado: 18
          },
          {
              codigo_ibge: 2206696,
              nome: "Murici dos Portelas",
              id_estado: 18
          },
          {
              codigo_ibge: 2206704,
              nome: "Nazaré do Piauí",
              id_estado: 18
          },
          {
              codigo_ibge: 2206720,
              nome: "Nazária",
              id_estado: 18
          },
          {
              codigo_ibge: 2206753,
              nome: "Nossa Senhora de Nazaré",
              id_estado: 18
          },
          {
              codigo_ibge: 2206803,
              nome: "Nossa Senhora dos Remédios",
              id_estado: 18
          },
          {
              codigo_ibge: 2206902,
              nome: "Novo Oriente do Piauí",
              id_estado: 18
          },
          {
              codigo_ibge: 2206951,
              nome: "Novo Santo Antônio",
              id_estado: 18
          },
          {
              codigo_ibge: 2207009,
              nome: "Oeiras",
              id_estado: 18
          },
          {
              codigo_ibge: 2207108,
              nome: "Olho D'Água do Piauí",
              id_estado: 18
          },
          {
              codigo_ibge: 2207207,
              nome: "Padre Marcos",
              id_estado: 18
          },
          {
              codigo_ibge: 2207306,
              nome: "Paes Landim",
              id_estado: 18
          },
          {
              codigo_ibge: 2207355,
              nome: "Pajeú do Piauí",
              id_estado: 18
          },
          {
              codigo_ibge: 2207405,
              nome: "Palmeira do Piauí",
              id_estado: 18
          },
          {
              codigo_ibge: 2207504,
              nome: "Palmeirais",
              id_estado: 18
          },
          {
              codigo_ibge: 2207553,
              nome: "Paquetá",
              id_estado: 18
          },
          {
              codigo_ibge: 2207603,
              nome: "Parnaguá",
              id_estado: 18
          },
          {
              codigo_ibge: 2207702,
              nome: "Parnaíba",
              id_estado: 18
          },
          {
              codigo_ibge: 2207751,
              nome: "Passagem Franca do Piauí",
              id_estado: 18
          },
          {
              codigo_ibge: 2207777,
              nome: "Patos do Piauí",
              id_estado: 18
          },
          {
              codigo_ibge: 2207793,
              nome: "Pau D'Arco do Piauí",
              id_estado: 18
          },
          {
              codigo_ibge: 2207801,
              nome: "Paulistana",
              id_estado: 18
          },
          {
              codigo_ibge: 2207850,
              nome: "Pavussu",
              id_estado: 18
          },
          {
              codigo_ibge: 2207900,
              nome: "Pedro II",
              id_estado: 18
          },
          {
              codigo_ibge: 2207934,
              nome: "Pedro Laurentino",
              id_estado: 18
          },
          {
              codigo_ibge: 2207959,
              nome: "Nova Santa Rita",
              id_estado: 18
          },
          {
              codigo_ibge: 2208007,
              nome: "Picos",
              id_estado: 18
          },
          {
              codigo_ibge: 2208106,
              nome: "Pimenteiras",
              id_estado: 18
          },
          {
              codigo_ibge: 2208205,
              nome: "Pio IX",
              id_estado: 18
          },
          {
              codigo_ibge: 2208304,
              nome: "Piracuruca",
              id_estado: 18
          },
          {
              codigo_ibge: 2208403,
              nome: "Piripiri",
              id_estado: 18
          },
          {
              codigo_ibge: 2208502,
              nome: "Porto",
              id_estado: 18
          },
          {
              codigo_ibge: 2208551,
              nome: "Porto Alegre do Piauí",
              id_estado: 18
          },
          {
              codigo_ibge: 2208601,
              nome: "Prata do Piauí",
              id_estado: 18
          },
          {
              codigo_ibge: 2208650,
              nome: "Queimada Nova",
              id_estado: 18
          },
          {
              codigo_ibge: 2208700,
              nome: "Redenção do Gurguéia",
              id_estado: 18
          },
          {
              codigo_ibge: 2208809,
              nome: "Regeneração",
              id_estado: 18
          },
          {
              codigo_ibge: 2208858,
              nome: "Riacho Frio",
              id_estado: 18
          },
          {
              codigo_ibge: 2208874,
              nome: "Ribeira do Piauí",
              id_estado: 18
          },
          {
              codigo_ibge: 2208908,
              nome: "Ribeiro Gonçalves",
              id_estado: 18
          },
          {
              codigo_ibge: 2209005,
              nome: "Rio Grande do Piauí",
              id_estado: 18
          },
          {
              codigo_ibge: 2209104,
              nome: "Santa Cruz do Piauí",
              id_estado: 18
          },
          {
              codigo_ibge: 2209153,
              nome: "Santa Cruz dos Milagres",
              id_estado: 18
          },
          {
              codigo_ibge: 2209203,
              nome: "Santa Filomena",
              id_estado: 18
          },
          {
              codigo_ibge: 2209302,
              nome: "Santa Luz",
              id_estado: 18
          },
          {
              codigo_ibge: 2209351,
              nome: "Santana do Piauí",
              id_estado: 18
          },
          {
              codigo_ibge: 2209377,
              nome: "Santa Rosa do Piauí",
              id_estado: 18
          },
          {
              codigo_ibge: 2209401,
              nome: "Santo Antônio de Lisboa",
              id_estado: 18
          },
          {
              codigo_ibge: 2209450,
              nome: "Santo Antônio dos Milagres",
              id_estado: 18
          },
          {
              codigo_ibge: 2209500,
              nome: "Santo Inácio do Piauí",
              id_estado: 18
          },
          {
              codigo_ibge: 2209559,
              nome: "São Braz do Piauí",
              id_estado: 18
          },
          {
              codigo_ibge: 2209609,
              nome: "São Félix do Piauí",
              id_estado: 18
          },
          {
              codigo_ibge: 2209658,
              nome: "São Francisco de Assis do Piauí",
              id_estado: 18
          },
          {
              codigo_ibge: 2209708,
              nome: "São Francisco do Piauí",
              id_estado: 18
          },
          {
              codigo_ibge: 2209757,
              nome: "São Gonçalo do Gurguéia",
              id_estado: 18
          },
          {
              codigo_ibge: 2209807,
              nome: "São Gonçalo do Piauí",
              id_estado: 18
          },
          {
              codigo_ibge: 2209856,
              nome: "São João da Canabrava",
              id_estado: 18
          },
          {
              codigo_ibge: 2209872,
              nome: "São João da Fronteira",
              id_estado: 18
          },
          {
              codigo_ibge: 2209906,
              nome: "São João da Serra",
              id_estado: 18
          },
          {
              codigo_ibge: 2209955,
              nome: "São João da Varjota",
              id_estado: 18
          },
          {
              codigo_ibge: 2209971,
              nome: "São João do Arraial",
              id_estado: 18
          },
          {
              codigo_ibge: 2210003,
              nome: "São João do Piauí",
              id_estado: 18
          },
          {
              codigo_ibge: 2210052,
              nome: "São José do Divino",
              id_estado: 18
          },
          {
              codigo_ibge: 2210102,
              nome: "São José do Peixe",
              id_estado: 18
          },
          {
              codigo_ibge: 2210201,
              nome: "São José do Piauí",
              id_estado: 18
          },
          {
              codigo_ibge: 2210300,
              nome: "São Julião",
              id_estado: 18
          },
          {
              codigo_ibge: 2210359,
              nome: "São Lourenço do Piauí",
              id_estado: 18
          },
          {
              codigo_ibge: 2210375,
              nome: "São Luis do Piauí",
              id_estado: 18
          },
          {
              codigo_ibge: 2210383,
              nome: "São Miguel da Baixa Grande",
              id_estado: 18
          },
          {
              codigo_ibge: 2210391,
              nome: "São Miguel do Fidalgo",
              id_estado: 18
          },
          {
              codigo_ibge: 2210409,
              nome: "São Miguel do Tapuio",
              id_estado: 18
          },
          {
              codigo_ibge: 2210508,
              nome: "São Pedro do Piauí",
              id_estado: 18
          },
          {
              codigo_ibge: 2210607,
              nome: "São Raimundo Nonato",
              id_estado: 18
          },
          {
              codigo_ibge: 2210623,
              nome: "Sebastião Barros",
              id_estado: 18
          },
          {
              codigo_ibge: 2210631,
              nome: "Sebastião Leal",
              id_estado: 18
          },
          {
              codigo_ibge: 2210656,
              nome: "Sigefredo Pacheco",
              id_estado: 18
          },
          {
              codigo_ibge: 2210706,
              nome: "Simões",
              id_estado: 18
          },
          {
              codigo_ibge: 2210805,
              nome: "Simplício Mendes",
              id_estado: 18
          },
          {
              codigo_ibge: 2210904,
              nome: "Socorro do Piauí",
              id_estado: 18
          },
          {
              codigo_ibge: 2210938,
              nome: "Sussuapara",
              id_estado: 18
          },
          {
              codigo_ibge: 2210953,
              nome: "Tamboril do Piauí",
              id_estado: 18
          },
          {
              codigo_ibge: 2210979,
              nome: "Tanque do Piauí",
              id_estado: 18
          },
          {
              codigo_ibge: 2211001,
              nome: "Teresina",
              id_estado: 18
          },
          {
              codigo_ibge: 2211100,
              nome: "União",
              id_estado: 18
          },
          {
              codigo_ibge: 2211209,
              nome: "Uruçuí",
              id_estado: 18
          },
          {
              codigo_ibge: 2211308,
              nome: "Valença do Piauí",
              id_estado: 18
          },
          {
              codigo_ibge: 2211357,
              nome: "Várzea Branca",
              id_estado: 18
          },
          {
              codigo_ibge: 2211407,
              nome: "Várzea Grande",
              id_estado: 18
          },
          {
              codigo_ibge: 2211506,
              nome: "Vera Mendes",
              id_estado: 18
          },
          {
              codigo_ibge: 2211605,
              nome: "Vila Nova do Piauí",
              id_estado: 18
          },
          {
              codigo_ibge: 2211704,
              nome: "Wall Ferraz",
              id_estado: 18
          },
          {
              codigo_ibge: 2300101,
              nome: "Abaiara",
              id_estado: 6
          },
          {
              codigo_ibge: 2300150,
              nome: "Acarape",
              id_estado: 6
          },
          {
              codigo_ibge: 2300200,
              nome: "Acaraú",
              id_estado: 6
          },
          {
              codigo_ibge: 2300309,
              nome: "Acopiara",
              id_estado: 6
          },
          {
              codigo_ibge: 2300408,
              nome: "Aiuaba",
              id_estado: 6
          },
          {
              codigo_ibge: 2300507,
              nome: "Alcântaras",
              id_estado: 6
          },
          {
              codigo_ibge: 2300606,
              nome: "Altaneira",
              id_estado: 6
          },
          {
              codigo_ibge: 2300705,
              nome: "Alto Santo",
              id_estado: 6
          },
          {
              codigo_ibge: 2300754,
              nome: "Amontada",
              id_estado: 6
          },
          {
              codigo_ibge: 2300804,
              nome: "Antonina do Norte",
              id_estado: 6
          },
          {
              codigo_ibge: 2300903,
              nome: "Apuiarés",
              id_estado: 6
          },
          {
              codigo_ibge: 2301000,
              nome: "Aquiraz",
              id_estado: 6
          },
          {
              codigo_ibge: 2301109,
              nome: "Aracati",
              id_estado: 6
          },
          {
              codigo_ibge: 2301208,
              nome: "Aracoiaba",
              id_estado: 6
          },
          {
              codigo_ibge: 2301257,
              nome: "Ararendá",
              id_estado: 6
          },
          {
              codigo_ibge: 2301307,
              nome: "Araripe",
              id_estado: 6
          },
          {
              codigo_ibge: 2301406,
              nome: "Aratuba",
              id_estado: 6
          },
          {
              codigo_ibge: 2301505,
              nome: "Arneiroz",
              id_estado: 6
          },
          {
              codigo_ibge: 2301604,
              nome: "Assaré",
              id_estado: 6
          },
          {
              codigo_ibge: 2301703,
              nome: "Aurora",
              id_estado: 6
          },
          {
              codigo_ibge: 2301802,
              nome: "Baixio",
              id_estado: 6
          },
          {
              codigo_ibge: 2301851,
              nome: "Banabuiú",
              id_estado: 6
          },
          {
              codigo_ibge: 2301901,
              nome: "Barbalha",
              id_estado: 6
          },
          {
              codigo_ibge: 2301950,
              nome: "Barreira",
              id_estado: 6
          },
          {
              codigo_ibge: 2302008,
              nome: "Barro",
              id_estado: 6
          },
          {
              codigo_ibge: 2302057,
              nome: "Barroquinha",
              id_estado: 6
          },
          {
              codigo_ibge: 2302107,
              nome: "Baturité",
              id_estado: 6
          },
          {
              codigo_ibge: 2302206,
              nome: "Beberibe",
              id_estado: 6
          },
          {
              codigo_ibge: 2302305,
              nome: "Bela Cruz",
              id_estado: 6
          },
          {
              codigo_ibge: 2302404,
              nome: "Boa Viagem",
              id_estado: 6
          },
          {
              codigo_ibge: 2302503,
              nome: "Brejo Santo",
              id_estado: 6
          },
          {
              codigo_ibge: 2302602,
              nome: "Camocim",
              id_estado: 6
          },
          {
              codigo_ibge: 2302701,
              nome: "Campos Sales",
              id_estado: 6
          },
          {
              codigo_ibge: 2302800,
              nome: "Canindé",
              id_estado: 6
          },
          {
              codigo_ibge: 2302909,
              nome: "Capistrano",
              id_estado: 6
          },
          {
              codigo_ibge: 2303006,
              nome: "Caridade",
              id_estado: 6
          },
          {
              codigo_ibge: 2303105,
              nome: "Cariré",
              id_estado: 6
          },
          {
              codigo_ibge: 2303204,
              nome: "Caririaçu",
              id_estado: 6
          },
          {
              codigo_ibge: 2303303,
              nome: "Cariús",
              id_estado: 6
          },
          {
              codigo_ibge: 2303402,
              nome: "Carnaubal",
              id_estado: 6
          },
          {
              codigo_ibge: 2303501,
              nome: "Cascavel",
              id_estado: 6
          },
          {
              codigo_ibge: 2303600,
              nome: "Catarina",
              id_estado: 6
          },
          {
              codigo_ibge: 2303659,
              nome: "Catunda",
              id_estado: 6
          },
          {
              codigo_ibge: 2303709,
              nome: "Caucaia",
              id_estado: 6
          },
          {
              codigo_ibge: 2303808,
              nome: "Cedro",
              id_estado: 6
          },
          {
              codigo_ibge: 2303907,
              nome: "Chaval",
              id_estado: 6
          },
          {
              codigo_ibge: 2303931,
              nome: "Choró",
              id_estado: 6
          },
          {
              codigo_ibge: 2303956,
              nome: "Chorozinho",
              id_estado: 6
          },
          {
              codigo_ibge: 2304004,
              nome: "Coreaú",
              id_estado: 6
          },
          {
              codigo_ibge: 2304103,
              nome: "Crateús",
              id_estado: 6
          },
          {
              codigo_ibge: 2304202,
              nome: "Crato",
              id_estado: 6
          },
          {
              codigo_ibge: 2304236,
              nome: "Croatá",
              id_estado: 6
          },
          {
              codigo_ibge: 2304251,
              nome: "Cruz",
              id_estado: 6
          },
          {
              codigo_ibge: 2304269,
              nome: "Deputado Irapuan Pinheiro",
              id_estado: 6
          },
          {
              codigo_ibge: 2304277,
              nome: "Ererê",
              id_estado: 6
          },
          {
              codigo_ibge: 2304285,
              nome: "Eusébio",
              id_estado: 6
          },
          {
              codigo_ibge: 2304301,
              nome: "Farias Brito",
              id_estado: 6
          },
          {
              codigo_ibge: 2304350,
              nome: "Forquilha",
              id_estado: 6
          },
          {
              codigo_ibge: 2304400,
              nome: "Fortaleza",
              id_estado: 6
          },
          {
              codigo_ibge: 2304459,
              nome: "Fortim",
              id_estado: 6
          },
          {
              codigo_ibge: 2304509,
              nome: "Frecheirinha",
              id_estado: 6
          },
          {
              codigo_ibge: 2304608,
              nome: "General Sampaio",
              id_estado: 6
          },
          {
              codigo_ibge: 2304657,
              nome: "Graça",
              id_estado: 6
          },
          {
              codigo_ibge: 2304707,
              nome: "Granja",
              id_estado: 6
          },
          {
              codigo_ibge: 2304806,
              nome: "Granjeiro",
              id_estado: 6
          },
          {
              codigo_ibge: 2304905,
              nome: "Groaíras",
              id_estado: 6
          },
          {
              codigo_ibge: 2304954,
              nome: "Guaiúba",
              id_estado: 6
          },
          {
              codigo_ibge: 2305001,
              nome: "Guaraciaba do Norte",
              id_estado: 6
          },
          {
              codigo_ibge: 2305100,
              nome: "Guaramiranga",
              id_estado: 6
          },
          {
              codigo_ibge: 2305209,
              nome: "Hidrolândia",
              id_estado: 6
          },
          {
              codigo_ibge: 2305233,
              nome: "Horizonte",
              id_estado: 6
          },
          {
              codigo_ibge: 2305266,
              nome: "Ibaretama",
              id_estado: 6
          },
          {
              codigo_ibge: 2305308,
              nome: "Ibiapina",
              id_estado: 6
          },
          {
              codigo_ibge: 2305332,
              nome: "Ibicuitinga",
              id_estado: 6
          },
          {
              codigo_ibge: 2305357,
              nome: "Icapuí",
              id_estado: 6
          },
          {
              codigo_ibge: 2305407,
              nome: "Icó",
              id_estado: 6
          },
          {
              codigo_ibge: 2305506,
              nome: "Iguatu",
              id_estado: 6
          },
          {
              codigo_ibge: 2305605,
              nome: "Independência",
              id_estado: 6
          },
          {
              codigo_ibge: 2305654,
              nome: "Ipaporanga",
              id_estado: 6
          },
          {
              codigo_ibge: 2305704,
              nome: "Ipaumirim",
              id_estado: 6
          },
          {
              codigo_ibge: 2305803,
              nome: "Ipu",
              id_estado: 6
          },
          {
              codigo_ibge: 2305902,
              nome: "Ipueiras",
              id_estado: 6
          },
          {
              codigo_ibge: 2306009,
              nome: "Iracema",
              id_estado: 6
          },
          {
              codigo_ibge: 2306108,
              nome: "Irauçuba",
              id_estado: 6
          },
          {
              codigo_ibge: 2306207,
              nome: "Itaiçaba",
              id_estado: 6
          },
          {
              codigo_ibge: 2306256,
              nome: "Itaitinga",
              id_estado: 6
          },
          {
              codigo_ibge: 2306306,
              nome: "Itapagé",
              id_estado: 6
          },
          {
              codigo_ibge: 2306405,
              nome: "Itapipoca",
              id_estado: 6
          },
          {
              codigo_ibge: 2306504,
              nome: "Itapiúna",
              id_estado: 6
          },
          {
              codigo_ibge: 2306553,
              nome: "Itarema",
              id_estado: 6
          },
          {
              codigo_ibge: 2306603,
              nome: "Itatira",
              id_estado: 6
          },
          {
              codigo_ibge: 2306702,
              nome: "Jaguaretama",
              id_estado: 6
          },
          {
              codigo_ibge: 2306801,
              nome: "Jaguaribara",
              id_estado: 6
          },
          {
              codigo_ibge: 2306900,
              nome: "Jaguaribe",
              id_estado: 6
          },
          {
              codigo_ibge: 2307007,
              nome: "Jaguaruana",
              id_estado: 6
          },
          {
              codigo_ibge: 2307106,
              nome: "Jardim",
              id_estado: 6
          },
          {
              codigo_ibge: 2307205,
              nome: "Jati",
              id_estado: 6
          },
          {
              codigo_ibge: 2307254,
              nome: "Jijoca de Jericoacoara",
              id_estado: 6
          },
          {
              codigo_ibge: 2307304,
              nome: "Juazeiro do Norte",
              id_estado: 6
          },
          {
              codigo_ibge: 2307403,
              nome: "Jucás",
              id_estado: 6
          },
          {
              codigo_ibge: 2307502,
              nome: "Lavras da Mangabeira",
              id_estado: 6
          },
          {
              codigo_ibge: 2307601,
              nome: "Limoeiro do Norte",
              id_estado: 6
          },
          {
              codigo_ibge: 2307635,
              nome: "Madalena",
              id_estado: 6
          },
          {
              codigo_ibge: 2307650,
              nome: "Maracanaú",
              id_estado: 6
          },
          {
              codigo_ibge: 2307700,
              nome: "Maranguape",
              id_estado: 6
          },
          {
              codigo_ibge: 2307809,
              nome: "Marco",
              id_estado: 6
          },
          {
              codigo_ibge: 2307908,
              nome: "Martinópole",
              id_estado: 6
          },
          {
              codigo_ibge: 2308005,
              nome: "Massapê",
              id_estado: 6
          },
          {
              codigo_ibge: 2308104,
              nome: "Mauriti",
              id_estado: 6
          },
          {
              codigo_ibge: 2308203,
              nome: "Meruoca",
              id_estado: 6
          },
          {
              codigo_ibge: 2308302,
              nome: "Milagres",
              id_estado: 6
          },
          {
              codigo_ibge: 2308351,
              nome: "Milhã",
              id_estado: 6
          },
          {
              codigo_ibge: 2308377,
              nome: "Miraíma",
              id_estado: 6
          },
          {
              codigo_ibge: 2308401,
              nome: "Missão Velha",
              id_estado: 6
          },
          {
              codigo_ibge: 2308500,
              nome: "Mombaça",
              id_estado: 6
          },
          {
              codigo_ibge: 2308609,
              nome: "Monsenhor Tabosa",
              id_estado: 6
          },
          {
              codigo_ibge: 2308708,
              nome: "Morada Nova",
              id_estado: 6
          },
          {
              codigo_ibge: 2308807,
              nome: "Moraújo",
              id_estado: 6
          },
          {
              codigo_ibge: 2308906,
              nome: "Morrinhos",
              id_estado: 6
          },
          {
              codigo_ibge: 2309003,
              nome: "Mucambo",
              id_estado: 6
          },
          {
              codigo_ibge: 2309102,
              nome: "Mulungu",
              id_estado: 6
          },
          {
              codigo_ibge: 2309201,
              nome: "Nova Olinda",
              id_estado: 6
          },
          {
              codigo_ibge: 2309300,
              nome: "Nova Russas",
              id_estado: 6
          },
          {
              codigo_ibge: 2309409,
              nome: "Novo Oriente",
              id_estado: 6
          },
          {
              codigo_ibge: 2309458,
              nome: "Ocara",
              id_estado: 6
          },
          {
              codigo_ibge: 2309508,
              nome: "Orós",
              id_estado: 6
          },
          {
              codigo_ibge: 2309607,
              nome: "Pacajus",
              id_estado: 6
          },
          {
              codigo_ibge: 2309706,
              nome: "Pacatuba",
              id_estado: 6
          },
          {
              codigo_ibge: 2309805,
              nome: "Pacoti",
              id_estado: 6
          },
          {
              codigo_ibge: 2309904,
              nome: "Pacujá",
              id_estado: 6
          },
          {
              codigo_ibge: 2310001,
              nome: "Palhano",
              id_estado: 6
          },
          {
              codigo_ibge: 2310100,
              nome: "Palmácia",
              id_estado: 6
          },
          {
              codigo_ibge: 2310209,
              nome: "Paracuru",
              id_estado: 6
          },
          {
              codigo_ibge: 2310258,
              nome: "Paraipaba",
              id_estado: 6
          },
          {
              codigo_ibge: 2310308,
              nome: "Parambu",
              id_estado: 6
          },
          {
              codigo_ibge: 2310407,
              nome: "Paramoti",
              id_estado: 6
          },
          {
              codigo_ibge: 2310506,
              nome: "Pedra Branca",
              id_estado: 6
          },
          {
              codigo_ibge: 2310605,
              nome: "Penaforte",
              id_estado: 6
          },
          {
              codigo_ibge: 2310704,
              nome: "Pentecoste",
              id_estado: 6
          },
          {
              codigo_ibge: 2310803,
              nome: "Pereiro",
              id_estado: 6
          },
          {
              codigo_ibge: 2310852,
              nome: "Pindoretama",
              id_estado: 6
          },
          {
              codigo_ibge: 2310902,
              nome: "Piquet Carneiro",
              id_estado: 6
          },
          {
              codigo_ibge: 2310951,
              nome: "Pires Ferreira",
              id_estado: 6
          },
          {
              codigo_ibge: 2311009,
              nome: "Poranga",
              id_estado: 6
          },
          {
              codigo_ibge: 2311108,
              nome: "Porteiras",
              id_estado: 6
          },
          {
              codigo_ibge: 2311207,
              nome: "Potengi",
              id_estado: 6
          },
          {
              codigo_ibge: 2311231,
              nome: "Potiretama",
              id_estado: 6
          },
          {
              codigo_ibge: 2311264,
              nome: "Quiterianópolis",
              id_estado: 6
          },
          {
              codigo_ibge: 2311306,
              nome: "Quixadá",
              id_estado: 6
          },
          {
              codigo_ibge: 2311355,
              nome: "Quixelô",
              id_estado: 6
          },
          {
              codigo_ibge: 2311405,
              nome: "Quixeramobim",
              id_estado: 6
          },
          {
              codigo_ibge: 2311504,
              nome: "Quixeré",
              id_estado: 6
          },
          {
              codigo_ibge: 2311603,
              nome: "Redenção",
              id_estado: 6
          },
          {
              codigo_ibge: 2311702,
              nome: "Reriutaba",
              id_estado: 6
          },
          {
              codigo_ibge: 2311801,
              nome: "Russas",
              id_estado: 6
          },
          {
              codigo_ibge: 2311900,
              nome: "Saboeiro",
              id_estado: 6
          },
          {
              codigo_ibge: 2311959,
              nome: "Salitre",
              id_estado: 6
          },
          {
              codigo_ibge: 2312007,
              nome: "Santana do Acaraú",
              id_estado: 6
          },
          {
              codigo_ibge: 2312106,
              nome: "Santana do Cariri",
              id_estado: 6
          },
          {
              codigo_ibge: 2312205,
              nome: "Santa Quitéria",
              id_estado: 6
          },
          {
              codigo_ibge: 2312304,
              nome: "São Benedito",
              id_estado: 6
          },
          {
              codigo_ibge: 2312403,
              nome: "São Gonçalo do Amarante",
              id_estado: 6
          },
          {
              codigo_ibge: 2312502,
              nome: "São João do Jaguaribe",
              id_estado: 6
          },
          {
              codigo_ibge: 2312601,
              nome: "São Luís do Curu",
              id_estado: 6
          },
          {
              codigo_ibge: 2312700,
              nome: "Senador Pompeu",
              id_estado: 6
          },
          {
              codigo_ibge: 2312809,
              nome: "Senador Sá",
              id_estado: 6
          },
          {
              codigo_ibge: 2312908,
              nome: "Sobral",
              id_estado: 6
          },
          {
              codigo_ibge: 2313005,
              nome: "Solonópole",
              id_estado: 6
          },
          {
              codigo_ibge: 2313104,
              nome: "Tabuleiro do Norte",
              id_estado: 6
          },
          {
              codigo_ibge: 2313203,
              nome: "Tamboril",
              id_estado: 6
          },
          {
              codigo_ibge: 2313252,
              nome: "Tarrafas",
              id_estado: 6
          },
          {
              codigo_ibge: 2313302,
              nome: "Tauá",
              id_estado: 6
          },
          {
              codigo_ibge: 2313351,
              nome: "Tejuçuoca",
              id_estado: 6
          },
          {
              codigo_ibge: 2313401,
              nome: "Tianguá",
              id_estado: 6
          },
          {
              codigo_ibge: 2313500,
              nome: "Trairi",
              id_estado: 6
          },
          {
              codigo_ibge: 2313559,
              nome: "Tururu",
              id_estado: 6
          },
          {
              codigo_ibge: 2313609,
              nome: "Ubajara",
              id_estado: 6
          },
          {
              codigo_ibge: 2313708,
              nome: "Umari",
              id_estado: 6
          },
          {
              codigo_ibge: 2313757,
              nome: "Umirim",
              id_estado: 6
          },
          {
              codigo_ibge: 2313807,
              nome: "Uruburetama",
              id_estado: 6
          },
          {
              codigo_ibge: 2313906,
              nome: "Uruoca",
              id_estado: 6
          },
          {
              codigo_ibge: 2313955,
              nome: "Varjota",
              id_estado: 6
          },
          {
              codigo_ibge: 2314003,
              nome: "Várzea Alegre",
              id_estado: 6
          },
          {
              codigo_ibge: 2314102,
              nome: "Viçosa do Ceará",
              id_estado: 6
          },
          {
              codigo_ibge: 2400109,
              nome: "Acari",
              id_estado: 20
          },
          {
              codigo_ibge: 2400208,
              nome: "Açu",
              id_estado: 20
          },
          {
              codigo_ibge: 2400307,
              nome: "Afonso Bezerra",
              id_estado: 20
          },
          {
              codigo_ibge: 2400406,
              nome: "Água Nova",
              id_estado: 20
          },
          {
              codigo_ibge: 2400505,
              nome: "Alexandria",
              id_estado: 20
          },
          {
              codigo_ibge: 2400604,
              nome: "Almino Afonso",
              id_estado: 20
          },
          {
              codigo_ibge: 2400703,
              nome: "Alto do Rodrigues",
              id_estado: 20
          },
          {
              codigo_ibge: 2400802,
              nome: "Angicos",
              id_estado: 20
          },
          {
              codigo_ibge: 2400901,
              nome: "Antônio Martins",
              id_estado: 20
          },
          {
              codigo_ibge: 2401008,
              nome: "Apodi",
              id_estado: 20
          },
          {
              codigo_ibge: 2401107,
              nome: "Areia Branca",
              id_estado: 20
          },
          {
              codigo_ibge: 2401206,
              nome: "Arês",
              id_estado: 20
          },
          {
              codigo_ibge: 2401305,
              nome: "Augusto Severo",
              id_estado: 20
          },
          {
              codigo_ibge: 2401404,
              nome: "Baía Formosa",
              id_estado: 20
          },
          {
              codigo_ibge: 2401453,
              nome: "Baraúna",
              id_estado: 20
          },
          {
              codigo_ibge: 2401503,
              nome: "Barcelona",
              id_estado: 20
          },
          {
              codigo_ibge: 2401602,
              nome: "Bento Fernandes",
              id_estado: 20
          },
          {
              codigo_ibge: 2401651,
              nome: "Bodó",
              id_estado: 20
          },
          {
              codigo_ibge: 2401701,
              nome: "Bom Jesus",
              id_estado: 20
          },
          {
              codigo_ibge: 2401800,
              nome: "Brejinho",
              id_estado: 20
          },
          {
              codigo_ibge: 2401859,
              nome: "Caiçara do Norte",
              id_estado: 20
          },
          {
              codigo_ibge: 2401909,
              nome: "Caiçara do Rio do Vento",
              id_estado: 20
          },
          {
              codigo_ibge: 2402006,
              nome: "Caicó",
              id_estado: 20
          },
          {
              codigo_ibge: 2402105,
              nome: "Campo Redondo",
              id_estado: 20
          },
          {
              codigo_ibge: 2402204,
              nome: "Canguaretama",
              id_estado: 20
          },
          {
              codigo_ibge: 2402303,
              nome: "Caraúbas",
              id_estado: 20
          },
          {
              codigo_ibge: 2402402,
              nome: "Carnaúba dos Dantas",
              id_estado: 20
          },
          {
              codigo_ibge: 2402501,
              nome: "Carnaubais",
              id_estado: 20
          },
          {
              codigo_ibge: 2402600,
              nome: "Ceará-Mirim",
              id_estado: 20
          },
          {
              codigo_ibge: 2402709,
              nome: "Cerro Corá",
              id_estado: 20
          },
          {
              codigo_ibge: 2402808,
              nome: "Coronel Ezequiel",
              id_estado: 20
          },
          {
              codigo_ibge: 2402907,
              nome: "Coronel João Pessoa",
              id_estado: 20
          },
          {
              codigo_ibge: 2403004,
              nome: "Cruzeta",
              id_estado: 20
          },
          {
              codigo_ibge: 2403103,
              nome: "Currais Novos",
              id_estado: 20
          },
          {
              codigo_ibge: 2403202,
              nome: "Doutor Severiano",
              id_estado: 20
          },
          {
              codigo_ibge: 2403251,
              nome: "Parnamirim",
              id_estado: 20
          },
          {
              codigo_ibge: 2403301,
              nome: "Encanto",
              id_estado: 20
          },
          {
              codigo_ibge: 2403400,
              nome: "Equador",
              id_estado: 20
          },
          {
              codigo_ibge: 2403509,
              nome: "Espírito Santo",
              id_estado: 20
          },
          {
              codigo_ibge: 2403608,
              nome: "Extremoz",
              id_estado: 20
          },
          {
              codigo_ibge: 2403707,
              nome: "Felipe Guerra",
              id_estado: 20
          },
          {
              codigo_ibge: 2403756,
              nome: "Fernando Pedroza",
              id_estado: 20
          },
          {
              codigo_ibge: 2403806,
              nome: "Florânia",
              id_estado: 20
          },
          {
              codigo_ibge: 2403905,
              nome: "Francisco Dantas",
              id_estado: 20
          },
          {
              codigo_ibge: 2404002,
              nome: "Frutuoso Gomes",
              id_estado: 20
          },
          {
              codigo_ibge: 2404101,
              nome: "Galinhos",
              id_estado: 20
          },
          {
              codigo_ibge: 2404200,
              nome: "Goianinha",
              id_estado: 20
          },
          {
              codigo_ibge: 2404309,
              nome: "Governador Dix-Sept Rosado",
              id_estado: 20
          },
          {
              codigo_ibge: 2404408,
              nome: "Grossos",
              id_estado: 20
          },
          {
              codigo_ibge: 2404507,
              nome: "Guamaré",
              id_estado: 20
          },
          {
              codigo_ibge: 2404606,
              nome: "Ielmo Marinho",
              id_estado: 20
          },
          {
              codigo_ibge: 2404705,
              nome: "Ipanguaçu",
              id_estado: 20
          },
          {
              codigo_ibge: 2404804,
              nome: "Ipueira",
              id_estado: 20
          },
          {
              codigo_ibge: 2404853,
              nome: "Itajá",
              id_estado: 20
          },
          {
              codigo_ibge: 2404903,
              nome: "Itaú",
              id_estado: 20
          },
          {
              codigo_ibge: 2405009,
              nome: "Jaçanã",
              id_estado: 20
          },
          {
              codigo_ibge: 2405108,
              nome: "Jandaíra",
              id_estado: 20
          },
          {
              codigo_ibge: 2405207,
              nome: "Janduís",
              id_estado: 20
          },
          {
              codigo_ibge: 2405306,
              nome: "Januário Cicco",
              id_estado: 20
          },
          {
              codigo_ibge: 2405405,
              nome: "Japi",
              id_estado: 20
          },
          {
              codigo_ibge: 2405504,
              nome: "Jardim de Angicos",
              id_estado: 20
          },
          {
              codigo_ibge: 2405603,
              nome: "Jardim de Piranhas",
              id_estado: 20
          },
          {
              codigo_ibge: 2405702,
              nome: "Jardim do Seridó",
              id_estado: 20
          },
          {
              codigo_ibge: 2405801,
              nome: "João Câmara",
              id_estado: 20
          },
          {
              codigo_ibge: 2405900,
              nome: "João Dias",
              id_estado: 20
          },
          {
              codigo_ibge: 2406007,
              nome: "José da Penha",
              id_estado: 20
          },
          {
              codigo_ibge: 2406106,
              nome: "Jucurutu",
              id_estado: 20
          },
          {
              codigo_ibge: 2406155,
              nome: "Jundiá",
              id_estado: 20
          },
          {
              codigo_ibge: 2406205,
              nome: "Lagoa D'Anta",
              id_estado: 20
          },
          {
              codigo_ibge: 2406304,
              nome: "Lagoa de Pedras",
              id_estado: 20
          },
          {
              codigo_ibge: 2406403,
              nome: "Lagoa de Velhos",
              id_estado: 20
          },
          {
              codigo_ibge: 2406502,
              nome: "Lagoa Nova",
              id_estado: 20
          },
          {
              codigo_ibge: 2406601,
              nome: "Lagoa Salgada",
              id_estado: 20
          },
          {
              codigo_ibge: 2406700,
              nome: "Lajes",
              id_estado: 20
          },
          {
              codigo_ibge: 2406809,
              nome: "Lajes Pintadas",
              id_estado: 20
          },
          {
              codigo_ibge: 2406908,
              nome: "Lucrécia",
              id_estado: 20
          },
          {
              codigo_ibge: 2407005,
              nome: "Luís Gomes",
              id_estado: 20
          },
          {
              codigo_ibge: 2407104,
              nome: "Macaíba",
              id_estado: 20
          },
          {
              codigo_ibge: 2407203,
              nome: "Macau",
              id_estado: 20
          },
          {
              codigo_ibge: 2407252,
              nome: "Major Sales",
              id_estado: 20
          },
          {
              codigo_ibge: 2407302,
              nome: "Marcelino Vieira",
              id_estado: 20
          },
          {
              codigo_ibge: 2407401,
              nome: "Martins",
              id_estado: 20
          },
          {
              codigo_ibge: 2407500,
              nome: "Maxaranguape",
              id_estado: 20
          },
          {
              codigo_ibge: 2407609,
              nome: "Messias Targino",
              id_estado: 20
          },
          {
              codigo_ibge: 2407708,
              nome: "Montanhas",
              id_estado: 20
          },
          {
              codigo_ibge: 2407807,
              nome: "Monte Alegre",
              id_estado: 20
          },
          {
              codigo_ibge: 2407906,
              nome: "Monte das Gameleiras",
              id_estado: 20
          },
          {
              codigo_ibge: 2408003,
              nome: "Mossoró",
              id_estado: 20
          },
          {
              codigo_ibge: 2408102,
              nome: "Natal",
              id_estado: 20
          },
          {
              codigo_ibge: 2408201,
              nome: "Nísia Floresta",
              id_estado: 20
          },
          {
              codigo_ibge: 2408300,
              nome: "Nova Cruz",
              id_estado: 20
          },
          {
              codigo_ibge: 2408409,
              nome: "Olho-D'Água do Borges",
              id_estado: 20
          },
          {
              codigo_ibge: 2408508,
              nome: "Ouro Branco",
              id_estado: 20
          },
          {
              codigo_ibge: 2408607,
              nome: "Paraná",
              id_estado: 20
          },
          {
              codigo_ibge: 2408706,
              nome: "Paraú",
              id_estado: 20
          },
          {
              codigo_ibge: 2408805,
              nome: "Parazinho",
              id_estado: 20
          },
          {
              codigo_ibge: 2408904,
              nome: "Parelhas",
              id_estado: 20
          },
          {
              codigo_ibge: 2408953,
              nome: "Rio do Fogo",
              id_estado: 20
          },
          {
              codigo_ibge: 2409100,
              nome: "Passa e Fica",
              id_estado: 20
          },
          {
              codigo_ibge: 2409209,
              nome: "Passagem",
              id_estado: 20
          },
          {
              codigo_ibge: 2409308,
              nome: "Patu",
              id_estado: 20
          },
          {
              codigo_ibge: 2409332,
              nome: "Santa Maria",
              id_estado: 20
          },
          {
              codigo_ibge: 2409407,
              nome: "Pau dos Ferros",
              id_estado: 20
          },
          {
              codigo_ibge: 2409506,
              nome: "Pedra Grande",
              id_estado: 20
          },
          {
              codigo_ibge: 2409605,
              nome: "Pedra Preta",
              id_estado: 20
          },
          {
              codigo_ibge: 2409704,
              nome: "Pedro Avelino",
              id_estado: 20
          },
          {
              codigo_ibge: 2409803,
              nome: "Pedro Velho",
              id_estado: 20
          },
          {
              codigo_ibge: 2409902,
              nome: "Pendências",
              id_estado: 20
          },
          {
              codigo_ibge: 2410009,
              nome: "Pilões",
              id_estado: 20
          },
          {
              codigo_ibge: 2410108,
              nome: "Poço Branco",
              id_estado: 20
          },
          {
              codigo_ibge: 2410207,
              nome: "Portalegre",
              id_estado: 20
          },
          {
              codigo_ibge: 2410256,
              nome: "Porto do Mangue",
              id_estado: 20
          },
          {
              codigo_ibge: 2410306,
              nome: "Presidente Juscelino",
              id_estado: 20
          },
          {
              codigo_ibge: 2410405,
              nome: "Pureza",
              id_estado: 20
          },
          {
              codigo_ibge: 2410504,
              nome: "Rafael Fernandes",
              id_estado: 20
          },
          {
              codigo_ibge: 2410603,
              nome: "Rafael Godeiro",
              id_estado: 20
          },
          {
              codigo_ibge: 2410702,
              nome: "Riacho da Cruz",
              id_estado: 20
          },
          {
              codigo_ibge: 2410801,
              nome: "Riacho de Santana",
              id_estado: 20
          },
          {
              codigo_ibge: 2410900,
              nome: "Riachuelo",
              id_estado: 20
          },
          {
              codigo_ibge: 2411007,
              nome: "Rodolfo Fernandes",
              id_estado: 20
          },
          {
              codigo_ibge: 2411056,
              nome: "Tibau",
              id_estado: 20
          },
          {
              codigo_ibge: 2411106,
              nome: "Ruy Barbosa",
              id_estado: 20
          },
          {
              codigo_ibge: 2411205,
              nome: "Santa Cruz",
              id_estado: 20
          },
          {
              codigo_ibge: 2411403,
              nome: "Santana do Matos",
              id_estado: 20
          },
          {
              codigo_ibge: 2411429,
              nome: "Santana do Seridó",
              id_estado: 20
          },
          {
              codigo_ibge: 2411502,
              nome: "Santo Antônio",
              id_estado: 20
          },
          {
              codigo_ibge: 2411601,
              nome: "São Bento do Norte",
              id_estado: 20
          },
          {
              codigo_ibge: 2411700,
              nome: "São Bento do Trairí",
              id_estado: 20
          },
          {
              codigo_ibge: 2411809,
              nome: "São Fernando",
              id_estado: 20
          },
          {
              codigo_ibge: 2411908,
              nome: "São Francisco do Oeste",
              id_estado: 20
          },
          {
              codigo_ibge: 2412005,
              nome: "São Gonçalo do Amarante",
              id_estado: 20
          },
          {
              codigo_ibge: 2412104,
              nome: "São João do Sabugi",
              id_estado: 20
          },
          {
              codigo_ibge: 2412203,
              nome: "São José de Mipibu",
              id_estado: 20
          },
          {
              codigo_ibge: 2412302,
              nome: "São José do Campestre",
              id_estado: 20
          },
          {
              codigo_ibge: 2412401,
              nome: "São José do Seridó",
              id_estado: 20
          },
          {
              codigo_ibge: 2412500,
              nome: "São Miguel",
              id_estado: 20
          },
          {
              codigo_ibge: 2412559,
              nome: "São Miguel do Gostoso",
              id_estado: 20
          },
          {
              codigo_ibge: 2412609,
              nome: "São Paulo do Potengi",
              id_estado: 20
          },
          {
              codigo_ibge: 2412708,
              nome: "São Pedro",
              id_estado: 20
          },
          {
              codigo_ibge: 2412807,
              nome: "São Rafael",
              id_estado: 20
          },
          {
              codigo_ibge: 2412906,
              nome: "São Tomé",
              id_estado: 20
          },
          {
              codigo_ibge: 2413003,
              nome: "São Vicente",
              id_estado: 20
          },
          {
              codigo_ibge: 2413102,
              nome: "Senador Elói de Souza",
              id_estado: 20
          },
          {
              codigo_ibge: 2413201,
              nome: "Senador Georgino Avelino",
              id_estado: 20
          },
          {
              codigo_ibge: 2413300,
              nome: "Serra de São Bento",
              id_estado: 20
          },
          {
              codigo_ibge: 2413359,
              nome: "Serra do Mel",
              id_estado: 20
          },
          {
              codigo_ibge: 2413409,
              nome: "Serra Negra do Norte",
              id_estado: 20
          },
          {
              codigo_ibge: 2413508,
              nome: "Serrinha",
              id_estado: 20
          },
          {
              codigo_ibge: 2413557,
              nome: "Serrinha dos Pintos",
              id_estado: 20
          },
          {
              codigo_ibge: 2413607,
              nome: "Severiano Melo",
              id_estado: 20
          },
          {
              codigo_ibge: 2413706,
              nome: "Sítio Novo",
              id_estado: 20
          },
          {
              codigo_ibge: 2413805,
              nome: "Taboleiro Grande",
              id_estado: 20
          },
          {
              codigo_ibge: 2413904,
              nome: "Taipu",
              id_estado: 20
          },
          {
              codigo_ibge: 2414001,
              nome: "Tangará",
              id_estado: 20
          },
          {
              codigo_ibge: 2414100,
              nome: "Tenente Ananias",
              id_estado: 20
          },
          {
              codigo_ibge: 2414159,
              nome: "Tenente Laurentino Cruz",
              id_estado: 20
          },
          {
              codigo_ibge: 2414209,
              nome: "Tibau do Sul",
              id_estado: 20
          },
          {
              codigo_ibge: 2414308,
              nome: "Timbaúba dos Batistas",
              id_estado: 20
          },
          {
              codigo_ibge: 2414407,
              nome: "Touros",
              id_estado: 20
          },
          {
              codigo_ibge: 2414456,
              nome: "Triunfo Potiguar",
              id_estado: 20
          },
          {
              codigo_ibge: 2414506,
              nome: "Umarizal",
              id_estado: 20
          },
          {
              codigo_ibge: 2414605,
              nome: "Upanema",
              id_estado: 20
          },
          {
              codigo_ibge: 2414704,
              nome: "Várzea",
              id_estado: 20
          },
          {
              codigo_ibge: 2414753,
              nome: "Venha-Ver",
              id_estado: 20
          },
          {
              codigo_ibge: 2414803,
              nome: "Vera Cruz",
              id_estado: 20
          },
          {
              codigo_ibge: 2414902,
              nome: "Viçosa",
              id_estado: 20
          },
          {
              codigo_ibge: 2415008,
              nome: "Vila Flor",
              id_estado: 20
          },
          {
              codigo_ibge: 2500106,
              nome: "Água Branca",
              id_estado: 15
          },
          {
              codigo_ibge: 2500205,
              nome: "Aguiar",
              id_estado: 15
          },
          {
              codigo_ibge: 2500304,
              nome: "Alagoa Grande",
              id_estado: 15
          },
          {
              codigo_ibge: 2500403,
              nome: "Alagoa Nova",
              id_estado: 15
          },
          {
              codigo_ibge: 2500502,
              nome: "Alagoinha",
              id_estado: 15
          },
          {
              codigo_ibge: 2500536,
              nome: "Alcantil",
              id_estado: 15
          },
          {
              codigo_ibge: 2500577,
              nome: "Algodão de Jandaíra",
              id_estado: 15
          },
          {
              codigo_ibge: 2500601,
              nome: "Alhandra",
              id_estado: 15
          },
          {
              codigo_ibge: 2500700,
              nome: "São João do Rio do Peixe",
              id_estado: 15
          },
          {
              codigo_ibge: 2500734,
              nome: "Amparo",
              id_estado: 15
          },
          {
              codigo_ibge: 2500775,
              nome: "Aparecida",
              id_estado: 15
          },
          {
              codigo_ibge: 2500809,
              nome: "Araçagi",
              id_estado: 15
          },
          {
              codigo_ibge: 2500908,
              nome: "Arara",
              id_estado: 15
          },
          {
              codigo_ibge: 2501005,
              nome: "Araruna",
              id_estado: 15
          },
          {
              codigo_ibge: 2501104,
              nome: "Areia",
              id_estado: 15
          },
          {
              codigo_ibge: 2501153,
              nome: "Areia de Baraúnas",
              id_estado: 15
          },
          {
              codigo_ibge: 2501203,
              nome: "Areial",
              id_estado: 15
          },
          {
              codigo_ibge: 2501302,
              nome: "Aroeiras",
              id_estado: 15
          },
          {
              codigo_ibge: 2501351,
              nome: "Assunção",
              id_estado: 15
          },
          {
              codigo_ibge: 2501401,
              nome: "Baía da Traição",
              id_estado: 15
          },
          {
              codigo_ibge: 2501500,
              nome: "Bananeiras",
              id_estado: 15
          },
          {
              codigo_ibge: 2501534,
              nome: "Baraúna",
              id_estado: 15
          },
          {
              codigo_ibge: 2501575,
              nome: "Barra de Santana",
              id_estado: 15
          },
          {
              codigo_ibge: 2501609,
              nome: "Barra de Santa Rosa",
              id_estado: 15
          },
          {
              codigo_ibge: 2501708,
              nome: "Barra de São Miguel",
              id_estado: 15
          },
          {
              codigo_ibge: 2501807,
              nome: "Bayeux",
              id_estado: 15
          },
          {
              codigo_ibge: 2501906,
              nome: "Belém",
              id_estado: 15
          },
          {
              codigo_ibge: 2502003,
              nome: "Belém do Brejo do Cruz",
              id_estado: 15
          },
          {
              codigo_ibge: 2502052,
              nome: "Bernardino Batista",
              id_estado: 15
          },
          {
              codigo_ibge: 2502102,
              nome: "Boa Ventura",
              id_estado: 15
          },
          {
              codigo_ibge: 2502151,
              nome: "Boa Vista",
              id_estado: 15
          },
          {
              codigo_ibge: 2502201,
              nome: "Bom Jesus",
              id_estado: 15
          },
          {
              codigo_ibge: 2502300,
              nome: "Bom Sucesso",
              id_estado: 15
          },
          {
              codigo_ibge: 2502409,
              nome: "Bonito de Santa Fé",
              id_estado: 15
          },
          {
              codigo_ibge: 2502508,
              nome: "Boqueirão",
              id_estado: 15
          },
          {
              codigo_ibge: 2502607,
              nome: "Igaracy",
              id_estado: 15
          },
          {
              codigo_ibge: 2502706,
              nome: "Borborema",
              id_estado: 15
          },
          {
              codigo_ibge: 2502805,
              nome: "Brejo do Cruz",
              id_estado: 15
          },
          {
              codigo_ibge: 2502904,
              nome: "Brejo dos Santos",
              id_estado: 15
          },
          {
              codigo_ibge: 2503001,
              nome: "Caaporã",
              id_estado: 15
          },
          {
              codigo_ibge: 2503100,
              nome: "Cabaceiras",
              id_estado: 15
          },
          {
              codigo_ibge: 2503209,
              nome: "Cabedelo",
              id_estado: 15
          },
          {
              codigo_ibge: 2503308,
              nome: "Cachoeira dos Índios",
              id_estado: 15
          },
          {
              codigo_ibge: 2503407,
              nome: "Cacimba de Areia",
              id_estado: 15
          },
          {
              codigo_ibge: 2503506,
              nome: "Cacimba de Dentro",
              id_estado: 15
          },
          {
              codigo_ibge: 2503555,
              nome: "Cacimbas",
              id_estado: 15
          },
          {
              codigo_ibge: 2503605,
              nome: "Caiçara",
              id_estado: 15
          },
          {
              codigo_ibge: 2503704,
              nome: "Cajazeiras",
              id_estado: 15
          },
          {
              codigo_ibge: 2503753,
              nome: "Cajazeirinhas",
              id_estado: 15
          },
          {
              codigo_ibge: 2503803,
              nome: "Caldas Brandão",
              id_estado: 15
          },
          {
              codigo_ibge: 2503902,
              nome: "Camalaú",
              id_estado: 15
          },
          {
              codigo_ibge: 2504009,
              nome: "Campina Grande",
              id_estado: 15
          },
          {
              codigo_ibge: 2504033,
              nome: "Capim",
              id_estado: 15
          },
          {
              codigo_ibge: 2504074,
              nome: "Caraúbas",
              id_estado: 15
          },
          {
              codigo_ibge: 2504108,
              nome: "Carrapateira",
              id_estado: 15
          },
          {
              codigo_ibge: 2504157,
              nome: "Casserengue",
              id_estado: 15
          },
          {
              codigo_ibge: 2504207,
              nome: "Catingueira",
              id_estado: 15
          },
          {
              codigo_ibge: 2504306,
              nome: "Catolé do Rocha",
              id_estado: 15
          },
          {
              codigo_ibge: 2504355,
              nome: "Caturité",
              id_estado: 15
          },
          {
              codigo_ibge: 2504405,
              nome: "Conceição",
              id_estado: 15
          },
          {
              codigo_ibge: 2504504,
              nome: "Condado",
              id_estado: 15
          },
          {
              codigo_ibge: 2504603,
              nome: "Conde",
              id_estado: 15
          },
          {
              codigo_ibge: 2504702,
              nome: "Congo",
              id_estado: 15
          },
          {
              codigo_ibge: 2504801,
              nome: "Coremas",
              id_estado: 15
          },
          {
              codigo_ibge: 2504850,
              nome: "Coxixola",
              id_estado: 15
          },
          {
              codigo_ibge: 2504900,
              nome: "Cruz do Espírito Santo",
              id_estado: 15
          },
          {
              codigo_ibge: 2505006,
              nome: "Cubati",
              id_estado: 15
          },
          {
              codigo_ibge: 2505105,
              nome: "Cuité",
              id_estado: 15
          },
          {
              codigo_ibge: 2505204,
              nome: "Cuitegi",
              id_estado: 15
          },
          {
              codigo_ibge: 2505238,
              nome: "Cuité de Mamanguape",
              id_estado: 15
          },
          {
              codigo_ibge: 2505279,
              nome: "Curral de Cima",
              id_estado: 15
          },
          {
              codigo_ibge: 2505303,
              nome: "Curral Velho",
              id_estado: 15
          },
          {
              codigo_ibge: 2505352,
              nome: "Damião",
              id_estado: 15
          },
          {
              codigo_ibge: 2505402,
              nome: "Desterro",
              id_estado: 15
          },
          {
              codigo_ibge: 2505501,
              nome: "Vista Serrana",
              id_estado: 15
          },
          {
              codigo_ibge: 2505600,
              nome: "Diamante",
              id_estado: 15
          },
          {
              codigo_ibge: 2505709,
              nome: "Dona Inês",
              id_estado: 15
          },
          {
              codigo_ibge: 2505808,
              nome: "Duas Estradas",
              id_estado: 15
          },
          {
              codigo_ibge: 2505907,
              nome: "Emas",
              id_estado: 15
          },
          {
              codigo_ibge: 2506004,
              nome: "Esperança",
              id_estado: 15
          },
          {
              codigo_ibge: 2506103,
              nome: "Fagundes",
              id_estado: 15
          },
          {
              codigo_ibge: 2506202,
              nome: "Frei Martinho",
              id_estado: 15
          },
          {
              codigo_ibge: 2506251,
              nome: "Gado Bravo",
              id_estado: 15
          },
          {
              codigo_ibge: 2506301,
              nome: "Guarabira",
              id_estado: 15
          },
          {
              codigo_ibge: 2506400,
              nome: "Gurinhém",
              id_estado: 15
          },
          {
              codigo_ibge: 2506509,
              nome: "Gurjão",
              id_estado: 15
          },
          {
              codigo_ibge: 2506608,
              nome: "Ibiara",
              id_estado: 15
          },
          {
              codigo_ibge: 2506707,
              nome: "Imaculada",
              id_estado: 15
          },
          {
              codigo_ibge: 2506806,
              nome: "Ingá",
              id_estado: 15
          },
          {
              codigo_ibge: 2506905,
              nome: "Itabaiana",
              id_estado: 15
          },
          {
              codigo_ibge: 2507002,
              nome: "Itaporanga",
              id_estado: 15
          },
          {
              codigo_ibge: 2507101,
              nome: "Itapororoca",
              id_estado: 15
          },
          {
              codigo_ibge: 2507200,
              nome: "Itatuba",
              id_estado: 15
          },
          {
              codigo_ibge: 2507309,
              nome: "Jacaraú",
              id_estado: 15
          },
          {
              codigo_ibge: 2507408,
              nome: "Jericó",
              id_estado: 15
          },
          {
              codigo_ibge: 2507507,
              nome: "João Pessoa",
              id_estado: 15
          },
          {
              codigo_ibge: 2507606,
              nome: "Juarez Távora",
              id_estado: 15
          },
          {
              codigo_ibge: 2507705,
              nome: "Juazeirinho",
              id_estado: 15
          },
          {
              codigo_ibge: 2507804,
              nome: "Junco do Seridó",
              id_estado: 15
          },
          {
              codigo_ibge: 2507903,
              nome: "Juripiranga",
              id_estado: 15
          },
          {
              codigo_ibge: 2508000,
              nome: "Juru",
              id_estado: 15
          },
          {
              codigo_ibge: 2508109,
              nome: "Lagoa",
              id_estado: 15
          },
          {
              codigo_ibge: 2508208,
              nome: "Lagoa de Dentro",
              id_estado: 15
          },
          {
              codigo_ibge: 2508307,
              nome: "Lagoa Seca",
              id_estado: 15
          },
          {
              codigo_ibge: 2508406,
              nome: "Lastro",
              id_estado: 15
          },
          {
              codigo_ibge: 2508505,
              nome: "Livramento",
              id_estado: 15
          },
          {
              codigo_ibge: 2508554,
              nome: "Logradouro",
              id_estado: 15
          },
          {
              codigo_ibge: 2508604,
              nome: "Lucena",
              id_estado: 15
          },
          {
              codigo_ibge: 2508703,
              nome: "Mãe D'Água",
              id_estado: 15
          },
          {
              codigo_ibge: 2508802,
              nome: "Malta",
              id_estado: 15
          },
          {
              codigo_ibge: 2508901,
              nome: "Mamanguape",
              id_estado: 15
          },
          {
              codigo_ibge: 2509008,
              nome: "Manaíra",
              id_estado: 15
          },
          {
              codigo_ibge: 2509057,
              nome: "Marcação",
              id_estado: 15
          },
          {
              codigo_ibge: 2509107,
              nome: "Mari",
              id_estado: 15
          },
          {
              codigo_ibge: 2509156,
              nome: "Marizópolis",
              id_estado: 15
          },
          {
              codigo_ibge: 2509206,
              nome: "Massaranduba",
              id_estado: 15
          },
          {
              codigo_ibge: 2509305,
              nome: "Mataraca",
              id_estado: 15
          },
          {
              codigo_ibge: 2509339,
              nome: "Matinhas",
              id_estado: 15
          },
          {
              codigo_ibge: 2509370,
              nome: "Mato Grosso",
              id_estado: 15
          },
          {
              codigo_ibge: 2509396,
              nome: "Maturéia",
              id_estado: 15
          },
          {
              codigo_ibge: 2509404,
              nome: "Mogeiro",
              id_estado: 15
          },
          {
              codigo_ibge: 2509503,
              nome: "Montadas",
              id_estado: 15
          },
          {
              codigo_ibge: 2509602,
              nome: "Monte Horebe",
              id_estado: 15
          },
          {
              codigo_ibge: 2509701,
              nome: "Monteiro",
              id_estado: 15
          },
          {
              codigo_ibge: 2509800,
              nome: "Mulungu",
              id_estado: 15
          },
          {
              codigo_ibge: 2509909,
              nome: "Natuba",
              id_estado: 15
          },
          {
              codigo_ibge: 2510006,
              nome: "Nazarezinho",
              id_estado: 15
          },
          {
              codigo_ibge: 2510105,
              nome: "Nova Floresta",
              id_estado: 15
          },
          {
              codigo_ibge: 2510204,
              nome: "Nova Olinda",
              id_estado: 15
          },
          {
              codigo_ibge: 2510303,
              nome: "Nova Palmeira",
              id_estado: 15
          },
          {
              codigo_ibge: 2510402,
              nome: "Olho D'Água",
              id_estado: 15
          },
          {
              codigo_ibge: 2510501,
              nome: "Olivedos",
              id_estado: 15
          },
          {
              codigo_ibge: 2510600,
              nome: "Ouro Velho",
              id_estado: 15
          },
          {
              codigo_ibge: 2510659,
              nome: "Parari",
              id_estado: 15
          },
          {
              codigo_ibge: 2510709,
              nome: "Passagem",
              id_estado: 15
          },
          {
              codigo_ibge: 2510808,
              nome: "Patos",
              id_estado: 15
          },
          {
              codigo_ibge: 2510907,
              nome: "Paulista",
              id_estado: 15
          },
          {
              codigo_ibge: 2511004,
              nome: "Pedra Branca",
              id_estado: 15
          },
          {
              codigo_ibge: 2511103,
              nome: "Pedra Lavrada",
              id_estado: 15
          },
          {
              codigo_ibge: 2511202,
              nome: "Pedras de Fogo",
              id_estado: 15
          },
          {
              codigo_ibge: 2511301,
              nome: "Piancó",
              id_estado: 15
          },
          {
              codigo_ibge: 2511400,
              nome: "Picuí",
              id_estado: 15
          },
          {
              codigo_ibge: 2511509,
              nome: "Pilar",
              id_estado: 15
          },
          {
              codigo_ibge: 2511608,
              nome: "Pilões",
              id_estado: 15
          },
          {
              codigo_ibge: 2511707,
              nome: "Pilõezinhos",
              id_estado: 15
          },
          {
              codigo_ibge: 2511806,
              nome: "Pirpirituba",
              id_estado: 15
          },
          {
              codigo_ibge: 2511905,
              nome: "Pitimbu",
              id_estado: 15
          },
          {
              codigo_ibge: 2512002,
              nome: "Pocinhos",
              id_estado: 15
          },
          {
              codigo_ibge: 2512036,
              nome: "Poço Dantas",
              id_estado: 15
          },
          {
              codigo_ibge: 2512077,
              nome: "Poço de José de Moura",
              id_estado: 15
          },
          {
              codigo_ibge: 2512101,
              nome: "Pombal",
              id_estado: 15
          },
          {
              codigo_ibge: 2512200,
              nome: "Prata",
              id_estado: 15
          },
          {
              codigo_ibge: 2512309,
              nome: "Princesa Isabel",
              id_estado: 15
          },
          {
              codigo_ibge: 2512408,
              nome: "Puxinanã",
              id_estado: 15
          },
          {
              codigo_ibge: 2512507,
              nome: "Queimadas",
              id_estado: 15
          },
          {
              codigo_ibge: 2512606,
              nome: "Quixabá",
              id_estado: 15
          },
          {
              codigo_ibge: 2512705,
              nome: "Remígio",
              id_estado: 15
          },
          {
              codigo_ibge: 2512721,
              nome: "Pedro Régis",
              id_estado: 15
          },
          {
              codigo_ibge: 2512747,
              nome: "Riachão",
              id_estado: 15
          },
          {
              codigo_ibge: 2512754,
              nome: "Riachão do Bacamarte",
              id_estado: 15
          },
          {
              codigo_ibge: 2512762,
              nome: "Riachão do Poço",
              id_estado: 15
          },
          {
              codigo_ibge: 2512788,
              nome: "Riacho de Santo Antônio",
              id_estado: 15
          },
          {
              codigo_ibge: 2512804,
              nome: "Riacho dos Cavalos",
              id_estado: 15
          },
          {
              codigo_ibge: 2512903,
              nome: "Rio Tinto",
              id_estado: 15
          },
          {
              codigo_ibge: 2513000,
              nome: "Salgadinho",
              id_estado: 15
          },
          {
              codigo_ibge: 2513109,
              nome: "Salgado de São Félix",
              id_estado: 15
          },
          {
              codigo_ibge: 2513158,
              nome: "Santa Cecília",
              id_estado: 15
          },
          {
              codigo_ibge: 2513208,
              nome: "Santa Cruz",
              id_estado: 15
          },
          {
              codigo_ibge: 2513307,
              nome: "Santa Helena",
              id_estado: 15
          },
          {
              codigo_ibge: 2513356,
              nome: "Santa Inês",
              id_estado: 15
          },
          {
              codigo_ibge: 2513406,
              nome: "Santa Luzia",
              id_estado: 15
          },
          {
              codigo_ibge: 2513505,
              nome: "Santana de Mangueira",
              id_estado: 15
          },
          {
              codigo_ibge: 2513604,
              nome: "Santana dos Garrotes",
              id_estado: 15
          },
          {
              codigo_ibge: 2513653,
              nome: "Joca Claudino",
              id_estado: 15
          },
          {
              codigo_ibge: 2513703,
              nome: "Santa Rita",
              id_estado: 15
          },
          {
              codigo_ibge: 2513802,
              nome: "Santa Teresinha",
              id_estado: 15
          },
          {
              codigo_ibge: 2513851,
              nome: "Santo André",
              id_estado: 15
          },
          {
              codigo_ibge: 2513901,
              nome: "São Bento",
              id_estado: 15
          },
          {
              codigo_ibge: 2513927,
              nome: "São Bentinho",
              id_estado: 15
          },
          {
              codigo_ibge: 2513943,
              nome: "São Domingos do Cariri",
              id_estado: 15
          },
          {
              codigo_ibge: 2513968,
              nome: "São Domingos",
              id_estado: 15
          },
          {
              codigo_ibge: 2513984,
              nome: "São Francisco",
              id_estado: 15
          },
          {
              codigo_ibge: 2514008,
              nome: "São João do Cariri",
              id_estado: 15
          },
          {
              codigo_ibge: 2514107,
              nome: "São João do Tigre",
              id_estado: 15
          },
          {
              codigo_ibge: 2514206,
              nome: "São José da Lagoa Tapada",
              id_estado: 15
          },
          {
              codigo_ibge: 2514305,
              nome: "São José de Caiana",
              id_estado: 15
          },
          {
              codigo_ibge: 2514404,
              nome: "São José de Espinharas",
              id_estado: 15
          },
          {
              codigo_ibge: 2514453,
              nome: "São José dos Ramos",
              id_estado: 15
          },
          {
              codigo_ibge: 2514503,
              nome: "São José de Piranhas",
              id_estado: 15
          },
          {
              codigo_ibge: 2514552,
              nome: "São José de Princesa",
              id_estado: 15
          },
          {
              codigo_ibge: 2514602,
              nome: "São José do Bonfim",
              id_estado: 15
          },
          {
              codigo_ibge: 2514651,
              nome: "São José do Brejo do Cruz",
              id_estado: 15
          },
          {
              codigo_ibge: 2514701,
              nome: "São José do Sabugi",
              id_estado: 15
          },
          {
              codigo_ibge: 2514800,
              nome: "São José dos Cordeiros",
              id_estado: 15
          },
          {
              codigo_ibge: 2514909,
              nome: "São Mamede",
              id_estado: 15
          },
          {
              codigo_ibge: 2515005,
              nome: "São Miguel de Taipu",
              id_estado: 15
          },
          {
              codigo_ibge: 2515104,
              nome: "São Sebastião de Lagoa de Roça",
              id_estado: 15
          },
          {
              codigo_ibge: 2515203,
              nome: "São Sebastião do Umbuzeiro",
              id_estado: 15
          },
          {
              codigo_ibge: 2515302,
              nome: "Sapé",
              id_estado: 15
          },
          {
              codigo_ibge: 2515401,
              nome: "São Vicente do Seridó",
              id_estado: 15
          },
          {
              codigo_ibge: 2515500,
              nome: "Serra Branca",
              id_estado: 15
          },
          {
              codigo_ibge: 2515609,
              nome: "Serra da Raiz",
              id_estado: 15
          },
          {
              codigo_ibge: 2515708,
              nome: "Serra Grande",
              id_estado: 15
          },
          {
              codigo_ibge: 2515807,
              nome: "Serra Redonda",
              id_estado: 15
          },
          {
              codigo_ibge: 2515906,
              nome: "Serraria",
              id_estado: 15
          },
          {
              codigo_ibge: 2515930,
              nome: "Sertãozinho",
              id_estado: 15
          },
          {
              codigo_ibge: 2515971,
              nome: "Sobrado",
              id_estado: 15
          },
          {
              codigo_ibge: 2516003,
              nome: "Solânea",
              id_estado: 15
          },
          {
              codigo_ibge: 2516102,
              nome: "Soledade",
              id_estado: 15
          },
          {
              codigo_ibge: 2516151,
              nome: "Sossêgo",
              id_estado: 15
          },
          {
              codigo_ibge: 2516201,
              nome: "Sousa",
              id_estado: 15
          },
          {
              codigo_ibge: 2516300,
              nome: "Sumé",
              id_estado: 15
          },
          {
              codigo_ibge: 2516409,
              nome: "Tacima",
              id_estado: 15
          },
          {
              codigo_ibge: 2516508,
              nome: "Taperoá",
              id_estado: 15
          },
          {
              codigo_ibge: 2516607,
              nome: "Tavares",
              id_estado: 15
          },
          {
              codigo_ibge: 2516706,
              nome: "Teixeira",
              id_estado: 15
          },
          {
              codigo_ibge: 2516755,
              nome: "Tenório",
              id_estado: 15
          },
          {
              codigo_ibge: 2516805,
              nome: "Triunfo",
              id_estado: 15
          },
          {
              codigo_ibge: 2516904,
              nome: "Uiraúna",
              id_estado: 15
          },
          {
              codigo_ibge: 2517001,
              nome: "Umbuzeiro",
              id_estado: 15
          },
          {
              codigo_ibge: 2517100,
              nome: "Várzea",
              id_estado: 15
          },
          {
              codigo_ibge: 2517209,
              nome: "Vieirópolis",
              id_estado: 15
          },
          {
              codigo_ibge: 2517407,
              nome: "Zabelê",
              id_estado: 15
          },
          {
              codigo_ibge: 2600054,
              nome: "Abreu e Lima",
              id_estado: 17
          },
          {
              codigo_ibge: 2600104,
              nome: "Afogados da Ingazeira",
              id_estado: 17
          },
          {
              codigo_ibge: 2600203,
              nome: "Afrânio",
              id_estado: 17
          },
          {
              codigo_ibge: 2600302,
              nome: "Agrestina",
              id_estado: 17
          },
          {
              codigo_ibge: 2600401,
              nome: "Água Preta",
              id_estado: 17
          },
          {
              codigo_ibge: 2600500,
              nome: "Águas Belas",
              id_estado: 17
          },
          {
              codigo_ibge: 2600609,
              nome: "Alagoinha",
              id_estado: 17
          },
          {
              codigo_ibge: 2600708,
              nome: "Aliança",
              id_estado: 17
          },
          {
              codigo_ibge: 2600807,
              nome: "Altinho",
              id_estado: 17
          },
          {
              codigo_ibge: 2600906,
              nome: "Amaraji",
              id_estado: 17
          },
          {
              codigo_ibge: 2601003,
              nome: "Angelim",
              id_estado: 17
          },
          {
              codigo_ibge: 2601052,
              nome: "Araçoiaba",
              id_estado: 17
          },
          {
              codigo_ibge: 2601102,
              nome: "Araripina",
              id_estado: 17
          },
          {
              codigo_ibge: 2601201,
              nome: "Arcoverde",
              id_estado: 17
          },
          {
              codigo_ibge: 2601300,
              nome: "Barra de Guabiraba",
              id_estado: 17
          },
          {
              codigo_ibge: 2601409,
              nome: "Barreiros",
              id_estado: 17
          },
          {
              codigo_ibge: 2601508,
              nome: "Belém de Maria",
              id_estado: 17
          },
          {
              codigo_ibge: 2601607,
              nome: "Belém do São Francisco",
              id_estado: 17
          },
          {
              codigo_ibge: 2601706,
              nome: "Belo Jardim",
              id_estado: 17
          },
          {
              codigo_ibge: 2601805,
              nome: "Betânia",
              id_estado: 17
          },
          {
              codigo_ibge: 2601904,
              nome: "Bezerros",
              id_estado: 17
          },
          {
              codigo_ibge: 2602001,
              nome: "Bodocó",
              id_estado: 17
          },
          {
              codigo_ibge: 2602100,
              nome: "Bom Conselho",
              id_estado: 17
          },
          {
              codigo_ibge: 2602209,
              nome: "Bom Jardim",
              id_estado: 17
          },
          {
              codigo_ibge: 2602308,
              nome: "Bonito",
              id_estado: 17
          },
          {
              codigo_ibge: 2602407,
              nome: "Brejão",
              id_estado: 17
          },
          {
              codigo_ibge: 2602506,
              nome: "Brejinho",
              id_estado: 17
          },
          {
              codigo_ibge: 2602605,
              nome: "Brejo da Madre de Deus",
              id_estado: 17
          },
          {
              codigo_ibge: 2602704,
              nome: "Buenos Aires",
              id_estado: 17
          },
          {
              codigo_ibge: 2602803,
              nome: "Buíque",
              id_estado: 17
          },
          {
              codigo_ibge: 2602902,
              nome: "Cabo de Santo Agostinho",
              id_estado: 17
          },
          {
              codigo_ibge: 2603009,
              nome: "Cabrobó",
              id_estado: 17
          },
          {
              codigo_ibge: 2603108,
              nome: "Cachoeirinha",
              id_estado: 17
          },
          {
              codigo_ibge: 2603207,
              nome: "Caetés",
              id_estado: 17
          },
          {
              codigo_ibge: 2603306,
              nome: "Calçado",
              id_estado: 17
          },
          {
              codigo_ibge: 2603405,
              nome: "Calumbi",
              id_estado: 17
          },
          {
              codigo_ibge: 2603454,
              nome: "Camaragibe",
              id_estado: 17
          },
          {
              codigo_ibge: 2603504,
              nome: "Camocim de São Félix",
              id_estado: 17
          },
          {
              codigo_ibge: 2603603,
              nome: "Camutanga",
              id_estado: 17
          },
          {
              codigo_ibge: 2603702,
              nome: "Canhotinho",
              id_estado: 17
          },
          {
              codigo_ibge: 2603801,
              nome: "Capoeiras",
              id_estado: 17
          },
          {
              codigo_ibge: 2603900,
              nome: "Carnaíba",
              id_estado: 17
          },
          {
              codigo_ibge: 2603926,
              nome: "Carnaubeira da Penha",
              id_estado: 17
          },
          {
              codigo_ibge: 2604007,
              nome: "Carpina",
              id_estado: 17
          },
          {
              codigo_ibge: 2604106,
              nome: "Caruaru",
              id_estado: 17
          },
          {
              codigo_ibge: 2604155,
              nome: "Casinhas",
              id_estado: 17
          },
          {
              codigo_ibge: 2604205,
              nome: "Catende",
              id_estado: 17
          },
          {
              codigo_ibge: 2604304,
              nome: "Cedro",
              id_estado: 17
          },
          {
              codigo_ibge: 2604403,
              nome: "Chã de Alegria",
              id_estado: 17
          },
          {
              codigo_ibge: 2604502,
              nome: "Chã Grande",
              id_estado: 17
          },
          {
              codigo_ibge: 2604601,
              nome: "Condado",
              id_estado: 17
          },
          {
              codigo_ibge: 2604700,
              nome: "Correntes",
              id_estado: 17
          },
          {
              codigo_ibge: 2604809,
              nome: "Cortês",
              id_estado: 17
          },
          {
              codigo_ibge: 2604908,
              nome: "Cumaru",
              id_estado: 17
          },
          {
              codigo_ibge: 2605004,
              nome: "Cupira",
              id_estado: 17
          },
          {
              codigo_ibge: 2605103,
              nome: "Custódia",
              id_estado: 17
          },
          {
              codigo_ibge: 2605152,
              nome: "Dormentes",
              id_estado: 17
          },
          {
              codigo_ibge: 2605202,
              nome: "Escada",
              id_estado: 17
          },
          {
              codigo_ibge: 2605301,
              nome: "Exu",
              id_estado: 17
          },
          {
              codigo_ibge: 2605400,
              nome: "Feira Nova",
              id_estado: 17
          },
          {
              codigo_ibge: 2605459,
              nome: "Fernando de Noronha",
              id_estado: 17
          },
          {
              codigo_ibge: 2605509,
              nome: "Ferreiros",
              id_estado: 17
          },
          {
              codigo_ibge: 2605608,
              nome: "Flores",
              id_estado: 17
          },
          {
              codigo_ibge: 2605707,
              nome: "Floresta",
              id_estado: 17
          },
          {
              codigo_ibge: 2605806,
              nome: "Frei Miguelinho",
              id_estado: 17
          },
          {
              codigo_ibge: 2605905,
              nome: "Gameleira",
              id_estado: 17
          },
          {
              codigo_ibge: 2606002,
              nome: "Garanhuns",
              id_estado: 17
          },
          {
              codigo_ibge: 2606101,
              nome: "Glória do Goitá",
              id_estado: 17
          },
          {
              codigo_ibge: 2606200,
              nome: "Goiana",
              id_estado: 17
          },
          {
              codigo_ibge: 2606309,
              nome: "Granito",
              id_estado: 17
          },
          {
              codigo_ibge: 2606408,
              nome: "Gravatá",
              id_estado: 17
          },
          {
              codigo_ibge: 2606507,
              nome: "Iati",
              id_estado: 17
          },
          {
              codigo_ibge: 2606606,
              nome: "Ibimirim",
              id_estado: 17
          },
          {
              codigo_ibge: 2606705,
              nome: "Ibirajuba",
              id_estado: 17
          },
          {
              codigo_ibge: 2606804,
              nome: "Igarassu",
              id_estado: 17
          },
          {
              codigo_ibge: 2606903,
              nome: "Iguaraci",
              id_estado: 17
          },
          {
              codigo_ibge: 2607000,
              nome: "Inajá",
              id_estado: 17
          },
          {
              codigo_ibge: 2607109,
              nome: "Ingazeira",
              id_estado: 17
          },
          {
              codigo_ibge: 2607208,
              nome: "Ipojuca",
              id_estado: 17
          },
          {
              codigo_ibge: 2607307,
              nome: "Ipubi",
              id_estado: 17
          },
          {
              codigo_ibge: 2607406,
              nome: "Itacuruba",
              id_estado: 17
          },
          {
              codigo_ibge: 2607505,
              nome: "Itaíba",
              id_estado: 17
          },
          {
              codigo_ibge: 2607604,
              nome: "Ilha de Itamaracá",
              id_estado: 17
          },
          {
              codigo_ibge: 2607653,
              nome: "Itambé",
              id_estado: 17
          },
          {
              codigo_ibge: 2607703,
              nome: "Itapetim",
              id_estado: 17
          },
          {
              codigo_ibge: 2607752,
              nome: "Itapissuma",
              id_estado: 17
          },
          {
              codigo_ibge: 2607802,
              nome: "Itaquitinga",
              id_estado: 17
          },
          {
              codigo_ibge: 2607901,
              nome: "Jaboatão dos Guararapes",
              id_estado: 17
          },
          {
              codigo_ibge: 2607950,
              nome: "Jaqueira",
              id_estado: 17
          },
          {
              codigo_ibge: 2608008,
              nome: "Jataúba",
              id_estado: 17
          },
          {
              codigo_ibge: 2608057,
              nome: "Jatobá",
              id_estado: 17
          },
          {
              codigo_ibge: 2608107,
              nome: "João Alfredo",
              id_estado: 17
          },
          {
              codigo_ibge: 2608206,
              nome: "Joaquim Nabuco",
              id_estado: 17
          },
          {
              codigo_ibge: 2608255,
              nome: "Jucati",
              id_estado: 17
          },
          {
              codigo_ibge: 2608305,
              nome: "Jupi",
              id_estado: 17
          },
          {
              codigo_ibge: 2608404,
              nome: "Jurema",
              id_estado: 17
          },
          {
              codigo_ibge: 2608453,
              nome: "Lagoa do Carro",
              id_estado: 17
          },
          {
              codigo_ibge: 2608503,
              nome: "Lagoa de Itaenga",
              id_estado: 17
          },
          {
              codigo_ibge: 2608602,
              nome: "Lagoa do Ouro",
              id_estado: 17
          },
          {
              codigo_ibge: 2608701,
              nome: "Lagoa dos Gatos",
              id_estado: 17
          },
          {
              codigo_ibge: 2608750,
              nome: "Lagoa Grande",
              id_estado: 17
          },
          {
              codigo_ibge: 2608800,
              nome: "Lajedo",
              id_estado: 17
          },
          {
              codigo_ibge: 2608909,
              nome: "Limoeiro",
              id_estado: 17
          },
          {
              codigo_ibge: 2609006,
              nome: "Macaparana",
              id_estado: 17
          },
          {
              codigo_ibge: 2609105,
              nome: "Machados",
              id_estado: 17
          },
          {
              codigo_ibge: 2609154,
              nome: "Manari",
              id_estado: 17
          },
          {
              codigo_ibge: 2609204,
              nome: "Maraial",
              id_estado: 17
          },
          {
              codigo_ibge: 2609303,
              nome: "Mirandiba",
              id_estado: 17
          },
          {
              codigo_ibge: 2609402,
              nome: "Moreno",
              id_estado: 17
          },
          {
              codigo_ibge: 2609501,
              nome: "Nazaré da Mata",
              id_estado: 17
          },
          {
              codigo_ibge: 2609600,
              nome: "Olinda",
              id_estado: 17
          },
          {
              codigo_ibge: 2609709,
              nome: "Orobó",
              id_estado: 17
          },
          {
              codigo_ibge: 2609808,
              nome: "Orocó",
              id_estado: 17
          },
          {
              codigo_ibge: 2609907,
              nome: "Ouricuri",
              id_estado: 17
          },
          {
              codigo_ibge: 2610004,
              nome: "Palmares",
              id_estado: 17
          },
          {
              codigo_ibge: 2610103,
              nome: "Palmeirina",
              id_estado: 17
          },
          {
              codigo_ibge: 2610202,
              nome: "Panelas",
              id_estado: 17
          },
          {
              codigo_ibge: 2610301,
              nome: "Paranatama",
              id_estado: 17
          },
          {
              codigo_ibge: 2610400,
              nome: "Parnamirim",
              id_estado: 17
          },
          {
              codigo_ibge: 2610509,
              nome: "Passira",
              id_estado: 17
          },
          {
              codigo_ibge: 2610608,
              nome: "Paudalho",
              id_estado: 17
          },
          {
              codigo_ibge: 2610707,
              nome: "Paulista",
              id_estado: 17
          },
          {
              codigo_ibge: 2610806,
              nome: "Pedra",
              id_estado: 17
          },
          {
              codigo_ibge: 2610905,
              nome: "Pesqueira",
              id_estado: 17
          },
          {
              codigo_ibge: 2611002,
              nome: "Petrolândia",
              id_estado: 17
          },
          {
              codigo_ibge: 2611101,
              nome: "Petrolina",
              id_estado: 17
          },
          {
              codigo_ibge: 2611200,
              nome: "Poção",
              id_estado: 17
          },
          {
              codigo_ibge: 2611309,
              nome: "Pombos",
              id_estado: 17
          },
          {
              codigo_ibge: 2611408,
              nome: "Primavera",
              id_estado: 17
          },
          {
              codigo_ibge: 2611507,
              nome: "Quipapá",
              id_estado: 17
          },
          {
              codigo_ibge: 2611533,
              nome: "Quixaba",
              id_estado: 17
          },
          {
              codigo_ibge: 2611606,
              nome: "Recife",
              id_estado: 17
          },
          {
              codigo_ibge: 2611705,
              nome: "Riacho das Almas",
              id_estado: 17
          },
          {
              codigo_ibge: 2611804,
              nome: "Ribeirão",
              id_estado: 17
          },
          {
              codigo_ibge: 2611903,
              nome: "Rio Formoso",
              id_estado: 17
          },
          {
              codigo_ibge: 2612000,
              nome: "Sairé",
              id_estado: 17
          },
          {
              codigo_ibge: 2612109,
              nome: "Salgadinho",
              id_estado: 17
          },
          {
              codigo_ibge: 2612208,
              nome: "Salgueiro",
              id_estado: 17
          },
          {
              codigo_ibge: 2612307,
              nome: "Saloá",
              id_estado: 17
          },
          {
              codigo_ibge: 2612406,
              nome: "Sanharó",
              id_estado: 17
          },
          {
              codigo_ibge: 2612455,
              nome: "Santa Cruz",
              id_estado: 17
          },
          {
              codigo_ibge: 2612471,
              nome: "Santa Cruz da Baixa Verde",
              id_estado: 17
          },
          {
              codigo_ibge: 2612505,
              nome: "Santa Cruz do Capibaribe",
              id_estado: 17
          },
          {
              codigo_ibge: 2612554,
              nome: "Santa Filomena",
              id_estado: 17
          },
          {
              codigo_ibge: 2612604,
              nome: "Santa Maria da Boa Vista",
              id_estado: 17
          },
          {
              codigo_ibge: 2612703,
              nome: "Santa Maria do Cambucá",
              id_estado: 17
          },
          {
              codigo_ibge: 2612802,
              nome: "Santa Terezinha",
              id_estado: 17
          },
          {
              codigo_ibge: 2612901,
              nome: "São Benedito do Sul",
              id_estado: 17
          },
          {
              codigo_ibge: 2613008,
              nome: "São Bento do Una",
              id_estado: 17
          },
          {
              codigo_ibge: 2613107,
              nome: "São Caitano",
              id_estado: 17
          },
          {
              codigo_ibge: 2613206,
              nome: "São João",
              id_estado: 17
          },
          {
              codigo_ibge: 2613305,
              nome: "São Joaquim do Monte",
              id_estado: 17
          },
          {
              codigo_ibge: 2613404,
              nome: "São José da Coroa Grande",
              id_estado: 17
          },
          {
              codigo_ibge: 2613503,
              nome: "São José do Belmonte",
              id_estado: 17
          },
          {
              codigo_ibge: 2613602,
              nome: "São José do Egito",
              id_estado: 17
          },
          {
              codigo_ibge: 2613701,
              nome: "São Lourenço da Mata",
              id_estado: 17
          },
          {
              codigo_ibge: 2613800,
              nome: "São Vicente Ferrer",
              id_estado: 17
          },
          {
              codigo_ibge: 2613909,
              nome: "Serra Talhada",
              id_estado: 17
          },
          {
              codigo_ibge: 2614006,
              nome: "Serrita",
              id_estado: 17
          },
          {
              codigo_ibge: 2614105,
              nome: "Sertânia",
              id_estado: 17
          },
          {
              codigo_ibge: 2614204,
              nome: "Sirinhaém",
              id_estado: 17
          },
          {
              codigo_ibge: 2614303,
              nome: "Moreilândia",
              id_estado: 17
          },
          {
              codigo_ibge: 2614402,
              nome: "Solidão",
              id_estado: 17
          },
          {
              codigo_ibge: 2614501,
              nome: "Surubim",
              id_estado: 17
          },
          {
              codigo_ibge: 2614600,
              nome: "Tabira",
              id_estado: 17
          },
          {
              codigo_ibge: 2614709,
              nome: "Tacaimbó",
              id_estado: 17
          },
          {
              codigo_ibge: 2614808,
              nome: "Tacaratu",
              id_estado: 17
          },
          {
              codigo_ibge: 2614857,
              nome: "Tamandaré",
              id_estado: 17
          },
          {
              codigo_ibge: 2615003,
              nome: "Taquaritinga do Norte",
              id_estado: 17
          },
          {
              codigo_ibge: 2615102,
              nome: "Terezinha",
              id_estado: 17
          },
          {
              codigo_ibge: 2615201,
              nome: "Terra Nova",
              id_estado: 17
          },
          {
              codigo_ibge: 2615300,
              nome: "Timbaúba",
              id_estado: 17
          },
          {
              codigo_ibge: 2615409,
              nome: "Toritama",
              id_estado: 17
          },
          {
              codigo_ibge: 2615508,
              nome: "Tracunhaém",
              id_estado: 17
          },
          {
              codigo_ibge: 2615607,
              nome: "Trindade",
              id_estado: 17
          },
          {
              codigo_ibge: 2615706,
              nome: "Triunfo",
              id_estado: 17
          },
          {
              codigo_ibge: 2615805,
              nome: "Tupanatinga",
              id_estado: 17
          },
          {
              codigo_ibge: 2615904,
              nome: "Tuparetama",
              id_estado: 17
          },
          {
              codigo_ibge: 2616001,
              nome: "Venturosa",
              id_estado: 17
          },
          {
              codigo_ibge: 2616100,
              nome: "Verdejante",
              id_estado: 17
          },
          {
              codigo_ibge: 2616183,
              nome: "Vertente do Lério",
              id_estado: 17
          },
          {
              codigo_ibge: 2616209,
              nome: "Vertentes",
              id_estado: 17
          },
          {
              codigo_ibge: 2616308,
              nome: "Vicência",
              id_estado: 17
          },
          {
              codigo_ibge: 2616407,
              nome: "Vitória de Santo Antão",
              id_estado: 17
          },
          {
              codigo_ibge: 2616506,
              nome: "Xexéu",
              id_estado: 17
          },
          {
              codigo_ibge: 2700102,
              nome: "Água Branca",
              id_estado: 2
          },
          {
              codigo_ibge: 2700201,
              nome: "Anadia",
              id_estado: 2
          },
          {
              codigo_ibge: 2700300,
              nome: "Arapiraca",
              id_estado: 2
          },
          {
              codigo_ibge: 2700409,
              nome: "Atalaia",
              id_estado: 2
          },
          {
              codigo_ibge: 2700508,
              nome: "Barra de Santo Antônio",
              id_estado: 2
          },
          {
              codigo_ibge: 2700607,
              nome: "Barra de São Miguel",
              id_estado: 2
          },
          {
              codigo_ibge: 2700706,
              nome: "Batalha",
              id_estado: 2
          },
          {
              codigo_ibge: 2700805,
              nome: "Belém",
              id_estado: 2
          },
          {
              codigo_ibge: 2700904,
              nome: "Belo Monte",
              id_estado: 2
          },
          {
              codigo_ibge: 2701001,
              nome: "Boca da Mata",
              id_estado: 2
          },
          {
              codigo_ibge: 2701100,
              nome: "Branquinha",
              id_estado: 2
          },
          {
              codigo_ibge: 2701209,
              nome: "Cacimbinhas",
              id_estado: 2
          },
          {
              codigo_ibge: 2701308,
              nome: "Cajueiro",
              id_estado: 2
          },
          {
              codigo_ibge: 2701357,
              nome: "Campestre",
              id_estado: 2
          },
          {
              codigo_ibge: 2701407,
              nome: "Campo Alegre",
              id_estado: 2
          },
          {
              codigo_ibge: 2701506,
              nome: "Campo Grande",
              id_estado: 2
          },
          {
              codigo_ibge: 2701605,
              nome: "Canapi",
              id_estado: 2
          },
          {
              codigo_ibge: 2701704,
              nome: "Capela",
              id_estado: 2
          },
          {
              codigo_ibge: 2701803,
              nome: "Carneiros",
              id_estado: 2
          },
          {
              codigo_ibge: 2701902,
              nome: "Chã Preta",
              id_estado: 2
          },
          {
              codigo_ibge: 2702009,
              nome: "Coité do Nóia",
              id_estado: 2
          },
          {
              codigo_ibge: 2702108,
              nome: "Colônia Leopoldina",
              id_estado: 2
          },
          {
              codigo_ibge: 2702207,
              nome: "Coqueiro Seco",
              id_estado: 2
          },
          {
              codigo_ibge: 2702306,
              nome: "Coruripe",
              id_estado: 2
          },
          {
              codigo_ibge: 2702355,
              nome: "Craíbas",
              id_estado: 2
          },
          {
              codigo_ibge: 2702405,
              nome: "Delmiro Gouveia",
              id_estado: 2
          },
          {
              codigo_ibge: 2702504,
              nome: "Dois Riachos",
              id_estado: 2
          },
          {
              codigo_ibge: 2702553,
              nome: "Estrela de Alagoas",
              id_estado: 2
          },
          {
              codigo_ibge: 2702603,
              nome: "Feira Grande",
              id_estado: 2
          },
          {
              codigo_ibge: 2702702,
              nome: "Feliz Deserto",
              id_estado: 2
          },
          {
              codigo_ibge: 2702801,
              nome: "Flexeiras",
              id_estado: 2
          },
          {
              codigo_ibge: 2702900,
              nome: "Girau do Ponciano",
              id_estado: 2
          },
          {
              codigo_ibge: 2703007,
              nome: "Ibateguara",
              id_estado: 2
          },
          {
              codigo_ibge: 2703106,
              nome: "Igaci",
              id_estado: 2
          },
          {
              codigo_ibge: 2703205,
              nome: "Igreja Nova",
              id_estado: 2
          },
          {
              codigo_ibge: 2703304,
              nome: "Inhapi",
              id_estado: 2
          },
          {
              codigo_ibge: 2703403,
              nome: "Jacaré dos Homens",
              id_estado: 2
          },
          {
              codigo_ibge: 2703502,
              nome: "Jacuípe",
              id_estado: 2
          },
          {
              codigo_ibge: 2703601,
              nome: "Japaratinga",
              id_estado: 2
          },
          {
              codigo_ibge: 2703700,
              nome: "Jaramataia",
              id_estado: 2
          },
          {
              codigo_ibge: 2703759,
              nome: "Jequiá da Praia",
              id_estado: 2
          },
          {
              codigo_ibge: 2703809,
              nome: "Joaquim Gomes",
              id_estado: 2
          },
          {
              codigo_ibge: 2703908,
              nome: "Jundiá",
              id_estado: 2
          },
          {
              codigo_ibge: 2704005,
              nome: "Junqueiro",
              id_estado: 2
          },
          {
              codigo_ibge: 2704104,
              nome: "Lagoa da Canoa",
              id_estado: 2
          },
          {
              codigo_ibge: 2704203,
              nome: "Limoeiro de Anadia",
              id_estado: 2
          },
          {
              codigo_ibge: 2704302,
              nome: "Maceió",
              id_estado: 2
          },
          {
              codigo_ibge: 2704401,
              nome: "Major Isidoro",
              id_estado: 2
          },
          {
              codigo_ibge: 2704500,
              nome: "Maragogi",
              id_estado: 2
          },
          {
              codigo_ibge: 2704609,
              nome: "Maravilha",
              id_estado: 2
          },
          {
              codigo_ibge: 2704708,
              nome: "Marechal Deodoro",
              id_estado: 2
          },
          {
              codigo_ibge: 2704807,
              nome: "Maribondo",
              id_estado: 2
          },
          {
              codigo_ibge: 2704906,
              nome: "Mar Vermelho",
              id_estado: 2
          },
          {
              codigo_ibge: 2705002,
              nome: "Mata Grande",
              id_estado: 2
          },
          {
              codigo_ibge: 2705101,
              nome: "Matriz de Camaragibe",
              id_estado: 2
          },
          {
              codigo_ibge: 2705200,
              nome: "Messias",
              id_estado: 2
          },
          {
              codigo_ibge: 2705309,
              nome: "Minador do Negrão",
              id_estado: 2
          },
          {
              codigo_ibge: 2705408,
              nome: "Monteirópolis",
              id_estado: 2
          },
          {
              codigo_ibge: 2705507,
              nome: "Murici",
              id_estado: 2
          },
          {
              codigo_ibge: 2705606,
              nome: "Novo Lino",
              id_estado: 2
          },
          {
              codigo_ibge: 2705705,
              nome: "Olho D'Água das Flores",
              id_estado: 2
          },
          {
              codigo_ibge: 2705804,
              nome: "Olho D'Água do Casado",
              id_estado: 2
          },
          {
              codigo_ibge: 2705903,
              nome: "Olho D'Água Grande",
              id_estado: 2
          },
          {
              codigo_ibge: 2706000,
              nome: "Olivença",
              id_estado: 2
          },
          {
              codigo_ibge: 2706109,
              nome: "Ouro Branco",
              id_estado: 2
          },
          {
              codigo_ibge: 2706208,
              nome: "Palestina",
              id_estado: 2
          },
          {
              codigo_ibge: 2706307,
              nome: "Palmeira dos Índios",
              id_estado: 2
          },
          {
              codigo_ibge: 2706406,
              nome: "Pão de Açúcar",
              id_estado: 2
          },
          {
              codigo_ibge: 2706422,
              nome: "Pariconha",
              id_estado: 2
          },
          {
              codigo_ibge: 2706448,
              nome: "Paripueira",
              id_estado: 2
          },
          {
              codigo_ibge: 2706505,
              nome: "Passo de Camaragibe",
              id_estado: 2
          },
          {
              codigo_ibge: 2706604,
              nome: "Paulo Jacinto",
              id_estado: 2
          },
          {
              codigo_ibge: 2706703,
              nome: "Penedo",
              id_estado: 2
          },
          {
              codigo_ibge: 2706802,
              nome: "Piaçabuçu",
              id_estado: 2
          },
          {
              codigo_ibge: 2706901,
              nome: "Pilar",
              id_estado: 2
          },
          {
              codigo_ibge: 2707008,
              nome: "Pindoba",
              id_estado: 2
          },
          {
              codigo_ibge: 2707107,
              nome: "Piranhas",
              id_estado: 2
          },
          {
              codigo_ibge: 2707206,
              nome: "Poço das Trincheiras",
              id_estado: 2
          },
          {
              codigo_ibge: 2707305,
              nome: "Porto Calvo",
              id_estado: 2
          },
          {
              codigo_ibge: 2707404,
              nome: "Porto de Pedras",
              id_estado: 2
          },
          {
              codigo_ibge: 2707503,
              nome: "Porto Real do Colégio",
              id_estado: 2
          },
          {
              codigo_ibge: 2707602,
              nome: "Quebrangulo",
              id_estado: 2
          },
          {
              codigo_ibge: 2707701,
              nome: "Rio Largo",
              id_estado: 2
          },
          {
              codigo_ibge: 2707800,
              nome: "Roteiro",
              id_estado: 2
          },
          {
              codigo_ibge: 2707909,
              nome: "Santa Luzia do Norte",
              id_estado: 2
          },
          {
              codigo_ibge: 2708006,
              nome: "Santana do Ipanema",
              id_estado: 2
          },
          {
              codigo_ibge: 2708105,
              nome: "Santana do Mundaú",
              id_estado: 2
          },
          {
              codigo_ibge: 2708204,
              nome: "São Brás",
              id_estado: 2
          },
          {
              codigo_ibge: 2708303,
              nome: "São José da Laje",
              id_estado: 2
          },
          {
              codigo_ibge: 2708402,
              nome: "São José da Tapera",
              id_estado: 2
          },
          {
              codigo_ibge: 2708501,
              nome: "São Luís do Quitunde",
              id_estado: 2
          },
          {
              codigo_ibge: 2708600,
              nome: "São Miguel dos Campos",
              id_estado: 2
          },
          {
              codigo_ibge: 2708709,
              nome: "São Miguel dos Milagres",
              id_estado: 2
          },
          {
              codigo_ibge: 2708808,
              nome: "São Sebastião",
              id_estado: 2
          },
          {
              codigo_ibge: 2708907,
              nome: "Satuba",
              id_estado: 2
          },
          {
              codigo_ibge: 2708956,
              nome: "Senador Rui Palmeira",
              id_estado: 2
          },
          {
              codigo_ibge: 2709004,
              nome: "Tanque D'Arca",
              id_estado: 2
          },
          {
              codigo_ibge: 2709103,
              nome: "Taquarana",
              id_estado: 2
          },
          {
              codigo_ibge: 2709152,
              nome: "Teotônio Vilela",
              id_estado: 2
          },
          {
              codigo_ibge: 2709202,
              nome: "Traipu",
              id_estado: 2
          },
          {
              codigo_ibge: 2709301,
              nome: "União dos Palmares",
              id_estado: 2
          },
          {
              codigo_ibge: 2709400,
              nome: "Viçosa",
              id_estado: 2
          },
          {
              codigo_ibge: 2800100,
              nome: "Amparo de São Francisco",
              id_estado: 26
          },
          {
              codigo_ibge: 2800209,
              nome: "Aquidabã",
              id_estado: 26
          },
          {
              codigo_ibge: 2800308,
              nome: "Aracaju",
              id_estado: 26
          },
          {
              codigo_ibge: 2800407,
              nome: "Arauá",
              id_estado: 26
          },
          {
              codigo_ibge: 2800506,
              nome: "Areia Branca",
              id_estado: 26
          },
          {
              codigo_ibge: 2800605,
              nome: "Barra dos Coqueiros",
              id_estado: 26
          },
          {
              codigo_ibge: 2800670,
              nome: "Boquim",
              id_estado: 26
          },
          {
              codigo_ibge: 2800704,
              nome: "Brejo Grande",
              id_estado: 26
          },
          {
              codigo_ibge: 2801009,
              nome: "Campo do Brito",
              id_estado: 26
          },
          {
              codigo_ibge: 2801108,
              nome: "Canhoba",
              id_estado: 26
          },
          {
              codigo_ibge: 2801207,
              nome: "Canindé de São Francisco",
              id_estado: 26
          },
          {
              codigo_ibge: 2801306,
              nome: "Capela",
              id_estado: 26
          },
          {
              codigo_ibge: 2801405,
              nome: "Carira",
              id_estado: 26
          },
          {
              codigo_ibge: 2801504,
              nome: "Carmópolis",
              id_estado: 26
          },
          {
              codigo_ibge: 2801603,
              nome: "Cedro de São João",
              id_estado: 26
          },
          {
              codigo_ibge: 2801702,
              nome: "Cristinápolis",
              id_estado: 26
          },
          {
              codigo_ibge: 2801900,
              nome: "Cumbe",
              id_estado: 26
          },
          {
              codigo_ibge: 2802007,
              nome: "Divina Pastora",
              id_estado: 26
          },
          {
              codigo_ibge: 2802106,
              nome: "Estância",
              id_estado: 26
          },
          {
              codigo_ibge: 2802205,
              nome: "Feira Nova",
              id_estado: 26
          },
          {
              codigo_ibge: 2802304,
              nome: "Frei Paulo",
              id_estado: 26
          },
          {
              codigo_ibge: 2802403,
              nome: "Gararu",
              id_estado: 26
          },
          {
              codigo_ibge: 2802502,
              nome: "General Maynard",
              id_estado: 26
          },
          {
              codigo_ibge: 2802601,
              nome: "Gracho Cardoso",
              id_estado: 26
          },
          {
              codigo_ibge: 2802700,
              nome: "Ilha das Flores",
              id_estado: 26
          },
          {
              codigo_ibge: 2802809,
              nome: "Indiaroba",
              id_estado: 26
          },
          {
              codigo_ibge: 2802908,
              nome: "Itabaiana",
              id_estado: 26
          },
          {
              codigo_ibge: 2803005,
              nome: "Itabaianinha",
              id_estado: 26
          },
          {
              codigo_ibge: 2803104,
              nome: "Itabi",
              id_estado: 26
          },
          {
              codigo_ibge: 2803203,
              nome: "Itaporanga D'Ajuda",
              id_estado: 26
          },
          {
              codigo_ibge: 2803302,
              nome: "Japaratuba",
              id_estado: 26
          },
          {
              codigo_ibge: 2803401,
              nome: "Japoatã",
              id_estado: 26
          },
          {
              codigo_ibge: 2803500,
              nome: "Lagarto",
              id_estado: 26
          },
          {
              codigo_ibge: 2803609,
              nome: "Laranjeiras",
              id_estado: 26
          },
          {
              codigo_ibge: 2803708,
              nome: "Macambira",
              id_estado: 26
          },
          {
              codigo_ibge: 2803807,
              nome: "Malhada dos Bois",
              id_estado: 26
          },
          {
              codigo_ibge: 2803906,
              nome: "Malhador",
              id_estado: 26
          },
          {
              codigo_ibge: 2804003,
              nome: "Maruim",
              id_estado: 26
          },
          {
              codigo_ibge: 2804102,
              nome: "Moita Bonita",
              id_estado: 26
          },
          {
              codigo_ibge: 2804201,
              nome: "Monte Alegre de Sergipe",
              id_estado: 26
          },
          {
              codigo_ibge: 2804300,
              nome: "Muribeca",
              id_estado: 26
          },
          {
              codigo_ibge: 2804409,
              nome: "Neópolis",
              id_estado: 26
          },
          {
              codigo_ibge: 2804458,
              nome: "Nossa Senhora Aparecida",
              id_estado: 26
          },
          {
              codigo_ibge: 2804508,
              nome: "Nossa Senhora da Glória",
              id_estado: 26
          },
          {
              codigo_ibge: 2804607,
              nome: "Nossa Senhora das Dores",
              id_estado: 26
          },
          {
              codigo_ibge: 2804706,
              nome: "Nossa Senhora de Lourdes",
              id_estado: 26
          },
          {
              codigo_ibge: 2804805,
              nome: "Nossa Senhora do Socorro",
              id_estado: 26
          },
          {
              codigo_ibge: 2804904,
              nome: "Pacatuba",
              id_estado: 26
          },
          {
              codigo_ibge: 2805000,
              nome: "Pedra Mole",
              id_estado: 26
          },
          {
              codigo_ibge: 2805109,
              nome: "Pedrinhas",
              id_estado: 26
          },
          {
              codigo_ibge: 2805208,
              nome: "Pinhão",
              id_estado: 26
          },
          {
              codigo_ibge: 2805307,
              nome: "Pirambu",
              id_estado: 26
          },
          {
              codigo_ibge: 2805406,
              nome: "Poço Redondo",
              id_estado: 26
          },
          {
              codigo_ibge: 2805505,
              nome: "Poço Verde",
              id_estado: 26
          },
          {
              codigo_ibge: 2805604,
              nome: "Porto da Folha",
              id_estado: 26
          },
          {
              codigo_ibge: 2805703,
              nome: "Propriá",
              id_estado: 26
          },
          {
              codigo_ibge: 2805802,
              nome: "Riachão do Dantas",
              id_estado: 26
          },
          {
              codigo_ibge: 2805901,
              nome: "Riachuelo",
              id_estado: 26
          },
          {
              codigo_ibge: 2806008,
              nome: "Ribeirópolis",
              id_estado: 26
          },
          {
              codigo_ibge: 2806107,
              nome: "Rosário do Catete",
              id_estado: 26
          },
          {
              codigo_ibge: 2806206,
              nome: "Salgado",
              id_estado: 26
          },
          {
              codigo_ibge: 2806305,
              nome: "Santa Luzia do Itanhy",
              id_estado: 26
          },
          {
              codigo_ibge: 2806404,
              nome: "Santana do São Francisco",
              id_estado: 26
          },
          {
              codigo_ibge: 2806503,
              nome: "Santa Rosa de Lima",
              id_estado: 26
          },
          {
              codigo_ibge: 2806602,
              nome: "Santo Amaro das Brotas",
              id_estado: 26
          },
          {
              codigo_ibge: 2806701,
              nome: "São Cristóvão",
              id_estado: 26
          },
          {
              codigo_ibge: 2806800,
              nome: "São Domingos",
              id_estado: 26
          },
          {
              codigo_ibge: 2806909,
              nome: "São Francisco",
              id_estado: 26
          },
          {
              codigo_ibge: 2807006,
              nome: "São Miguel do Aleixo",
              id_estado: 26
          },
          {
              codigo_ibge: 2807105,
              nome: "Simão Dias",
              id_estado: 26
          },
          {
              codigo_ibge: 2807204,
              nome: "Siriri",
              id_estado: 26
          },
          {
              codigo_ibge: 2807303,
              nome: "Telha",
              id_estado: 26
          },
          {
              codigo_ibge: 2807402,
              nome: "Tobias Barreto",
              id_estado: 26
          },
          {
              codigo_ibge: 2807501,
              nome: "Tomar do Geru",
              id_estado: 26
          },
          {
              codigo_ibge: 2807600,
              nome: "Umbaúba",
              id_estado: 26
          },
          {
              codigo_ibge: 2900108,
              nome: "Abaíra",
              id_estado: 5
          },
          {
              codigo_ibge: 2900207,
              nome: "Abaré",
              id_estado: 5
          },
          {
              codigo_ibge: 2900306,
              nome: "Acajutiba",
              id_estado: 5
          },
          {
              codigo_ibge: 2900355,
              nome: "Adustina",
              id_estado: 5
          },
          {
              codigo_ibge: 2900405,
              nome: "Água Fria",
              id_estado: 5
          },
          {
              codigo_ibge: 2900504,
              nome: "Érico Cardoso",
              id_estado: 5
          },
          {
              codigo_ibge: 2900603,
              nome: "Aiquara",
              id_estado: 5
          },
          {
              codigo_ibge: 2900702,
              nome: "Alagoinhas",
              id_estado: 5
          },
          {
              codigo_ibge: 2900801,
              nome: "Alcobaça",
              id_estado: 5
          },
          {
              codigo_ibge: 2900900,
              nome: "Almadina",
              id_estado: 5
          },
          {
              codigo_ibge: 2901007,
              nome: "Amargosa",
              id_estado: 5
          },
          {
              codigo_ibge: 2901106,
              nome: "Amélia Rodrigues",
              id_estado: 5
          },
          {
              codigo_ibge: 2901155,
              nome: "América Dourada",
              id_estado: 5
          },
          {
              codigo_ibge: 2901205,
              nome: "Anagé",
              id_estado: 5
          },
          {
              codigo_ibge: 2901304,
              nome: "Andaraí",
              id_estado: 5
          },
          {
              codigo_ibge: 2901353,
              nome: "Andorinha",
              id_estado: 5
          },
          {
              codigo_ibge: 2901403,
              nome: "Angical",
              id_estado: 5
          },
          {
              codigo_ibge: 2901502,
              nome: "Anguera",
              id_estado: 5
          },
          {
              codigo_ibge: 2901601,
              nome: "Antas",
              id_estado: 5
          },
          {
              codigo_ibge: 2901700,
              nome: "Antônio Cardoso",
              id_estado: 5
          },
          {
              codigo_ibge: 2901809,
              nome: "Antônio Gonçalves",
              id_estado: 5
          },
          {
              codigo_ibge: 2901908,
              nome: "Aporá",
              id_estado: 5
          },
          {
              codigo_ibge: 2901957,
              nome: "Apuarema",
              id_estado: 5
          },
          {
              codigo_ibge: 2902005,
              nome: "Aracatu",
              id_estado: 5
          },
          {
              codigo_ibge: 2902054,
              nome: "Araças",
              id_estado: 5
          },
          {
              codigo_ibge: 2902104,
              nome: "Araci",
              id_estado: 5
          },
          {
              codigo_ibge: 2902203,
              nome: "Aramari",
              id_estado: 5
          },
          {
              codigo_ibge: 2902252,
              nome: "Arataca",
              id_estado: 5
          },
          {
              codigo_ibge: 2902302,
              nome: "Aratuípe",
              id_estado: 5
          },
          {
              codigo_ibge: 2902401,
              nome: "Aurelino Leal",
              id_estado: 5
          },
          {
              codigo_ibge: 2902500,
              nome: "Baianópolis",
              id_estado: 5
          },
          {
              codigo_ibge: 2902609,
              nome: "Baixa Grande",
              id_estado: 5
          },
          {
              codigo_ibge: 2902658,
              nome: "Banzaê",
              id_estado: 5
          },
          {
              codigo_ibge: 2902708,
              nome: "Barra",
              id_estado: 5
          },
          {
              codigo_ibge: 2902807,
              nome: "Barra da Estiva",
              id_estado: 5
          },
          {
              codigo_ibge: 2902906,
              nome: "Barra do Choça",
              id_estado: 5
          },
          {
              codigo_ibge: 2903003,
              nome: "Barra do Mendes",
              id_estado: 5
          },
          {
              codigo_ibge: 2903102,
              nome: "Barra do Rocha",
              id_estado: 5
          },
          {
              codigo_ibge: 2903201,
              nome: "Barreiras",
              id_estado: 5
          },
          {
              codigo_ibge: 2903235,
              nome: "Barro Alto",
              id_estado: 5
          },
          {
              codigo_ibge: 2903276,
              nome: "Barrocas",
              id_estado: 5
          },
          {
              codigo_ibge: 2903300,
              nome: "Barro Preto",
              id_estado: 5
          },
          {
              codigo_ibge: 2903409,
              nome: "Belmonte",
              id_estado: 5
          },
          {
              codigo_ibge: 2903508,
              nome: "Belo Campo",
              id_estado: 5
          },
          {
              codigo_ibge: 2903607,
              nome: "Biritinga",
              id_estado: 5
          },
          {
              codigo_ibge: 2903706,
              nome: "Boa Nova",
              id_estado: 5
          },
          {
              codigo_ibge: 2903805,
              nome: "Boa Vista do Tupim",
              id_estado: 5
          },
          {
              codigo_ibge: 2903904,
              nome: "Bom Jesus da Lapa",
              id_estado: 5
          },
          {
              codigo_ibge: 2903953,
              nome: "Bom Jesus da Serra",
              id_estado: 5
          },
          {
              codigo_ibge: 2904001,
              nome: "Boninal",
              id_estado: 5
          },
          {
              codigo_ibge: 2904050,
              nome: "Bonito",
              id_estado: 5
          },
          {
              codigo_ibge: 2904100,
              nome: "Boquira",
              id_estado: 5
          },
          {
              codigo_ibge: 2904209,
              nome: "Botuporã",
              id_estado: 5
          },
          {
              codigo_ibge: 2904308,
              nome: "Brejões",
              id_estado: 5
          },
          {
              codigo_ibge: 2904407,
              nome: "Brejolândia",
              id_estado: 5
          },
          {
              codigo_ibge: 2904506,
              nome: "Brotas de Macaúbas",
              id_estado: 5
          },
          {
              codigo_ibge: 2904605,
              nome: "Brumado",
              id_estado: 5
          },
          {
              codigo_ibge: 2904704,
              nome: "Buerarema",
              id_estado: 5
          },
          {
              codigo_ibge: 2904753,
              nome: "Buritirama",
              id_estado: 5
          },
          {
              codigo_ibge: 2904803,
              nome: "Caatiba",
              id_estado: 5
          },
          {
              codigo_ibge: 2904852,
              nome: "Cabaceiras do Paraguaçu",
              id_estado: 5
          },
          {
              codigo_ibge: 2904902,
              nome: "Cachoeira",
              id_estado: 5
          },
          {
              codigo_ibge: 2905008,
              nome: "Caculé",
              id_estado: 5
          },
          {
              codigo_ibge: 2905107,
              nome: "Caém",
              id_estado: 5
          },
          {
              codigo_ibge: 2905156,
              nome: "Caetanos",
              id_estado: 5
          },
          {
              codigo_ibge: 2905206,
              nome: "Caetité",
              id_estado: 5
          },
          {
              codigo_ibge: 2905305,
              nome: "Cafarnaum",
              id_estado: 5
          },
          {
              codigo_ibge: 2905404,
              nome: "Cairu",
              id_estado: 5
          },
          {
              codigo_ibge: 2905503,
              nome: "Caldeirão Grande",
              id_estado: 5
          },
          {
              codigo_ibge: 2905602,
              nome: "Camacan",
              id_estado: 5
          },
          {
              codigo_ibge: 2905701,
              nome: "Camaçari",
              id_estado: 5
          },
          {
              codigo_ibge: 2905800,
              nome: "Camamu",
              id_estado: 5
          },
          {
              codigo_ibge: 2905909,
              nome: "Campo Alegre de Lourdes",
              id_estado: 5
          },
          {
              codigo_ibge: 2906006,
              nome: "Campo Formoso",
              id_estado: 5
          },
          {
              codigo_ibge: 2906105,
              nome: "Canápolis",
              id_estado: 5
          },
          {
              codigo_ibge: 2906204,
              nome: "Canarana",
              id_estado: 5
          },
          {
              codigo_ibge: 2906303,
              nome: "Canavieiras",
              id_estado: 5
          },
          {
              codigo_ibge: 2906402,
              nome: "Candeal",
              id_estado: 5
          },
          {
              codigo_ibge: 2906501,
              nome: "Candeias",
              id_estado: 5
          },
          {
              codigo_ibge: 2906600,
              nome: "Candiba",
              id_estado: 5
          },
          {
              codigo_ibge: 2906709,
              nome: "Cândido Sales",
              id_estado: 5
          },
          {
              codigo_ibge: 2906808,
              nome: "Cansanção",
              id_estado: 5
          },
          {
              codigo_ibge: 2906824,
              nome: "Canudos",
              id_estado: 5
          },
          {
              codigo_ibge: 2906857,
              nome: "Capela do Alto Alegre",
              id_estado: 5
          },
          {
              codigo_ibge: 2906873,
              nome: "Capim Grosso",
              id_estado: 5
          },
          {
              codigo_ibge: 2906899,
              nome: "Caraíbas",
              id_estado: 5
          },
          {
              codigo_ibge: 2906907,
              nome: "Caravelas",
              id_estado: 5
          },
          {
              codigo_ibge: 2907004,
              nome: "Cardeal da Silva",
              id_estado: 5
          },
          {
              codigo_ibge: 2907103,
              nome: "Carinhanha",
              id_estado: 5
          },
          {
              codigo_ibge: 2907202,
              nome: "Casa Nova",
              id_estado: 5
          },
          {
              codigo_ibge: 2907301,
              nome: "Castro Alves",
              id_estado: 5
          },
          {
              codigo_ibge: 2907400,
              nome: "Catolândia",
              id_estado: 5
          },
          {
              codigo_ibge: 2907509,
              nome: "Catu",
              id_estado: 5
          },
          {
              codigo_ibge: 2907558,
              nome: "Caturama",
              id_estado: 5
          },
          {
              codigo_ibge: 2907608,
              nome: "Central",
              id_estado: 5
          },
          {
              codigo_ibge: 2907707,
              nome: "Chorrochó",
              id_estado: 5
          },
          {
              codigo_ibge: 2907806,
              nome: "Cícero Dantas",
              id_estado: 5
          },
          {
              codigo_ibge: 2907905,
              nome: "Cipó",
              id_estado: 5
          },
          {
              codigo_ibge: 2908002,
              nome: "Coaraci",
              id_estado: 5
          },
          {
              codigo_ibge: 2908101,
              nome: "Cocos",
              id_estado: 5
          },
          {
              codigo_ibge: 2908200,
              nome: "Conceição da Feira",
              id_estado: 5
          },
          {
              codigo_ibge: 2908309,
              nome: "Conceição do Almeida",
              id_estado: 5
          },
          {
              codigo_ibge: 2908408,
              nome: "Conceição do Coité",
              id_estado: 5
          },
          {
              codigo_ibge: 2908507,
              nome: "Conceição do Jacuípe",
              id_estado: 5
          },
          {
              codigo_ibge: 2908606,
              nome: "Conde",
              id_estado: 5
          },
          {
              codigo_ibge: 2908705,
              nome: "Condeúba",
              id_estado: 5
          },
          {
              codigo_ibge: 2908804,
              nome: "Contendas do Sincorá",
              id_estado: 5
          },
          {
              codigo_ibge: 2908903,
              nome: "Coração de Maria",
              id_estado: 5
          },
          {
              codigo_ibge: 2909000,
              nome: "Cordeiros",
              id_estado: 5
          },
          {
              codigo_ibge: 2909109,
              nome: "Coribe",
              id_estado: 5
          },
          {
              codigo_ibge: 2909208,
              nome: "Coronel João Sá",
              id_estado: 5
          },
          {
              codigo_ibge: 2909307,
              nome: "Correntina",
              id_estado: 5
          },
          {
              codigo_ibge: 2909406,
              nome: "Cotegipe",
              id_estado: 5
          },
          {
              codigo_ibge: 2909505,
              nome: "Cravolândia",
              id_estado: 5
          },
          {
              codigo_ibge: 2909604,
              nome: "Crisópolis",
              id_estado: 5
          },
          {
              codigo_ibge: 2909703,
              nome: "Cristópolis",
              id_estado: 5
          },
          {
              codigo_ibge: 2909802,
              nome: "Cruz das Almas",
              id_estado: 5
          },
          {
              codigo_ibge: 2909901,
              nome: "Curaçá",
              id_estado: 5
          },
          {
              codigo_ibge: 2910008,
              nome: "Dário Meira",
              id_estado: 5
          },
          {
              codigo_ibge: 2910057,
              nome: "Dias D'Ávila",
              id_estado: 5
          },
          {
              codigo_ibge: 2910107,
              nome: "Dom Basílio",
              id_estado: 5
          },
          {
              codigo_ibge: 2910206,
              nome: "Dom Macedo Costa",
              id_estado: 5
          },
          {
              codigo_ibge: 2910305,
              nome: "Elísio Medrado",
              id_estado: 5
          },
          {
              codigo_ibge: 2910404,
              nome: "Encruzilhada",
              id_estado: 5
          },
          {
              codigo_ibge: 2910503,
              nome: "Entre Rios",
              id_estado: 5
          },
          {
              codigo_ibge: 2910602,
              nome: "Esplanada",
              id_estado: 5
          },
          {
              codigo_ibge: 2910701,
              nome: "Euclides da Cunha",
              id_estado: 5
          },
          {
              codigo_ibge: 2910727,
              nome: "Eunápolis",
              id_estado: 5
          },
          {
              codigo_ibge: 2910750,
              nome: "Fátima",
              id_estado: 5
          },
          {
              codigo_ibge: 2910776,
              nome: "Feira da Mata",
              id_estado: 5
          },
          {
              codigo_ibge: 2910800,
              nome: "Feira de Santana",
              id_estado: 5
          },
          {
              codigo_ibge: 2910859,
              nome: "Filadélfia",
              id_estado: 5
          },
          {
              codigo_ibge: 2910909,
              nome: "Firmino Alves",
              id_estado: 5
          },
          {
              codigo_ibge: 2911006,
              nome: "Floresta Azul",
              id_estado: 5
          },
          {
              codigo_ibge: 2911105,
              nome: "Formosa do Rio Preto",
              id_estado: 5
          },
          {
              codigo_ibge: 2911204,
              nome: "Gandu",
              id_estado: 5
          },
          {
              codigo_ibge: 2911253,
              nome: "Gavião",
              id_estado: 5
          },
          {
              codigo_ibge: 2911303,
              nome: "Gentio do Ouro",
              id_estado: 5
          },
          {
              codigo_ibge: 2911402,
              nome: "Glória",
              id_estado: 5
          },
          {
              codigo_ibge: 2911501,
              nome: "Gongogi",
              id_estado: 5
          },
          {
              codigo_ibge: 2911600,
              nome: "Governador Mangabeira",
              id_estado: 5
          },
          {
              codigo_ibge: 2911659,
              nome: "Guajeru",
              id_estado: 5
          },
          {
              codigo_ibge: 2911709,
              nome: "Guanambi",
              id_estado: 5
          },
          {
              codigo_ibge: 2911808,
              nome: "Guaratinga",
              id_estado: 5
          },
          {
              codigo_ibge: 2911857,
              nome: "Heliópolis",
              id_estado: 5
          },
          {
              codigo_ibge: 2911907,
              nome: "Iaçu",
              id_estado: 5
          },
          {
              codigo_ibge: 2912004,
              nome: "Ibiassucê",
              id_estado: 5
          },
          {
              codigo_ibge: 2912103,
              nome: "Ibicaraí",
              id_estado: 5
          },
          {
              codigo_ibge: 2912202,
              nome: "Ibicoara",
              id_estado: 5
          },
          {
              codigo_ibge: 2912301,
              nome: "Ibicuí",
              id_estado: 5
          },
          {
              codigo_ibge: 2912400,
              nome: "Ibipeba",
              id_estado: 5
          },
          {
              codigo_ibge: 2912509,
              nome: "Ibipitanga",
              id_estado: 5
          },
          {
              codigo_ibge: 2912608,
              nome: "Ibiquera",
              id_estado: 5
          },
          {
              codigo_ibge: 2912707,
              nome: "Ibirapitanga",
              id_estado: 5
          },
          {
              codigo_ibge: 2912806,
              nome: "Ibirapuã",
              id_estado: 5
          },
          {
              codigo_ibge: 2912905,
              nome: "Ibirataia",
              id_estado: 5
          },
          {
              codigo_ibge: 2913002,
              nome: "Ibitiara",
              id_estado: 5
          },
          {
              codigo_ibge: 2913101,
              nome: "Ibititá",
              id_estado: 5
          },
          {
              codigo_ibge: 2913200,
              nome: "Ibotirama",
              id_estado: 5
          },
          {
              codigo_ibge: 2913309,
              nome: "Ichu",
              id_estado: 5
          },
          {
              codigo_ibge: 2913408,
              nome: "Igaporã",
              id_estado: 5
          },
          {
              codigo_ibge: 2913457,
              nome: "Igrapiúna",
              id_estado: 5
          },
          {
              codigo_ibge: 2913507,
              nome: "Iguaí",
              id_estado: 5
          },
          {
              codigo_ibge: 2913606,
              nome: "Ilhéus",
              id_estado: 5
          },
          {
              codigo_ibge: 2913705,
              nome: "Inhambupe",
              id_estado: 5
          },
          {
              codigo_ibge: 2913804,
              nome: "Ipecaetá",
              id_estado: 5
          },
          {
              codigo_ibge: 2913903,
              nome: "Ipiaú",
              id_estado: 5
          },
          {
              codigo_ibge: 2914000,
              nome: "Ipirá",
              id_estado: 5
          },
          {
              codigo_ibge: 2914109,
              nome: "Ipupiara",
              id_estado: 5
          },
          {
              codigo_ibge: 2914208,
              nome: "Irajuba",
              id_estado: 5
          },
          {
              codigo_ibge: 2914307,
              nome: "Iramaia",
              id_estado: 5
          },
          {
              codigo_ibge: 2914406,
              nome: "Iraquara",
              id_estado: 5
          },
          {
              codigo_ibge: 2914505,
              nome: "Irará",
              id_estado: 5
          },
          {
              codigo_ibge: 2914604,
              nome: "Irecê",
              id_estado: 5
          },
          {
              codigo_ibge: 2914653,
              nome: "Itabela",
              id_estado: 5
          },
          {
              codigo_ibge: 2914703,
              nome: "Itaberaba",
              id_estado: 5
          },
          {
              codigo_ibge: 2914802,
              nome: "Itabuna",
              id_estado: 5
          },
          {
              codigo_ibge: 2914901,
              nome: "Itacaré",
              id_estado: 5
          },
          {
              codigo_ibge: 2915007,
              nome: "Itaeté",
              id_estado: 5
          },
          {
              codigo_ibge: 2915106,
              nome: "Itagi",
              id_estado: 5
          },
          {
              codigo_ibge: 2915205,
              nome: "Itagibá",
              id_estado: 5
          },
          {
              codigo_ibge: 2915304,
              nome: "Itagimirim",
              id_estado: 5
          },
          {
              codigo_ibge: 2915353,
              nome: "Itaguaçu da Bahia",
              id_estado: 5
          },
          {
              codigo_ibge: 2915403,
              nome: "Itaju do Colônia",
              id_estado: 5
          },
          {
              codigo_ibge: 2915502,
              nome: "Itajuípe",
              id_estado: 5
          },
          {
              codigo_ibge: 2915601,
              nome: "Itamaraju",
              id_estado: 5
          },
          {
              codigo_ibge: 2915700,
              nome: "Itamari",
              id_estado: 5
          },
          {
              codigo_ibge: 2915809,
              nome: "Itambé",
              id_estado: 5
          },
          {
              codigo_ibge: 2915908,
              nome: "Itanagra",
              id_estado: 5
          },
          {
              codigo_ibge: 2916005,
              nome: "Itanhém",
              id_estado: 5
          },
          {
              codigo_ibge: 2916104,
              nome: "Itaparica",
              id_estado: 5
          },
          {
              codigo_ibge: 2916203,
              nome: "Itapé",
              id_estado: 5
          },
          {
              codigo_ibge: 2916302,
              nome: "Itapebi",
              id_estado: 5
          },
          {
              codigo_ibge: 2916401,
              nome: "Itapetinga",
              id_estado: 5
          },
          {
              codigo_ibge: 2916500,
              nome: "Itapicuru",
              id_estado: 5
          },
          {
              codigo_ibge: 2916609,
              nome: "Itapitanga",
              id_estado: 5
          },
          {
              codigo_ibge: 2916708,
              nome: "Itaquara",
              id_estado: 5
          },
          {
              codigo_ibge: 2916807,
              nome: "Itarantim",
              id_estado: 5
          },
          {
              codigo_ibge: 2916856,
              nome: "Itatim",
              id_estado: 5
          },
          {
              codigo_ibge: 2916906,
              nome: "Itiruçu",
              id_estado: 5
          },
          {
              codigo_ibge: 2917003,
              nome: "Itiúba",
              id_estado: 5
          },
          {
              codigo_ibge: 2917102,
              nome: "Itororó",
              id_estado: 5
          },
          {
              codigo_ibge: 2917201,
              nome: "Ituaçu",
              id_estado: 5
          },
          {
              codigo_ibge: 2917300,
              nome: "Ituberá",
              id_estado: 5
          },
          {
              codigo_ibge: 2917334,
              nome: "Iuiú",
              id_estado: 5
          },
          {
              codigo_ibge: 2917359,
              nome: "Jaborandi",
              id_estado: 5
          },
          {
              codigo_ibge: 2917409,
              nome: "Jacaraci",
              id_estado: 5
          },
          {
              codigo_ibge: 2917508,
              nome: "Jacobina",
              id_estado: 5
          },
          {
              codigo_ibge: 2917607,
              nome: "Jaguaquara",
              id_estado: 5
          },
          {
              codigo_ibge: 2917706,
              nome: "Jaguarari",
              id_estado: 5
          },
          {
              codigo_ibge: 2917805,
              nome: "Jaguaripe",
              id_estado: 5
          },
          {
              codigo_ibge: 2917904,
              nome: "Jandaíra",
              id_estado: 5
          },
          {
              codigo_ibge: 2918001,
              nome: "Jequié",
              id_estado: 5
          },
          {
              codigo_ibge: 2918100,
              nome: "Jeremoabo",
              id_estado: 5
          },
          {
              codigo_ibge: 2918209,
              nome: "Jiquiriçá",
              id_estado: 5
          },
          {
              codigo_ibge: 2918308,
              nome: "Jitaúna",
              id_estado: 5
          },
          {
              codigo_ibge: 2918357,
              nome: "João Dourado",
              id_estado: 5
          },
          {
              codigo_ibge: 2918407,
              nome: "Juazeiro",
              id_estado: 5
          },
          {
              codigo_ibge: 2918456,
              nome: "Jucuruçu",
              id_estado: 5
          },
          {
              codigo_ibge: 2918506,
              nome: "Jussara",
              id_estado: 5
          },
          {
              codigo_ibge: 2918555,
              nome: "Jussari",
              id_estado: 5
          },
          {
              codigo_ibge: 2918605,
              nome: "Jussiape",
              id_estado: 5
          },
          {
              codigo_ibge: 2918704,
              nome: "Lafaiete Coutinho",
              id_estado: 5
          },
          {
              codigo_ibge: 2918753,
              nome: "Lagoa Real",
              id_estado: 5
          },
          {
              codigo_ibge: 2918803,
              nome: "Laje",
              id_estado: 5
          },
          {
              codigo_ibge: 2918902,
              nome: "Lajedão",
              id_estado: 5
          },
          {
              codigo_ibge: 2919009,
              nome: "Lajedinho",
              id_estado: 5
          },
          {
              codigo_ibge: 2919058,
              nome: "Lajedo do Tabocal",
              id_estado: 5
          },
          {
              codigo_ibge: 2919108,
              nome: "Lamarão",
              id_estado: 5
          },
          {
              codigo_ibge: 2919157,
              nome: "Lapão",
              id_estado: 5
          },
          {
              codigo_ibge: 2919207,
              nome: "Lauro de Freitas",
              id_estado: 5
          },
          {
              codigo_ibge: 2919306,
              nome: "Lençóis",
              id_estado: 5
          },
          {
              codigo_ibge: 2919405,
              nome: "Licínio de Almeida",
              id_estado: 5
          },
          {
              codigo_ibge: 2919504,
              nome: "Livramento de Nossa Senhora",
              id_estado: 5
          },
          {
              codigo_ibge: 2919553,
              nome: "Luís Eduardo Magalhães",
              id_estado: 5
          },
          {
              codigo_ibge: 2919603,
              nome: "Macajuba",
              id_estado: 5
          },
          {
              codigo_ibge: 2919702,
              nome: "Macarani",
              id_estado: 5
          },
          {
              codigo_ibge: 2919801,
              nome: "Macaúbas",
              id_estado: 5
          },
          {
              codigo_ibge: 2919900,
              nome: "Macururé",
              id_estado: 5
          },
          {
              codigo_ibge: 2919926,
              nome: "Madre de Deus",
              id_estado: 5
          },
          {
              codigo_ibge: 2919959,
              nome: "Maetinga",
              id_estado: 5
          },
          {
              codigo_ibge: 2920007,
              nome: "Maiquinique",
              id_estado: 5
          },
          {
              codigo_ibge: 2920106,
              nome: "Mairi",
              id_estado: 5
          },
          {
              codigo_ibge: 2920205,
              nome: "Malhada",
              id_estado: 5
          },
          {
              codigo_ibge: 2920304,
              nome: "Malhada de Pedras",
              id_estado: 5
          },
          {
              codigo_ibge: 2920403,
              nome: "Manoel Vitorino",
              id_estado: 5
          },
          {
              codigo_ibge: 2920452,
              nome: "Mansidão",
              id_estado: 5
          },
          {
              codigo_ibge: 2920502,
              nome: "Maracás",
              id_estado: 5
          },
          {
              codigo_ibge: 2920601,
              nome: "Maragogipe",
              id_estado: 5
          },
          {
              codigo_ibge: 2920700,
              nome: "Maraú",
              id_estado: 5
          },
          {
              codigo_ibge: 2920809,
              nome: "Marcionílio Souza",
              id_estado: 5
          },
          {
              codigo_ibge: 2920908,
              nome: "Mascote",
              id_estado: 5
          },
          {
              codigo_ibge: 2921005,
              nome: "Mata de São João",
              id_estado: 5
          },
          {
              codigo_ibge: 2921054,
              nome: "Matina",
              id_estado: 5
          },
          {
              codigo_ibge: 2921104,
              nome: "Medeiros Neto",
              id_estado: 5
          },
          {
              codigo_ibge: 2921203,
              nome: "Miguel Calmon",
              id_estado: 5
          },
          {
              codigo_ibge: 2921302,
              nome: "Milagres",
              id_estado: 5
          },
          {
              codigo_ibge: 2921401,
              nome: "Mirangaba",
              id_estado: 5
          },
          {
              codigo_ibge: 2921450,
              nome: "Mirante",
              id_estado: 5
          },
          {
              codigo_ibge: 2921500,
              nome: "Monte Santo",
              id_estado: 5
          },
          {
              codigo_ibge: 2921609,
              nome: "Morpará",
              id_estado: 5
          },
          {
              codigo_ibge: 2921708,
              nome: "Morro do Chapéu",
              id_estado: 5
          },
          {
              codigo_ibge: 2921807,
              nome: "Mortugaba",
              id_estado: 5
          },
          {
              codigo_ibge: 2921906,
              nome: "Mucugê",
              id_estado: 5
          },
          {
              codigo_ibge: 2922003,
              nome: "Mucuri",
              id_estado: 5
          },
          {
              codigo_ibge: 2922052,
              nome: "Mulungu do Morro",
              id_estado: 5
          },
          {
              codigo_ibge: 2922102,
              nome: "Mundo Novo",
              id_estado: 5
          },
          {
              codigo_ibge: 2922201,
              nome: "Muniz Ferreira",
              id_estado: 5
          },
          {
              codigo_ibge: 2922250,
              nome: "Muquém de São Francisco",
              id_estado: 5
          },
          {
              codigo_ibge: 2922300,
              nome: "Muritiba",
              id_estado: 5
          },
          {
              codigo_ibge: 2922409,
              nome: "Mutuípe",
              id_estado: 5
          },
          {
              codigo_ibge: 2922508,
              nome: "Nazaré",
              id_estado: 5
          },
          {
              codigo_ibge: 2922607,
              nome: "Nilo Peçanha",
              id_estado: 5
          },
          {
              codigo_ibge: 2922656,
              nome: "Nordestina",
              id_estado: 5
          },
          {
              codigo_ibge: 2922706,
              nome: "Nova Canaã",
              id_estado: 5
          },
          {
              codigo_ibge: 2922730,
              nome: "Nova Fátima",
              id_estado: 5
          },
          {
              codigo_ibge: 2922755,
              nome: "Nova Ibiá",
              id_estado: 5
          },
          {
              codigo_ibge: 2922805,
              nome: "Nova Itarana",
              id_estado: 5
          },
          {
              codigo_ibge: 2922854,
              nome: "Nova Redenção",
              id_estado: 5
          },
          {
              codigo_ibge: 2922904,
              nome: "Nova Soure",
              id_estado: 5
          },
          {
              codigo_ibge: 2923001,
              nome: "Nova Viçosa",
              id_estado: 5
          },
          {
              codigo_ibge: 2923035,
              nome: "Novo Horizonte",
              id_estado: 5
          },
          {
              codigo_ibge: 2923050,
              nome: "Novo Triunfo",
              id_estado: 5
          },
          {
              codigo_ibge: 2923100,
              nome: "Olindina",
              id_estado: 5
          },
          {
              codigo_ibge: 2923209,
              nome: "Oliveira dos Brejinhos",
              id_estado: 5
          },
          {
              codigo_ibge: 2923308,
              nome: "Ouriçangas",
              id_estado: 5
          },
          {
              codigo_ibge: 2923357,
              nome: "Ourolândia",
              id_estado: 5
          },
          {
              codigo_ibge: 2923407,
              nome: "Palmas de Monte Alto",
              id_estado: 5
          },
          {
              codigo_ibge: 2923506,
              nome: "Palmeiras",
              id_estado: 5
          },
          {
              codigo_ibge: 2923605,
              nome: "Paramirim",
              id_estado: 5
          },
          {
              codigo_ibge: 2923704,
              nome: "Paratinga",
              id_estado: 5
          },
          {
              codigo_ibge: 2923803,
              nome: "Paripiranga",
              id_estado: 5
          },
          {
              codigo_ibge: 2923902,
              nome: "Pau Brasil",
              id_estado: 5
          },
          {
              codigo_ibge: 2924009,
              nome: "Paulo Afonso",
              id_estado: 5
          },
          {
              codigo_ibge: 2924058,
              nome: "Pé de Serra",
              id_estado: 5
          },
          {
              codigo_ibge: 2924108,
              nome: "Pedrão",
              id_estado: 5
          },
          {
              codigo_ibge: 2924207,
              nome: "Pedro Alexandre",
              id_estado: 5
          },
          {
              codigo_ibge: 2924306,
              nome: "Piatã",
              id_estado: 5
          },
          {
              codigo_ibge: 2924405,
              nome: "Pilão Arcado",
              id_estado: 5
          },
          {
              codigo_ibge: 2924504,
              nome: "Pindaí",
              id_estado: 5
          },
          {
              codigo_ibge: 2924603,
              nome: "Pindobaçu",
              id_estado: 5
          },
          {
              codigo_ibge: 2924652,
              nome: "Pintadas",
              id_estado: 5
          },
          {
              codigo_ibge: 2924678,
              nome: "Piraí do Norte",
              id_estado: 5
          },
          {
              codigo_ibge: 2924702,
              nome: "Piripá",
              id_estado: 5
          },
          {
              codigo_ibge: 2924801,
              nome: "Piritiba",
              id_estado: 5
          },
          {
              codigo_ibge: 2924900,
              nome: "Planaltino",
              id_estado: 5
          },
          {
              codigo_ibge: 2925006,
              nome: "Planalto",
              id_estado: 5
          },
          {
              codigo_ibge: 2925105,
              nome: "Poções",
              id_estado: 5
          },
          {
              codigo_ibge: 2925204,
              nome: "Pojuca",
              id_estado: 5
          },
          {
              codigo_ibge: 2925253,
              nome: "Ponto Novo",
              id_estado: 5
          },
          {
              codigo_ibge: 2925303,
              nome: "Porto Seguro",
              id_estado: 5
          },
          {
              codigo_ibge: 2925402,
              nome: "Potiraguá",
              id_estado: 5
          },
          {
              codigo_ibge: 2925501,
              nome: "Prado",
              id_estado: 5
          },
          {
              codigo_ibge: 2925600,
              nome: "Presidente Dutra",
              id_estado: 5
          },
          {
              codigo_ibge: 2925709,
              nome: "Presidente Jânio Quadros",
              id_estado: 5
          },
          {
              codigo_ibge: 2925758,
              nome: "Presidente Tancredo Neves",
              id_estado: 5
          },
          {
              codigo_ibge: 2925808,
              nome: "Queimadas",
              id_estado: 5
          },
          {
              codigo_ibge: 2925907,
              nome: "Quijingue",
              id_estado: 5
          },
          {
              codigo_ibge: 2925931,
              nome: "Quixabeira",
              id_estado: 5
          },
          {
              codigo_ibge: 2925956,
              nome: "Rafael Jambeiro",
              id_estado: 5
          },
          {
              codigo_ibge: 2926004,
              nome: "Remanso",
              id_estado: 5
          },
          {
              codigo_ibge: 2926103,
              nome: "Retirolândia",
              id_estado: 5
          },
          {
              codigo_ibge: 2926202,
              nome: "Riachão das Neves",
              id_estado: 5
          },
          {
              codigo_ibge: 2926301,
              nome: "Riachão do Jacuípe",
              id_estado: 5
          },
          {
              codigo_ibge: 2926400,
              nome: "Riacho de Santana",
              id_estado: 5
          },
          {
              codigo_ibge: 2926509,
              nome: "Ribeira do Amparo",
              id_estado: 5
          },
          {
              codigo_ibge: 2926608,
              nome: "Ribeira do Pombal",
              id_estado: 5
          },
          {
              codigo_ibge: 2926657,
              nome: "Ribeirão do Largo",
              id_estado: 5
          },
          {
              codigo_ibge: 2926707,
              nome: "Rio de Contas",
              id_estado: 5
          },
          {
              codigo_ibge: 2926806,
              nome: "Rio do Antônio",
              id_estado: 5
          },
          {
              codigo_ibge: 2926905,
              nome: "Rio do Pires",
              id_estado: 5
          },
          {
              codigo_ibge: 2927002,
              nome: "Rio Real",
              id_estado: 5
          },
          {
              codigo_ibge: 2927101,
              nome: "Rodelas",
              id_estado: 5
          },
          {
              codigo_ibge: 2927200,
              nome: "Ruy Barbosa",
              id_estado: 5
          },
          {
              codigo_ibge: 2927309,
              nome: "Salinas da Margarida",
              id_estado: 5
          },
          {
              codigo_ibge: 2927408,
              nome: "Salvador",
              id_estado: 5
          },
          {
              codigo_ibge: 2927507,
              nome: "Santa Bárbara",
              id_estado: 5
          },
          {
              codigo_ibge: 2927606,
              nome: "Santa Brígida",
              id_estado: 5
          },
          {
              codigo_ibge: 2927705,
              nome: "Santa Cruz Cabrália",
              id_estado: 5
          },
          {
              codigo_ibge: 2927804,
              nome: "Santa Cruz da Vitória",
              id_estado: 5
          },
          {
              codigo_ibge: 2927903,
              nome: "Santa Inês",
              id_estado: 5
          },
          {
              codigo_ibge: 2928000,
              nome: "Santaluz",
              id_estado: 5
          },
          {
              codigo_ibge: 2928059,
              nome: "Santa Luzia",
              id_estado: 5
          },
          {
              codigo_ibge: 2928109,
              nome: "Santa Maria da Vitória",
              id_estado: 5
          },
          {
              codigo_ibge: 2928208,
              nome: "Santana",
              id_estado: 5
          },
          {
              codigo_ibge: 2928307,
              nome: "Santanópolis",
              id_estado: 5
          },
          {
              codigo_ibge: 2928406,
              nome: "Santa Rita de Cássia",
              id_estado: 5
          },
          {
              codigo_ibge: 2928505,
              nome: "Santa Teresinha",
              id_estado: 5
          },
          {
              codigo_ibge: 2928604,
              nome: "Santo Amaro",
              id_estado: 5
          },
          {
              codigo_ibge: 2928703,
              nome: "Santo Antônio de Jesus",
              id_estado: 5
          },
          {
              codigo_ibge: 2928802,
              nome: "Santo Estêvão",
              id_estado: 5
          },
          {
              codigo_ibge: 2928901,
              nome: "São Desidério",
              id_estado: 5
          },
          {
              codigo_ibge: 2928950,
              nome: "São Domingos",
              id_estado: 5
          },
          {
              codigo_ibge: 2929008,
              nome: "São Félix",
              id_estado: 5
          },
          {
              codigo_ibge: 2929057,
              nome: "São Félix do Coribe",
              id_estado: 5
          },
          {
              codigo_ibge: 2929107,
              nome: "São Felipe",
              id_estado: 5
          },
          {
              codigo_ibge: 2929206,
              nome: "São Francisco do Conde",
              id_estado: 5
          },
          {
              codigo_ibge: 2929255,
              nome: "São Gabriel",
              id_estado: 5
          },
          {
              codigo_ibge: 2929305,
              nome: "São Gonçalo dos Campos",
              id_estado: 5
          },
          {
              codigo_ibge: 2929354,
              nome: "São José da Vitória",
              id_estado: 5
          },
          {
              codigo_ibge: 2929370,
              nome: "São José do Jacuípe",
              id_estado: 5
          },
          {
              codigo_ibge: 2929404,
              nome: "São Miguel das Matas",
              id_estado: 5
          },
          {
              codigo_ibge: 2929503,
              nome: "São Sebastião do Passé",
              id_estado: 5
          },
          {
              codigo_ibge: 2929602,
              nome: "Sapeaçu",
              id_estado: 5
          },
          {
              codigo_ibge: 2929701,
              nome: "Sátiro Dias",
              id_estado: 5
          },
          {
              codigo_ibge: 2929750,
              nome: "Saubara",
              id_estado: 5
          },
          {
              codigo_ibge: 2929800,
              nome: "Saúde",
              id_estado: 5
          },
          {
              codigo_ibge: 2929909,
              nome: "Seabra",
              id_estado: 5
          },
          {
              codigo_ibge: 2930006,
              nome: "Sebastião Laranjeiras",
              id_estado: 5
          },
          {
              codigo_ibge: 2930105,
              nome: "Senhor do Bonfim",
              id_estado: 5
          },
          {
              codigo_ibge: 2930154,
              nome: "Serra do Ramalho",
              id_estado: 5
          },
          {
              codigo_ibge: 2930204,
              nome: "Sento Sé",
              id_estado: 5
          },
          {
              codigo_ibge: 2930303,
              nome: "Serra Dourada",
              id_estado: 5
          },
          {
              codigo_ibge: 2930402,
              nome: "Serra Preta",
              id_estado: 5
          },
          {
              codigo_ibge: 2930501,
              nome: "Serrinha",
              id_estado: 5
          },
          {
              codigo_ibge: 2930600,
              nome: "Serrolândia",
              id_estado: 5
          },
          {
              codigo_ibge: 2930709,
              nome: "Simões Filho",
              id_estado: 5
          },
          {
              codigo_ibge: 2930758,
              nome: "Sítio do Mato",
              id_estado: 5
          },
          {
              codigo_ibge: 2930766,
              nome: "Sítio do Quinto",
              id_estado: 5
          },
          {
              codigo_ibge: 2930774,
              nome: "Sobradinho",
              id_estado: 5
          },
          {
              codigo_ibge: 2930808,
              nome: "Souto Soares",
              id_estado: 5
          },
          {
              codigo_ibge: 2930907,
              nome: "Tabocas do Brejo Velho",
              id_estado: 5
          },
          {
              codigo_ibge: 2931004,
              nome: "Tanhaçu",
              id_estado: 5
          },
          {
              codigo_ibge: 2931053,
              nome: "Tanque Novo",
              id_estado: 5
          },
          {
              codigo_ibge: 2931103,
              nome: "Tanquinho",
              id_estado: 5
          },
          {
              codigo_ibge: 2931202,
              nome: "Taperoá",
              id_estado: 5
          },
          {
              codigo_ibge: 2931301,
              nome: "Tapiramutá",
              id_estado: 5
          },
          {
              codigo_ibge: 2931350,
              nome: "Teixeira de Freitas",
              id_estado: 5
          },
          {
              codigo_ibge: 2931400,
              nome: "Teodoro Sampaio",
              id_estado: 5
          },
          {
              codigo_ibge: 2931509,
              nome: "Teofilândia",
              id_estado: 5
          },
          {
              codigo_ibge: 2931608,
              nome: "Teolândia",
              id_estado: 5
          },
          {
              codigo_ibge: 2931707,
              nome: "Terra Nova",
              id_estado: 5
          },
          {
              codigo_ibge: 2931806,
              nome: "Tremedal",
              id_estado: 5
          },
          {
              codigo_ibge: 2931905,
              nome: "Tucano",
              id_estado: 5
          },
          {
              codigo_ibge: 2932002,
              nome: "Uauá",
              id_estado: 5
          },
          {
              codigo_ibge: 2932101,
              nome: "Ubaíra",
              id_estado: 5
          },
          {
              codigo_ibge: 2932200,
              nome: "Ubaitaba",
              id_estado: 5
          },
          {
              codigo_ibge: 2932309,
              nome: "Ubatã",
              id_estado: 5
          },
          {
              codigo_ibge: 2932408,
              nome: "Uibaí",
              id_estado: 5
          },
          {
              codigo_ibge: 2932457,
              nome: "Umburanas",
              id_estado: 5
          },
          {
              codigo_ibge: 2932507,
              nome: "Una",
              id_estado: 5
          },
          {
              codigo_ibge: 2932606,
              nome: "Urandi",
              id_estado: 5
          },
          {
              codigo_ibge: 2932705,
              nome: "Uruçuca",
              id_estado: 5
          },
          {
              codigo_ibge: 2932804,
              nome: "Utinga",
              id_estado: 5
          },
          {
              codigo_ibge: 2932903,
              nome: "Valença",
              id_estado: 5
          },
          {
              codigo_ibge: 2933000,
              nome: "Valente",
              id_estado: 5
          },
          {
              codigo_ibge: 2933059,
              nome: "Várzea da Roça",
              id_estado: 5
          },
          {
              codigo_ibge: 2933109,
              nome: "Várzea do Poço",
              id_estado: 5
          },
          {
              codigo_ibge: 2933158,
              nome: "Várzea Nova",
              id_estado: 5
          },
          {
              codigo_ibge: 2933174,
              nome: "Varzedo",
              id_estado: 5
          },
          {
              codigo_ibge: 2933208,
              nome: "Vera Cruz",
              id_estado: 5
          },
          {
              codigo_ibge: 2933257,
              nome: "Vereda",
              id_estado: 5
          },
          {
              codigo_ibge: 2933307,
              nome: "Vitória da Conquista",
              id_estado: 5
          },
          {
              codigo_ibge: 2933406,
              nome: "Wagner",
              id_estado: 5
          },
          {
              codigo_ibge: 2933455,
              nome: "Wanderley",
              id_estado: 5
          },
          {
              codigo_ibge: 2933505,
              nome: "Wenceslau Guimarães",
              id_estado: 5
          },
          {
              codigo_ibge: 2933604,
              nome: "Xique-Xique",
              id_estado: 5
          },
          {
              codigo_ibge: 3100104,
              nome: "Abadia dos Dourados",
              id_estado: 13
          },
          {
              codigo_ibge: 3100203,
              nome: "Abaeté",
              id_estado: 13
          },
          {
              codigo_ibge: 3100302,
              nome: "Abre Campo",
              id_estado: 13
          },
          {
              codigo_ibge: 3100401,
              nome: "Acaiaca",
              id_estado: 13
          },
          {
              codigo_ibge: 3100500,
              nome: "Açucena",
              id_estado: 13
          },
          {
              codigo_ibge: 3100609,
              nome: "Água Boa",
              id_estado: 13
          },
          {
              codigo_ibge: 3100708,
              nome: "Água Comprida",
              id_estado: 13
          },
          {
              codigo_ibge: 3100807,
              nome: "Aguanil",
              id_estado: 13
          },
          {
              codigo_ibge: 3100906,
              nome: "Águas Formosas",
              id_estado: 13
          },
          {
              codigo_ibge: 3101003,
              nome: "Águas Vermelhas",
              id_estado: 13
          },
          {
              codigo_ibge: 3101102,
              nome: "Aimorés",
              id_estado: 13
          },
          {
              codigo_ibge: 3101201,
              nome: "Aiuruoca",
              id_estado: 13
          },
          {
              codigo_ibge: 3101300,
              nome: "Alagoa",
              id_estado: 13
          },
          {
              codigo_ibge: 3101409,
              nome: "Albertina",
              id_estado: 13
          },
          {
              codigo_ibge: 3101508,
              nome: "Além Paraíba",
              id_estado: 13
          },
          {
              codigo_ibge: 3101607,
              nome: "Alfenas",
              id_estado: 13
          },
          {
              codigo_ibge: 3101631,
              nome: "Alfredo Vasconcelos",
              id_estado: 13
          },
          {
              codigo_ibge: 3101706,
              nome: "Almenara",
              id_estado: 13
          },
          {
              codigo_ibge: 3101805,
              nome: "Alpercata",
              id_estado: 13
          },
          {
              codigo_ibge: 3101904,
              nome: "Alpinópolis",
              id_estado: 13
          },
          {
              codigo_ibge: 3102001,
              nome: "Alterosa",
              id_estado: 13
          },
          {
              codigo_ibge: 3102050,
              nome: "Alto Caparaó",
              id_estado: 13
          },
          {
              codigo_ibge: 3102100,
              nome: "Alto Rio Doce",
              id_estado: 13
          },
          {
              codigo_ibge: 3102209,
              nome: "Alvarenga",
              id_estado: 13
          },
          {
              codigo_ibge: 3102308,
              nome: "Alvinópolis",
              id_estado: 13
          },
          {
              codigo_ibge: 3102407,
              nome: "Alvorada de Minas",
              id_estado: 13
          },
          {
              codigo_ibge: 3102506,
              nome: "Amparo do Serra",
              id_estado: 13
          },
          {
              codigo_ibge: 3102605,
              nome: "Andradas",
              id_estado: 13
          },
          {
              codigo_ibge: 3102704,
              nome: "Cachoeira de Pajeú",
              id_estado: 13
          },
          {
              codigo_ibge: 3102803,
              nome: "Andrelândia",
              id_estado: 13
          },
          {
              codigo_ibge: 3102852,
              nome: "Angelândia",
              id_estado: 13
          },
          {
              codigo_ibge: 3102902,
              nome: "Antônio Carlos",
              id_estado: 13
          },
          {
              codigo_ibge: 3103009,
              nome: "Antônio Dias",
              id_estado: 13
          },
          {
              codigo_ibge: 3103108,
              nome: "Antônio Prado de Minas",
              id_estado: 13
          },
          {
              codigo_ibge: 3103207,
              nome: "Araçaí",
              id_estado: 13
          },
          {
              codigo_ibge: 3103306,
              nome: "Aracitaba",
              id_estado: 13
          },
          {
              codigo_ibge: 3103405,
              nome: "Araçuaí",
              id_estado: 13
          },
          {
              codigo_ibge: 3103504,
              nome: "Araguari",
              id_estado: 13
          },
          {
              codigo_ibge: 3103603,
              nome: "Arantina",
              id_estado: 13
          },
          {
              codigo_ibge: 3103702,
              nome: "Araponga",
              id_estado: 13
          },
          {
              codigo_ibge: 3103751,
              nome: "Araporã",
              id_estado: 13
          },
          {
              codigo_ibge: 3103801,
              nome: "Arapuá",
              id_estado: 13
          },
          {
              codigo_ibge: 3103900,
              nome: "Araújos",
              id_estado: 13
          },
          {
              codigo_ibge: 3104007,
              nome: "Araxá",
              id_estado: 13
          },
          {
              codigo_ibge: 3104106,
              nome: "Arceburgo",
              id_estado: 13
          },
          {
              codigo_ibge: 3104205,
              nome: "Arcos",
              id_estado: 13
          },
          {
              codigo_ibge: 3104304,
              nome: "Areado",
              id_estado: 13
          },
          {
              codigo_ibge: 3104403,
              nome: "Argirita",
              id_estado: 13
          },
          {
              codigo_ibge: 3104452,
              nome: "Aricanduva",
              id_estado: 13
          },
          {
              codigo_ibge: 3104502,
              nome: "Arinos",
              id_estado: 13
          },
          {
              codigo_ibge: 3104601,
              nome: "Astolfo Dutra",
              id_estado: 13
          },
          {
              codigo_ibge: 3104700,
              nome: "Ataléia",
              id_estado: 13
          },
          {
              codigo_ibge: 3104809,
              nome: "Augusto de Lima",
              id_estado: 13
          },
          {
              codigo_ibge: 3104908,
              nome: "Baependi",
              id_estado: 13
          },
          {
              codigo_ibge: 3105004,
              nome: "Baldim",
              id_estado: 13
          },
          {
              codigo_ibge: 3105103,
              nome: "Bambuí",
              id_estado: 13
          },
          {
              codigo_ibge: 3105202,
              nome: "Bandeira",
              id_estado: 13
          },
          {
              codigo_ibge: 3105301,
              nome: "Bandeira do Sul",
              id_estado: 13
          },
          {
              codigo_ibge: 3105400,
              nome: "Barão de Cocais",
              id_estado: 13
          },
          {
              codigo_ibge: 3105509,
              nome: "Barão de Monte Alto",
              id_estado: 13
          },
          {
              codigo_ibge: 3105608,
              nome: "Barbacena",
              id_estado: 13
          },
          {
              codigo_ibge: 3105707,
              nome: "Barra Longa",
              id_estado: 13
          },
          {
              codigo_ibge: 3105905,
              nome: "Barroso",
              id_estado: 13
          },
          {
              codigo_ibge: 3106002,
              nome: "Bela Vista de Minas",
              id_estado: 13
          },
          {
              codigo_ibge: 3106101,
              nome: "Belmiro Braga",
              id_estado: 13
          },
          {
              codigo_ibge: 3106200,
              nome: "Belo Horizonte",
              id_estado: 13
          },
          {
              codigo_ibge: 3106309,
              nome: "Belo Oriente",
              id_estado: 13
          },
          {
              codigo_ibge: 3106408,
              nome: "Belo Vale",
              id_estado: 13
          },
          {
              codigo_ibge: 3106507,
              nome: "Berilo",
              id_estado: 13
          },
          {
              codigo_ibge: 3106606,
              nome: "Bertópolis",
              id_estado: 13
          },
          {
              codigo_ibge: 3106655,
              nome: "Berizal",
              id_estado: 13
          },
          {
              codigo_ibge: 3106705,
              nome: "Betim",
              id_estado: 13
          },
          {
              codigo_ibge: 3106804,
              nome: "Bias Fortes",
              id_estado: 13
          },
          {
              codigo_ibge: 3106903,
              nome: "Bicas",
              id_estado: 13
          },
          {
              codigo_ibge: 3107000,
              nome: "Biquinhas",
              id_estado: 13
          },
          {
              codigo_ibge: 3107109,
              nome: "Boa Esperança",
              id_estado: 13
          },
          {
              codigo_ibge: 3107208,
              nome: "Bocaina de Minas",
              id_estado: 13
          },
          {
              codigo_ibge: 3107307,
              nome: "Bocaiúva",
              id_estado: 13
          },
          {
              codigo_ibge: 3107406,
              nome: "Bom Despacho",
              id_estado: 13
          },
          {
              codigo_ibge: 3107505,
              nome: "Bom Jardim de Minas",
              id_estado: 13
          },
          {
              codigo_ibge: 3107604,
              nome: "Bom Jesus da Penha",
              id_estado: 13
          },
          {
              codigo_ibge: 3107703,
              nome: "Bom Jesus do Amparo",
              id_estado: 13
          },
          {
              codigo_ibge: 3107802,
              nome: "Bom Jesus do Galho",
              id_estado: 13
          },
          {
              codigo_ibge: 3107901,
              nome: "Bom Repouso",
              id_estado: 13
          },
          {
              codigo_ibge: 3108008,
              nome: "Bom Sucesso",
              id_estado: 13
          },
          {
              codigo_ibge: 3108107,
              nome: "Bonfim",
              id_estado: 13
          },
          {
              codigo_ibge: 3108206,
              nome: "Bonfinópolis de Minas",
              id_estado: 13
          },
          {
              codigo_ibge: 3108255,
              nome: "Bonito de Minas",
              id_estado: 13
          },
          {
              codigo_ibge: 3108305,
              nome: "Borda da Mata",
              id_estado: 13
          },
          {
              codigo_ibge: 3108404,
              nome: "Botelhos",
              id_estado: 13
          },
          {
              codigo_ibge: 3108503,
              nome: "Botumirim",
              id_estado: 13
          },
          {
              codigo_ibge: 3108552,
              nome: "Brasilândia de Minas",
              id_estado: 13
          },
          {
              codigo_ibge: 3108602,
              nome: "Brasília de Minas",
              id_estado: 13
          },
          {
              codigo_ibge: 3108701,
              nome: "Brás Pires",
              id_estado: 13
          },
          {
              codigo_ibge: 3108800,
              nome: "Braúnas",
              id_estado: 13
          },
          {
              codigo_ibge: 3108909,
              nome: "Brazópolis",
              id_estado: 13
          },
          {
              codigo_ibge: 3109006,
              nome: "Brumadinho",
              id_estado: 13
          },
          {
              codigo_ibge: 3109105,
              nome: "Bueno Brandão",
              id_estado: 13
          },
          {
              codigo_ibge: 3109204,
              nome: "Buenópolis",
              id_estado: 13
          },
          {
              codigo_ibge: 3109253,
              nome: "Bugre",
              id_estado: 13
          },
          {
              codigo_ibge: 3109303,
              nome: "Buritis",
              id_estado: 13
          },
          {
              codigo_ibge: 3109402,
              nome: "Buritizeiro",
              id_estado: 13
          },
          {
              codigo_ibge: 3109451,
              nome: "Cabeceira Grande",
              id_estado: 13
          },
          {
              codigo_ibge: 3109501,
              nome: "Cabo Verde",
              id_estado: 13
          },
          {
              codigo_ibge: 3109600,
              nome: "Cachoeira da Prata",
              id_estado: 13
          },
          {
              codigo_ibge: 3109709,
              nome: "Cachoeira de Minas",
              id_estado: 13
          },
          {
              codigo_ibge: 3109808,
              nome: "Cachoeira Dourada",
              id_estado: 13
          },
          {
              codigo_ibge: 3109907,
              nome: "Caetanópolis",
              id_estado: 13
          },
          {
              codigo_ibge: 3110004,
              nome: "Caeté",
              id_estado: 13
          },
          {
              codigo_ibge: 3110103,
              nome: "Caiana",
              id_estado: 13
          },
          {
              codigo_ibge: 3110202,
              nome: "Cajuri",
              id_estado: 13
          },
          {
              codigo_ibge: 3110301,
              nome: "Caldas",
              id_estado: 13
          },
          {
              codigo_ibge: 3110400,
              nome: "Camacho",
              id_estado: 13
          },
          {
              codigo_ibge: 3110509,
              nome: "Camanducaia",
              id_estado: 13
          },
          {
              codigo_ibge: 3110608,
              nome: "Cambuí",
              id_estado: 13
          },
          {
              codigo_ibge: 3110707,
              nome: "Cambuquira",
              id_estado: 13
          },
          {
              codigo_ibge: 3110806,
              nome: "Campanário",
              id_estado: 13
          },
          {
              codigo_ibge: 3110905,
              nome: "Campanha",
              id_estado: 13
          },
          {
              codigo_ibge: 3111002,
              nome: "Campestre",
              id_estado: 13
          },
          {
              codigo_ibge: 3111101,
              nome: "Campina Verde",
              id_estado: 13
          },
          {
              codigo_ibge: 3111150,
              nome: "Campo Azul",
              id_estado: 13
          },
          {
              codigo_ibge: 3111200,
              nome: "Campo Belo",
              id_estado: 13
          },
          {
              codigo_ibge: 3111309,
              nome: "Campo do Meio",
              id_estado: 13
          },
          {
              codigo_ibge: 3111408,
              nome: "Campo Florido",
              id_estado: 13
          },
          {
              codigo_ibge: 3111507,
              nome: "Campos Altos",
              id_estado: 13
          },
          {
              codigo_ibge: 3111606,
              nome: "Campos Gerais",
              id_estado: 13
          },
          {
              codigo_ibge: 3111705,
              nome: "Canaã",
              id_estado: 13
          },
          {
              codigo_ibge: 3111804,
              nome: "Canápolis",
              id_estado: 13
          },
          {
              codigo_ibge: 3111903,
              nome: "Cana Verde",
              id_estado: 13
          },
          {
              codigo_ibge: 3112000,
              nome: "Candeias",
              id_estado: 13
          },
          {
              codigo_ibge: 3112059,
              nome: "Cantagalo",
              id_estado: 13
          },
          {
              codigo_ibge: 3112109,
              nome: "Caparaó",
              id_estado: 13
          },
          {
              codigo_ibge: 3112208,
              nome: "Capela Nova",
              id_estado: 13
          },
          {
              codigo_ibge: 3112307,
              nome: "Capelinha",
              id_estado: 13
          },
          {
              codigo_ibge: 3112406,
              nome: "Capetinga",
              id_estado: 13
          },
          {
              codigo_ibge: 3112505,
              nome: "Capim Branco",
              id_estado: 13
          },
          {
              codigo_ibge: 3112604,
              nome: "Capinópolis",
              id_estado: 13
          },
          {
              codigo_ibge: 3112653,
              nome: "Capitão Andrade",
              id_estado: 13
          },
          {
              codigo_ibge: 3112703,
              nome: "Capitão Enéas",
              id_estado: 13
          },
          {
              codigo_ibge: 3112802,
              nome: "Capitólio",
              id_estado: 13
          },
          {
              codigo_ibge: 3112901,
              nome: "Caputira",
              id_estado: 13
          },
          {
              codigo_ibge: 3113008,
              nome: "Caraí",
              id_estado: 13
          },
          {
              codigo_ibge: 3113107,
              nome: "Caranaíba",
              id_estado: 13
          },
          {
              codigo_ibge: 3113206,
              nome: "Carandaí",
              id_estado: 13
          },
          {
              codigo_ibge: 3113305,
              nome: "Carangola",
              id_estado: 13
          },
          {
              codigo_ibge: 3113404,
              nome: "Caratinga",
              id_estado: 13
          },
          {
              codigo_ibge: 3113503,
              nome: "Carbonita",
              id_estado: 13
          },
          {
              codigo_ibge: 3113602,
              nome: "Careaçu",
              id_estado: 13
          },
          {
              codigo_ibge: 3113701,
              nome: "Carlos Chagas",
              id_estado: 13
          },
          {
              codigo_ibge: 3113800,
              nome: "Carmésia",
              id_estado: 13
          },
          {
              codigo_ibge: 3113909,
              nome: "Carmo da Cachoeira",
              id_estado: 13
          },
          {
              codigo_ibge: 3114006,
              nome: "Carmo da Mata",
              id_estado: 13
          },
          {
              codigo_ibge: 3114105,
              nome: "Carmo de Minas",
              id_estado: 13
          },
          {
              codigo_ibge: 3114204,
              nome: "Carmo do Cajuru",
              id_estado: 13
          },
          {
              codigo_ibge: 3114303,
              nome: "Carmo do Paranaíba",
              id_estado: 13
          },
          {
              codigo_ibge: 3114402,
              nome: "Carmo do Rio Claro",
              id_estado: 13
          },
          {
              codigo_ibge: 3114501,
              nome: "Carmópolis de Minas",
              id_estado: 13
          },
          {
              codigo_ibge: 3114550,
              nome: "Carneirinho",
              id_estado: 13
          },
          {
              codigo_ibge: 3114600,
              nome: "Carrancas",
              id_estado: 13
          },
          {
              codigo_ibge: 3114709,
              nome: "Carvalhópolis",
              id_estado: 13
          },
          {
              codigo_ibge: 3114808,
              nome: "Carvalhos",
              id_estado: 13
          },
          {
              codigo_ibge: 3114907,
              nome: "Casa Grande",
              id_estado: 13
          },
          {
              codigo_ibge: 3115003,
              nome: "Cascalho Rico",
              id_estado: 13
          },
          {
              codigo_ibge: 3115102,
              nome: "Cássia",
              id_estado: 13
          },
          {
              codigo_ibge: 3115201,
              nome: "Conceição da Barra de Minas",
              id_estado: 13
          },
          {
              codigo_ibge: 3115300,
              nome: "Cataguases",
              id_estado: 13
          },
          {
              codigo_ibge: 3115359,
              nome: "Catas Altas",
              id_estado: 13
          },
          {
              codigo_ibge: 3115409,
              nome: "Catas Altas da Noruega",
              id_estado: 13
          },
          {
              codigo_ibge: 3115458,
              nome: "Catuji",
              id_estado: 13
          },
          {
              codigo_ibge: 3115474,
              nome: "Catuti",
              id_estado: 13
          },
          {
              codigo_ibge: 3115508,
              nome: "Caxambu",
              id_estado: 13
          },
          {
              codigo_ibge: 3115607,
              nome: "Cedro do Abaeté",
              id_estado: 13
          },
          {
              codigo_ibge: 3115706,
              nome: "Central de Minas",
              id_estado: 13
          },
          {
              codigo_ibge: 3115805,
              nome: "Centralina",
              id_estado: 13
          },
          {
              codigo_ibge: 3115904,
              nome: "Chácara",
              id_estado: 13
          },
          {
              codigo_ibge: 3116001,
              nome: "Chalé",
              id_estado: 13
          },
          {
              codigo_ibge: 3116100,
              nome: "Chapada do Norte",
              id_estado: 13
          },
          {
              codigo_ibge: 3116159,
              nome: "Chapada Gaúcha",
              id_estado: 13
          },
          {
              codigo_ibge: 3116209,
              nome: "Chiador",
              id_estado: 13
          },
          {
              codigo_ibge: 3116308,
              nome: "Cipotânea",
              id_estado: 13
          },
          {
              codigo_ibge: 3116407,
              nome: "Claraval",
              id_estado: 13
          },
          {
              codigo_ibge: 3116506,
              nome: "Claro dos Poções",
              id_estado: 13
          },
          {
              codigo_ibge: 3116605,
              nome: "Cláudio",
              id_estado: 13
          },
          {
              codigo_ibge: 3116704,
              nome: "Coimbra",
              id_estado: 13
          },
          {
              codigo_ibge: 3116803,
              nome: "Coluna",
              id_estado: 13
          },
          {
              codigo_ibge: 3116902,
              nome: "Comendador Gomes",
              id_estado: 13
          },
          {
              codigo_ibge: 3117009,
              nome: "Comercinho",
              id_estado: 13
          },
          {
              codigo_ibge: 3117108,
              nome: "Conceição da Aparecida",
              id_estado: 13
          },
          {
              codigo_ibge: 3117207,
              nome: "Conceição das Pedras",
              id_estado: 13
          },
          {
              codigo_ibge: 3117306,
              nome: "Conceição das Alagoas",
              id_estado: 13
          },
          {
              codigo_ibge: 3117405,
              nome: "Conceição de Ipanema",
              id_estado: 13
          },
          {
              codigo_ibge: 3117504,
              nome: "Conceição do Mato Dentro",
              id_estado: 13
          },
          {
              codigo_ibge: 3117603,
              nome: "Conceição do Pará",
              id_estado: 13
          },
          {
              codigo_ibge: 3117702,
              nome: "Conceição do Rio Verde",
              id_estado: 13
          },
          {
              codigo_ibge: 3117801,
              nome: "Conceição dos Ouros",
              id_estado: 13
          },
          {
              codigo_ibge: 3117836,
              nome: "Cônego Marinho",
              id_estado: 13
          },
          {
              codigo_ibge: 3117876,
              nome: "Confins",
              id_estado: 13
          },
          {
              codigo_ibge: 3117900,
              nome: "Congonhal",
              id_estado: 13
          },
          {
              codigo_ibge: 3118007,
              nome: "Congonhas",
              id_estado: 13
          },
          {
              codigo_ibge: 3118106,
              nome: "Congonhas do Norte",
              id_estado: 13
          },
          {
              codigo_ibge: 3118205,
              nome: "Conquista",
              id_estado: 13
          },
          {
              codigo_ibge: 3118304,
              nome: "Conselheiro Lafaiete",
              id_estado: 13
          },
          {
              codigo_ibge: 3118403,
              nome: "Conselheiro Pena",
              id_estado: 13
          },
          {
              codigo_ibge: 3118502,
              nome: "Consolação",
              id_estado: 13
          },
          {
              codigo_ibge: 3118601,
              nome: "Contagem",
              id_estado: 13
          },
          {
              codigo_ibge: 3118700,
              nome: "Coqueiral",
              id_estado: 13
          },
          {
              codigo_ibge: 3118809,
              nome: "Coração de Jesus",
              id_estado: 13
          },
          {
              codigo_ibge: 3118908,
              nome: "Cordisburgo",
              id_estado: 13
          },
          {
              codigo_ibge: 3119005,
              nome: "Cordislândia",
              id_estado: 13
          },
          {
              codigo_ibge: 3119104,
              nome: "Corinto",
              id_estado: 13
          },
          {
              codigo_ibge: 3119203,
              nome: "Coroaci",
              id_estado: 13
          },
          {
              codigo_ibge: 3119302,
              nome: "Coromandel",
              id_estado: 13
          },
          {
              codigo_ibge: 3119401,
              nome: "Coronel Fabriciano",
              id_estado: 13
          },
          {
              codigo_ibge: 3119500,
              nome: "Coronel Murta",
              id_estado: 13
          },
          {
              codigo_ibge: 3119609,
              nome: "Coronel Pacheco",
              id_estado: 13
          },
          {
              codigo_ibge: 3119708,
              nome: "Coronel Xavier Chaves",
              id_estado: 13
          },
          {
              codigo_ibge: 3119807,
              nome: "Córrego Danta",
              id_estado: 13
          },
          {
              codigo_ibge: 3119906,
              nome: "Córrego do Bom Jesus",
              id_estado: 13
          },
          {
              codigo_ibge: 3119955,
              nome: "Córrego Fundo",
              id_estado: 13
          },
          {
              codigo_ibge: 3120003,
              nome: "Córrego Novo",
              id_estado: 13
          },
          {
              codigo_ibge: 3120102,
              nome: "Couto de Magalhães de Minas",
              id_estado: 13
          },
          {
              codigo_ibge: 3120151,
              nome: "Crisólita",
              id_estado: 13
          },
          {
              codigo_ibge: 3120201,
              nome: "Cristais",
              id_estado: 13
          },
          {
              codigo_ibge: 3120300,
              nome: "Cristália",
              id_estado: 13
          },
          {
              codigo_ibge: 3120409,
              nome: "Cristiano Otoni",
              id_estado: 13
          },
          {
              codigo_ibge: 3120508,
              nome: "Cristina",
              id_estado: 13
          },
          {
              codigo_ibge: 3120607,
              nome: "Crucilândia",
              id_estado: 13
          },
          {
              codigo_ibge: 3120706,
              nome: "Cruzeiro da Fortaleza",
              id_estado: 13
          },
          {
              codigo_ibge: 3120805,
              nome: "Cruzília",
              id_estado: 13
          },
          {
              codigo_ibge: 3120839,
              nome: "Cuparaque",
              id_estado: 13
          },
          {
              codigo_ibge: 3120870,
              nome: "Curral de Dentro",
              id_estado: 13
          },
          {
              codigo_ibge: 3120904,
              nome: "Curvelo",
              id_estado: 13
          },
          {
              codigo_ibge: 3121001,
              nome: "Datas",
              id_estado: 13
          },
          {
              codigo_ibge: 3121100,
              nome: "Delfim Moreira",
              id_estado: 13
          },
          {
              codigo_ibge: 3121209,
              nome: "Delfinópolis",
              id_estado: 13
          },
          {
              codigo_ibge: 3121258,
              nome: "Delta",
              id_estado: 13
          },
          {
              codigo_ibge: 3121308,
              nome: "Descoberto",
              id_estado: 13
          },
          {
              codigo_ibge: 3121407,
              nome: "Desterro de Entre Rios",
              id_estado: 13
          },
          {
              codigo_ibge: 3121506,
              nome: "Desterro do Melo",
              id_estado: 13
          },
          {
              codigo_ibge: 3121605,
              nome: "Diamantina",
              id_estado: 13
          },
          {
              codigo_ibge: 3121704,
              nome: "Diogo de Vasconcelos",
              id_estado: 13
          },
          {
              codigo_ibge: 3121803,
              nome: "Dionísio",
              id_estado: 13
          },
          {
              codigo_ibge: 3121902,
              nome: "Divinésia",
              id_estado: 13
          },
          {
              codigo_ibge: 3122009,
              nome: "Divino",
              id_estado: 13
          },
          {
              codigo_ibge: 3122108,
              nome: "Divino das Laranjeiras",
              id_estado: 13
          },
          {
              codigo_ibge: 3122207,
              nome: "Divinolândia de Minas",
              id_estado: 13
          },
          {
              codigo_ibge: 3122306,
              nome: "Divinópolis",
              id_estado: 13
          },
          {
              codigo_ibge: 3122355,
              nome: "Divisa Alegre",
              id_estado: 13
          },
          {
              codigo_ibge: 3122405,
              nome: "Divisa Nova",
              id_estado: 13
          },
          {
              codigo_ibge: 3122454,
              nome: "Divisópolis",
              id_estado: 13
          },
          {
              codigo_ibge: 3122470,
              nome: "Dom Bosco",
              id_estado: 13
          },
          {
              codigo_ibge: 3122504,
              nome: "Dom Cavati",
              id_estado: 13
          },
          {
              codigo_ibge: 3122603,
              nome: "Dom Joaquim",
              id_estado: 13
          },
          {
              codigo_ibge: 3122702,
              nome: "Dom Silvério",
              id_estado: 13
          },
          {
              codigo_ibge: 3122801,
              nome: "Dom Viçoso",
              id_estado: 13
          },
          {
              codigo_ibge: 3122900,
              nome: "Dona Eusébia",
              id_estado: 13
          },
          {
              codigo_ibge: 3123007,
              nome: "Dores de Campos",
              id_estado: 13
          },
          {
              codigo_ibge: 3123106,
              nome: "Dores de Guanhães",
              id_estado: 13
          },
          {
              codigo_ibge: 3123205,
              nome: "Dores do Indaiá",
              id_estado: 13
          },
          {
              codigo_ibge: 3123304,
              nome: "Dores do Turvo",
              id_estado: 13
          },
          {
              codigo_ibge: 3123403,
              nome: "Doresópolis",
              id_estado: 13
          },
          {
              codigo_ibge: 3123502,
              nome: "Douradoquara",
              id_estado: 13
          },
          {
              codigo_ibge: 3123528,
              nome: "Durandé",
              id_estado: 13
          },
          {
              codigo_ibge: 3123601,
              nome: "Elói Mendes",
              id_estado: 13
          },
          {
              codigo_ibge: 3123700,
              nome: "Engenheiro Caldas",
              id_estado: 13
          },
          {
              codigo_ibge: 3123809,
              nome: "Engenheiro Navarro",
              id_estado: 13
          },
          {
              codigo_ibge: 3123858,
              nome: "Entre Folhas",
              id_estado: 13
          },
          {
              codigo_ibge: 3123908,
              nome: "Entre Rios de Minas",
              id_estado: 13
          },
          {
              codigo_ibge: 3124005,
              nome: "Ervália",
              id_estado: 13
          },
          {
              codigo_ibge: 3124104,
              nome: "Esmeraldas",
              id_estado: 13
          },
          {
              codigo_ibge: 3124203,
              nome: "Espera Feliz",
              id_estado: 13
          },
          {
              codigo_ibge: 3124302,
              nome: "Espinosa",
              id_estado: 13
          },
          {
              codigo_ibge: 3124401,
              nome: "Espírito Santo do Dourado",
              id_estado: 13
          },
          {
              codigo_ibge: 3124500,
              nome: "Estiva",
              id_estado: 13
          },
          {
              codigo_ibge: 3124609,
              nome: "Estrela Dalva",
              id_estado: 13
          },
          {
              codigo_ibge: 3124708,
              nome: "Estrela do Indaiá",
              id_estado: 13
          },
          {
              codigo_ibge: 3124807,
              nome: "Estrela do Sul",
              id_estado: 13
          },
          {
              codigo_ibge: 3124906,
              nome: "Eugenópolis",
              id_estado: 13
          },
          {
              codigo_ibge: 3125002,
              nome: "Ewbank da Câmara",
              id_estado: 13
          },
          {
              codigo_ibge: 3125101,
              nome: "Extrema",
              id_estado: 13
          },
          {
              codigo_ibge: 3125200,
              nome: "Fama",
              id_estado: 13
          },
          {
              codigo_ibge: 3125309,
              nome: "Faria Lemos",
              id_estado: 13
          },
          {
              codigo_ibge: 3125408,
              nome: "Felício dos Santos",
              id_estado: 13
          },
          {
              codigo_ibge: 3125507,
              nome: "São Gonçalo do Rio Preto",
              id_estado: 13
          },
          {
              codigo_ibge: 3125606,
              nome: "Felisburgo",
              id_estado: 13
          },
          {
              codigo_ibge: 3125705,
              nome: "Felixlândia",
              id_estado: 13
          },
          {
              codigo_ibge: 3125804,
              nome: "Fernandes Tourinho",
              id_estado: 13
          },
          {
              codigo_ibge: 3125903,
              nome: "Ferros",
              id_estado: 13
          },
          {
              codigo_ibge: 3125952,
              nome: "Fervedouro",
              id_estado: 13
          },
          {
              codigo_ibge: 3126000,
              nome: "Florestal",
              id_estado: 13
          },
          {
              codigo_ibge: 3126109,
              nome: "Formiga",
              id_estado: 13
          },
          {
              codigo_ibge: 3126208,
              nome: "Formoso",
              id_estado: 13
          },
          {
              codigo_ibge: 3126307,
              nome: "Fortaleza de Minas",
              id_estado: 13
          },
          {
              codigo_ibge: 3126406,
              nome: "Fortuna de Minas",
              id_estado: 13
          },
          {
              codigo_ibge: 3126505,
              nome: "Francisco Badaró",
              id_estado: 13
          },
          {
              codigo_ibge: 3126604,
              nome: "Francisco Dumont",
              id_estado: 13
          },
          {
              codigo_ibge: 3126703,
              nome: "Francisco Sá",
              id_estado: 13
          },
          {
              codigo_ibge: 3126752,
              nome: "Franciscópolis",
              id_estado: 13
          },
          {
              codigo_ibge: 3126802,
              nome: "Frei Gaspar",
              id_estado: 13
          },
          {
              codigo_ibge: 3126901,
              nome: "Frei Inocêncio",
              id_estado: 13
          },
          {
              codigo_ibge: 3126950,
              nome: "Frei Lagonegro",
              id_estado: 13
          },
          {
              codigo_ibge: 3127008,
              nome: "Fronteira",
              id_estado: 13
          },
          {
              codigo_ibge: 3127057,
              nome: "Fronteira dos Vales",
              id_estado: 13
          },
          {
              codigo_ibge: 3127073,
              nome: "Fruta de Leite",
              id_estado: 13
          },
          {
              codigo_ibge: 3127107,
              nome: "Frutal",
              id_estado: 13
          },
          {
              codigo_ibge: 3127206,
              nome: "Funilândia",
              id_estado: 13
          },
          {
              codigo_ibge: 3127305,
              nome: "Galiléia",
              id_estado: 13
          },
          {
              codigo_ibge: 3127339,
              nome: "Gameleiras",
              id_estado: 13
          },
          {
              codigo_ibge: 3127354,
              nome: "Glaucilândia",
              id_estado: 13
          },
          {
              codigo_ibge: 3127370,
              nome: "Goiabeira",
              id_estado: 13
          },
          {
              codigo_ibge: 3127388,
              nome: "Goianá",
              id_estado: 13
          },
          {
              codigo_ibge: 3127404,
              nome: "Gonçalves",
              id_estado: 13
          },
          {
              codigo_ibge: 3127503,
              nome: "Gonzaga",
              id_estado: 13
          },
          {
              codigo_ibge: 3127602,
              nome: "Gouveia",
              id_estado: 13
          },
          {
              codigo_ibge: 3127701,
              nome: "Governador Valadares",
              id_estado: 13
          },
          {
              codigo_ibge: 3127800,
              nome: "Grão Mogol",
              id_estado: 13
          },
          {
              codigo_ibge: 3127909,
              nome: "Grupiara",
              id_estado: 13
          },
          {
              codigo_ibge: 3128006,
              nome: "Guanhães",
              id_estado: 13
          },
          {
              codigo_ibge: 3128105,
              nome: "Guapé",
              id_estado: 13
          },
          {
              codigo_ibge: 3128204,
              nome: "Guaraciaba",
              id_estado: 13
          },
          {
              codigo_ibge: 3128253,
              nome: "Guaraciama",
              id_estado: 13
          },
          {
              codigo_ibge: 3128303,
              nome: "Guaranésia",
              id_estado: 13
          },
          {
              codigo_ibge: 3128402,
              nome: "Guarani",
              id_estado: 13
          },
          {
              codigo_ibge: 3128501,
              nome: "Guarará",
              id_estado: 13
          },
          {
              codigo_ibge: 3128600,
              nome: "Guarda-Mor",
              id_estado: 13
          },
          {
              codigo_ibge: 3128709,
              nome: "Guaxupé",
              id_estado: 13
          },
          {
              codigo_ibge: 3128808,
              nome: "Guidoval",
              id_estado: 13
          },
          {
              codigo_ibge: 3128907,
              nome: "Guimarânia",
              id_estado: 13
          },
          {
              codigo_ibge: 3129004,
              nome: "Guiricema",
              id_estado: 13
          },
          {
              codigo_ibge: 3129103,
              nome: "Gurinhatã",
              id_estado: 13
          },
          {
              codigo_ibge: 3129202,
              nome: "Heliodora",
              id_estado: 13
          },
          {
              codigo_ibge: 3129301,
              nome: "Iapu",
              id_estado: 13
          },
          {
              codigo_ibge: 3129400,
              nome: "Ibertioga",
              id_estado: 13
          },
          {
              codigo_ibge: 3129509,
              nome: "Ibiá",
              id_estado: 13
          },
          {
              codigo_ibge: 3129608,
              nome: "Ibiaí",
              id_estado: 13
          },
          {
              codigo_ibge: 3129657,
              nome: "Ibiracatu",
              id_estado: 13
          },
          {
              codigo_ibge: 3129707,
              nome: "Ibiraci",
              id_estado: 13
          },
          {
              codigo_ibge: 3129806,
              nome: "Ibirité",
              id_estado: 13
          },
          {
              codigo_ibge: 3129905,
              nome: "Ibitiúra de Minas",
              id_estado: 13
          },
          {
              codigo_ibge: 3130002,
              nome: "Ibituruna",
              id_estado: 13
          },
          {
              codigo_ibge: 3130051,
              nome: "Icaraí de Minas",
              id_estado: 13
          },
          {
              codigo_ibge: 3130101,
              nome: "Igarapé",
              id_estado: 13
          },
          {
              codigo_ibge: 3130200,
              nome: "Igaratinga",
              id_estado: 13
          },
          {
              codigo_ibge: 3130309,
              nome: "Iguatama",
              id_estado: 13
          },
          {
              codigo_ibge: 3130408,
              nome: "Ijaci",
              id_estado: 13
          },
          {
              codigo_ibge: 3130507,
              nome: "Ilicínea",
              id_estado: 13
          },
          {
              codigo_ibge: 3130556,
              nome: "Imbé de Minas",
              id_estado: 13
          },
          {
              codigo_ibge: 3130606,
              nome: "Inconfidentes",
              id_estado: 13
          },
          {
              codigo_ibge: 3130655,
              nome: "Indaiabira",
              id_estado: 13
          },
          {
              codigo_ibge: 3130705,
              nome: "Indianópolis",
              id_estado: 13
          },
          {
              codigo_ibge: 3130804,
              nome: "Ingaí",
              id_estado: 13
          },
          {
              codigo_ibge: 3130903,
              nome: "Inhapim",
              id_estado: 13
          },
          {
              codigo_ibge: 3131000,
              nome: "Inhaúma",
              id_estado: 13
          },
          {
              codigo_ibge: 3131109,
              nome: "Inimutaba",
              id_estado: 13
          },
          {
              codigo_ibge: 3131158,
              nome: "Ipaba",
              id_estado: 13
          },
          {
              codigo_ibge: 3131208,
              nome: "Ipanema",
              id_estado: 13
          },
          {
              codigo_ibge: 3131307,
              nome: "Ipatinga",
              id_estado: 13
          },
          {
              codigo_ibge: 3131406,
              nome: "Ipiaçu",
              id_estado: 13
          },
          {
              codigo_ibge: 3131505,
              nome: "Ipuiúna",
              id_estado: 13
          },
          {
              codigo_ibge: 3131604,
              nome: "Iraí de Minas",
              id_estado: 13
          },
          {
              codigo_ibge: 3131703,
              nome: "Itabira",
              id_estado: 13
          },
          {
              codigo_ibge: 3131802,
              nome: "Itabirinha",
              id_estado: 13
          },
          {
              codigo_ibge: 3131901,
              nome: "Itabirito",
              id_estado: 13
          },
          {
              codigo_ibge: 3132008,
              nome: "Itacambira",
              id_estado: 13
          },
          {
              codigo_ibge: 3132107,
              nome: "Itacarambi",
              id_estado: 13
          },
          {
              codigo_ibge: 3132206,
              nome: "Itaguara",
              id_estado: 13
          },
          {
              codigo_ibge: 3132305,
              nome: "Itaipé",
              id_estado: 13
          },
          {
              codigo_ibge: 3132404,
              nome: "Itajubá",
              id_estado: 13
          },
          {
              codigo_ibge: 3132503,
              nome: "Itamarandiba",
              id_estado: 13
          },
          {
              codigo_ibge: 3132602,
              nome: "Itamarati de Minas",
              id_estado: 13
          },
          {
              codigo_ibge: 3132701,
              nome: "Itambacuri",
              id_estado: 13
          },
          {
              codigo_ibge: 3132800,
              nome: "Itambé do Mato Dentro",
              id_estado: 13
          },
          {
              codigo_ibge: 3132909,
              nome: "Itamogi",
              id_estado: 13
          },
          {
              codigo_ibge: 3133006,
              nome: "Itamonte",
              id_estado: 13
          },
          {
              codigo_ibge: 3133105,
              nome: "Itanhandu",
              id_estado: 13
          },
          {
              codigo_ibge: 3133204,
              nome: "Itanhomi",
              id_estado: 13
          },
          {
              codigo_ibge: 3133303,
              nome: "Itaobim",
              id_estado: 13
          },
          {
              codigo_ibge: 3133402,
              nome: "Itapagipe",
              id_estado: 13
          },
          {
              codigo_ibge: 3133501,
              nome: "Itapecerica",
              id_estado: 13
          },
          {
              codigo_ibge: 3133600,
              nome: "Itapeva",
              id_estado: 13
          },
          {
              codigo_ibge: 3133709,
              nome: "Itatiaiuçu",
              id_estado: 13
          },
          {
              codigo_ibge: 3133758,
              nome: "Itaú de Minas",
              id_estado: 13
          },
          {
              codigo_ibge: 3133808,
              nome: "Itaúna",
              id_estado: 13
          },
          {
              codigo_ibge: 3133907,
              nome: "Itaverava",
              id_estado: 13
          },
          {
              codigo_ibge: 3134004,
              nome: "Itinga",
              id_estado: 13
          },
          {
              codigo_ibge: 3134103,
              nome: "Itueta",
              id_estado: 13
          },
          {
              codigo_ibge: 3134202,
              nome: "Ituiutaba",
              id_estado: 13
          },
          {
              codigo_ibge: 3134301,
              nome: "Itumirim",
              id_estado: 13
          },
          {
              codigo_ibge: 3134400,
              nome: "Iturama",
              id_estado: 13
          },
          {
              codigo_ibge: 3134509,
              nome: "Itutinga",
              id_estado: 13
          },
          {
              codigo_ibge: 3134608,
              nome: "Jaboticatubas",
              id_estado: 13
          },
          {
              codigo_ibge: 3134707,
              nome: "Jacinto",
              id_estado: 13
          },
          {
              codigo_ibge: 3134806,
              nome: "Jacuí",
              id_estado: 13
          },
          {
              codigo_ibge: 3134905,
              nome: "Jacutinga",
              id_estado: 13
          },
          {
              codigo_ibge: 3135001,
              nome: "Jaguaraçu",
              id_estado: 13
          },
          {
              codigo_ibge: 3135050,
              nome: "Jaíba",
              id_estado: 13
          },
          {
              codigo_ibge: 3135076,
              nome: "Jampruca",
              id_estado: 13
          },
          {
              codigo_ibge: 3135100,
              nome: "Janaúba",
              id_estado: 13
          },
          {
              codigo_ibge: 3135209,
              nome: "Januária",
              id_estado: 13
          },
          {
              codigo_ibge: 3135308,
              nome: "Japaraíba",
              id_estado: 13
          },
          {
              codigo_ibge: 3135357,
              nome: "Japonvar",
              id_estado: 13
          },
          {
              codigo_ibge: 3135407,
              nome: "Jeceaba",
              id_estado: 13
          },
          {
              codigo_ibge: 3135456,
              nome: "Jenipapo de Minas",
              id_estado: 13
          },
          {
              codigo_ibge: 3135506,
              nome: "Jequeri",
              id_estado: 13
          },
          {
              codigo_ibge: 3135605,
              nome: "Jequitaí",
              id_estado: 13
          },
          {
              codigo_ibge: 3135704,
              nome: "Jequitibá",
              id_estado: 13
          },
          {
              codigo_ibge: 3135803,
              nome: "Jequitinhonha",
              id_estado: 13
          },
          {
              codigo_ibge: 3135902,
              nome: "Jesuânia",
              id_estado: 13
          },
          {
              codigo_ibge: 3136009,
              nome: "Joaíma",
              id_estado: 13
          },
          {
              codigo_ibge: 3136108,
              nome: "Joanésia",
              id_estado: 13
          },
          {
              codigo_ibge: 3136207,
              nome: "João Monlevade",
              id_estado: 13
          },
          {
              codigo_ibge: 3136306,
              nome: "João Pinheiro",
              id_estado: 13
          },
          {
              codigo_ibge: 3136405,
              nome: "Joaquim Felício",
              id_estado: 13
          },
          {
              codigo_ibge: 3136504,
              nome: "Jordânia",
              id_estado: 13
          },
          {
              codigo_ibge: 3136520,
              nome: "José Gonçalves de Minas",
              id_estado: 13
          },
          {
              codigo_ibge: 3136553,
              nome: "José Raydan",
              id_estado: 13
          },
          {
              codigo_ibge: 3136579,
              nome: "Josenópolis",
              id_estado: 13
          },
          {
              codigo_ibge: 3136603,
              nome: "Nova União",
              id_estado: 13
          },
          {
              codigo_ibge: 3136652,
              nome: "Juatuba",
              id_estado: 13
          },
          {
              codigo_ibge: 3136702,
              nome: "Juiz de Fora",
              id_estado: 13
          },
          {
              codigo_ibge: 3136801,
              nome: "Juramento",
              id_estado: 13
          },
          {
              codigo_ibge: 3136900,
              nome: "Juruaia",
              id_estado: 13
          },
          {
              codigo_ibge: 3136959,
              nome: "Juvenília",
              id_estado: 13
          },
          {
              codigo_ibge: 3137007,
              nome: "Ladainha",
              id_estado: 13
          },
          {
              codigo_ibge: 3137106,
              nome: "Lagamar",
              id_estado: 13
          },
          {
              codigo_ibge: 3137205,
              nome: "Lagoa da Prata",
              id_estado: 13
          },
          {
              codigo_ibge: 3137304,
              nome: "Lagoa dos Patos",
              id_estado: 13
          },
          {
              codigo_ibge: 3137403,
              nome: "Lagoa Dourada",
              id_estado: 13
          },
          {
              codigo_ibge: 3137502,
              nome: "Lagoa Formosa",
              id_estado: 13
          },
          {
              codigo_ibge: 3137536,
              nome: "Lagoa Grande",
              id_estado: 13
          },
          {
              codigo_ibge: 3137601,
              nome: "Lagoa Santa",
              id_estado: 13
          },
          {
              codigo_ibge: 3137700,
              nome: "Lajinha",
              id_estado: 13
          },
          {
              codigo_ibge: 3137809,
              nome: "Lambari",
              id_estado: 13
          },
          {
              codigo_ibge: 3137908,
              nome: "Lamim",
              id_estado: 13
          },
          {
              codigo_ibge: 3138005,
              nome: "Laranjal",
              id_estado: 13
          },
          {
              codigo_ibge: 3138104,
              nome: "Lassance",
              id_estado: 13
          },
          {
              codigo_ibge: 3138203,
              nome: "Lavras",
              id_estado: 13
          },
          {
              codigo_ibge: 3138302,
              nome: "Leandro Ferreira",
              id_estado: 13
          },
          {
              codigo_ibge: 3138351,
              nome: "Leme do Prado",
              id_estado: 13
          },
          {
              codigo_ibge: 3138401,
              nome: "Leopoldina",
              id_estado: 13
          },
          {
              codigo_ibge: 3138500,
              nome: "Liberdade",
              id_estado: 13
          },
          {
              codigo_ibge: 3138609,
              nome: "Lima Duarte",
              id_estado: 13
          },
          {
              codigo_ibge: 3138625,
              nome: "Limeira do Oeste",
              id_estado: 13
          },
          {
              codigo_ibge: 3138658,
              nome: "Lontra",
              id_estado: 13
          },
          {
              codigo_ibge: 3138674,
              nome: "Luisburgo",
              id_estado: 13
          },
          {
              codigo_ibge: 3138682,
              nome: "Luislândia",
              id_estado: 13
          },
          {
              codigo_ibge: 3138708,
              nome: "Luminárias",
              id_estado: 13
          },
          {
              codigo_ibge: 3138807,
              nome: "Luz",
              id_estado: 13
          },
          {
              codigo_ibge: 3138906,
              nome: "Machacalis",
              id_estado: 13
          },
          {
              codigo_ibge: 3139003,
              nome: "Machado",
              id_estado: 13
          },
          {
              codigo_ibge: 3139102,
              nome: "Madre de Deus de Minas",
              id_estado: 13
          },
          {
              codigo_ibge: 3139201,
              nome: "Malacacheta",
              id_estado: 13
          },
          {
              codigo_ibge: 3139250,
              nome: "Mamonas",
              id_estado: 13
          },
          {
              codigo_ibge: 3139300,
              nome: "Manga",
              id_estado: 13
          },
          {
              codigo_ibge: 3139409,
              nome: "Manhuaçu",
              id_estado: 13
          },
          {
              codigo_ibge: 3139508,
              nome: "Manhumirim",
              id_estado: 13
          },
          {
              codigo_ibge: 3139607,
              nome: "Mantena",
              id_estado: 13
          },
          {
              codigo_ibge: 3139706,
              nome: "Maravilhas",
              id_estado: 13
          },
          {
              codigo_ibge: 3139805,
              nome: "Mar de Espanha",
              id_estado: 13
          },
          {
              codigo_ibge: 3139904,
              nome: "Maria da Fé",
              id_estado: 13
          },
          {
              codigo_ibge: 3140001,
              nome: "Mariana",
              id_estado: 13
          },
          {
              codigo_ibge: 3140100,
              nome: "Marilac",
              id_estado: 13
          },
          {
              codigo_ibge: 3140159,
              nome: "Mário Campos",
              id_estado: 13
          },
          {
              codigo_ibge: 3140209,
              nome: "Maripá de Minas",
              id_estado: 13
          },
          {
              codigo_ibge: 3140308,
              nome: "Marliéria",
              id_estado: 13
          },
          {
              codigo_ibge: 3140407,
              nome: "Marmelópolis",
              id_estado: 13
          },
          {
              codigo_ibge: 3140506,
              nome: "Martinho Campos",
              id_estado: 13
          },
          {
              codigo_ibge: 3140530,
              nome: "Martins Soares",
              id_estado: 13
          },
          {
              codigo_ibge: 3140555,
              nome: "Mata Verde",
              id_estado: 13
          },
          {
              codigo_ibge: 3140605,
              nome: "Materlândia",
              id_estado: 13
          },
          {
              codigo_ibge: 3140704,
              nome: "Mateus Leme",
              id_estado: 13
          },
          {
              codigo_ibge: 3140803,
              nome: "Matias Barbosa",
              id_estado: 13
          },
          {
              codigo_ibge: 3140852,
              nome: "Matias Cardoso",
              id_estado: 13
          },
          {
              codigo_ibge: 3140902,
              nome: "Matipó",
              id_estado: 13
          },
          {
              codigo_ibge: 3141009,
              nome: "Mato Verde",
              id_estado: 13
          },
          {
              codigo_ibge: 3141108,
              nome: "Matozinhos",
              id_estado: 13
          },
          {
              codigo_ibge: 3141207,
              nome: "Matutina",
              id_estado: 13
          },
          {
              codigo_ibge: 3141306,
              nome: "Medeiros",
              id_estado: 13
          },
          {
              codigo_ibge: 3141405,
              nome: "Medina",
              id_estado: 13
          },
          {
              codigo_ibge: 3141504,
              nome: "Mendes Pimentel",
              id_estado: 13
          },
          {
              codigo_ibge: 3141603,
              nome: "Mercês",
              id_estado: 13
          },
          {
              codigo_ibge: 3141702,
              nome: "Mesquita",
              id_estado: 13
          },
          {
              codigo_ibge: 3141801,
              nome: "Minas Novas",
              id_estado: 13
          },
          {
              codigo_ibge: 3141900,
              nome: "Minduri",
              id_estado: 13
          },
          {
              codigo_ibge: 3142007,
              nome: "Mirabela",
              id_estado: 13
          },
          {
              codigo_ibge: 3142106,
              nome: "Miradouro",
              id_estado: 13
          },
          {
              codigo_ibge: 3142205,
              nome: "Miraí",
              id_estado: 13
          },
          {
              codigo_ibge: 3142254,
              nome: "Miravânia",
              id_estado: 13
          },
          {
              codigo_ibge: 3142304,
              nome: "Moeda",
              id_estado: 13
          },
          {
              codigo_ibge: 3142403,
              nome: "Moema",
              id_estado: 13
          },
          {
              codigo_ibge: 3142502,
              nome: "Monjolos",
              id_estado: 13
          },
          {
              codigo_ibge: 3142601,
              nome: "Monsenhor Paulo",
              id_estado: 13
          },
          {
              codigo_ibge: 3142700,
              nome: "Montalvânia",
              id_estado: 13
          },
          {
              codigo_ibge: 3142809,
              nome: "Monte Alegre de Minas",
              id_estado: 13
          },
          {
              codigo_ibge: 3142908,
              nome: "Monte Azul",
              id_estado: 13
          },
          {
              codigo_ibge: 3143005,
              nome: "Monte Belo",
              id_estado: 13
          },
          {
              codigo_ibge: 3143104,
              nome: "Monte Carmelo",
              id_estado: 13
          },
          {
              codigo_ibge: 3143153,
              nome: "Monte Formoso",
              id_estado: 13
          },
          {
              codigo_ibge: 3143203,
              nome: "Monte Santo de Minas",
              id_estado: 13
          },
          {
              codigo_ibge: 3143302,
              nome: "Montes Claros",
              id_estado: 13
          },
          {
              codigo_ibge: 3143401,
              nome: "Monte Sião",
              id_estado: 13
          },
          {
              codigo_ibge: 3143450,
              nome: "Montezuma",
              id_estado: 13
          },
          {
              codigo_ibge: 3143500,
              nome: "Morada Nova de Minas",
              id_estado: 13
          },
          {
              codigo_ibge: 3143609,
              nome: "Morro da Garça",
              id_estado: 13
          },
          {
              codigo_ibge: 3143708,
              nome: "Morro do Pilar",
              id_estado: 13
          },
          {
              codigo_ibge: 3143807,
              nome: "Munhoz",
              id_estado: 13
          },
          {
              codigo_ibge: 3143906,
              nome: "Muriaé",
              id_estado: 13
          },
          {
              codigo_ibge: 3144003,
              nome: "Mutum",
              id_estado: 13
          },
          {
              codigo_ibge: 3144102,
              nome: "Muzambinho",
              id_estado: 13
          },
          {
              codigo_ibge: 3144201,
              nome: "Nacip Raydan",
              id_estado: 13
          },
          {
              codigo_ibge: 3144300,
              nome: "Nanuque",
              id_estado: 13
          },
          {
              codigo_ibge: 3144359,
              nome: "Naque",
              id_estado: 13
          },
          {
              codigo_ibge: 3144375,
              nome: "Natalândia",
              id_estado: 13
          },
          {
              codigo_ibge: 3144409,
              nome: "Natércia",
              id_estado: 13
          },
          {
              codigo_ibge: 3144508,
              nome: "Nazareno",
              id_estado: 13
          },
          {
              codigo_ibge: 3144607,
              nome: "Nepomuceno",
              id_estado: 13
          },
          {
              codigo_ibge: 3144656,
              nome: "Ninheira",
              id_estado: 13
          },
          {
              codigo_ibge: 3144672,
              nome: "Nova Belém",
              id_estado: 13
          },
          {
              codigo_ibge: 3144706,
              nome: "Nova Era",
              id_estado: 13
          },
          {
              codigo_ibge: 3144805,
              nome: "Nova Lima",
              id_estado: 13
          },
          {
              codigo_ibge: 3144904,
              nome: "Nova Módica",
              id_estado: 13
          },
          {
              codigo_ibge: 3145000,
              nome: "Nova Ponte",
              id_estado: 13
          },
          {
              codigo_ibge: 3145059,
              nome: "Nova Porteirinha",
              id_estado: 13
          },
          {
              codigo_ibge: 3145109,
              nome: "Nova Resende",
              id_estado: 13
          },
          {
              codigo_ibge: 3145208,
              nome: "Nova Serrana",
              id_estado: 13
          },
          {
              codigo_ibge: 3145307,
              nome: "Novo Cruzeiro",
              id_estado: 13
          },
          {
              codigo_ibge: 3145356,
              nome: "Novo Oriente de Minas",
              id_estado: 13
          },
          {
              codigo_ibge: 3145372,
              nome: "Novorizonte",
              id_estado: 13
          },
          {
              codigo_ibge: 3145406,
              nome: "Olaria",
              id_estado: 13
          },
          {
              codigo_ibge: 3145455,
              nome: "Olhos-D'Água",
              id_estado: 13
          },
          {
              codigo_ibge: 3145505,
              nome: "Olímpio Noronha",
              id_estado: 13
          },
          {
              codigo_ibge: 3145604,
              nome: "Oliveira",
              id_estado: 13
          },
          {
              codigo_ibge: 3145703,
              nome: "Oliveira Fortes",
              id_estado: 13
          },
          {
              codigo_ibge: 3145802,
              nome: "Onça de Pitangui",
              id_estado: 13
          },
          {
              codigo_ibge: 3145851,
              nome: "Oratórios",
              id_estado: 13
          },
          {
              codigo_ibge: 3145877,
              nome: "Orizânia",
              id_estado: 13
          },
          {
              codigo_ibge: 3145901,
              nome: "Ouro Branco",
              id_estado: 13
          },
          {
              codigo_ibge: 3146008,
              nome: "Ouro Fino",
              id_estado: 13
          },
          {
              codigo_ibge: 3146107,
              nome: "Ouro Preto",
              id_estado: 13
          },
          {
              codigo_ibge: 3146206,
              nome: "Ouro Verde de Minas",
              id_estado: 13
          },
          {
              codigo_ibge: 3146255,
              nome: "Padre Carvalho",
              id_estado: 13
          },
          {
              codigo_ibge: 3146305,
              nome: "Padre Paraíso",
              id_estado: 13
          },
          {
              codigo_ibge: 3146404,
              nome: "Paineiras",
              id_estado: 13
          },
          {
              codigo_ibge: 3146503,
              nome: "Pains",
              id_estado: 13
          },
          {
              codigo_ibge: 3146552,
              nome: "Pai Pedro",
              id_estado: 13
          },
          {
              codigo_ibge: 3146602,
              nome: "Paiva",
              id_estado: 13
          },
          {
              codigo_ibge: 3146701,
              nome: "Palma",
              id_estado: 13
          },
          {
              codigo_ibge: 3146750,
              nome: "Palmópolis",
              id_estado: 13
          },
          {
              codigo_ibge: 3146909,
              nome: "Papagaios",
              id_estado: 13
          },
          {
              codigo_ibge: 3147006,
              nome: "Paracatu",
              id_estado: 13
          },
          {
              codigo_ibge: 3147105,
              nome: "Pará de Minas",
              id_estado: 13
          },
          {
              codigo_ibge: 3147204,
              nome: "Paraguaçu",
              id_estado: 13
          },
          {
              codigo_ibge: 3147303,
              nome: "Paraisópolis",
              id_estado: 13
          },
          {
              codigo_ibge: 3147402,
              nome: "Paraopeba",
              id_estado: 13
          },
          {
              codigo_ibge: 3147501,
              nome: "Passabém",
              id_estado: 13
          },
          {
              codigo_ibge: 3147600,
              nome: "Passa Quatro",
              id_estado: 13
          },
          {
              codigo_ibge: 3147709,
              nome: "Passa Tempo",
              id_estado: 13
          },
          {
              codigo_ibge: 3147808,
              nome: "Passa-Vinte",
              id_estado: 13
          },
          {
              codigo_ibge: 3147907,
              nome: "Passos",
              id_estado: 13
          },
          {
              codigo_ibge: 3147956,
              nome: "Patis",
              id_estado: 13
          },
          {
              codigo_ibge: 3148004,
              nome: "Patos de Minas",
              id_estado: 13
          },
          {
              codigo_ibge: 3148103,
              nome: "Patrocínio",
              id_estado: 13
          },
          {
              codigo_ibge: 3148202,
              nome: "Patrocínio do Muriaé",
              id_estado: 13
          },
          {
              codigo_ibge: 3148301,
              nome: "Paula Cândido",
              id_estado: 13
          },
          {
              codigo_ibge: 3148400,
              nome: "Paulistas",
              id_estado: 13
          },
          {
              codigo_ibge: 3148509,
              nome: "Pavão",
              id_estado: 13
          },
          {
              codigo_ibge: 3148608,
              nome: "Peçanha",
              id_estado: 13
          },
          {
              codigo_ibge: 3148707,
              nome: "Pedra Azul",
              id_estado: 13
          },
          {
              codigo_ibge: 3148756,
              nome: "Pedra Bonita",
              id_estado: 13
          },
          {
              codigo_ibge: 3148806,
              nome: "Pedra do Anta",
              id_estado: 13
          },
          {
              codigo_ibge: 3148905,
              nome: "Pedra do Indaiá",
              id_estado: 13
          },
          {
              codigo_ibge: 3149002,
              nome: "Pedra Dourada",
              id_estado: 13
          },
          {
              codigo_ibge: 3149101,
              nome: "Pedralva",
              id_estado: 13
          },
          {
              codigo_ibge: 3149150,
              nome: "Pedras de Maria da Cruz",
              id_estado: 13
          },
          {
              codigo_ibge: 3149200,
              nome: "Pedrinópolis",
              id_estado: 13
          },
          {
              codigo_ibge: 3149309,
              nome: "Pedro Leopoldo",
              id_estado: 13
          },
          {
              codigo_ibge: 3149408,
              nome: "Pedro Teixeira",
              id_estado: 13
          },
          {
              codigo_ibge: 3149507,
              nome: "Pequeri",
              id_estado: 13
          },
          {
              codigo_ibge: 3149606,
              nome: "Pequi",
              id_estado: 13
          },
          {
              codigo_ibge: 3149705,
              nome: "Perdigão",
              id_estado: 13
          },
          {
              codigo_ibge: 3149804,
              nome: "Perdizes",
              id_estado: 13
          },
          {
              codigo_ibge: 3149903,
              nome: "Perdões",
              id_estado: 13
          },
          {
              codigo_ibge: 3149952,
              nome: "Periquito",
              id_estado: 13
          },
          {
              codigo_ibge: 3150000,
              nome: "Pescador",
              id_estado: 13
          },
          {
              codigo_ibge: 3150109,
              nome: "Piau",
              id_estado: 13
          },
          {
              codigo_ibge: 3150158,
              nome: "Piedade de Caratinga",
              id_estado: 13
          },
          {
              codigo_ibge: 3150208,
              nome: "Piedade de Ponte Nova",
              id_estado: 13
          },
          {
              codigo_ibge: 3150307,
              nome: "Piedade do Rio Grande",
              id_estado: 13
          },
          {
              codigo_ibge: 3150406,
              nome: "Piedade dos Gerais",
              id_estado: 13
          },
          {
              codigo_ibge: 3150505,
              nome: "Pimenta",
              id_estado: 13
          },
          {
              codigo_ibge: 3150539,
              nome: "Pingo-D'Água",
              id_estado: 13
          },
          {
              codigo_ibge: 3150570,
              nome: "Pintópolis",
              id_estado: 13
          },
          {
              codigo_ibge: 3150604,
              nome: "Piracema",
              id_estado: 13
          },
          {
              codigo_ibge: 3150703,
              nome: "Pirajuba",
              id_estado: 13
          },
          {
              codigo_ibge: 3150802,
              nome: "Piranga",
              id_estado: 13
          },
          {
              codigo_ibge: 3150901,
              nome: "Piranguçu",
              id_estado: 13
          },
          {
              codigo_ibge: 3151008,
              nome: "Piranguinho",
              id_estado: 13
          },
          {
              codigo_ibge: 3151107,
              nome: "Pirapetinga",
              id_estado: 13
          },
          {
              codigo_ibge: 3151206,
              nome: "Pirapora",
              id_estado: 13
          },
          {
              codigo_ibge: 3151305,
              nome: "Piraúba",
              id_estado: 13
          },
          {
              codigo_ibge: 3151404,
              nome: "Pitangui",
              id_estado: 13
          },
          {
              codigo_ibge: 3151503,
              nome: "Piumhi",
              id_estado: 13
          },
          {
              codigo_ibge: 3151602,
              nome: "Planura",
              id_estado: 13
          },
          {
              codigo_ibge: 3151701,
              nome: "Poço Fundo",
              id_estado: 13
          },
          {
              codigo_ibge: 3151800,
              nome: "Poços de Caldas",
              id_estado: 13
          },
          {
              codigo_ibge: 3151909,
              nome: "Pocrane",
              id_estado: 13
          },
          {
              codigo_ibge: 3152006,
              nome: "Pompéu",
              id_estado: 13
          },
          {
              codigo_ibge: 3152105,
              nome: "Ponte Nova",
              id_estado: 13
          },
          {
              codigo_ibge: 3152131,
              nome: "Ponto Chique",
              id_estado: 13
          },
          {
              codigo_ibge: 3152170,
              nome: "Ponto dos Volantes",
              id_estado: 13
          },
          {
              codigo_ibge: 3152204,
              nome: "Porteirinha",
              id_estado: 13
          },
          {
              codigo_ibge: 3152303,
              nome: "Porto Firme",
              id_estado: 13
          },
          {
              codigo_ibge: 3152402,
              nome: "Poté",
              id_estado: 13
          },
          {
              codigo_ibge: 3152501,
              nome: "Pouso Alegre",
              id_estado: 13
          },
          {
              codigo_ibge: 3152600,
              nome: "Pouso Alto",
              id_estado: 13
          },
          {
              codigo_ibge: 3152709,
              nome: "Prados",
              id_estado: 13
          },
          {
              codigo_ibge: 3152808,
              nome: "Prata",
              id_estado: 13
          },
          {
              codigo_ibge: 3152907,
              nome: "Pratápolis",
              id_estado: 13
          },
          {
              codigo_ibge: 3153004,
              nome: "Pratinha",
              id_estado: 13
          },
          {
              codigo_ibge: 3153103,
              nome: "Presidente Bernardes",
              id_estado: 13
          },
          {
              codigo_ibge: 3153202,
              nome: "Presidente Juscelino",
              id_estado: 13
          },
          {
              codigo_ibge: 3153301,
              nome: "Presidente Kubitschek",
              id_estado: 13
          },
          {
              codigo_ibge: 3153400,
              nome: "Presidente Olegário",
              id_estado: 13
          },
          {
              codigo_ibge: 3153509,
              nome: "Alto Jequitibá",
              id_estado: 13
          },
          {
              codigo_ibge: 3153608,
              nome: "Prudente de Morais",
              id_estado: 13
          },
          {
              codigo_ibge: 3153707,
              nome: "Quartel Geral",
              id_estado: 13
          },
          {
              codigo_ibge: 3153806,
              nome: "Queluzito",
              id_estado: 13
          },
          {
              codigo_ibge: 3153905,
              nome: "Raposos",
              id_estado: 13
          },
          {
              codigo_ibge: 3154002,
              nome: "Raul Soares",
              id_estado: 13
          },
          {
              codigo_ibge: 3154101,
              nome: "Recreio",
              id_estado: 13
          },
          {
              codigo_ibge: 3154150,
              nome: "Reduto",
              id_estado: 13
          },
          {
              codigo_ibge: 3154200,
              nome: "Resende Costa",
              id_estado: 13
          },
          {
              codigo_ibge: 3154309,
              nome: "Resplendor",
              id_estado: 13
          },
          {
              codigo_ibge: 3154408,
              nome: "Ressaquinha",
              id_estado: 13
          },
          {
              codigo_ibge: 3154457,
              nome: "Riachinho",
              id_estado: 13
          },
          {
              codigo_ibge: 3154507,
              nome: "Riacho dos Machados",
              id_estado: 13
          },
          {
              codigo_ibge: 3154606,
              nome: "Ribeirão das Neves",
              id_estado: 13
          },
          {
              codigo_ibge: 3154705,
              nome: "Ribeirão Vermelho",
              id_estado: 13
          },
          {
              codigo_ibge: 3154804,
              nome: "Rio Acima",
              id_estado: 13
          },
          {
              codigo_ibge: 3154903,
              nome: "Rio Casca",
              id_estado: 13
          },
          {
              codigo_ibge: 3155009,
              nome: "Rio Doce",
              id_estado: 13
          },
          {
              codigo_ibge: 3155108,
              nome: "Rio do Prado",
              id_estado: 13
          },
          {
              codigo_ibge: 3155207,
              nome: "Rio Espera",
              id_estado: 13
          },
          {
              codigo_ibge: 3155306,
              nome: "Rio Manso",
              id_estado: 13
          },
          {
              codigo_ibge: 3155405,
              nome: "Rio Novo",
              id_estado: 13
          },
          {
              codigo_ibge: 3155504,
              nome: "Rio Paranaíba",
              id_estado: 13
          },
          {
              codigo_ibge: 3155603,
              nome: "Rio Pardo de Minas",
              id_estado: 13
          },
          {
              codigo_ibge: 3155702,
              nome: "Rio Piracicaba",
              id_estado: 13
          },
          {
              codigo_ibge: 3155801,
              nome: "Rio Pomba",
              id_estado: 13
          },
          {
              codigo_ibge: 3155900,
              nome: "Rio Preto",
              id_estado: 13
          },
          {
              codigo_ibge: 3156007,
              nome: "Rio Vermelho",
              id_estado: 13
          },
          {
              codigo_ibge: 3156106,
              nome: "Ritápolis",
              id_estado: 13
          },
          {
              codigo_ibge: 3156205,
              nome: "Rochedo de Minas",
              id_estado: 13
          },
          {
              codigo_ibge: 3156304,
              nome: "Rodeiro",
              id_estado: 13
          },
          {
              codigo_ibge: 3156403,
              nome: "Romaria",
              id_estado: 13
          },
          {
              codigo_ibge: 3156452,
              nome: "Rosário da Limeira",
              id_estado: 13
          },
          {
              codigo_ibge: 3156502,
              nome: "Rubelita",
              id_estado: 13
          },
          {
              codigo_ibge: 3156601,
              nome: "Rubim",
              id_estado: 13
          },
          {
              codigo_ibge: 3156700,
              nome: "Sabará",
              id_estado: 13
          },
          {
              codigo_ibge: 3156809,
              nome: "Sabinópolis",
              id_estado: 13
          },
          {
              codigo_ibge: 3156908,
              nome: "Sacramento",
              id_estado: 13
          },
          {
              codigo_ibge: 3157005,
              nome: "Salinas",
              id_estado: 13
          },
          {
              codigo_ibge: 3157104,
              nome: "Salto da Divisa",
              id_estado: 13
          },
          {
              codigo_ibge: 3157203,
              nome: "Santa Bárbara",
              id_estado: 13
          },
          {
              codigo_ibge: 3157252,
              nome: "Santa Bárbara do Leste",
              id_estado: 13
          },
          {
              codigo_ibge: 3157278,
              nome: "Santa Bárbara do Monte Verde",
              id_estado: 13
          },
          {
              codigo_ibge: 3157302,
              nome: "Santa Bárbara do Tugúrio",
              id_estado: 13
          },
          {
              codigo_ibge: 3157336,
              nome: "Santa Cruz de Minas",
              id_estado: 13
          },
          {
              codigo_ibge: 3157377,
              nome: "Santa Cruz de Salinas",
              id_estado: 13
          },
          {
              codigo_ibge: 3157401,
              nome: "Santa Cruz do Escalvado",
              id_estado: 13
          },
          {
              codigo_ibge: 3157500,
              nome: "Santa Efigênia de Minas",
              id_estado: 13
          },
          {
              codigo_ibge: 3157609,
              nome: "Santa Fé de Minas",
              id_estado: 13
          },
          {
              codigo_ibge: 3157658,
              nome: "Santa Helena de Minas",
              id_estado: 13
          },
          {
              codigo_ibge: 3157708,
              nome: "Santa Juliana",
              id_estado: 13
          },
          {
              codigo_ibge: 3157807,
              nome: "Santa Luzia",
              id_estado: 13
          },
          {
              codigo_ibge: 3157906,
              nome: "Santa Margarida",
              id_estado: 13
          },
          {
              codigo_ibge: 3158003,
              nome: "Santa Maria de Itabira",
              id_estado: 13
          },
          {
              codigo_ibge: 3158102,
              nome: "Santa Maria do Salto",
              id_estado: 13
          },
          {
              codigo_ibge: 3158201,
              nome: "Santa Maria do Suaçuí",
              id_estado: 13
          },
          {
              codigo_ibge: 3158300,
              nome: "Santana da Vargem",
              id_estado: 13
          },
          {
              codigo_ibge: 3158409,
              nome: "Santana de Cataguases",
              id_estado: 13
          },
          {
              codigo_ibge: 3158508,
              nome: "Santana de Pirapama",
              id_estado: 13
          },
          {
              codigo_ibge: 3158607,
              nome: "Santana do Deserto",
              id_estado: 13
          },
          {
              codigo_ibge: 3158706,
              nome: "Santana do Garambéu",
              id_estado: 13
          },
          {
              codigo_ibge: 3158805,
              nome: "Santana do Jacaré",
              id_estado: 13
          },
          {
              codigo_ibge: 3158904,
              nome: "Santana do Manhuaçu",
              id_estado: 13
          },
          {
              codigo_ibge: 3158953,
              nome: "Santana do Paraíso",
              id_estado: 13
          },
          {
              codigo_ibge: 3159001,
              nome: "Santana do Riacho",
              id_estado: 13
          },
          {
              codigo_ibge: 3159100,
              nome: "Santana dos Montes",
              id_estado: 13
          },
          {
              codigo_ibge: 3159209,
              nome: "Santa Rita de Caldas",
              id_estado: 13
          },
          {
              codigo_ibge: 3159308,
              nome: "Santa Rita de Jacutinga",
              id_estado: 13
          },
          {
              codigo_ibge: 3159357,
              nome: "Santa Rita de Minas",
              id_estado: 13
          },
          {
              codigo_ibge: 3159407,
              nome: "Santa Rita de Ibitipoca",
              id_estado: 13
          },
          {
              codigo_ibge: 3159506,
              nome: "Santa Rita do Itueto",
              id_estado: 13
          },
          {
              codigo_ibge: 3159605,
              nome: "Santa Rita do Sapucaí",
              id_estado: 13
          },
          {
              codigo_ibge: 3159704,
              nome: "Santa Rosa da Serra",
              id_estado: 13
          },
          {
              codigo_ibge: 3159803,
              nome: "Santa Vitória",
              id_estado: 13
          },
          {
              codigo_ibge: 3159902,
              nome: "Santo Antônio do Amparo",
              id_estado: 13
          },
          {
              codigo_ibge: 3160009,
              nome: "Santo Antônio do Aventureiro",
              id_estado: 13
          },
          {
              codigo_ibge: 3160108,
              nome: "Santo Antônio do Grama",
              id_estado: 13
          },
          {
              codigo_ibge: 3160207,
              nome: "Santo Antônio do Itambé",
              id_estado: 13
          },
          {
              codigo_ibge: 3160306,
              nome: "Santo Antônio do Jacinto",
              id_estado: 13
          },
          {
              codigo_ibge: 3160405,
              nome: "Santo Antônio do Monte",
              id_estado: 13
          },
          {
              codigo_ibge: 3160454,
              nome: "Santo Antônio do Retiro",
              id_estado: 13
          },
          {
              codigo_ibge: 3160504,
              nome: "Santo Antônio do Rio Abaixo",
              id_estado: 13
          },
          {
              codigo_ibge: 3160603,
              nome: "Santo Hipólito",
              id_estado: 13
          },
          {
              codigo_ibge: 3160702,
              nome: "Santos Dumont",
              id_estado: 13
          },
          {
              codigo_ibge: 3160801,
              nome: "São Bento Abade",
              id_estado: 13
          },
          {
              codigo_ibge: 3160900,
              nome: "São Brás do Suaçuí",
              id_estado: 13
          },
          {
              codigo_ibge: 3160959,
              nome: "São Domingos das Dores",
              id_estado: 13
          },
          {
              codigo_ibge: 3161007,
              nome: "São Domingos do Prata",
              id_estado: 13
          },
          {
              codigo_ibge: 3161056,
              nome: "São Félix de Minas",
              id_estado: 13
          },
          {
              codigo_ibge: 3161106,
              nome: "São Francisco",
              id_estado: 13
          },
          {
              codigo_ibge: 3161205,
              nome: "São Francisco de Paula",
              id_estado: 13
          },
          {
              codigo_ibge: 3161304,
              nome: "São Francisco de Sales",
              id_estado: 13
          },
          {
              codigo_ibge: 3161403,
              nome: "São Francisco do Glória",
              id_estado: 13
          },
          {
              codigo_ibge: 3161502,
              nome: "São Geraldo",
              id_estado: 13
          },
          {
              codigo_ibge: 3161601,
              nome: "São Geraldo da Piedade",
              id_estado: 13
          },
          {
              codigo_ibge: 3161650,
              nome: "São Geraldo do Baixio",
              id_estado: 13
          },
          {
              codigo_ibge: 3161700,
              nome: "São Gonçalo do Abaeté",
              id_estado: 13
          },
          {
              codigo_ibge: 3161809,
              nome: "São Gonçalo do Pará",
              id_estado: 13
          },
          {
              codigo_ibge: 3161908,
              nome: "São Gonçalo do Rio Abaixo",
              id_estado: 13
          },
          {
              codigo_ibge: 3162005,
              nome: "São Gonçalo do Sapucaí",
              id_estado: 13
          },
          {
              codigo_ibge: 3162104,
              nome: "São Gotardo",
              id_estado: 13
          },
          {
              codigo_ibge: 3162203,
              nome: "São João Batista do Glória",
              id_estado: 13
          },
          {
              codigo_ibge: 3162252,
              nome: "São João da Lagoa",
              id_estado: 13
          },
          {
              codigo_ibge: 3162302,
              nome: "São João da Mata",
              id_estado: 13
          },
          {
              codigo_ibge: 3162401,
              nome: "São João da Ponte",
              id_estado: 13
          },
          {
              codigo_ibge: 3162450,
              nome: "São João das Missões",
              id_estado: 13
          },
          {
              codigo_ibge: 3162500,
              nome: "São João del Rei",
              id_estado: 13
          },
          {
              codigo_ibge: 3162559,
              nome: "São João do Manhuaçu",
              id_estado: 13
          },
          {
              codigo_ibge: 3162575,
              nome: "São João do Manteninha",
              id_estado: 13
          },
          {
              codigo_ibge: 3162609,
              nome: "São João do Oriente",
              id_estado: 13
          },
          {
              codigo_ibge: 3162658,
              nome: "São João do Pacuí",
              id_estado: 13
          },
          {
              codigo_ibge: 3162708,
              nome: "São João do Paraíso",
              id_estado: 13
          },
          {
              codigo_ibge: 3162807,
              nome: "São João Evangelista",
              id_estado: 13
          },
          {
              codigo_ibge: 3162906,
              nome: "São João Nepomuceno",
              id_estado: 13
          },
          {
              codigo_ibge: 3162922,
              nome: "São Joaquim de Bicas",
              id_estado: 13
          },
          {
              codigo_ibge: 3162948,
              nome: "São José da Barra",
              id_estado: 13
          },
          {
              codigo_ibge: 3162955,
              nome: "São José da Lapa",
              id_estado: 13
          },
          {
              codigo_ibge: 3163003,
              nome: "São José da Safira",
              id_estado: 13
          },
          {
              codigo_ibge: 3163102,
              nome: "São José da Varginha",
              id_estado: 13
          },
          {
              codigo_ibge: 3163201,
              nome: "São José do Alegre",
              id_estado: 13
          },
          {
              codigo_ibge: 3163300,
              nome: "São José do Divino",
              id_estado: 13
          },
          {
              codigo_ibge: 3163409,
              nome: "São José do Goiabal",
              id_estado: 13
          },
          {
              codigo_ibge: 3163508,
              nome: "São José do Jacuri",
              id_estado: 13
          },
          {
              codigo_ibge: 3163607,
              nome: "São José do Mantimento",
              id_estado: 13
          },
          {
              codigo_ibge: 3163706,
              nome: "São Lourenço",
              id_estado: 13
          },
          {
              codigo_ibge: 3163805,
              nome: "São Miguel do Anta",
              id_estado: 13
          },
          {
              codigo_ibge: 3163904,
              nome: "São Pedro da União",
              id_estado: 13
          },
          {
              codigo_ibge: 3164001,
              nome: "São Pedro dos Ferros",
              id_estado: 13
          },
          {
              codigo_ibge: 3164100,
              nome: "São Pedro do Suaçuí",
              id_estado: 13
          },
          {
              codigo_ibge: 3164209,
              nome: "São Romão",
              id_estado: 13
          },
          {
              codigo_ibge: 3164308,
              nome: "São Roque de Minas",
              id_estado: 13
          },
          {
              codigo_ibge: 3164407,
              nome: "São Sebastião da Bela Vista",
              id_estado: 13
          },
          {
              codigo_ibge: 3164431,
              nome: "São Sebastião da Vargem Alegre",
              id_estado: 13
          },
          {
              codigo_ibge: 3164472,
              nome: "São Sebastião do Anta",
              id_estado: 13
          },
          {
              codigo_ibge: 3164506,
              nome: "São Sebastião do Maranhão",
              id_estado: 13
          },
          {
              codigo_ibge: 3164605,
              nome: "São Sebastião do Oeste",
              id_estado: 13
          },
          {
              codigo_ibge: 3164704,
              nome: "São Sebastião do Paraíso",
              id_estado: 13
          },
          {
              codigo_ibge: 3164803,
              nome: "São Sebastião do Rio Preto",
              id_estado: 13
          },
          {
              codigo_ibge: 3164902,
              nome: "São Sebastião do Rio Verde",
              id_estado: 13
          },
          {
              codigo_ibge: 3165008,
              nome: "São Tiago",
              id_estado: 13
          },
          {
              codigo_ibge: 3165107,
              nome: "São Tomás de Aquino",
              id_estado: 13
          },
          {
              codigo_ibge: 3165206,
              nome: "São Thomé das Letras",
              id_estado: 13
          },
          {
              codigo_ibge: 3165305,
              nome: "São Vicente de Minas",
              id_estado: 13
          },
          {
              codigo_ibge: 3165404,
              nome: "Sapucaí-Mirim",
              id_estado: 13
          },
          {
              codigo_ibge: 3165503,
              nome: "Sardoá",
              id_estado: 13
          },
          {
              codigo_ibge: 3165537,
              nome: "Sarzedo",
              id_estado: 13
          },
          {
              codigo_ibge: 3165552,
              nome: "Setubinha",
              id_estado: 13
          },
          {
              codigo_ibge: 3165560,
              nome: "Sem-Peixe",
              id_estado: 13
          },
          {
              codigo_ibge: 3165578,
              nome: "Senador Amaral",
              id_estado: 13
          },
          {
              codigo_ibge: 3165602,
              nome: "Senador Cortes",
              id_estado: 13
          },
          {
              codigo_ibge: 3165701,
              nome: "Senador Firmino",
              id_estado: 13
          },
          {
              codigo_ibge: 3165800,
              nome: "Senador José Bento",
              id_estado: 13
          },
          {
              codigo_ibge: 3165909,
              nome: "Senador Modestino Gonçalves",
              id_estado: 13
          },
          {
              codigo_ibge: 3166006,
              nome: "Senhora de Oliveira",
              id_estado: 13
          },
          {
              codigo_ibge: 3166105,
              nome: "Senhora do Porto",
              id_estado: 13
          },
          {
              codigo_ibge: 3166204,
              nome: "Senhora dos Remédios",
              id_estado: 13
          },
          {
              codigo_ibge: 3166303,
              nome: "Sericita",
              id_estado: 13
          },
          {
              codigo_ibge: 3166402,
              nome: "Seritinga",
              id_estado: 13
          },
          {
              codigo_ibge: 3166501,
              nome: "Serra Azul de Minas",
              id_estado: 13
          },
          {
              codigo_ibge: 3166600,
              nome: "Serra da Saudade",
              id_estado: 13
          },
          {
              codigo_ibge: 3166709,
              nome: "Serra dos Aimorés",
              id_estado: 13
          },
          {
              codigo_ibge: 3166808,
              nome: "Serra do Salitre",
              id_estado: 13
          },
          {
              codigo_ibge: 3166907,
              nome: "Serrania",
              id_estado: 13
          },
          {
              codigo_ibge: 3166956,
              nome: "Serranópolis de Minas",
              id_estado: 13
          },
          {
              codigo_ibge: 3167004,
              nome: "Serranos",
              id_estado: 13
          },
          {
              codigo_ibge: 3167103,
              nome: "Serro",
              id_estado: 13
          },
          {
              codigo_ibge: 3167202,
              nome: "Sete Lagoas",
              id_estado: 13
          },
          {
              codigo_ibge: 3167301,
              nome: "Silveirânia",
              id_estado: 13
          },
          {
              codigo_ibge: 3167400,
              nome: "Silvianópolis",
              id_estado: 13
          },
          {
              codigo_ibge: 3167509,
              nome: "Simão Pereira",
              id_estado: 13
          },
          {
              codigo_ibge: 3167608,
              nome: "Simonésia",
              id_estado: 13
          },
          {
              codigo_ibge: 3167707,
              nome: "Sobrália",
              id_estado: 13
          },
          {
              codigo_ibge: 3167806,
              nome: "Soledade de Minas",
              id_estado: 13
          },
          {
              codigo_ibge: 3167905,
              nome: "Tabuleiro",
              id_estado: 13
          },
          {
              codigo_ibge: 3168002,
              nome: "Taiobeiras",
              id_estado: 13
          },
          {
              codigo_ibge: 3168051,
              nome: "Taparuba",
              id_estado: 13
          },
          {
              codigo_ibge: 3168101,
              nome: "Tapira",
              id_estado: 13
          },
          {
              codigo_ibge: 3168200,
              nome: "Tapiraí",
              id_estado: 13
          },
          {
              codigo_ibge: 3168309,
              nome: "Taquaraçu de Minas",
              id_estado: 13
          },
          {
              codigo_ibge: 3168408,
              nome: "Tarumirim",
              id_estado: 13
          },
          {
              codigo_ibge: 3168507,
              nome: "Teixeiras",
              id_estado: 13
          },
          {
              codigo_ibge: 3168606,
              nome: "Teófilo Otoni",
              id_estado: 13
          },
          {
              codigo_ibge: 3168705,
              nome: "Timóteo",
              id_estado: 13
          },
          {
              codigo_ibge: 3168804,
              nome: "Tiradentes",
              id_estado: 13
          },
          {
              codigo_ibge: 3168903,
              nome: "Tiros",
              id_estado: 13
          },
          {
              codigo_ibge: 3169000,
              nome: "Tocantins",
              id_estado: 13
          },
          {
              codigo_ibge: 3169059,
              nome: "Tocos do Moji",
              id_estado: 13
          },
          {
              codigo_ibge: 3169109,
              nome: "Toledo",
              id_estado: 13
          },
          {
              codigo_ibge: 3169208,
              nome: "Tombos",
              id_estado: 13
          },
          {
              codigo_ibge: 3169307,
              nome: "Três Corações",
              id_estado: 13
          },
          {
              codigo_ibge: 3169356,
              nome: "Três Marias",
              id_estado: 13
          },
          {
              codigo_ibge: 3169406,
              nome: "Três Pontas",
              id_estado: 13
          },
          {
              codigo_ibge: 3169505,
              nome: "Tumiritinga",
              id_estado: 13
          },
          {
              codigo_ibge: 3169604,
              nome: "Tupaciguara",
              id_estado: 13
          },
          {
              codigo_ibge: 3169703,
              nome: "Turmalina",
              id_estado: 13
          },
          {
              codigo_ibge: 3169802,
              nome: "Turvolândia",
              id_estado: 13
          },
          {
              codigo_ibge: 3169901,
              nome: "Ubá",
              id_estado: 13
          },
          {
              codigo_ibge: 3170008,
              nome: "Ubaí",
              id_estado: 13
          },
          {
              codigo_ibge: 3170057,
              nome: "Ubaporanga",
              id_estado: 13
          },
          {
              codigo_ibge: 3170107,
              nome: "Uberaba",
              id_estado: 13
          },
          {
              codigo_ibge: 3170206,
              nome: "Uberlândia",
              id_estado: 13
          },
          {
              codigo_ibge: 3170305,
              nome: "Umburatiba",
              id_estado: 13
          },
          {
              codigo_ibge: 3170404,
              nome: "Unaí",
              id_estado: 13
          },
          {
              codigo_ibge: 3170438,
              nome: "União de Minas",
              id_estado: 13
          },
          {
              codigo_ibge: 3170479,
              nome: "Uruana de Minas",
              id_estado: 13
          },
          {
              codigo_ibge: 3170503,
              nome: "Urucânia",
              id_estado: 13
          },
          {
              codigo_ibge: 3170529,
              nome: "Urucuia",
              id_estado: 13
          },
          {
              codigo_ibge: 3170578,
              nome: "Vargem Alegre",
              id_estado: 13
          },
          {
              codigo_ibge: 3170602,
              nome: "Vargem Bonita",
              id_estado: 13
          },
          {
              codigo_ibge: 3170651,
              nome: "Vargem Grande do Rio Pardo",
              id_estado: 13
          },
          {
              codigo_ibge: 3170701,
              nome: "Varginha",
              id_estado: 13
          },
          {
              codigo_ibge: 3170750,
              nome: "Varjão de Minas",
              id_estado: 13
          },
          {
              codigo_ibge: 3170800,
              nome: "Várzea da Palma",
              id_estado: 13
          },
          {
              codigo_ibge: 3170909,
              nome: "Varzelândia",
              id_estado: 13
          },
          {
              codigo_ibge: 3171006,
              nome: "Vazante",
              id_estado: 13
          },
          {
              codigo_ibge: 3171030,
              nome: "Verdelândia",
              id_estado: 13
          },
          {
              codigo_ibge: 3171071,
              nome: "Veredinha",
              id_estado: 13
          },
          {
              codigo_ibge: 3171105,
              nome: "Veríssimo",
              id_estado: 13
          },
          {
              codigo_ibge: 3171154,
              nome: "Vermelho Novo",
              id_estado: 13
          },
          {
              codigo_ibge: 3171204,
              nome: "Vespasiano",
              id_estado: 13
          },
          {
              codigo_ibge: 3171303,
              nome: "Viçosa",
              id_estado: 13
          },
          {
              codigo_ibge: 3171402,
              nome: "Vieiras",
              id_estado: 13
          },
          {
              codigo_ibge: 3171501,
              nome: "Mathias Lobato",
              id_estado: 13
          },
          {
              codigo_ibge: 3171600,
              nome: "Virgem da Lapa",
              id_estado: 13
          },
          {
              codigo_ibge: 3171709,
              nome: "Virgínia",
              id_estado: 13
          },
          {
              codigo_ibge: 3171808,
              nome: "Virginópolis",
              id_estado: 13
          },
          {
              codigo_ibge: 3171907,
              nome: "Virgolândia",
              id_estado: 13
          },
          {
              codigo_ibge: 3172004,
              nome: "Visconde do Rio Branco",
              id_estado: 13
          },
          {
              codigo_ibge: 3172103,
              nome: "Volta Grande",
              id_estado: 13
          },
          {
              codigo_ibge: 3172202,
              nome: "Wenceslau Braz",
              id_estado: 13
          },
          {
              codigo_ibge: 3200102,
              nome: "Afonso Cláudio",
              id_estado:8
          },
          {
              codigo_ibge: 3200136,
              nome: "Águia Branca",
              id_estado:8
          },
          {
              codigo_ibge: 3200169,
              nome: "Água Doce do Norte",
              id_estado:8
          },
          {
              codigo_ibge: 3200201,
              nome: "Alegre",
              id_estado:8
          },
          {
              codigo_ibge: 3200300,
              nome: "Alfredo Chaves",
              id_estado:8
          },
          {
              codigo_ibge: 3200359,
              nome: "Alto Rio Novo",
              id_estado:8
          },
          {
              codigo_ibge: 3200409,
              nome: "Anchieta",
              id_estado:8
          },
          {
              codigo_ibge: 3200508,
              nome: "Apiacá",
              id_estado:8
          },
          {
              codigo_ibge: 3200607,
              nome: "Aracruz",
              id_estado:8
          },
          {
              codigo_ibge: 3200706,
              nome: "Atilio Vivacqua",
              id_estado:8
          },
          {
              codigo_ibge: 3200805,
              nome: "Baixo Guandu",
              id_estado:8
          },
          {
              codigo_ibge: 3200904,
              nome: "Barra de São Francisco",
              id_estado:8
          },
          {
              codigo_ibge: 3201001,
              nome: "Boa Esperança",
              id_estado:8
          },
          {
              codigo_ibge: 3201100,
              nome: "Bom Jesus do Norte",
              id_estado:8
          },
          {
              codigo_ibge: 3201159,
              nome: "Brejetuba",
              id_estado:8
          },
          {
              codigo_ibge: 3201209,
              nome: "Cachoeiro de Itapemirim",
              id_estado:8
          },
          {
              codigo_ibge: 3201308,
              nome: "Cariacica",
              id_estado:8
          },
          {
              codigo_ibge: 3201407,
              nome: "Castelo",
              id_estado:8
          },
          {
              codigo_ibge: 3201506,
              nome: "Colatina",
              id_estado:8
          },
          {
              codigo_ibge: 3201605,
              nome: "Conceição da Barra",
              id_estado:8
          },
          {
              codigo_ibge: 3201704,
              nome: "Conceição do Castelo",
              id_estado:8
          },
          {
              codigo_ibge: 3201803,
              nome: "Divino de São Lourenço",
              id_estado:8
          },
          {
              codigo_ibge: 3201902,
              nome: "Domingos Martins",
              id_estado:8
          },
          {
              codigo_ibge: 3202009,
              nome: "Dores do Rio Preto",
              id_estado:8
          },
          {
              codigo_ibge: 3202108,
              nome: "Ecoporanga",
              id_estado:8
          },
          {
              codigo_ibge: 3202207,
              nome: "Fundão",
              id_estado:8
          },
          {
              codigo_ibge: 3202256,
              nome: "Governador Lindenberg",
              id_estado:8
          },
          {
              codigo_ibge: 3202306,
              nome: "Guaçuí",
              id_estado:8
          },
          {
              codigo_ibge: 3202405,
              nome: "Guarapari",
              id_estado:8
          },
          {
              codigo_ibge: 3202454,
              nome: "Ibatiba",
              id_estado:8
          },
          {
              codigo_ibge: 3202504,
              nome: "Ibiraçu",
              id_estado:8
          },
          {
              codigo_ibge: 3202553,
              nome: "Ibitirama",
              id_estado:8
          },
          {
              codigo_ibge: 3202603,
              nome: "Iconha",
              id_estado:8
          },
          {
              codigo_ibge: 3202652,
              nome: "Irupi",
              id_estado:8
          },
          {
              codigo_ibge: 3202702,
              nome: "Itaguaçu",
              id_estado:8
          },
          {
              codigo_ibge: 3202801,
              nome: "Itapemirim",
              id_estado:8
          },
          {
              codigo_ibge: 3202900,
              nome: "Itarana",
              id_estado:8
          },
          {
              codigo_ibge: 3203007,
              nome: "Iúna",
              id_estado:8
          },
          {
              codigo_ibge: 3203056,
              nome: "Jaguaré",
              id_estado:8
          },
          {
              codigo_ibge: 3203106,
              nome: "Jerônimo Monteiro",
              id_estado:8
          },
          {
              codigo_ibge: 3203130,
              nome: "João Neiva",
              id_estado:8
          },
          {
              codigo_ibge: 3203163,
              nome: "Laranja da Terra",
              id_estado:8
          },
          {
              codigo_ibge: 3203205,
              nome: "Linhares",
              id_estado:8
          },
          {
              codigo_ibge: 3203304,
              nome: "Mantenópolis",
              id_estado:8
          },
          {
              codigo_ibge: 3203320,
              nome: "Marataízes",
              id_estado:8
          },
          {
              codigo_ibge: 3203346,
              nome: "Marechal Floriano",
              id_estado:8
          },
          {
              codigo_ibge: 3203353,
              nome: "Marilândia",
              id_estado:8
          },
          {
              codigo_ibge: 3203403,
              nome: "Mimoso do Sul",
              id_estado:8
          },
          {
              codigo_ibge: 3203502,
              nome: "Montanha",
              id_estado:8
          },
          {
              codigo_ibge: 3203601,
              nome: "Mucurici",
              id_estado:8
          },
          {
              codigo_ibge: 3203700,
              nome: "Muniz Freire",
              id_estado:8
          },
          {
              codigo_ibge: 3203809,
              nome: "Muqui",
              id_estado:8
          },
          {
              codigo_ibge: 3203908,
              nome: "Nova Venécia",
              id_estado:8
          },
          {
              codigo_ibge: 3204005,
              nome: "Pancas",
              id_estado:8
          },
          {
              codigo_ibge: 3204054,
              nome: "Pedro Canário",
              id_estado:8
          },
          {
              codigo_ibge: 3204104,
              nome: "Pinheiros",
              id_estado:8
          },
          {
              codigo_ibge: 3204203,
              nome: "Piúma",
              id_estado:8
          },
          {
              codigo_ibge: 3204252,
              nome: "Ponto Belo",
              id_estado:8
          },
          {
              codigo_ibge: 3204302,
              nome: "Presidente Kennedy",
              id_estado:8
          },
          {
              codigo_ibge: 3204351,
              nome: "Rio Bananal",
              id_estado:8
          },
          {
              codigo_ibge: 3204401,
              nome: "Rio Novo do Sul",
              id_estado:8
          },
          {
              codigo_ibge: 3204500,
              nome: "Santa Leopoldina",
              id_estado:8
          },
          {
              codigo_ibge: 3204559,
              nome: "Santa Maria de Jetibá",
              id_estado:8
          },
          {
              codigo_ibge: 3204609,
              nome: "Santa Teresa",
              id_estado:8
          },
          {
              codigo_ibge: 3204658,
              nome: "São Domingos do Norte",
              id_estado:8
          },
          {
              codigo_ibge: 3204708,
              nome: "São Gabriel da Palha",
              id_estado:8
          },
          {
              codigo_ibge: 3204807,
              nome: "São José do Calçado",
              id_estado:8
          },
          {
              codigo_ibge: 3204906,
              nome: "São Mateus",
              id_estado:8
          },
          {
              codigo_ibge: 3204955,
              nome: "São Roque do Canaã",
              id_estado:8
          },
          {
              codigo_ibge: 3205002,
              nome: "Serra",
              id_estado:8
          },
          {
              codigo_ibge: 3205010,
              nome: "Sooretama",
              id_estado:8
          },
          {
              codigo_ibge: 3205036,
              nome: "Vargem Alta",
              id_estado:8
          },
          {
              codigo_ibge: 3205069,
              nome: "Venda Nova do Imigrante",
              id_estado:8
          },
          {
              codigo_ibge: 3205101,
              nome: "Viana",
              id_estado:8
          },
          {
              codigo_ibge: 3205150,
              nome: "Vila Pavão",
              id_estado:8
          },
          {
              codigo_ibge: 3205176,
              nome: "Vila Valério",
              id_estado:8
          },
          {
              codigo_ibge: 3205200,
              nome: "Vila Velha",
              id_estado:8
          },
          {
              codigo_ibge: 3205309,
              nome: "Vitória",
              id_estado:8
          },
          {
              codigo_ibge: 3300100,
              nome: "Angra dos Reis",
              id_estado: 19
          },
          {
              codigo_ibge: 3300159,
              nome: "Aperibé",
              id_estado: 19
          },
          {
              codigo_ibge: 3300209,
              nome: "Araruama",
              id_estado: 19
          },
          {
              codigo_ibge: 3300225,
              nome: "Areal",
              id_estado: 19
          },
          {
              codigo_ibge: 3300233,
              nome: "Armação dos Búzios",
              id_estado: 19
          },
          {
              codigo_ibge: 3300258,
              nome: "Arraial do Cabo",
              id_estado: 19
          },
          {
              codigo_ibge: 3300308,
              nome: "Barra do Piraí",
              id_estado: 19
          },
          {
              codigo_ibge: 3300407,
              nome: "Barra Mansa",
              id_estado: 19
          },
          {
              codigo_ibge: 3300456,
              nome: "Belford Roxo",
              id_estado: 19
          },
          {
              codigo_ibge: 3300506,
              nome: "Bom Jardim",
              id_estado: 19
          },
          {
              codigo_ibge: 3300605,
              nome: "Bom Jesus do Itabapoana",
              id_estado: 19
          },
          {
              codigo_ibge: 3300704,
              nome: "Cabo Frio",
              id_estado: 19
          },
          {
              codigo_ibge: 3300803,
              nome: "Cachoeiras de Macacu",
              id_estado: 19
          },
          {
              codigo_ibge: 3300902,
              nome: "Cambuci",
              id_estado: 19
          },
          {
              codigo_ibge: 3300936,
              nome: "Carapebus",
              id_estado: 19
          },
          {
              codigo_ibge: 3300951,
              nome: "Comendador Levy Gasparian",
              id_estado: 19
          },
          {
              codigo_ibge: 3301009,
              nome: "Campos dos Goytacazes",
              id_estado: 19
          },
          {
              codigo_ibge: 3301108,
              nome: "Cantagalo",
              id_estado: 19
          },
          {
              codigo_ibge: 3301157,
              nome: "Cardoso Moreira",
              id_estado: 19
          },
          {
              codigo_ibge: 3301207,
              nome: "Carmo",
              id_estado: 19
          },
          {
              codigo_ibge: 3301306,
              nome: "Casimiro de Abreu",
              id_estado: 19
          },
          {
              codigo_ibge: 3301405,
              nome: "Conceição de Macabu",
              id_estado: 19
          },
          {
              codigo_ibge: 3301504,
              nome: "Cordeiro",
              id_estado: 19
          },
          {
              codigo_ibge: 3301603,
              nome: "Duas Barras",
              id_estado: 19
          },
          {
              codigo_ibge: 3301702,
              nome: "Duque de Caxias",
              id_estado: 19
          },
          {
              codigo_ibge: 3301801,
              nome: "Engenheiro Paulo de Frontin",
              id_estado: 19
          },
          {
              codigo_ibge: 3301850,
              nome: "Guapimirim",
              id_estado: 19
          },
          {
              codigo_ibge: 3301876,
              nome: "Iguaba Grande",
              id_estado: 19
          },
          {
              codigo_ibge: 3301900,
              nome: "Itaboraí",
              id_estado: 19
          },
          {
              codigo_ibge: 3302007,
              nome: "Itaguaí",
              id_estado: 19
          },
          {
              codigo_ibge: 3302056,
              nome: "Italva",
              id_estado: 19
          },
          {
              codigo_ibge: 3302106,
              nome: "Itaocara",
              id_estado: 19
          },
          {
              codigo_ibge: 3302205,
              nome: "Itaperuna",
              id_estado: 19
          },
          {
              codigo_ibge: 3302254,
              nome: "Itatiaia",
              id_estado: 19
          },
          {
              codigo_ibge: 3302270,
              nome: "Japeri",
              id_estado: 19
          },
          {
              codigo_ibge: 3302304,
              nome: "Laje do Muriaé",
              id_estado: 19
          },
          {
              codigo_ibge: 3302403,
              nome: "Macaé",
              id_estado: 19
          },
          {
              codigo_ibge: 3302452,
              nome: "Macuco",
              id_estado: 19
          },
          {
              codigo_ibge: 3302502,
              nome: "Magé",
              id_estado: 19
          },
          {
              codigo_ibge: 3302601,
              nome: "Mangaratiba",
              id_estado: 19
          },
          {
              codigo_ibge: 3302700,
              nome: "Maricá",
              id_estado: 19
          },
          {
              codigo_ibge: 3302809,
              nome: "Mendes",
              id_estado: 19
          },
          {
              codigo_ibge: 3302858,
              nome: "Mesquita",
              id_estado: 19
          },
          {
              codigo_ibge: 3302908,
              nome: "Miguel Pereira",
              id_estado: 19
          },
          {
              codigo_ibge: 3303005,
              nome: "Miracema",
              id_estado: 19
          },
          {
              codigo_ibge: 3303104,
              nome: "Natividade",
              id_estado: 19
          },
          {
              codigo_ibge: 3303203,
              nome: "Nilópolis",
              id_estado: 19
          },
          {
              codigo_ibge: 3303302,
              nome: "Niterói",
              id_estado: 19
          },
          {
              codigo_ibge: 3303401,
              nome: "Nova Friburgo",
              id_estado: 19
          },
          {
              codigo_ibge: 3303500,
              nome: "Nova Iguaçu",
              id_estado: 19
          },
          {
              codigo_ibge: 3303609,
              nome: "Paracambi",
              id_estado: 19
          },
          {
              codigo_ibge: 3303708,
              nome: "Paraíba do Sul",
              id_estado: 19
          },
          {
              codigo_ibge: 3303807,
              nome: "Paraty",
              id_estado: 19
          },
          {
              codigo_ibge: 3303856,
              nome: "Paty do Alferes",
              id_estado: 19
          },
          {
              codigo_ibge: 3303906,
              nome: "Petrópolis",
              id_estado: 19
          },
          {
              codigo_ibge: 3303955,
              nome: "Pinheiral",
              id_estado: 19
          },
          {
              codigo_ibge: 3304003,
              nome: "Piraí",
              id_estado: 19
          },
          {
              codigo_ibge: 3304102,
              nome: "Porciúncula",
              id_estado: 19
          },
          {
              codigo_ibge: 3304110,
              nome: "Porto Real",
              id_estado: 19
          },
          {
              codigo_ibge: 3304128,
              nome: "Quatis",
              id_estado: 19
          },
          {
              codigo_ibge: 3304144,
              nome: "Queimados",
              id_estado: 19
          },
          {
              codigo_ibge: 3304151,
              nome: "Quissamã",
              id_estado: 19
          },
          {
              codigo_ibge: 3304201,
              nome: "Resende",
              id_estado: 19
          },
          {
              codigo_ibge: 3304300,
              nome: "Rio Bonito",
              id_estado: 19
          },
          {
              codigo_ibge: 3304409,
              nome: "Rio Claro",
              id_estado: 19
          },
          {
              codigo_ibge: 3304508,
              nome: "Rio das Flores",
              id_estado: 19
          },
          {
              codigo_ibge: 3304524,
              nome: "Rio das Ostras",
              id_estado: 19
          },
          {
              codigo_ibge: 3304557,
              nome: "Rio de Janeiro",
              id_estado: 19
          },
          {
              codigo_ibge: 3304607,
              nome: "Santa Maria Madalena",
              id_estado: 19
          },
          {
              codigo_ibge: 3304706,
              nome: "Santo Antônio de Pádua",
              id_estado: 19
          },
          {
              codigo_ibge: 3304755,
              nome: "São Francisco de Itabapoana",
              id_estado: 19
          },
          {
              codigo_ibge: 3304805,
              nome: "São Fidélis",
              id_estado: 19
          },
          {
              codigo_ibge: 3304904,
              nome: "São Gonçalo",
              id_estado: 19
          },
          {
              codigo_ibge: 3305000,
              nome: "São João da Barra",
              id_estado: 19
          },
          {
              codigo_ibge: 3305109,
              nome: "São João de Meriti",
              id_estado: 19
          },
          {
              codigo_ibge: 3305133,
              nome: "São José de Ubá",
              id_estado: 19
          },
          {
              codigo_ibge: 3305158,
              nome: "São José do Vale do Rio Preto",
              id_estado: 19
          },
          {
              codigo_ibge: 3305208,
              nome: "São Pedro da Aldeia",
              id_estado: 19
          },
          {
              codigo_ibge: 3305307,
              nome: "São Sebastião do Alto",
              id_estado: 19
          },
          {
              codigo_ibge: 3305406,
              nome: "Sapucaia",
              id_estado: 19
          },
          {
              codigo_ibge: 3305505,
              nome: "Saquarema",
              id_estado: 19
          },
          {
              codigo_ibge: 3305554,
              nome: "Seropédica",
              id_estado: 19
          },
          {
              codigo_ibge: 3305604,
              nome: "Silva Jardim",
              id_estado: 19
          },
          {
              codigo_ibge: 3305703,
              nome: "Sumidouro",
              id_estado: 19
          },
          {
              codigo_ibge: 3305752,
              nome: "Tanguá",
              id_estado: 19
          },
          {
              codigo_ibge: 3305802,
              nome: "Teresópolis",
              id_estado: 19
          },
          {
              codigo_ibge: 3305901,
              nome: "Trajano de Moraes",
              id_estado: 19
          },
          {
              codigo_ibge: 3306008,
              nome: "Três Rios",
              id_estado: 19
          },
          {
              codigo_ibge: 3306107,
              nome: "Valença",
              id_estado: 19
          },
          {
              codigo_ibge: 3306156,
              nome: "Varre-Sai",
              id_estado: 19
          },
          {
              codigo_ibge: 3306206,
              nome: "Vassouras",
              id_estado: 19
          },
          {
              codigo_ibge: 3306305,
              nome: "Volta Redonda",
              id_estado: 19
          },
          {
              codigo_ibge: 3500105,
              nome: "Adamantina",
              id_estado: 25
          },
          {
              codigo_ibge: 3500204,
              nome: "Adolfo",
              id_estado: 25
          },
          {
              codigo_ibge: 3500303,
              nome: "Aguaí",
              id_estado: 25
          },
          {
              codigo_ibge: 3500402,
              nome: "Águas da Prata",
              id_estado: 25
          },
          {
              codigo_ibge: 3500501,
              nome: "Águas de Lindóia",
              id_estado: 25
          },
          {
              codigo_ibge: 3500550,
              nome: "Águas de Santa Bárbara",
              id_estado: 25
          },
          {
              codigo_ibge: 3500600,
              nome: "Águas de São Pedro",
              id_estado: 25
          },
          {
              codigo_ibge: 3500709,
              nome: "Agudos",
              id_estado: 25
          },
          {
              codigo_ibge: 3500758,
              nome: "Alambari",
              id_estado: 25
          },
          {
              codigo_ibge: 3500808,
              nome: "Alfredo Marcondes",
              id_estado: 25
          },
          {
              codigo_ibge: 3500907,
              nome: "Altair",
              id_estado: 25
          },
          {
              codigo_ibge: 3501004,
              nome: "Altinópolis",
              id_estado: 25
          },
          {
              codigo_ibge: 3501103,
              nome: "Alto Alegre",
              id_estado: 25
          },
          {
              codigo_ibge: 3501152,
              nome: "Alumínio",
              id_estado: 25
          },
          {
              codigo_ibge: 3501202,
              nome: "Álvares Florence",
              id_estado: 25
          },
          {
              codigo_ibge: 3501301,
              nome: "Álvares Machado",
              id_estado: 25
          },
          {
              codigo_ibge: 3501400,
              nome: "Álvaro de Carvalho",
              id_estado: 25
          },
          {
              codigo_ibge: 3501509,
              nome: "Alvinlândia",
              id_estado: 25
          },
          {
              codigo_ibge: 3501608,
              nome: "Americana",
              id_estado: 25
          },
          {
              codigo_ibge: 3501707,
              nome: "Américo Brasiliense",
              id_estado: 25
          },
          {
              codigo_ibge: 3501806,
              nome: "Américo de Campos",
              id_estado: 25
          },
          {
              codigo_ibge: 3501905,
              nome: "Amparo",
              id_estado: 25
          },
          {
              codigo_ibge: 3502002,
              nome: "Analândia",
              id_estado: 25
          },
          {
              codigo_ibge: 3502101,
              nome: "Andradina",
              id_estado: 25
          },
          {
              codigo_ibge: 3502200,
              nome: "Angatuba",
              id_estado: 25
          },
          {
              codigo_ibge: 3502309,
              nome: "Anhembi",
              id_estado: 25
          },
          {
              codigo_ibge: 3502408,
              nome: "Anhumas",
              id_estado: 25
          },
          {
              codigo_ibge: 3502507,
              nome: "Aparecida",
              id_estado: 25
          },
          {
              codigo_ibge: 3502606,
              nome: "Aparecida D'Oeste",
              id_estado: 25
          },
          {
              codigo_ibge: 3502705,
              nome: "Apiaí",
              id_estado: 25
          },
          {
              codigo_ibge: 3502754,
              nome: "Araçariguama",
              id_estado: 25
          },
          {
              codigo_ibge: 3502804,
              nome: "Araçatuba",
              id_estado: 25
          },
          {
              codigo_ibge: 3502903,
              nome: "Araçoiaba da Serra",
              id_estado: 25
          },
          {
              codigo_ibge: 3503000,
              nome: "Aramina",
              id_estado: 25
          },
          {
              codigo_ibge: 3503109,
              nome: "Arandu",
              id_estado: 25
          },
          {
              codigo_ibge: 3503158,
              nome: "Arapeí",
              id_estado: 25
          },
          {
              codigo_ibge: 3503208,
              nome: "Araraquara",
              id_estado: 25
          },
          {
              codigo_ibge: 3503307,
              nome: "Araras",
              id_estado: 25
          },
          {
              codigo_ibge: 3503356,
              nome: "Arco-Íris",
              id_estado: 25
          },
          {
              codigo_ibge: 3503406,
              nome: "Arealva",
              id_estado: 25
          },
          {
              codigo_ibge: 3503505,
              nome: "Areias",
              id_estado: 25
          },
          {
              codigo_ibge: 3503604,
              nome: "Areiópolis",
              id_estado: 25
          },
          {
              codigo_ibge: 3503703,
              nome: "Ariranha",
              id_estado: 25
          },
          {
              codigo_ibge: 3503802,
              nome: "Artur Nogueira",
              id_estado: 25
          },
          {
              codigo_ibge: 3503901,
              nome: "Arujá",
              id_estado: 25
          },
          {
              codigo_ibge: 3503950,
              nome: "Aspásia",
              id_estado: 25
          },
          {
              codigo_ibge: 3504008,
              nome: "Assis",
              id_estado: 25
          },
          {
              codigo_ibge: 3504107,
              nome: "Atibaia",
              id_estado: 25
          },
          {
              codigo_ibge: 3504206,
              nome: "Auriflama",
              id_estado: 25
          },
          {
              codigo_ibge: 3504305,
              nome: "Avaí",
              id_estado: 25
          },
          {
              codigo_ibge: 3504404,
              nome: "Avanhandava",
              id_estado: 25
          },
          {
              codigo_ibge: 3504503,
              nome: "Avaré",
              id_estado: 25
          },
          {
              codigo_ibge: 3504602,
              nome: "Bady Bassitt",
              id_estado: 25
          },
          {
              codigo_ibge: 3504701,
              nome: "Balbinos",
              id_estado: 25
          },
          {
              codigo_ibge: 3504800,
              nome: "Bálsamo",
              id_estado: 25
          },
          {
              codigo_ibge: 3504909,
              nome: "Bananal",
              id_estado: 25
          },
          {
              codigo_ibge: 3505005,
              nome: "Barão de Antonina",
              id_estado: 25
          },
          {
              codigo_ibge: 3505104,
              nome: "Barbosa",
              id_estado: 25
          },
          {
              codigo_ibge: 3505203,
              nome: "Bariri",
              id_estado: 25
          },
          {
              codigo_ibge: 3505302,
              nome: "Barra Bonita",
              id_estado: 25
          },
          {
              codigo_ibge: 3505351,
              nome: "Barra do Chapéu",
              id_estado: 25
          },
          {
              codigo_ibge: 3505401,
              nome: "Barra do Turvo",
              id_estado: 25
          },
          {
              codigo_ibge: 3505500,
              nome: "Barretos",
              id_estado: 25
          },
          {
              codigo_ibge: 3505609,
              nome: "Barrinha",
              id_estado: 25
          },
          {
              codigo_ibge: 3505708,
              nome: "Barueri",
              id_estado: 25
          },
          {
              codigo_ibge: 3505807,
              nome: "Bastos",
              id_estado: 25
          },
          {
              codigo_ibge: 3505906,
              nome: "Batatais",
              id_estado: 25
          },
          {
              codigo_ibge: 3506003,
              nome: "Bauru",
              id_estado: 25
          },
          {
              codigo_ibge: 3506102,
              nome: "Bebedouro",
              id_estado: 25
          },
          {
              codigo_ibge: 3506201,
              nome: "Bento de Abreu",
              id_estado: 25
          },
          {
              codigo_ibge: 3506300,
              nome: "Bernardino de Campos",
              id_estado: 25
          },
          {
              codigo_ibge: 3506359,
              nome: "Bertioga",
              id_estado: 25
          },
          {
              codigo_ibge: 3506409,
              nome: "Bilac",
              id_estado: 25
          },
          {
              codigo_ibge: 3506508,
              nome: "Birigui",
              id_estado: 25
          },
          {
              codigo_ibge: 3506607,
              nome: "Biritiba-Mirim",
              id_estado: 25
          },
          {
              codigo_ibge: 3506706,
              nome: "Boa Esperança do Sul",
              id_estado: 25
          },
          {
              codigo_ibge: 3506805,
              nome: "Bocaina",
              id_estado: 25
          },
          {
              codigo_ibge: 3506904,
              nome: "Bofete",
              id_estado: 25
          },
          {
              codigo_ibge: 3507001,
              nome: "Boituva",
              id_estado: 25
          },
          {
              codigo_ibge: 3507100,
              nome: "Bom Jesus dos Perdões",
              id_estado: 25
          },
          {
              codigo_ibge: 3507159,
              nome: "Bom Sucesso de Itararé",
              id_estado: 25
          },
          {
              codigo_ibge: 3507209,
              nome: "Borá",
              id_estado: 25
          },
          {
              codigo_ibge: 3507308,
              nome: "Boracéia",
              id_estado: 25
          },
          {
              codigo_ibge: 3507407,
              nome: "Borborema",
              id_estado: 25
          },
          {
              codigo_ibge: 3507456,
              nome: "Borebi",
              id_estado: 25
          },
          {
              codigo_ibge: 3507506,
              nome: "Botucatu",
              id_estado: 25
          },
          {
              codigo_ibge: 3507605,
              nome: "Bragança Paulista",
              id_estado: 25
          },
          {
              codigo_ibge: 3507704,
              nome: "Braúna",
              id_estado: 25
          },
          {
              codigo_ibge: 3507753,
              nome: "Brejo Alegre",
              id_estado: 25
          },
          {
              codigo_ibge: 3507803,
              nome: "Brodowski",
              id_estado: 25
          },
          {
              codigo_ibge: 3507902,
              nome: "Brotas",
              id_estado: 25
          },
          {
              codigo_ibge: 3508009,
              nome: "Buri",
              id_estado: 25
          },
          {
              codigo_ibge: 3508108,
              nome: "Buritama",
              id_estado: 25
          },
          {
              codigo_ibge: 3508207,
              nome: "Buritizal",
              id_estado: 25
          },
          {
              codigo_ibge: 3508306,
              nome: "Cabrália Paulista",
              id_estado: 25
          },
          {
              codigo_ibge: 3508405,
              nome: "Cabreúva",
              id_estado: 25
          },
          {
              codigo_ibge: 3508504,
              nome: "Caçapava",
              id_estado: 25
          },
          {
              codigo_ibge: 3508603,
              nome: "Cachoeira Paulista",
              id_estado: 25
          },
          {
              codigo_ibge: 3508702,
              nome: "Caconde",
              id_estado: 25
          },
          {
              codigo_ibge: 3508801,
              nome: "Cafelândia",
              id_estado: 25
          },
          {
              codigo_ibge: 3508900,
              nome: "Caiabu",
              id_estado: 25
          },
          {
              codigo_ibge: 3509007,
              nome: "Caieiras",
              id_estado: 25
          },
          {
              codigo_ibge: 3509106,
              nome: "Caiuá",
              id_estado: 25
          },
          {
              codigo_ibge: 3509205,
              nome: "Cajamar",
              id_estado: 25
          },
          {
              codigo_ibge: 3509254,
              nome: "Cajati",
              id_estado: 25
          },
          {
              codigo_ibge: 3509304,
              nome: "Cajobi",
              id_estado: 25
          },
          {
              codigo_ibge: 3509403,
              nome: "Cajuru",
              id_estado: 25
          },
          {
              codigo_ibge: 3509452,
              nome: "Campina do Monte Alegre",
              id_estado: 25
          },
          {
              codigo_ibge: 3509502,
              nome: "Campinas",
              id_estado: 25
          },
          {
              codigo_ibge: 3509601,
              nome: "Campo Limpo Paulista",
              id_estado: 25
          },
          {
              codigo_ibge: 3509700,
              nome: "Campos do Jordão",
              id_estado: 25
          },
          {
              codigo_ibge: 3509809,
              nome: "Campos Novos Paulista",
              id_estado: 25
          },
          {
              codigo_ibge: 3509908,
              nome: "Cananéia",
              id_estado: 25
          },
          {
              codigo_ibge: 3509957,
              nome: "Canas",
              id_estado: 25
          },
          {
              codigo_ibge: 3510005,
              nome: "Cândido Mota",
              id_estado: 25
          },
          {
              codigo_ibge: 3510104,
              nome: "Cândido Rodrigues",
              id_estado: 25
          },
          {
              codigo_ibge: 3510153,
              nome: "Canitar",
              id_estado: 25
          },
          {
              codigo_ibge: 3510203,
              nome: "Capão Bonito",
              id_estado: 25
          },
          {
              codigo_ibge: 3510302,
              nome: "Capela do Alto",
              id_estado: 25
          },
          {
              codigo_ibge: 3510401,
              nome: "Capivari",
              id_estado: 25
          },
          {
              codigo_ibge: 3510500,
              nome: "Caraguatatuba",
              id_estado: 25
          },
          {
              codigo_ibge: 3510609,
              nome: "Carapicuíba",
              id_estado: 25
          },
          {
              codigo_ibge: 3510708,
              nome: "Cardoso",
              id_estado: 25
          },
          {
              codigo_ibge: 3510807,
              nome: "Casa Branca",
              id_estado: 25
          },
          {
              codigo_ibge: 3510906,
              nome: "Cássia dos Coqueiros",
              id_estado: 25
          },
          {
              codigo_ibge: 3511003,
              nome: "Castilho",
              id_estado: 25
          },
          {
              codigo_ibge: 3511102,
              nome: "Catanduva",
              id_estado: 25
          },
          {
              codigo_ibge: 3511201,
              nome: "Catiguá",
              id_estado: 25
          },
          {
              codigo_ibge: 3511300,
              nome: "Cedral",
              id_estado: 25
          },
          {
              codigo_ibge: 3511409,
              nome: "Cerqueira César",
              id_estado: 25
          },
          {
              codigo_ibge: 3511508,
              nome: "Cerquilho",
              id_estado: 25
          },
          {
              codigo_ibge: 3511607,
              nome: "Cesário Lange",
              id_estado: 25
          },
          {
              codigo_ibge: 3511706,
              nome: "Charqueada",
              id_estado: 25
          },
          {
              codigo_ibge: 3511904,
              nome: "Clementina",
              id_estado: 25
          },
          {
              codigo_ibge: 3512001,
              nome: "Colina",
              id_estado: 25
          },
          {
              codigo_ibge: 3512100,
              nome: "Colômbia",
              id_estado: 25
          },
          {
              codigo_ibge: 3512209,
              nome: "Conchal",
              id_estado: 25
          },
          {
              codigo_ibge: 3512308,
              nome: "Conchas",
              id_estado: 25
          },
          {
              codigo_ibge: 3512407,
              nome: "Cordeirópolis",
              id_estado: 25
          },
          {
              codigo_ibge: 3512506,
              nome: "Coroados",
              id_estado: 25
          },
          {
              codigo_ibge: 3512605,
              nome: "Coronel Macedo",
              id_estado: 25
          },
          {
              codigo_ibge: 3512704,
              nome: "Corumbataí",
              id_estado: 25
          },
          {
              codigo_ibge: 3512803,
              nome: "Cosmópolis",
              id_estado: 25
          },
          {
              codigo_ibge: 3512902,
              nome: "Cosmorama",
              id_estado: 25
          },
          {
              codigo_ibge: 3513009,
              nome: "Cotia",
              id_estado: 25
          },
          {
              codigo_ibge: 3513108,
              nome: "Cravinhos",
              id_estado: 25
          },
          {
              codigo_ibge: 3513207,
              nome: "Cristais Paulista",
              id_estado: 25
          },
          {
              codigo_ibge: 3513306,
              nome: "Cruzália",
              id_estado: 25
          },
          {
              codigo_ibge: 3513405,
              nome: "Cruzeiro",
              id_estado: 25
          },
          {
              codigo_ibge: 3513504,
              nome: "Cubatão",
              id_estado: 25
          },
          {
              codigo_ibge: 3513603,
              nome: "Cunha",
              id_estado: 25
          },
          {
              codigo_ibge: 3513702,
              nome: "Descalvado",
              id_estado: 25
          },
          {
              codigo_ibge: 3513801,
              nome: "Diadema",
              id_estado: 25
          },
          {
              codigo_ibge: 3513850,
              nome: "Dirce Reis",
              id_estado: 25
          },
          {
              codigo_ibge: 3513900,
              nome: "Divinolândia",
              id_estado: 25
          },
          {
              codigo_ibge: 3514007,
              nome: "Dobrada",
              id_estado: 25
          },
          {
              codigo_ibge: 3514106,
              nome: "Dois Córregos",
              id_estado: 25
          },
          {
              codigo_ibge: 3514205,
              nome: "Dolcinópolis",
              id_estado: 25
          },
          {
              codigo_ibge: 3514304,
              nome: "Dourado",
              id_estado: 25
          },
          {
              codigo_ibge: 3514403,
              nome: "Dracena",
              id_estado: 25
          },
          {
              codigo_ibge: 3514502,
              nome: "Duartina",
              id_estado: 25
          },
          {
              codigo_ibge: 3514601,
              nome: "Dumont",
              id_estado: 25
          },
          {
              codigo_ibge: 3514700,
              nome: "Echaporã",
              id_estado: 25
          },
          {
              codigo_ibge: 3514809,
              nome: "Eldorado",
              id_estado: 25
          },
          {
              codigo_ibge: 3514908,
              nome: "Elias Fausto",
              id_estado: 25
          },
          {
              codigo_ibge: 3514924,
              nome: "Elisiário",
              id_estado: 25
          },
          {
              codigo_ibge: 3514957,
              nome: "Embaúba",
              id_estado: 25
          },
          {
              codigo_ibge: 3515004,
              nome: "Embu das Artes",
              id_estado: 25
          },
          {
              codigo_ibge: 3515103,
              nome: "Embu-Guaçu",
              id_estado: 25
          },
          {
              codigo_ibge: 3515129,
              nome: "Emilianópolis",
              id_estado: 25
          },
          {
              codigo_ibge: 3515152,
              nome: "Engenheiro Coelho",
              id_estado: 25
          },
          {
              codigo_ibge: 3515186,
              nome: "Espírito Santo do Pinhal",
              id_estado: 25
          },
          {
              codigo_ibge: 3515194,
              nome: "Espírito Santo do Turvo",
              id_estado: 25
          },
          {
              codigo_ibge: 3515202,
              nome: "Estrela D'Oeste",
              id_estado: 25
          },
          {
              codigo_ibge: 3515301,
              nome: "Estrela do Norte",
              id_estado: 25
          },
          {
              codigo_ibge: 3515350,
              nome: "Euclides da Cunha Paulista",
              id_estado: 25
          },
          {
              codigo_ibge: 3515400,
              nome: "Fartura",
              id_estado: 25
          },
          {
              codigo_ibge: 3515509,
              nome: "Fernandópolis",
              id_estado: 25
          },
          {
              codigo_ibge: 3515608,
              nome: "Fernando Prestes",
              id_estado: 25
          },
          {
              codigo_ibge: 3515657,
              nome: "Fernão",
              id_estado: 25
          },
          {
              codigo_ibge: 3515707,
              nome: "Ferraz de Vasconcelos",
              id_estado: 25
          },
          {
              codigo_ibge: 3515806,
              nome: "Flora Rica",
              id_estado: 25
          },
          {
              codigo_ibge: 3515905,
              nome: "Floreal",
              id_estado: 25
          },
          {
              codigo_ibge: 3516002,
              nome: "Flórida Paulista",
              id_estado: 25
          },
          {
              codigo_ibge: 3516101,
              nome: "Florínia",
              id_estado: 25
          },
          {
              codigo_ibge: 3516200,
              nome: "Franca",
              id_estado: 25
          },
          {
              codigo_ibge: 3516309,
              nome: "Francisco Morato",
              id_estado: 25
          },
          {
              codigo_ibge: 3516408,
              nome: "Franco da Rocha",
              id_estado: 25
          },
          {
              codigo_ibge: 3516507,
              nome: "Gabriel Monteiro",
              id_estado: 25
          },
          {
              codigo_ibge: 3516606,
              nome: "Gália",
              id_estado: 25
          },
          {
              codigo_ibge: 3516705,
              nome: "Garça",
              id_estado: 25
          },
          {
              codigo_ibge: 3516804,
              nome: "Gastão Vidigal",
              id_estado: 25
          },
          {
              codigo_ibge: 3516853,
              nome: "Gavião Peixoto",
              id_estado: 25
          },
          {
              codigo_ibge: 3516903,
              nome: "General Salgado",
              id_estado: 25
          },
          {
              codigo_ibge: 3517000,
              nome: "Getulina",
              id_estado: 25
          },
          {
              codigo_ibge: 3517109,
              nome: "Glicério",
              id_estado: 25
          },
          {
              codigo_ibge: 3517208,
              nome: "Guaiçara",
              id_estado: 25
          },
          {
              codigo_ibge: 3517307,
              nome: "Guaimbê",
              id_estado: 25
          },
          {
              codigo_ibge: 3517406,
              nome: "Guaíra",
              id_estado: 25
          },
          {
              codigo_ibge: 3517505,
              nome: "Guapiaçu",
              id_estado: 25
          },
          {
              codigo_ibge: 3517604,
              nome: "Guapiara",
              id_estado: 25
          },
          {
              codigo_ibge: 3517703,
              nome: "Guará",
              id_estado: 25
          },
          {
              codigo_ibge: 3517802,
              nome: "Guaraçaí",
              id_estado: 25
          },
          {
              codigo_ibge: 3517901,
              nome: "Guaraci",
              id_estado: 25
          },
          {
              codigo_ibge: 3518008,
              nome: "Guarani D'Oeste",
              id_estado: 25
          },
          {
              codigo_ibge: 3518107,
              nome: "Guarantã",
              id_estado: 25
          },
          {
              codigo_ibge: 3518206,
              nome: "Guararapes",
              id_estado: 25
          },
          {
              codigo_ibge: 3518305,
              nome: "Guararema",
              id_estado: 25
          },
          {
              codigo_ibge: 3518404,
              nome: "Guaratinguetá",
              id_estado: 25
          },
          {
              codigo_ibge: 3518503,
              nome: "Guareí",
              id_estado: 25
          },
          {
              codigo_ibge: 3518602,
              nome: "Guariba",
              id_estado: 25
          },
          {
              codigo_ibge: 3518701,
              nome: "Guarujá",
              id_estado: 25
          },
          {
              codigo_ibge: 3518800,
              nome: "Guarulhos",
              id_estado: 25
          },
          {
              codigo_ibge: 3518859,
              nome: "Guatapará",
              id_estado: 25
          },
          {
              codigo_ibge: 3518909,
              nome: "Guzolândia",
              id_estado: 25
          },
          {
              codigo_ibge: 3519006,
              nome: "Herculândia",
              id_estado: 25
          },
          {
              codigo_ibge: 3519055,
              nome: "Holambra",
              id_estado: 25
          },
          {
              codigo_ibge: 3519071,
              nome: "Hortolândia",
              id_estado: 25
          },
          {
              codigo_ibge: 3519105,
              nome: "Iacanga",
              id_estado: 25
          },
          {
              codigo_ibge: 3519204,
              nome: "Iacri",
              id_estado: 25
          },
          {
              codigo_ibge: 3519253,
              nome: "Iaras",
              id_estado: 25
          },
          {
              codigo_ibge: 3519303,
              nome: "Ibaté",
              id_estado: 25
          },
          {
              codigo_ibge: 3519402,
              nome: "Ibirá",
              id_estado: 25
          },
          {
              codigo_ibge: 3519501,
              nome: "Ibirarema",
              id_estado: 25
          },
          {
              codigo_ibge: 3519600,
              nome: "Ibitinga",
              id_estado: 25
          },
          {
              codigo_ibge: 3519709,
              nome: "Ibiúna",
              id_estado: 25
          },
          {
              codigo_ibge: 3519808,
              nome: "Icém",
              id_estado: 25
          },
          {
              codigo_ibge: 3519907,
              nome: "Iepê",
              id_estado: 25
          },
          {
              codigo_ibge: 3520004,
              nome: "Igaraçu do Tietê",
              id_estado: 25
          },
          {
              codigo_ibge: 3520103,
              nome: "Igarapava",
              id_estado: 25
          },
          {
              codigo_ibge: 3520202,
              nome: "Igaratá",
              id_estado: 25
          },
          {
              codigo_ibge: 3520301,
              nome: "Iguape",
              id_estado: 25
          },
          {
              codigo_ibge: 3520400,
              nome: "Ilhabela",
              id_estado: 25
          },
          {
              codigo_ibge: 3520426,
              nome: "Ilha Comprida",
              id_estado: 25
          },
          {
              codigo_ibge: 3520442,
              nome: "Ilha Solteira",
              id_estado: 25
          },
          {
              codigo_ibge: 3520509,
              nome: "Indaiatuba",
              id_estado: 25
          },
          {
              codigo_ibge: 3520608,
              nome: "Indiana",
              id_estado: 25
          },
          {
              codigo_ibge: 3520707,
              nome: "Indiaporã",
              id_estado: 25
          },
          {
              codigo_ibge: 3520806,
              nome: "Inúbia Paulista",
              id_estado: 25
          },
          {
              codigo_ibge: 3520905,
              nome: "Ipaussu",
              id_estado: 25
          },
          {
              codigo_ibge: 3521002,
              nome: "Iperó",
              id_estado: 25
          },
          {
              codigo_ibge: 3521101,
              nome: "Ipeúna",
              id_estado: 25
          },
          {
              codigo_ibge: 3521150,
              nome: "Ipiguá",
              id_estado: 25
          },
          {
              codigo_ibge: 3521200,
              nome: "Iporanga",
              id_estado: 25
          },
          {
              codigo_ibge: 3521309,
              nome: "Ipuã",
              id_estado: 25
          },
          {
              codigo_ibge: 3521408,
              nome: "Iracemápolis",
              id_estado: 25
          },
          {
              codigo_ibge: 3521507,
              nome: "Irapuã",
              id_estado: 25
          },
          {
              codigo_ibge: 3521606,
              nome: "Irapuru",
              id_estado: 25
          },
          {
              codigo_ibge: 3521705,
              nome: "Itaberá",
              id_estado: 25
          },
          {
              codigo_ibge: 3521804,
              nome: "Itaí",
              id_estado: 25
          },
          {
              codigo_ibge: 3521903,
              nome: "Itajobi",
              id_estado: 25
          },
          {
              codigo_ibge: 3522000,
              nome: "Itaju",
              id_estado: 25
          },
          {
              codigo_ibge: 3522109,
              nome: "Itanhaém",
              id_estado: 25
          },
          {
              codigo_ibge: 3522158,
              nome: "Itaóca",
              id_estado: 25
          },
          {
              codigo_ibge: 3522208,
              nome: "Itapecerica da Serra",
              id_estado: 25
          },
          {
              codigo_ibge: 3522307,
              nome: "Itapetininga",
              id_estado: 25
          },
          {
              codigo_ibge: 3522406,
              nome: "Itapeva",
              id_estado: 25
          },
          {
              codigo_ibge: 3522505,
              nome: "Itapevi",
              id_estado: 25
          },
          {
              codigo_ibge: 3522604,
              nome: "Itapira",
              id_estado: 25
          },
          {
              codigo_ibge: 3522653,
              nome: "Itapirapuã Paulista",
              id_estado: 25
          },
          {
              codigo_ibge: 3522703,
              nome: "Itápolis",
              id_estado: 25
          },
          {
              codigo_ibge: 3522802,
              nome: "Itaporanga",
              id_estado: 25
          },
          {
              codigo_ibge: 3522901,
              nome: "Itapuí",
              id_estado: 25
          },
          {
              codigo_ibge: 3523008,
              nome: "Itapura",
              id_estado: 25
          },
          {
              codigo_ibge: 3523107,
              nome: "Itaquaquecetuba",
              id_estado: 25
          },
          {
              codigo_ibge: 3523206,
              nome: "Itararé",
              id_estado: 25
          },
          {
              codigo_ibge: 3523305,
              nome: "Itariri",
              id_estado: 25
          },
          {
              codigo_ibge: 3523404,
              nome: "Itatiba",
              id_estado: 25
          },
          {
              codigo_ibge: 3523503,
              nome: "Itatinga",
              id_estado: 25
          },
          {
              codigo_ibge: 3523602,
              nome: "Itirapina",
              id_estado: 25
          },
          {
              codigo_ibge: 3523701,
              nome: "Itirapuã",
              id_estado: 25
          },
          {
              codigo_ibge: 3523800,
              nome: "Itobi",
              id_estado: 25
          },
          {
              codigo_ibge: 3523909,
              nome: "Itu",
              id_estado: 25
          },
          {
              codigo_ibge: 3524006,
              nome: "Itupeva",
              id_estado: 25
          },
          {
              codigo_ibge: 3524105,
              nome: "Ituverava",
              id_estado: 25
          },
          {
              codigo_ibge: 3524204,
              nome: "Jaborandi",
              id_estado: 25
          },
          {
              codigo_ibge: 3524303,
              nome: "Jaboticabal",
              id_estado: 25
          },
          {
              codigo_ibge: 3524402,
              nome: "Jacareí",
              id_estado: 25
          },
          {
              codigo_ibge: 3524501,
              nome: "Jaci",
              id_estado: 25
          },
          {
              codigo_ibge: 3524600,
              nome: "Jacupiranga",
              id_estado: 25
          },
          {
              codigo_ibge: 3524709,
              nome: "Jaguariúna",
              id_estado: 25
          },
          {
              codigo_ibge: 3524808,
              nome: "Jales",
              id_estado: 25
          },
          {
              codigo_ibge: 3524907,
              nome: "Jambeiro",
              id_estado: 25
          },
          {
              codigo_ibge: 3525003,
              nome: "Jandira",
              id_estado: 25
          },
          {
              codigo_ibge: 3525102,
              nome: "Jardinópolis",
              id_estado: 25
          },
          {
              codigo_ibge: 3525201,
              nome: "Jarinu",
              id_estado: 25
          },
          {
              codigo_ibge: 3525300,
              nome: "Jaú",
              id_estado: 25
          },
          {
              codigo_ibge: 3525409,
              nome: "Jeriquara",
              id_estado: 25
          },
          {
              codigo_ibge: 3525508,
              nome: "Joanópolis",
              id_estado: 25
          },
          {
              codigo_ibge: 3525607,
              nome: "João Ramalho",
              id_estado: 25
          },
          {
              codigo_ibge: 3525706,
              nome: "José Bonifácio",
              id_estado: 25
          },
          {
              codigo_ibge: 3525805,
              nome: "Júlio Mesquita",
              id_estado: 25
          },
          {
              codigo_ibge: 3525854,
              nome: "Jumirim",
              id_estado: 25
          },
          {
              codigo_ibge: 3525904,
              nome: "Jundiaí",
              id_estado: 25
          },
          {
              codigo_ibge: 3526001,
              nome: "Junqueirópolis",
              id_estado: 25
          },
          {
              codigo_ibge: 3526100,
              nome: "Juquiá",
              id_estado: 25
          },
          {
              codigo_ibge: 3526209,
              nome: "Juquitiba",
              id_estado: 25
          },
          {
              codigo_ibge: 3526308,
              nome: "Lagoinha",
              id_estado: 25
          },
          {
              codigo_ibge: 3526407,
              nome: "Laranjal Paulista",
              id_estado: 25
          },
          {
              codigo_ibge: 3526506,
              nome: "Lavínia",
              id_estado: 25
          },
          {
              codigo_ibge: 3526605,
              nome: "Lavrinhas",
              id_estado: 25
          },
          {
              codigo_ibge: 3526704,
              nome: "Leme",
              id_estado: 25
          },
          {
              codigo_ibge: 3526803,
              nome: "Lençóis Paulista",
              id_estado: 25
          },
          {
              codigo_ibge: 3526902,
              nome: "Limeira",
              id_estado: 25
          },
          {
              codigo_ibge: 3527009,
              nome: "Lindóia",
              id_estado: 25
          },
          {
              codigo_ibge: 3527108,
              nome: "Lins",
              id_estado: 25
          },
          {
              codigo_ibge: 3527207,
              nome: "Lorena",
              id_estado: 25
          },
          {
              codigo_ibge: 3527256,
              nome: "Lourdes",
              id_estado: 25
          },
          {
              codigo_ibge: 3527306,
              nome: "Louveira",
              id_estado: 25
          },
          {
              codigo_ibge: 3527405,
              nome: "Lucélia",
              id_estado: 25
          },
          {
              codigo_ibge: 3527504,
              nome: "Lucianópolis",
              id_estado: 25
          },
          {
              codigo_ibge: 3527603,
              nome: "Luís Antônio",
              id_estado: 25
          },
          {
              codigo_ibge: 3527702,
              nome: "Luiziânia",
              id_estado: 25
          },
          {
              codigo_ibge: 3527801,
              nome: "Lupércio",
              id_estado: 25
          },
          {
              codigo_ibge: 3527900,
              nome: "Lutécia",
              id_estado: 25
          },
          {
              codigo_ibge: 3528007,
              nome: "Macatuba",
              id_estado: 25
          },
          {
              codigo_ibge: 3528106,
              nome: "Macaubal",
              id_estado: 25
          },
          {
              codigo_ibge: 3528205,
              nome: "Macedônia",
              id_estado: 25
          },
          {
              codigo_ibge: 3528304,
              nome: "Magda",
              id_estado: 25
          },
          {
              codigo_ibge: 3528403,
              nome: "Mairinque",
              id_estado: 25
          },
          {
              codigo_ibge: 3528502,
              nome: "Mairiporã",
              id_estado: 25
          },
          {
              codigo_ibge: 3528601,
              nome: "Manduri",
              id_estado: 25
          },
          {
              codigo_ibge: 3528700,
              nome: "Marabá Paulista",
              id_estado: 25
          },
          {
              codigo_ibge: 3528809,
              nome: "Maracaí",
              id_estado: 25
          },
          {
              codigo_ibge: 3528858,
              nome: "Marapoama",
              id_estado: 25
          },
          {
              codigo_ibge: 3528908,
              nome: "Mariápolis",
              id_estado: 25
          },
          {
              codigo_ibge: 3529005,
              nome: "Marília",
              id_estado: 25
          },
          {
              codigo_ibge: 3529104,
              nome: "Marinópolis",
              id_estado: 25
          },
          {
              codigo_ibge: 3529203,
              nome: "Martinópolis",
              id_estado: 25
          },
          {
              codigo_ibge: 3529302,
              nome: "Matão",
              id_estado: 25
          },
          {
              codigo_ibge: 3529401,
              nome: "Mauá",
              id_estado: 25
          },
          {
              codigo_ibge: 3529500,
              nome: "Mendonça",
              id_estado: 25
          },
          {
              codigo_ibge: 3529609,
              nome: "Meridiano",
              id_estado: 25
          },
          {
              codigo_ibge: 3529658,
              nome: "Mesópolis",
              id_estado: 25
          },
          {
              codigo_ibge: 3529708,
              nome: "Miguelópolis",
              id_estado: 25
          },
          {
              codigo_ibge: 3529807,
              nome: "Mineiros do Tietê",
              id_estado: 25
          },
          {
              codigo_ibge: 3529906,
              nome: "Miracatu",
              id_estado: 25
          },
          {
              codigo_ibge: 3530003,
              nome: "Mira Estrela",
              id_estado: 25
          },
          {
              codigo_ibge: 3530102,
              nome: "Mirandópolis",
              id_estado: 25
          },
          {
              codigo_ibge: 3530201,
              nome: "Mirante do Paranapanema",
              id_estado: 25
          },
          {
              codigo_ibge: 3530300,
              nome: "Mirassol",
              id_estado: 25
          },
          {
              codigo_ibge: 3530409,
              nome: "Mirassolândia",
              id_estado: 25
          },
          {
              codigo_ibge: 3530508,
              nome: "Mococa",
              id_estado: 25
          },
          {
              codigo_ibge: 3530607,
              nome: "Mogi das Cruzes",
              id_estado: 25
          },
          {
              codigo_ibge: 3530706,
              nome: "Mogi Guaçu",
              id_estado: 25
          },
          {
              codigo_ibge: 3530805,
              nome: "Moji Mirim",
              id_estado: 25
          },
          {
              codigo_ibge: 3530904,
              nome: "Mombuca",
              id_estado: 25
          },
          {
              codigo_ibge: 3531001,
              nome: "Monções",
              id_estado: 25
          },
          {
              codigo_ibge: 3531100,
              nome: "Mongaguá",
              id_estado: 25
          },
          {
              codigo_ibge: 3531209,
              nome: "Monte Alegre do Sul",
              id_estado: 25
          },
          {
              codigo_ibge: 3531308,
              nome: "Monte Alto",
              id_estado: 25
          },
          {
              codigo_ibge: 3531407,
              nome: "Monte Aprazível",
              id_estado: 25
          },
          {
              codigo_ibge: 3531506,
              nome: "Monte Azul Paulista",
              id_estado: 25
          },
          {
              codigo_ibge: 3531605,
              nome: "Monte Castelo",
              id_estado: 25
          },
          {
              codigo_ibge: 3531704,
              nome: "Monteiro Lobato",
              id_estado: 25
          },
          {
              codigo_ibge: 3531803,
              nome: "Monte Mor",
              id_estado: 25
          },
          {
              codigo_ibge: 3531902,
              nome: "Morro Agudo",
              id_estado: 25
          },
          {
              codigo_ibge: 3532009,
              nome: "Morungaba",
              id_estado: 25
          },
          {
              codigo_ibge: 3532058,
              nome: "Motuca",
              id_estado: 25
          },
          {
              codigo_ibge: 3532108,
              nome: "Murutinga do Sul",
              id_estado: 25
          },
          {
              codigo_ibge: 3532157,
              nome: "Nantes",
              id_estado: 25
          },
          {
              codigo_ibge: 3532207,
              nome: "Narandiba",
              id_estado: 25
          },
          {
              codigo_ibge: 3532306,
              nome: "Natividade da Serra",
              id_estado: 25
          },
          {
              codigo_ibge: 3532405,
              nome: "Nazaré Paulista",
              id_estado: 25
          },
          {
              codigo_ibge: 3532504,
              nome: "Neves Paulista",
              id_estado: 25
          },
          {
              codigo_ibge: 3532603,
              nome: "Nhandeara",
              id_estado: 25
          },
          {
              codigo_ibge: 3532702,
              nome: "Nipoã",
              id_estado: 25
          },
          {
              codigo_ibge: 3532801,
              nome: "Nova Aliança",
              id_estado: 25
          },
          {
              codigo_ibge: 3532827,
              nome: "Nova Campina",
              id_estado: 25
          },
          {
              codigo_ibge: 3532843,
              nome: "Nova Canaã Paulista",
              id_estado: 25
          },
          {
              codigo_ibge: 3532868,
              nome: "Nova Castilho",
              id_estado: 25
          },
          {
              codigo_ibge: 3532900,
              nome: "Nova Europa",
              id_estado: 25
          },
          {
              codigo_ibge: 3533007,
              nome: "Nova Granada",
              id_estado: 25
          },
          {
              codigo_ibge: 3533106,
              nome: "Nova Guataporanga",
              id_estado: 25
          },
          {
              codigo_ibge: 3533205,
              nome: "Nova Independência",
              id_estado: 25
          },
          {
              codigo_ibge: 3533254,
              nome: "Novais",
              id_estado: 25
          },
          {
              codigo_ibge: 3533304,
              nome: "Nova Luzitânia",
              id_estado: 25
          },
          {
              codigo_ibge: 3533403,
              nome: "Nova Odessa",
              id_estado: 25
          },
          {
              codigo_ibge: 3533502,
              nome: "Novo Horizonte",
              id_estado: 25
          },
          {
              codigo_ibge: 3533601,
              nome: "Nuporanga",
              id_estado: 25
          },
          {
              codigo_ibge: 3533700,
              nome: "Ocauçu",
              id_estado: 25
          },
          {
              codigo_ibge: 3533809,
              nome: "Óleo",
              id_estado: 25
          },
          {
              codigo_ibge: 3533908,
              nome: "Olímpia",
              id_estado: 25
          },
          {
              codigo_ibge: 3534005,
              nome: "Onda Verde",
              id_estado: 25
          },
          {
              codigo_ibge: 3534104,
              nome: "Oriente",
              id_estado: 25
          },
          {
              codigo_ibge: 3534203,
              nome: "Orindiúva",
              id_estado: 25
          },
          {
              codigo_ibge: 3534302,
              nome: "Orlândia",
              id_estado: 25
          },
          {
              codigo_ibge: 3534401,
              nome: "Osasco",
              id_estado: 25
          },
          {
              codigo_ibge: 3534500,
              nome: "Oscar Bressane",
              id_estado: 25
          },
          {
              codigo_ibge: 3534609,
              nome: "Osvaldo Cruz",
              id_estado: 25
          },
          {
              codigo_ibge: 3534708,
              nome: "Ourinhos",
              id_estado: 25
          },
          {
              codigo_ibge: 3534757,
              nome: "Ouroeste",
              id_estado: 25
          },
          {
              codigo_ibge: 3534807,
              nome: "Ouro Verde",
              id_estado: 25
          },
          {
              codigo_ibge: 3534906,
              nome: "Pacaembu",
              id_estado: 25
          },
          {
              codigo_ibge: 3535002,
              nome: "Palestina",
              id_estado: 25
          },
          {
              codigo_ibge: 3535101,
              nome: "Palmares Paulista",
              id_estado: 25
          },
          {
              codigo_ibge: 3535200,
              nome: "Palmeira D'Oeste",
              id_estado: 25
          },
          {
              codigo_ibge: 3535309,
              nome: "Palmital",
              id_estado: 25
          },
          {
              codigo_ibge: 3535408,
              nome: "Panorama",
              id_estado: 25
          },
          {
              codigo_ibge: 3535507,
              nome: "Paraguaçu Paulista",
              id_estado: 25
          },
          {
              codigo_ibge: 3535606,
              nome: "Paraibuna",
              id_estado: 25
          },
          {
              codigo_ibge: 3535705,
              nome: "Paraíso",
              id_estado: 25
          },
          {
              codigo_ibge: 3535804,
              nome: "Paranapanema",
              id_estado: 25
          },
          {
              codigo_ibge: 3535903,
              nome: "Paranapuã",
              id_estado: 25
          },
          {
              codigo_ibge: 3536000,
              nome: "Parapuã",
              id_estado: 25
          },
          {
              codigo_ibge: 3536109,
              nome: "Pardinho",
              id_estado: 25
          },
          {
              codigo_ibge: 3536208,
              nome: "Pariquera-Açu",
              id_estado: 25
          },
          {
              codigo_ibge: 3536257,
              nome: "Parisi",
              id_estado: 25
          },
          {
              codigo_ibge: 3536307,
              nome: "Patrocínio Paulista",
              id_estado: 25
          },
          {
              codigo_ibge: 3536406,
              nome: "Paulicéia",
              id_estado: 25
          },
          {
              codigo_ibge: 3536505,
              nome: "Paulínia",
              id_estado: 25
          },
          {
              codigo_ibge: 3536570,
              nome: "Paulistânia",
              id_estado: 25
          },
          {
              codigo_ibge: 3536604,
              nome: "Paulo de Faria",
              id_estado: 25
          },
          {
              codigo_ibge: 3536703,
              nome: "Pederneiras",
              id_estado: 25
          },
          {
              codigo_ibge: 3536802,
              nome: "Pedra Bela",
              id_estado: 25
          },
          {
              codigo_ibge: 3536901,
              nome: "Pedranópolis",
              id_estado: 25
          },
          {
              codigo_ibge: 3537008,
              nome: "Pedregulho",
              id_estado: 25
          },
          {
              codigo_ibge: 3537107,
              nome: "Pedreira",
              id_estado: 25
          },
          {
              codigo_ibge: 3537156,
              nome: "Pedrinhas Paulista",
              id_estado: 25
          },
          {
              codigo_ibge: 3537206,
              nome: "Pedro de Toledo",
              id_estado: 25
          },
          {
              codigo_ibge: 3537305,
              nome: "Penápolis",
              id_estado: 25
          },
          {
              codigo_ibge: 3537404,
              nome: "Pereira Barreto",
              id_estado: 25
          },
          {
              codigo_ibge: 3537503,
              nome: "Pereiras",
              id_estado: 25
          },
          {
              codigo_ibge: 3537602,
              nome: "Peruíbe",
              id_estado: 25
          },
          {
              codigo_ibge: 3537701,
              nome: "Piacatu",
              id_estado: 25
          },
          {
              codigo_ibge: 3537800,
              nome: "Piedade",
              id_estado: 25
          },
          {
              codigo_ibge: 3537909,
              nome: "Pilar do Sul",
              id_estado: 25
          },
          {
              codigo_ibge: 3538006,
              nome: "Pindamonhangaba",
              id_estado: 25
          },
          {
              codigo_ibge: 3538105,
              nome: "Pindorama",
              id_estado: 25
          },
          {
              codigo_ibge: 3538204,
              nome: "Pinhalzinho",
              id_estado: 25
          },
          {
              codigo_ibge: 3538303,
              nome: "Piquerobi",
              id_estado: 25
          },
          {
              codigo_ibge: 3538501,
              nome: "Piquete",
              id_estado: 25
          },
          {
              codigo_ibge: 3538600,
              nome: "Piracaia",
              id_estado: 25
          },
          {
              codigo_ibge: 3538709,
              nome: "Piracicaba",
              id_estado: 25
          },
          {
              codigo_ibge: 3538808,
              nome: "Piraju",
              id_estado: 25
          },
          {
              codigo_ibge: 3538907,
              nome: "Pirajuí",
              id_estado: 25
          },
          {
              codigo_ibge: 3539004,
              nome: "Pirangi",
              id_estado: 25
          },
          {
              codigo_ibge: 3539103,
              nome: "Pirapora do Bom Jesus",
              id_estado: 25
          },
          {
              codigo_ibge: 3539202,
              nome: "Pirapozinho",
              id_estado: 25
          },
          {
              codigo_ibge: 3539301,
              nome: "Pirassununga",
              id_estado: 25
          },
          {
              codigo_ibge: 3539400,
              nome: "Piratininga",
              id_estado: 25
          },
          {
              codigo_ibge: 3539509,
              nome: "Pitangueiras",
              id_estado: 25
          },
          {
              codigo_ibge: 3539608,
              nome: "Planalto",
              id_estado: 25
          },
          {
              codigo_ibge: 3539707,
              nome: "Platina",
              id_estado: 25
          },
          {
              codigo_ibge: 3539806,
              nome: "Poá",
              id_estado: 25
          },
          {
              codigo_ibge: 3539905,
              nome: "Poloni",
              id_estado: 25
          },
          {
              codigo_ibge: 3540002,
              nome: "Pompéia",
              id_estado: 25
          },
          {
              codigo_ibge: 3540101,
              nome: "Pongaí",
              id_estado: 25
          },
          {
              codigo_ibge: 3540200,
              nome: "Pontal",
              id_estado: 25
          },
          {
              codigo_ibge: 3540259,
              nome: "Pontalinda",
              id_estado: 25
          },
          {
              codigo_ibge: 3540309,
              nome: "Pontes Gestal",
              id_estado: 25
          },
          {
              codigo_ibge: 3540408,
              nome: "Populina",
              id_estado: 25
          },
          {
              codigo_ibge: 3540507,
              nome: "Porangaba",
              id_estado: 25
          },
          {
              codigo_ibge: 3540606,
              nome: "Porto Feliz",
              id_estado: 25
          },
          {
              codigo_ibge: 3540705,
              nome: "Porto Ferreira",
              id_estado: 25
          },
          {
              codigo_ibge: 3540754,
              nome: "Potim",
              id_estado: 25
          },
          {
              codigo_ibge: 3540804,
              nome: "Potirendaba",
              id_estado: 25
          },
          {
              codigo_ibge: 3540853,
              nome: "Pracinha",
              id_estado: 25
          },
          {
              codigo_ibge: 3540903,
              nome: "Pradópolis",
              id_estado: 25
          },
          {
              codigo_ibge: 3541000,
              nome: "Praia Grande",
              id_estado: 25
          },
          {
              codigo_ibge: 3541059,
              nome: "Pratânia",
              id_estado: 25
          },
          {
              codigo_ibge: 3541109,
              nome: "Presidente Alves",
              id_estado: 25
          },
          {
              codigo_ibge: 3541208,
              nome: "Presidente Bernardes",
              id_estado: 25
          },
          {
              codigo_ibge: 3541307,
              nome: "Presidente Epitácio",
              id_estado: 25
          },
          {
              codigo_ibge: 3541406,
              nome: "Presidente Prudente",
              id_estado: 25
          },
          {
              codigo_ibge: 3541505,
              nome: "Presidente Venceslau",
              id_estado: 25
          },
          {
              codigo_ibge: 3541604,
              nome: "Promissão",
              id_estado: 25
          },
          {
              codigo_ibge: 3541653,
              nome: "Quadra",
              id_estado: 25
          },
          {
              codigo_ibge: 3541703,
              nome: "Quatá",
              id_estado: 25
          },
          {
              codigo_ibge: 3541802,
              nome: "Queiroz",
              id_estado: 25
          },
          {
              codigo_ibge: 3541901,
              nome: "Queluz",
              id_estado: 25
          },
          {
              codigo_ibge: 3542008,
              nome: "Quintana",
              id_estado: 25
          },
          {
              codigo_ibge: 3542107,
              nome: "Rafard",
              id_estado: 25
          },
          {
              codigo_ibge: 3542206,
              nome: "Rancharia",
              id_estado: 25
          },
          {
              codigo_ibge: 3542305,
              nome: "Redenção da Serra",
              id_estado: 25
          },
          {
              codigo_ibge: 3542404,
              nome: "Regente Feijó",
              id_estado: 25
          },
          {
              codigo_ibge: 3542503,
              nome: "Reginópolis",
              id_estado: 25
          },
          {
              codigo_ibge: 3542602,
              nome: "Registro",
              id_estado: 25
          },
          {
              codigo_ibge: 3542701,
              nome: "Restinga",
              id_estado: 25
          },
          {
              codigo_ibge: 3542800,
              nome: "Ribeira",
              id_estado: 25
          },
          {
              codigo_ibge: 3542909,
              nome: "Ribeirão Bonito",
              id_estado: 25
          },
          {
              codigo_ibge: 3543006,
              nome: "Ribeirão Branco",
              id_estado: 25
          },
          {
              codigo_ibge: 3543105,
              nome: "Ribeirão Corrente",
              id_estado: 25
          },
          {
              codigo_ibge: 3543204,
              nome: "Ribeirão do Sul",
              id_estado: 25
          },
          {
              codigo_ibge: 3543238,
              nome: "Ribeirão dos Índios",
              id_estado: 25
          },
          {
              codigo_ibge: 3543253,
              nome: "Ribeirão Grande",
              id_estado: 25
          },
          {
              codigo_ibge: 3543303,
              nome: "Ribeirão Pires",
              id_estado: 25
          },
          {
              codigo_ibge: 3543402,
              nome: "Ribeirão Preto",
              id_estado: 25
          },
          {
              codigo_ibge: 3543501,
              nome: "Riversul",
              id_estado: 25
          },
          {
              codigo_ibge: 3543600,
              nome: "Rifaina",
              id_estado: 25
          },
          {
              codigo_ibge: 3543709,
              nome: "Rincão",
              id_estado: 25
          },
          {
              codigo_ibge: 3543808,
              nome: "Rinópolis",
              id_estado: 25
          },
          {
              codigo_ibge: 3543907,
              nome: "Rio Claro",
              id_estado: 25
          },
          {
              codigo_ibge: 3544004,
              nome: "Rio das Pedras",
              id_estado: 25
          },
          {
              codigo_ibge: 3544103,
              nome: "Rio Grande da Serra",
              id_estado: 25
          },
          {
              codigo_ibge: 3544202,
              nome: "Riolândia",
              id_estado: 25
          },
          {
              codigo_ibge: 3544251,
              nome: "Rosana",
              id_estado: 25
          },
          {
              codigo_ibge: 3544301,
              nome: "Roseira",
              id_estado: 25
          },
          {
              codigo_ibge: 3544400,
              nome: "Rubiácea",
              id_estado: 25
          },
          {
              codigo_ibge: 3544509,
              nome: "Rubinéia",
              id_estado: 25
          },
          {
              codigo_ibge: 3544608,
              nome: "Sabino",
              id_estado: 25
          },
          {
              codigo_ibge: 3544707,
              nome: "Sagres",
              id_estado: 25
          },
          {
              codigo_ibge: 3544806,
              nome: "Sales",
              id_estado: 25
          },
          {
              codigo_ibge: 3544905,
              nome: "Sales Oliveira",
              id_estado: 25
          },
          {
              codigo_ibge: 3545001,
              nome: "Salesópolis",
              id_estado: 25
          },
          {
              codigo_ibge: 3545100,
              nome: "Salmourão",
              id_estado: 25
          },
          {
              codigo_ibge: 3545159,
              nome: "Saltinho",
              id_estado: 25
          },
          {
              codigo_ibge: 3545209,
              nome: "Salto",
              id_estado: 25
          },
          {
              codigo_ibge: 3545308,
              nome: "Salto de Pirapora",
              id_estado: 25
          },
          {
              codigo_ibge: 3545407,
              nome: "Salto Grande",
              id_estado: 25
          },
          {
              codigo_ibge: 3545506,
              nome: "Sandovalina",
              id_estado: 25
          },
          {
              codigo_ibge: 3545605,
              nome: "Santa Adélia",
              id_estado: 25
          },
          {
              codigo_ibge: 3545704,
              nome: "Santa Albertina",
              id_estado: 25
          },
          {
              codigo_ibge: 3545803,
              nome: "Santa Bárbara D'Oeste",
              id_estado: 25
          },
          {
              codigo_ibge: 3546009,
              nome: "Santa Branca",
              id_estado: 25
          },
          {
              codigo_ibge: 3546108,
              nome: "Santa Clara D'Oeste",
              id_estado: 25
          },
          {
              codigo_ibge: 3546207,
              nome: "Santa Cruz da Conceição",
              id_estado: 25
          },
          {
              codigo_ibge: 3546256,
              nome: "Santa Cruz da Esperança",
              id_estado: 25
          },
          {
              codigo_ibge: 3546306,
              nome: "Santa Cruz das Palmeiras",
              id_estado: 25
          },
          {
              codigo_ibge: 3546405,
              nome: "Santa Cruz do Rio Pardo",
              id_estado: 25
          },
          {
              codigo_ibge: 3546504,
              nome: "Santa Ernestina",
              id_estado: 25
          },
          {
              codigo_ibge: 3546603,
              nome: "Santa Fé do Sul",
              id_estado: 25
          },
          {
              codigo_ibge: 3546702,
              nome: "Santa Gertrudes",
              id_estado: 25
          },
          {
              codigo_ibge: 3546801,
              nome: "Santa Isabel",
              id_estado: 25
          },
          {
              codigo_ibge: 3546900,
              nome: "Santa Lúcia",
              id_estado: 25
          },
          {
              codigo_ibge: 3547007,
              nome: "Santa Maria da Serra",
              id_estado: 25
          },
          {
              codigo_ibge: 3547106,
              nome: "Santa Mercedes",
              id_estado: 25
          },
          {
              codigo_ibge: 3547205,
              nome: "Santana da Ponte Pensa",
              id_estado: 25
          },
          {
              codigo_ibge: 3547304,
              nome: "Santana de Parnaíba",
              id_estado: 25
          },
          {
              codigo_ibge: 3547403,
              nome: "Santa Rita D'Oeste",
              id_estado: 25
          },
          {
              codigo_ibge: 3547502,
              nome: "Santa Rita do Passa Quatro",
              id_estado: 25
          },
          {
              codigo_ibge: 3547601,
              nome: "Santa Rosa de Viterbo",
              id_estado: 25
          },
          {
              codigo_ibge: 3547650,
              nome: "Santa Salete",
              id_estado: 25
          },
          {
              codigo_ibge: 3547700,
              nome: "Santo Anastácio",
              id_estado: 25
          },
          {
              codigo_ibge: 3547809,
              nome: "Santo André",
              id_estado: 25
          },
          {
              codigo_ibge: 3547908,
              nome: "Santo Antônio da Alegria",
              id_estado: 25
          },
          {
              codigo_ibge: 3548005,
              nome: "Santo Antônio de Posse",
              id_estado: 25
          },
          {
              codigo_ibge: 3548054,
              nome: "Santo Antônio do Aracanguá",
              id_estado: 25
          },
          {
              codigo_ibge: 3548104,
              nome: "Santo Antônio do Jardim",
              id_estado: 25
          },
          {
              codigo_ibge: 3548203,
              nome: "Santo Antônio do Pinhal",
              id_estado: 25
          },
          {
              codigo_ibge: 3548302,
              nome: "Santo Expedito",
              id_estado: 25
          },
          {
              codigo_ibge: 3548401,
              nome: "Santópolis do Aguapeí",
              id_estado: 25
          },
          {
              codigo_ibge: 3548500,
              nome: "Santos",
              id_estado: 25
          },
          {
              codigo_ibge: 3548609,
              nome: "São Bento do Sapucaí",
              id_estado: 25
          },
          {
              codigo_ibge: 3548708,
              nome: "São Bernardo do Campo",
              id_estado: 25
          },
          {
              codigo_ibge: 3548807,
              nome: "São Caetano do Sul",
              id_estado: 25
          },
          {
              codigo_ibge: 3548906,
              nome: "São Carlos",
              id_estado: 25
          },
          {
              codigo_ibge: 3549003,
              nome: "São Francisco",
              id_estado: 25
          },
          {
              codigo_ibge: 3549102,
              nome: "São João da Boa Vista",
              id_estado: 25
          },
          {
              codigo_ibge: 3549201,
              nome: "São João das Duas Pontes",
              id_estado: 25
          },
          {
              codigo_ibge: 3549250,
              nome: "São João de Iracema",
              id_estado: 25
          },
          {
              codigo_ibge: 3549300,
              nome: "São João do Pau D'Alho",
              id_estado: 25
          },
          {
              codigo_ibge: 3549409,
              nome: "São Joaquim da Barra",
              id_estado: 25
          },
          {
              codigo_ibge: 3549508,
              nome: "São José da Bela Vista",
              id_estado: 25
          },
          {
              codigo_ibge: 3549607,
              nome: "São José do Barreiro",
              id_estado: 25
          },
          {
              codigo_ibge: 3549706,
              nome: "São José do Rio Pardo",
              id_estado: 25
          },
          {
              codigo_ibge: 3549805,
              nome: "São José do Rio Preto",
              id_estado: 25
          },
          {
              codigo_ibge: 3549904,
              nome: "São José dos Campos",
              id_estado: 25
          },
          {
              codigo_ibge: 3549953,
              nome: "São Lourenço da Serra",
              id_estado: 25
          },
          {
              codigo_ibge: 3550001,
              nome: "São Luís do Paraitinga",
              id_estado: 25
          },
          {
              codigo_ibge: 3550100,
              nome: "São Manuel",
              id_estado: 25
          },
          {
              codigo_ibge: 3550209,
              nome: "São Miguel Arcanjo",
              id_estado: 25
          },
          {
              codigo_ibge: 3550308,
              nome: "São Paulo",
              id_estado: 25
          },
          {
              codigo_ibge: 3550407,
              nome: "São Pedro",
              id_estado: 25
          },
          {
              codigo_ibge: 3550506,
              nome: "São Pedro do Turvo",
              id_estado: 25
          },
          {
              codigo_ibge: 3550605,
              nome: "São Roque",
              id_estado: 25
          },
          {
              codigo_ibge: 3550704,
              nome: "São Sebastião",
              id_estado: 25
          },
          {
              codigo_ibge: 3550803,
              nome: "São Sebastião da Grama",
              id_estado: 25
          },
          {
              codigo_ibge: 3550902,
              nome: "São Simão",
              id_estado: 25
          },
          {
              codigo_ibge: 3551009,
              nome: "São Vicente",
              id_estado: 25
          },
          {
              codigo_ibge: 3551108,
              nome: "Sarapuí",
              id_estado: 25
          },
          {
              codigo_ibge: 3551207,
              nome: "Sarutaiá",
              id_estado: 25
          },
          {
              codigo_ibge: 3551306,
              nome: "Sebastianópolis do Sul",
              id_estado: 25
          },
          {
              codigo_ibge: 3551405,
              nome: "Serra Azul",
              id_estado: 25
          },
          {
              codigo_ibge: 3551504,
              nome: "Serrana",
              id_estado: 25
          },
          {
              codigo_ibge: 3551603,
              nome: "Serra Negra",
              id_estado: 25
          },
          {
              codigo_ibge: 3551702,
              nome: "Sertãozinho",
              id_estado: 25
          },
          {
              codigo_ibge: 3551801,
              nome: "Sete Barras",
              id_estado: 25
          },
          {
              codigo_ibge: 3551900,
              nome: "Severínia",
              id_estado: 25
          },
          {
              codigo_ibge: 3552007,
              nome: "Silveiras",
              id_estado: 25
          },
          {
              codigo_ibge: 3552106,
              nome: "Socorro",
              id_estado: 25
          },
          {
              codigo_ibge: 3552205,
              nome: "Sorocaba",
              id_estado: 25
          },
          {
              codigo_ibge: 3552304,
              nome: "Sud Mennucci",
              id_estado: 25
          },
          {
              codigo_ibge: 3552403,
              nome: "Sumaré",
              id_estado: 25
          },
          {
              codigo_ibge: 3552502,
              nome: "Suzano",
              id_estado: 25
          },
          {
              codigo_ibge: 3552551,
              nome: "Suzanápolis",
              id_estado: 25
          },
          {
              codigo_ibge: 3552601,
              nome: "Tabapuã",
              id_estado: 25
          },
          {
              codigo_ibge: 3552700,
              nome: "Tabatinga",
              id_estado: 25
          },
          {
              codigo_ibge: 3552809,
              nome: "Taboão da Serra",
              id_estado: 25
          },
          {
              codigo_ibge: 3552908,
              nome: "Taciba",
              id_estado: 25
          },
          {
              codigo_ibge: 3553005,
              nome: "Taguaí",
              id_estado: 25
          },
          {
              codigo_ibge: 3553104,
              nome: "Taiaçu",
              id_estado: 25
          },
          {
              codigo_ibge: 3553203,
              nome: "Taiúva",
              id_estado: 25
          },
          {
              codigo_ibge: 3553302,
              nome: "Tambaú",
              id_estado: 25
          },
          {
              codigo_ibge: 3553401,
              nome: "Tanabi",
              id_estado: 25
          },
          {
              codigo_ibge: 3553500,
              nome: "Tapiraí",
              id_estado: 25
          },
          {
              codigo_ibge: 3553609,
              nome: "Tapiratiba",
              id_estado: 25
          },
          {
              codigo_ibge: 3553658,
              nome: "Taquaral",
              id_estado: 25
          },
          {
              codigo_ibge: 3553708,
              nome: "Taquaritinga",
              id_estado: 25
          },
          {
              codigo_ibge: 3553807,
              nome: "Taquarituba",
              id_estado: 25
          },
          {
              codigo_ibge: 3553856,
              nome: "Taquarivaí",
              id_estado: 25
          },
          {
              codigo_ibge: 3553906,
              nome: "Tarabai",
              id_estado: 25
          },
          {
              codigo_ibge: 3553955,
              nome: "Tarumã",
              id_estado: 25
          },
          {
              codigo_ibge: 3554003,
              nome: "Tatuí",
              id_estado: 25
          },
          {
              codigo_ibge: 3554102,
              nome: "Taubaté",
              id_estado: 25
          },
          {
              codigo_ibge: 3554201,
              nome: "Tejupá",
              id_estado: 25
          },
          {
              codigo_ibge: 3554300,
              nome: "Teodoro Sampaio",
              id_estado: 25
          },
          {
              codigo_ibge: 3554409,
              nome: "Terra Roxa",
              id_estado: 25
          },
          {
              codigo_ibge: 3554508,
              nome: "Tietê",
              id_estado: 25
          },
          {
              codigo_ibge: 3554607,
              nome: "Timburi",
              id_estado: 25
          },
          {
              codigo_ibge: 3554656,
              nome: "Torre de Pedra",
              id_estado: 25
          },
          {
              codigo_ibge: 3554706,
              nome: "Torrinha",
              id_estado: 25
          },
          {
              codigo_ibge: 3554755,
              nome: "Trabiju",
              id_estado: 25
          },
          {
              codigo_ibge: 3554805,
              nome: "Tremembé",
              id_estado: 25
          },
          {
              codigo_ibge: 3554904,
              nome: "Três Fronteiras",
              id_estado: 25
          },
          {
              codigo_ibge: 3554953,
              nome: "Tuiuti",
              id_estado: 25
          },
          {
              codigo_ibge: 3555000,
              nome: "Tupã",
              id_estado: 25
          },
          {
              codigo_ibge: 3555109,
              nome: "Tupi Paulista",
              id_estado: 25
          },
          {
              codigo_ibge: 3555208,
              nome: "Turiúba",
              id_estado: 25
          },
          {
              codigo_ibge: 3555307,
              nome: "Turmalina",
              id_estado: 25
          },
          {
              codigo_ibge: 3555356,
              nome: "Ubarana",
              id_estado: 25
          },
          {
              codigo_ibge: 3555406,
              nome: "Ubatuba",
              id_estado: 25
          },
          {
              codigo_ibge: 3555505,
              nome: "Ubirajara",
              id_estado: 25
          },
          {
              codigo_ibge: 3555604,
              nome: "Uchoa",
              id_estado: 25
          },
          {
              codigo_ibge: 3555703,
              nome: "União Paulista",
              id_estado: 25
          },
          {
              codigo_ibge: 3555802,
              nome: "Urânia",
              id_estado: 25
          },
          {
              codigo_ibge: 3555901,
              nome: "Uru",
              id_estado: 25
          },
          {
              codigo_ibge: 3556008,
              nome: "Urupês",
              id_estado: 25
          },
          {
              codigo_ibge: 3556107,
              nome: "Valentim Gentil",
              id_estado: 25
          },
          {
              codigo_ibge: 3556206,
              nome: "Valinhos",
              id_estado: 25
          },
          {
              codigo_ibge: 3556305,
              nome: "Valparaíso",
              id_estado: 25
          },
          {
              codigo_ibge: 3556354,
              nome: "Vargem",
              id_estado: 25
          },
          {
              codigo_ibge: 3556404,
              nome: "Vargem Grande do Sul",
              id_estado: 25
          },
          {
              codigo_ibge: 3556453,
              nome: "Vargem Grande Paulista",
              id_estado: 25
          },
          {
              codigo_ibge: 3556503,
              nome: "Várzea Paulista",
              id_estado: 25
          },
          {
              codigo_ibge: 3556602,
              nome: "Vera Cruz",
              id_estado: 25
          },
          {
              codigo_ibge: 3556701,
              nome: "Vinhedo",
              id_estado: 25
          },
          {
              codigo_ibge: 3556800,
              nome: "Viradouro",
              id_estado: 25
          },
          {
              codigo_ibge: 3556909,
              nome: "Vista Alegre do Alto",
              id_estado: 25
          },
          {
              codigo_ibge: 3556958,
              nome: "Vitória Brasil",
              id_estado: 25
          },
          {
              codigo_ibge: 3557006,
              nome: "Votorantim",
              id_estado: 25
          },
          {
              codigo_ibge: 3557105,
              nome: "Votuporanga",
              id_estado: 25
          },
          {
              codigo_ibge: 3557154,
              nome: "Zacarias",
              id_estado: 25
          },
          {
              codigo_ibge: 3557204,
              nome: "Chavantes",
              id_estado: 25
          },
          {
              codigo_ibge: 3557303,
              nome: "Estiva Gerbi",
              id_estado: 25
          },
          {
              codigo_ibge: 4100103,
              nome: "Abatiá",
              id_estado: 16
          },
          {
              codigo_ibge: 4100202,
              nome: "Adrianópolis",
              id_estado: 16
          },
          {
              codigo_ibge: 4100301,
              nome: "Agudos do Sul",
              id_estado: 16
          },
          {
              codigo_ibge: 4100400,
              nome: "Almirante Tamandaré",
              id_estado: 16
          },
          {
              codigo_ibge: 4100459,
              nome: "Altamira do Paraná",
              id_estado: 16
          },
          {
              codigo_ibge: 4100509,
              nome: "Altônia",
              id_estado: 16
          },
          {
              codigo_ibge: 4100608,
              nome: "Alto Paraná",
              id_estado: 16
          },
          {
              codigo_ibge: 4100707,
              nome: "Alto Piquiri",
              id_estado: 16
          },
          {
              codigo_ibge: 4100806,
              nome: "Alvorada do Sul",
              id_estado: 16
          },
          {
              codigo_ibge: 4100905,
              nome: "Amaporã",
              id_estado: 16
          },
          {
              codigo_ibge: 4101002,
              nome: "Ampére",
              id_estado: 16
          },
          {
              codigo_ibge: 4101051,
              nome: "Anahy",
              id_estado: 16
          },
          {
              codigo_ibge: 4101101,
              nome: "Andirá",
              id_estado: 16
          },
          {
              codigo_ibge: 4101150,
              nome: "Ângulo",
              id_estado: 16
          },
          {
              codigo_ibge: 4101200,
              nome: "Antonina",
              id_estado: 16
          },
          {
              codigo_ibge: 4101309,
              nome: "Antônio Olinto",
              id_estado: 16
          },
          {
              codigo_ibge: 4101408,
              nome: "Apucarana",
              id_estado: 16
          },
          {
              codigo_ibge: 4101507,
              nome: "Arapongas",
              id_estado: 16
          },
          {
              codigo_ibge: 4101606,
              nome: "Arapoti",
              id_estado: 16
          },
          {
              codigo_ibge: 4101655,
              nome: "Arapuã",
              id_estado: 16
          },
          {
              codigo_ibge: 4101705,
              nome: "Araruna",
              id_estado: 16
          },
          {
              codigo_ibge: 4101804,
              nome: "Araucária",
              id_estado: 16
          },
          {
              codigo_ibge: 4101853,
              nome: "Ariranha do Ivaí",
              id_estado: 16
          },
          {
              codigo_ibge: 4101903,
              nome: "Assaí",
              id_estado: 16
          },
          {
              codigo_ibge: 4102000,
              nome: "Assis Chateaubriand",
              id_estado: 16
          },
          {
              codigo_ibge: 4102109,
              nome: "Astorga",
              id_estado: 16
          },
          {
              codigo_ibge: 4102208,
              nome: "Atalaia",
              id_estado: 16
          },
          {
              codigo_ibge: 4102307,
              nome: "Balsa Nova",
              id_estado: 16
          },
          {
              codigo_ibge: 4102406,
              nome: "Bandeirantes",
              id_estado: 16
          },
          {
              codigo_ibge: 4102505,
              nome: "Barbosa Ferraz",
              id_estado: 16
          },
          {
              codigo_ibge: 4102604,
              nome: "Barracão",
              id_estado: 16
          },
          {
              codigo_ibge: 4102703,
              nome: "Barra do Jacaré",
              id_estado: 16
          },
          {
              codigo_ibge: 4102752,
              nome: "Bela Vista da Caroba",
              id_estado: 16
          },
          {
              codigo_ibge: 4102802,
              nome: "Bela Vista do Paraíso",
              id_estado: 16
          },
          {
              codigo_ibge: 4102901,
              nome: "Bituruna",
              id_estado: 16
          },
          {
              codigo_ibge: 4103008,
              nome: "Boa Esperança",
              id_estado: 16
          },
          {
              codigo_ibge: 4103024,
              nome: "Boa Esperança do Iguaçu",
              id_estado: 16
          },
          {
              codigo_ibge: 4103040,
              nome: "Boa Ventura de São Roque",
              id_estado: 16
          },
          {
              codigo_ibge: 4103057,
              nome: "Boa Vista da Aparecida",
              id_estado: 16
          },
          {
              codigo_ibge: 4103107,
              nome: "Bocaiúva do Sul",
              id_estado: 16
          },
          {
              codigo_ibge: 4103156,
              nome: "Bom Jesus do Sul",
              id_estado: 16
          },
          {
              codigo_ibge: 4103206,
              nome: "Bom Sucesso",
              id_estado: 16
          },
          {
              codigo_ibge: 4103222,
              nome: "Bom Sucesso do Sul",
              id_estado: 16
          },
          {
              codigo_ibge: 4103305,
              nome: "Borrazópolis",
              id_estado: 16
          },
          {
              codigo_ibge: 4103354,
              nome: "Braganey",
              id_estado: 16
          },
          {
              codigo_ibge: 4103370,
              nome: "Brasilândia do Sul",
              id_estado: 16
          },
          {
              codigo_ibge: 4103404,
              nome: "Cafeara",
              id_estado: 16
          },
          {
              codigo_ibge: 4103453,
              nome: "Cafelândia",
              id_estado: 16
          },
          {
              codigo_ibge: 4103479,
              nome: "Cafezal do Sul",
              id_estado: 16
          },
          {
              codigo_ibge: 4103503,
              nome: "Califórnia",
              id_estado: 16
          },
          {
              codigo_ibge: 4103602,
              nome: "Cambará",
              id_estado: 16
          },
          {
              codigo_ibge: 4103701,
              nome: "Cambé",
              id_estado: 16
          },
          {
              codigo_ibge: 4103800,
              nome: "Cambira",
              id_estado: 16
          },
          {
              codigo_ibge: 4103909,
              nome: "Campina da Lagoa",
              id_estado: 16
          },
          {
              codigo_ibge: 4103958,
              nome: "Campina do Simão",
              id_estado: 16
          },
          {
              codigo_ibge: 4104006,
              nome: "Campina Grande do Sul",
              id_estado: 16
          },
          {
              codigo_ibge: 4104055,
              nome: "Campo Bonito",
              id_estado: 16
          },
          {
              codigo_ibge: 4104105,
              nome: "Campo do Tenente",
              id_estado: 16
          },
          {
              codigo_ibge: 4104204,
              nome: "Campo Largo",
              id_estado: 16
          },
          {
              codigo_ibge: 4104253,
              nome: "Campo Magro",
              id_estado: 16
          },
          {
              codigo_ibge: 4104303,
              nome: "Campo Mourão",
              id_estado: 16
          },
          {
              codigo_ibge: 4104402,
              nome: "Cândido de Abreu",
              id_estado: 16
          },
          {
              codigo_ibge: 4104428,
              nome: "Candói",
              id_estado: 16
          },
          {
              codigo_ibge: 4104451,
              nome: "Cantagalo",
              id_estado: 16
          },
          {
              codigo_ibge: 4104501,
              nome: "Capanema",
              id_estado: 16
          },
          {
              codigo_ibge: 4104600,
              nome: "Capitão Leônidas Marques",
              id_estado: 16
          },
          {
              codigo_ibge: 4104659,
              nome: "Carambeí",
              id_estado: 16
          },
          {
              codigo_ibge: 4104709,
              nome: "Carlópolis",
              id_estado: 16
          },
          {
              codigo_ibge: 4104808,
              nome: "Cascavel",
              id_estado: 16
          },
          {
              codigo_ibge: 4104907,
              nome: "Castro",
              id_estado: 16
          },
          {
              codigo_ibge: 4105003,
              nome: "Catanduvas",
              id_estado: 16
          },
          {
              codigo_ibge: 4105102,
              nome: "Centenário do Sul",
              id_estado: 16
          },
          {
              codigo_ibge: 4105201,
              nome: "Cerro Azul",
              id_estado: 16
          },
          {
              codigo_ibge: 4105300,
              nome: "Céu Azul",
              id_estado: 16
          },
          {
              codigo_ibge: 4105409,
              nome: "Chopinzinho",
              id_estado: 16
          },
          {
              codigo_ibge: 4105508,
              nome: "Cianorte",
              id_estado: 16
          },
          {
              codigo_ibge: 4105607,
              nome: "Cidade Gaúcha",
              id_estado: 16
          },
          {
              codigo_ibge: 4105706,
              nome: "Clevelândia",
              id_estado: 16
          },
          {
              codigo_ibge: 4105805,
              nome: "Colombo",
              id_estado: 16
          },
          {
              codigo_ibge: 4105904,
              nome: "Colorado",
              id_estado: 16
          },
          {
              codigo_ibge: 4106001,
              nome: "Congonhinhas",
              id_estado: 16
          },
          {
              codigo_ibge: 4106100,
              nome: "Conselheiro Mairinck",
              id_estado: 16
          },
          {
              codigo_ibge: 4106209,
              nome: "Contenda",
              id_estado: 16
          },
          {
              codigo_ibge: 4106308,
              nome: "Corbélia",
              id_estado: 16
          },
          {
              codigo_ibge: 4106407,
              nome: "Cornélio Procópio",
              id_estado: 16
          },
          {
              codigo_ibge: 4106456,
              nome: "Coronel Domingos Soares",
              id_estado: 16
          },
          {
              codigo_ibge: 4106506,
              nome: "Coronel Vivida",
              id_estado: 16
          },
          {
              codigo_ibge: 4106555,
              nome: "Corumbataí do Sul",
              id_estado: 16
          },
          {
              codigo_ibge: 4106571,
              nome: "Cruzeiro do Iguaçu",
              id_estado: 16
          },
          {
              codigo_ibge: 4106605,
              nome: "Cruzeiro do Oeste",
              id_estado: 16
          },
          {
              codigo_ibge: 4106704,
              nome: "Cruzeiro do Sul",
              id_estado: 16
          },
          {
              codigo_ibge: 4106803,
              nome: "Cruz Machado",
              id_estado: 16
          },
          {
              codigo_ibge: 4106852,
              nome: "Cruzmaltina",
              id_estado: 16
          },
          {
              codigo_ibge: 4106902,
              nome: "Curitiba",
              id_estado: 16
          },
          {
              codigo_ibge: 4107009,
              nome: "Curiúva",
              id_estado: 16
          },
          {
              codigo_ibge: 4107108,
              nome: "Diamante do Norte",
              id_estado: 16
          },
          {
              codigo_ibge: 4107124,
              nome: "Diamante do Sul",
              id_estado: 16
          },
          {
              codigo_ibge: 4107157,
              nome: "Diamante D'Oeste",
              id_estado: 16
          },
          {
              codigo_ibge: 4107207,
              nome: "Dois Vizinhos",
              id_estado: 16
          },
          {
              codigo_ibge: 4107256,
              nome: "Douradina",
              id_estado: 16
          },
          {
              codigo_ibge: 4107306,
              nome: "Doutor Camargo",
              id_estado: 16
          },
          {
              codigo_ibge: 4107405,
              nome: "Enéas Marques",
              id_estado: 16
          },
          {
              codigo_ibge: 4107504,
              nome: "Engenheiro Beltrão",
              id_estado: 16
          },
          {
              codigo_ibge: 4107520,
              nome: "Esperança Nova",
              id_estado: 16
          },
          {
              codigo_ibge: 4107538,
              nome: "Entre Rios do Oeste",
              id_estado: 16
          },
          {
              codigo_ibge: 4107546,
              nome: "Espigão Alto do Iguaçu",
              id_estado: 16
          },
          {
              codigo_ibge: 4107553,
              nome: "Farol",
              id_estado: 16
          },
          {
              codigo_ibge: 4107603,
              nome: "Faxinal",
              id_estado: 16
          },
          {
              codigo_ibge: 4107652,
              nome: "Fazenda Rio Grande",
              id_estado: 16
          },
          {
              codigo_ibge: 4107702,
              nome: "Fênix",
              id_estado: 16
          },
          {
              codigo_ibge: 4107736,
              nome: "Fernandes Pinheiro",
              id_estado: 16
          },
          {
              codigo_ibge: 4107751,
              nome: "Figueira",
              id_estado: 16
          },
          {
              codigo_ibge: 4107801,
              nome: "Floraí",
              id_estado: 16
          },
          {
              codigo_ibge: 4107850,
              nome: "Flor da Serra do Sul",
              id_estado: 16
          },
          {
              codigo_ibge: 4107900,
              nome: "Floresta",
              id_estado: 16
          },
          {
              codigo_ibge: 4108007,
              nome: "Florestópolis",
              id_estado: 16
          },
          {
              codigo_ibge: 4108106,
              nome: "Flórida",
              id_estado: 16
          },
          {
              codigo_ibge: 4108205,
              nome: "Formosa do Oeste",
              id_estado: 16
          },
          {
              codigo_ibge: 4108304,
              nome: "Foz do Iguaçu",
              id_estado: 16
          },
          {
              codigo_ibge: 4108320,
              nome: "Francisco Alves",
              id_estado: 16
          },
          {
              codigo_ibge: 4108403,
              nome: "Francisco Beltrão",
              id_estado: 16
          },
          {
              codigo_ibge: 4108452,
              nome: "Foz do Jordão",
              id_estado: 16
          },
          {
              codigo_ibge: 4108502,
              nome: "General Carneiro",
              id_estado: 16
          },
          {
              codigo_ibge: 4108551,
              nome: "Godoy Moreira",
              id_estado: 16
          },
          {
              codigo_ibge: 4108601,
              nome: "Goioerê",
              id_estado: 16
          },
          {
              codigo_ibge: 4108650,
              nome: "Goioxim",
              id_estado: 16
          },
          {
              codigo_ibge: 4108700,
              nome: "Grandes Rios",
              id_estado: 16
          },
          {
              codigo_ibge: 4108809,
              nome: "Guaíra",
              id_estado: 16
          },
          {
              codigo_ibge: 4108908,
              nome: "Guairaçá",
              id_estado: 16
          },
          {
              codigo_ibge: 4108957,
              nome: "Guamiranga",
              id_estado: 16
          },
          {
              codigo_ibge: 4109005,
              nome: "Guapirama",
              id_estado: 16
          },
          {
              codigo_ibge: 4109104,
              nome: "Guaporema",
              id_estado: 16
          },
          {
              codigo_ibge: 4109203,
              nome: "Guaraci",
              id_estado: 16
          },
          {
              codigo_ibge: 4109302,
              nome: "Guaraniaçu",
              id_estado: 16
          },
          {
              codigo_ibge: 4109401,
              nome: "Guarapuava",
              id_estado: 16
          },
          {
              codigo_ibge: 4109500,
              nome: "Guaraqueçaba",
              id_estado: 16
          },
          {
              codigo_ibge: 4109609,
              nome: "Guaratuba",
              id_estado: 16
          },
          {
              codigo_ibge: 4109658,
              nome: "Honório Serpa",
              id_estado: 16
          },
          {
              codigo_ibge: 4109708,
              nome: "Ibaiti",
              id_estado: 16
          },
          {
              codigo_ibge: 4109757,
              nome: "Ibema",
              id_estado: 16
          },
          {
              codigo_ibge: 4109807,
              nome: "Ibiporã",
              id_estado: 16
          },
          {
              codigo_ibge: 4109906,
              nome: "Icaraíma",
              id_estado: 16
          },
          {
              codigo_ibge: 4110003,
              nome: "Iguaraçu",
              id_estado: 16
          },
          {
              codigo_ibge: 4110052,
              nome: "Iguatu",
              id_estado: 16
          },
          {
              codigo_ibge: 4110078,
              nome: "Imbaú",
              id_estado: 16
          },
          {
              codigo_ibge: 4110102,
              nome: "Imbituva",
              id_estado: 16
          },
          {
              codigo_ibge: 4110201,
              nome: "Inácio Martins",
              id_estado: 16
          },
          {
              codigo_ibge: 4110300,
              nome: "Inajá",
              id_estado: 16
          },
          {
              codigo_ibge: 4110409,
              nome: "Indianópolis",
              id_estado: 16
          },
          {
              codigo_ibge: 4110508,
              nome: "Ipiranga",
              id_estado: 16
          },
          {
              codigo_ibge: 4110607,
              nome: "Iporã",
              id_estado: 16
          },
          {
              codigo_ibge: 4110656,
              nome: "Iracema do Oeste",
              id_estado: 16
          },
          {
              codigo_ibge: 4110706,
              nome: "Irati",
              id_estado: 16
          },
          {
              codigo_ibge: 4110805,
              nome: "Iretama",
              id_estado: 16
          },
          {
              codigo_ibge: 4110904,
              nome: "Itaguajé",
              id_estado: 16
          },
          {
              codigo_ibge: 4110953,
              nome: "Itaipulândia",
              id_estado: 16
          },
          {
              codigo_ibge: 4111001,
              nome: "Itambaracá",
              id_estado: 16
          },
          {
              codigo_ibge: 4111100,
              nome: "Itambé",
              id_estado: 16
          },
          {
              codigo_ibge: 4111209,
              nome: "Itapejara D'Oeste",
              id_estado: 16
          },
          {
              codigo_ibge: 4111258,
              nome: "Itaperuçu",
              id_estado: 16
          },
          {
              codigo_ibge: 4111308,
              nome: "Itaúna do Sul",
              id_estado: 16
          },
          {
              codigo_ibge: 4111407,
              nome: "Ivaí",
              id_estado: 16
          },
          {
              codigo_ibge: 4111506,
              nome: "Ivaiporã",
              id_estado: 16
          },
          {
              codigo_ibge: 4111555,
              nome: "Ivaté",
              id_estado: 16
          },
          {
              codigo_ibge: 4111605,
              nome: "Ivatuba",
              id_estado: 16
          },
          {
              codigo_ibge: 4111704,
              nome: "Jaboti",
              id_estado: 16
          },
          {
              codigo_ibge: 4111803,
              nome: "Jacarezinho",
              id_estado: 16
          },
          {
              codigo_ibge: 4111902,
              nome: "Jaguapitã",
              id_estado: 16
          },
          {
              codigo_ibge: 4112009,
              nome: "Jaguariaíva",
              id_estado: 16
          },
          {
              codigo_ibge: 4112108,
              nome: "Jandaia do Sul",
              id_estado: 16
          },
          {
              codigo_ibge: 4112207,
              nome: "Janiópolis",
              id_estado: 16
          },
          {
              codigo_ibge: 4112306,
              nome: "Japira",
              id_estado: 16
          },
          {
              codigo_ibge: 4112405,
              nome: "Japurá",
              id_estado: 16
          },
          {
              codigo_ibge: 4112504,
              nome: "Jardim Alegre",
              id_estado: 16
          },
          {
              codigo_ibge: 4112603,
              nome: "Jardim Olinda",
              id_estado: 16
          },
          {
              codigo_ibge: 4112702,
              nome: "Jataizinho",
              id_estado: 16
          },
          {
              codigo_ibge: 4112751,
              nome: "Jesuítas",
              id_estado: 16
          },
          {
              codigo_ibge: 4112801,
              nome: "Joaquim Távora",
              id_estado: 16
          },
          {
              codigo_ibge: 4112900,
              nome: "Jundiaí do Sul",
              id_estado: 16
          },
          {
              codigo_ibge: 4112959,
              nome: "Juranda",
              id_estado: 16
          },
          {
              codigo_ibge: 4113007,
              nome: "Jussara",
              id_estado: 16
          },
          {
              codigo_ibge: 4113106,
              nome: "Kaloré",
              id_estado: 16
          },
          {
              codigo_ibge: 4113205,
              nome: "Lapa",
              id_estado: 16
          },
          {
              codigo_ibge: 4113254,
              nome: "Laranjal",
              id_estado: 16
          },
          {
              codigo_ibge: 4113304,
              nome: "Laranjeiras do Sul",
              id_estado: 16
          },
          {
              codigo_ibge: 4113403,
              nome: "Leópolis",
              id_estado: 16
          },
          {
              codigo_ibge: 4113429,
              nome: "Lidianópolis",
              id_estado: 16
          },
          {
              codigo_ibge: 4113452,
              nome: "Lindoeste",
              id_estado: 16
          },
          {
              codigo_ibge: 4113502,
              nome: "Loanda",
              id_estado: 16
          },
          {
              codigo_ibge: 4113601,
              nome: "Lobato",
              id_estado: 16
          },
          {
              codigo_ibge: 4113700,
              nome: "Londrina",
              id_estado: 16
          },
          {
              codigo_ibge: 4113734,
              nome: "Luiziana",
              id_estado: 16
          },
          {
              codigo_ibge: 4113759,
              nome: "Lunardelli",
              id_estado: 16
          },
          {
              codigo_ibge: 4113809,
              nome: "Lupionópolis",
              id_estado: 16
          },
          {
              codigo_ibge: 4113908,
              nome: "Mallet",
              id_estado: 16
          },
          {
              codigo_ibge: 4114005,
              nome: "Mamborê",
              id_estado: 16
          },
          {
              codigo_ibge: 4114104,
              nome: "Mandaguaçu",
              id_estado: 16
          },
          {
              codigo_ibge: 4114203,
              nome: "Mandaguari",
              id_estado: 16
          },
          {
              codigo_ibge: 4114302,
              nome: "Mandirituba",
              id_estado: 16
          },
          {
              codigo_ibge: 4114351,
              nome: "Manfrinópolis",
              id_estado: 16
          },
          {
              codigo_ibge: 4114401,
              nome: "Mangueirinha",
              id_estado: 16
          },
          {
              codigo_ibge: 4114500,
              nome: "Manoel Ribas",
              id_estado: 16
          },
          {
              codigo_ibge: 4114609,
              nome: "Marechal Cândido Rondon",
              id_estado: 16
          },
          {
              codigo_ibge: 4114708,
              nome: "Maria Helena",
              id_estado: 16
          },
          {
              codigo_ibge: 4114807,
              nome: "Marialva",
              id_estado: 16
          },
          {
              codigo_ibge: 4114906,
              nome: "Marilândia do Sul",
              id_estado: 16
          },
          {
              codigo_ibge: 4115002,
              nome: "Marilena",
              id_estado: 16
          },
          {
              codigo_ibge: 4115101,
              nome: "Mariluz",
              id_estado: 16
          },
          {
              codigo_ibge: 4115200,
              nome: "Maringá",
              id_estado: 16
          },
          {
              codigo_ibge: 4115309,
              nome: "Mariópolis",
              id_estado: 16
          },
          {
              codigo_ibge: 4115358,
              nome: "Maripá",
              id_estado: 16
          },
          {
              codigo_ibge: 4115408,
              nome: "Marmeleiro",
              id_estado: 16
          },
          {
              codigo_ibge: 4115457,
              nome: "Marquinho",
              id_estado: 16
          },
          {
              codigo_ibge: 4115507,
              nome: "Marumbi",
              id_estado: 16
          },
          {
              codigo_ibge: 4115606,
              nome: "Matelândia",
              id_estado: 16
          },
          {
              codigo_ibge: 4115705,
              nome: "Matinhos",
              id_estado: 16
          },
          {
              codigo_ibge: 4115739,
              nome: "Mato Rico",
              id_estado: 16
          },
          {
              codigo_ibge: 4115754,
              nome: "Mauá da Serra",
              id_estado: 16
          },
          {
              codigo_ibge: 4115804,
              nome: "Medianeira",
              id_estado: 16
          },
          {
              codigo_ibge: 4115853,
              nome: "Mercedes",
              id_estado: 16
          },
          {
              codigo_ibge: 4115903,
              nome: "Mirador",
              id_estado: 16
          },
          {
              codigo_ibge: 4116000,
              nome: "Miraselva",
              id_estado: 16
          },
          {
              codigo_ibge: 4116059,
              nome: "Missal",
              id_estado: 16
          },
          {
              codigo_ibge: 4116109,
              nome: "Moreira Sales",
              id_estado: 16
          },
          {
              codigo_ibge: 4116208,
              nome: "Morretes",
              id_estado: 16
          },
          {
              codigo_ibge: 4116307,
              nome: "Munhoz de Melo",
              id_estado: 16
          },
          {
              codigo_ibge: 4116406,
              nome: "Nossa Senhora das Graças",
              id_estado: 16
          },
          {
              codigo_ibge: 4116505,
              nome: "Nova Aliança do Ivaí",
              id_estado: 16
          },
          {
              codigo_ibge: 4116604,
              nome: "Nova América da Colina",
              id_estado: 16
          },
          {
              codigo_ibge: 4116703,
              nome: "Nova Aurora",
              id_estado: 16
          },
          {
              codigo_ibge: 4116802,
              nome: "Nova Cantu",
              id_estado: 16
          },
          {
              codigo_ibge: 4116901,
              nome: "Nova Esperança",
              id_estado: 16
          },
          {
              codigo_ibge: 4116950,
              nome: "Nova Esperança do Sudoeste",
              id_estado: 16
          },
          {
              codigo_ibge: 4117008,
              nome: "Nova Fátima",
              id_estado: 16
          },
          {
              codigo_ibge: 4117057,
              nome: "Nova Laranjeiras",
              id_estado: 16
          },
          {
              codigo_ibge: 4117107,
              nome: "Nova Londrina",
              id_estado: 16
          },
          {
              codigo_ibge: 4117206,
              nome: "Nova Olímpia",
              id_estado: 16
          },
          {
              codigo_ibge: 4117214,
              nome: "Nova Santa Bárbara",
              id_estado: 16
          },
          {
              codigo_ibge: 4117222,
              nome: "Nova Santa Rosa",
              id_estado: 16
          },
          {
              codigo_ibge: 4117255,
              nome: "Nova Prata do Iguaçu",
              id_estado: 16
          },
          {
              codigo_ibge: 4117271,
              nome: "Nova Tebas",
              id_estado: 16
          },
          {
              codigo_ibge: 4117297,
              nome: "Novo Itacolomi",
              id_estado: 16
          },
          {
              codigo_ibge: 4117305,
              nome: "Ortigueira",
              id_estado: 16
          },
          {
              codigo_ibge: 4117404,
              nome: "Ourizona",
              id_estado: 16
          },
          {
              codigo_ibge: 4117453,
              nome: "Ouro Verde do Oeste",
              id_estado: 16
          },
          {
              codigo_ibge: 4117503,
              nome: "Paiçandu",
              id_estado: 16
          },
          {
              codigo_ibge: 4117602,
              nome: "Palmas",
              id_estado: 16
          },
          {
              codigo_ibge: 4117701,
              nome: "Palmeira",
              id_estado: 16
          },
          {
              codigo_ibge: 4117800,
              nome: "Palmital",
              id_estado: 16
          },
          {
              codigo_ibge: 4117909,
              nome: "Palotina",
              id_estado: 16
          },
          {
              codigo_ibge: 4118006,
              nome: "Paraíso do Norte",
              id_estado: 16
          },
          {
              codigo_ibge: 4118105,
              nome: "Paranacity",
              id_estado: 16
          },
          {
              codigo_ibge: 4118204,
              nome: "Paranaguá",
              id_estado: 16
          },
          {
              codigo_ibge: 4118303,
              nome: "Paranapoema",
              id_estado: 16
          },
          {
              codigo_ibge: 4118402,
              nome: "Paranavaí",
              id_estado: 16
          },
          {
              codigo_ibge: 4118451,
              nome: "Pato Bragado",
              id_estado: 16
          },
          {
              codigo_ibge: 4118501,
              nome: "Pato Branco",
              id_estado: 16
          },
          {
              codigo_ibge: 4118600,
              nome: "Paula Freitas",
              id_estado: 16
          },
          {
              codigo_ibge: 4118709,
              nome: "Paulo Frontin",
              id_estado: 16
          },
          {
              codigo_ibge: 4118808,
              nome: "Peabiru",
              id_estado: 16
          },
          {
              codigo_ibge: 4118857,
              nome: "Perobal",
              id_estado: 16
          },
          {
              codigo_ibge: 4118907,
              nome: "Pérola",
              id_estado: 16
          },
          {
              codigo_ibge: 4119004,
              nome: "Pérola D'Oeste",
              id_estado: 16
          },
          {
              codigo_ibge: 4119103,
              nome: "Piên",
              id_estado: 16
          },
          {
              codigo_ibge: 4119152,
              nome: "Pinhais",
              id_estado: 16
          },
          {
              codigo_ibge: 4119202,
              nome: "Pinhalão",
              id_estado: 16
          },
          {
              codigo_ibge: 4119251,
              nome: "Pinhal de São Bento",
              id_estado: 16
          },
          {
              codigo_ibge: 4119301,
              nome: "Pinhão",
              id_estado: 16
          },
          {
              codigo_ibge: 4119400,
              nome: "Piraí do Sul",
              id_estado: 16
          },
          {
              codigo_ibge: 4119509,
              nome: "Piraquara",
              id_estado: 16
          },
          {
              codigo_ibge: 4119608,
              nome: "Pitanga",
              id_estado: 16
          },
          {
              codigo_ibge: 4119657,
              nome: "Pitangueiras",
              id_estado: 16
          },
          {
              codigo_ibge: 4119707,
              nome: "Planaltina do Paraná",
              id_estado: 16
          },
          {
              codigo_ibge: 4119806,
              nome: "Planalto",
              id_estado: 16
          },
          {
              codigo_ibge: 4119905,
              nome: "Ponta Grossa",
              id_estado: 16
          },
          {
              codigo_ibge: 4119954,
              nome: "Pontal do Paraná",
              id_estado: 16
          },
          {
              codigo_ibge: 4120002,
              nome: "Porecatu",
              id_estado: 16
          },
          {
              codigo_ibge: 4120101,
              nome: "Porto Amazonas",
              id_estado: 16
          },
          {
              codigo_ibge: 4120150,
              nome: "Porto Barreiro",
              id_estado: 16
          },
          {
              codigo_ibge: 4120200,
              nome: "Porto Rico",
              id_estado: 16
          },
          {
              codigo_ibge: 4120309,
              nome: "Porto Vitória",
              id_estado: 16
          },
          {
              codigo_ibge: 4120333,
              nome: "Prado Ferreira",
              id_estado: 16
          },
          {
              codigo_ibge: 4120358,
              nome: "Pranchita",
              id_estado: 16
          },
          {
              codigo_ibge: 4120408,
              nome: "Presidente Castelo Branco",
              id_estado: 16
          },
          {
              codigo_ibge: 4120507,
              nome: "Primeiro de Maio",
              id_estado: 16
          },
          {
              codigo_ibge: 4120606,
              nome: "Prudentópolis",
              id_estado: 16
          },
          {
              codigo_ibge: 4120655,
              nome: "Quarto Centenário",
              id_estado: 16
          },
          {
              codigo_ibge: 4120705,
              nome: "Quatiguá",
              id_estado: 16
          },
          {
              codigo_ibge: 4120804,
              nome: "Quatro Barras",
              id_estado: 16
          },
          {
              codigo_ibge: 4120853,
              nome: "Quatro Pontes",
              id_estado: 16
          },
          {
              codigo_ibge: 4120903,
              nome: "Quedas do Iguaçu",
              id_estado: 16
          },
          {
              codigo_ibge: 4121000,
              nome: "Querência do Norte",
              id_estado: 16
          },
          {
              codigo_ibge: 4121109,
              nome: "Quinta do Sol",
              id_estado: 16
          },
          {
              codigo_ibge: 4121208,
              nome: "Quitandinha",
              id_estado: 16
          },
          {
              codigo_ibge: 4121257,
              nome: "Ramilândia",
              id_estado: 16
          },
          {
              codigo_ibge: 4121307,
              nome: "Rancho Alegre",
              id_estado: 16
          },
          {
              codigo_ibge: 4121356,
              nome: "Rancho Alegre D'Oeste",
              id_estado: 16
          },
          {
              codigo_ibge: 4121406,
              nome: "Realeza",
              id_estado: 16
          },
          {
              codigo_ibge: 4121505,
              nome: "Rebouças",
              id_estado: 16
          },
          {
              codigo_ibge: 4121604,
              nome: "Renascença",
              id_estado: 16
          },
          {
              codigo_ibge: 4121703,
              nome: "Reserva",
              id_estado: 16
          },
          {
              codigo_ibge: 4121752,
              nome: "Reserva do Iguaçu",
              id_estado: 16
          },
          {
              codigo_ibge: 4121802,
              nome: "Ribeirão Claro",
              id_estado: 16
          },
          {
              codigo_ibge: 4121901,
              nome: "Ribeirão do Pinhal",
              id_estado: 16
          },
          {
              codigo_ibge: 4122008,
              nome: "Rio Azul",
              id_estado: 16
          },
          {
              codigo_ibge: 4122107,
              nome: "Rio Bom",
              id_estado: 16
          },
          {
              codigo_ibge: 4122156,
              nome: "Rio Bonito do Iguaçu",
              id_estado: 16
          },
          {
              codigo_ibge: 4122172,
              nome: "Rio Branco do Ivaí",
              id_estado: 16
          },
          {
              codigo_ibge: 4122206,
              nome: "Rio Branco do Sul",
              id_estado: 16
          },
          {
              codigo_ibge: 4122305,
              nome: "Rio Negro",
              id_estado: 16
          },
          {
              codigo_ibge: 4122404,
              nome: "Rolândia",
              id_estado: 16
          },
          {
              codigo_ibge: 4122503,
              nome: "Roncador",
              id_estado: 16
          },
          {
              codigo_ibge: 4122602,
              nome: "Rondon",
              id_estado: 16
          },
          {
              codigo_ibge: 4122651,
              nome: "Rosário do Ivaí",
              id_estado: 16
          },
          {
              codigo_ibge: 4122701,
              nome: "Sabáudia",
              id_estado: 16
          },
          {
              codigo_ibge: 4122800,
              nome: "Salgado Filho",
              id_estado: 16
          },
          {
              codigo_ibge: 4122909,
              nome: "Salto do Itararé",
              id_estado: 16
          },
          {
              codigo_ibge: 4123006,
              nome: "Salto do Lontra",
              id_estado: 16
          },
          {
              codigo_ibge: 4123105,
              nome: "Santa Amélia",
              id_estado: 16
          },
          {
              codigo_ibge: 4123204,
              nome: "Santa Cecília do Pavão",
              id_estado: 16
          },
          {
              codigo_ibge: 4123303,
              nome: "Santa Cruz de Monte Castelo",
              id_estado: 16
          },
          {
              codigo_ibge: 4123402,
              nome: "Santa Fé",
              id_estado: 16
          },
          {
              codigo_ibge: 4123501,
              nome: "Santa Helena",
              id_estado: 16
          },
          {
              codigo_ibge: 4123600,
              nome: "Santa Inês",
              id_estado: 16
          },
          {
              codigo_ibge: 4123709,
              nome: "Santa Isabel do Ivaí",
              id_estado: 16
          },
          {
              codigo_ibge: 4123808,
              nome: "Santa Izabel do Oeste",
              id_estado: 16
          },
          {
              codigo_ibge: 4123824,
              nome: "Santa Lúcia",
              id_estado: 16
          },
          {
              codigo_ibge: 4123857,
              nome: "Santa Maria do Oeste",
              id_estado: 16
          },
          {
              codigo_ibge: 4123907,
              nome: "Santa Mariana",
              id_estado: 16
          },
          {
              codigo_ibge: 4123956,
              nome: "Santa Mônica",
              id_estado: 16
          },
          {
              codigo_ibge: 4124004,
              nome: "Santana do Itararé",
              id_estado: 16
          },
          {
              codigo_ibge: 4124020,
              nome: "Santa Tereza do Oeste",
              id_estado: 16
          },
          {
              codigo_ibge: 4124053,
              nome: "Santa Terezinha de Itaipu",
              id_estado: 16
          },
          {
              codigo_ibge: 4124103,
              nome: "Santo Antônio da Platina",
              id_estado: 16
          },
          {
              codigo_ibge: 4124202,
              nome: "Santo Antônio do Caiuá",
              id_estado: 16
          },
          {
              codigo_ibge: 4124301,
              nome: "Santo Antônio do Paraíso",
              id_estado: 16
          },
          {
              codigo_ibge: 4124400,
              nome: "Santo Antônio do Sudoeste",
              id_estado: 16
          },
          {
              codigo_ibge: 4124509,
              nome: "Santo Inácio",
              id_estado: 16
          },
          {
              codigo_ibge: 4124608,
              nome: "São Carlos do Ivaí",
              id_estado: 16
          },
          {
              codigo_ibge: 4124707,
              nome: "São Jerônimo da Serra",
              id_estado: 16
          },
          {
              codigo_ibge: 4124806,
              nome: "São João",
              id_estado: 16
          },
          {
              codigo_ibge: 4124905,
              nome: "São João do Caiuá",
              id_estado: 16
          },
          {
              codigo_ibge: 4125001,
              nome: "São João do Ivaí",
              id_estado: 16
          },
          {
              codigo_ibge: 4125100,
              nome: "São João do Triunfo",
              id_estado: 16
          },
          {
              codigo_ibge: 4125209,
              nome: "São Jorge D'Oeste",
              id_estado: 16
          },
          {
              codigo_ibge: 4125308,
              nome: "São Jorge do Ivaí",
              id_estado: 16
          },
          {
              codigo_ibge: 4125357,
              nome: "São Jorge do Patrocínio",
              id_estado: 16
          },
          {
              codigo_ibge: 4125407,
              nome: "São José da Boa Vista",
              id_estado: 16
          },
          {
              codigo_ibge: 4125456,
              nome: "São José das Palmeiras",
              id_estado: 16
          },
          {
              codigo_ibge: 4125506,
              nome: "São José dos Pinhais",
              id_estado: 16
          },
          {
              codigo_ibge: 4125555,
              nome: "São Manoel do Paraná",
              id_estado: 16
          },
          {
              codigo_ibge: 4125605,
              nome: "São Mateus do Sul",
              id_estado: 16
          },
          {
              codigo_ibge: 4125704,
              nome: "São Miguel do Iguaçu",
              id_estado: 16
          },
          {
              codigo_ibge: 4125753,
              nome: "São Pedro do Iguaçu",
              id_estado: 16
          },
          {
              codigo_ibge: 4125803,
              nome: "São Pedro do Ivaí",
              id_estado: 16
          },
          {
              codigo_ibge: 4125902,
              nome: "São Pedro do Paraná",
              id_estado: 16
          },
          {
              codigo_ibge: 4126009,
              nome: "São Sebastião da Amoreira",
              id_estado: 16
          },
          {
              codigo_ibge: 4126108,
              nome: "São Tomé",
              id_estado: 16
          },
          {
              codigo_ibge: 4126207,
              nome: "Sapopema",
              id_estado: 16
          },
          {
              codigo_ibge: 4126256,
              nome: "Sarandi",
              id_estado: 16
          },
          {
              codigo_ibge: 4126272,
              nome: "Saudade do Iguaçu",
              id_estado: 16
          },
          {
              codigo_ibge: 4126306,
              nome: "Sengés",
              id_estado: 16
          },
          {
              codigo_ibge: 4126355,
              nome: "Serranópolis do Iguaçu",
              id_estado: 16
          },
          {
              codigo_ibge: 4126405,
              nome: "Sertaneja",
              id_estado: 16
          },
          {
              codigo_ibge: 4126504,
              nome: "Sertanópolis",
              id_estado: 16
          },
          {
              codigo_ibge: 4126603,
              nome: "Siqueira Campos",
              id_estado: 16
          },
          {
              codigo_ibge: 4126652,
              nome: "Sulina",
              id_estado: 16
          },
          {
              codigo_ibge: 4126678,
              nome: "Tamarana",
              id_estado: 16
          },
          {
              codigo_ibge: 4126702,
              nome: "Tamboara",
              id_estado: 16
          },
          {
              codigo_ibge: 4126801,
              nome: "Tapejara",
              id_estado: 16
          },
          {
              codigo_ibge: 4126900,
              nome: "Tapira",
              id_estado: 16
          },
          {
              codigo_ibge: 4127007,
              nome: "Teixeira Soares",
              id_estado: 16
          },
          {
              codigo_ibge: 4127106,
              nome: "Telêmaco Borba",
              id_estado: 16
          },
          {
              codigo_ibge: 4127205,
              nome: "Terra Boa",
              id_estado: 16
          },
          {
              codigo_ibge: 4127304,
              nome: "Terra Rica",
              id_estado: 16
          },
          {
              codigo_ibge: 4127403,
              nome: "Terra Roxa",
              id_estado: 16
          },
          {
              codigo_ibge: 4127502,
              nome: "Tibagi",
              id_estado: 16
          },
          {
              codigo_ibge: 4127601,
              nome: "Tijucas do Sul",
              id_estado: 16
          },
          {
              codigo_ibge: 4127700,
              nome: "Toledo",
              id_estado: 16
          },
          {
              codigo_ibge: 4127809,
              nome: "Tomazina",
              id_estado: 16
          },
          {
              codigo_ibge: 4127858,
              nome: "Três Barras do Paraná",
              id_estado: 16
          },
          {
              codigo_ibge: 4127882,
              nome: "Tunas do Paraná",
              id_estado: 16
          },
          {
              codigo_ibge: 4127908,
              nome: "Tuneiras do Oeste",
              id_estado: 16
          },
          {
              codigo_ibge: 4127957,
              nome: "Tupãssi",
              id_estado: 16
          },
          {
              codigo_ibge: 4127965,
              nome: "Turvo",
              id_estado: 16
          },
          {
              codigo_ibge: 4128005,
              nome: "Ubiratã",
              id_estado: 16
          },
          {
              codigo_ibge: 4128104,
              nome: "Umuarama",
              id_estado: 16
          },
          {
              codigo_ibge: 4128203,
              nome: "União da Vitória",
              id_estado: 16
          },
          {
              codigo_ibge: 4128302,
              nome: "Uniflor",
              id_estado: 16
          },
          {
              codigo_ibge: 4128401,
              nome: "Uraí",
              id_estado: 16
          },
          {
              codigo_ibge: 4128500,
              nome: "Wenceslau Braz",
              id_estado: 16
          },
          {
              codigo_ibge: 4128534,
              nome: "Ventania",
              id_estado: 16
          },
          {
              codigo_ibge: 4128559,
              nome: "Vera Cruz do Oeste",
              id_estado: 16
          },
          {
              codigo_ibge: 4128609,
              nome: "Verê",
              id_estado: 16
          },
          {
              codigo_ibge: 4128625,
              nome: "Alto Paraíso",
              id_estado: 16
          },
          {
              codigo_ibge: 4128633,
              nome: "Doutor Ulysses",
              id_estado: 16
          },
          {
              codigo_ibge: 4128658,
              nome: "Virmond",
              id_estado: 16
          },
          {
              codigo_ibge: 4128708,
              nome: "Vitorino",
              id_estado: 16
          },
          {
              codigo_ibge: 4128807,
              nome: "Xambrê",
              id_estado: 16
          },
          {
              codigo_ibge: 4200051,
              nome: "Abdon Batista",
              id_estado: 24
          },
          {
              codigo_ibge: 4200101,
              nome: "Abelardo Luz",
              id_estado: 24
          },
          {
              codigo_ibge: 4200200,
              nome: "Agrolândia",
              id_estado: 24
          },
          {
              codigo_ibge: 4200309,
              nome: "Agronômica",
              id_estado: 24
          },
          {
              codigo_ibge: 4200408,
              nome: "Água Doce",
              id_estado: 24
          },
          {
              codigo_ibge: 4200507,
              nome: "Águas de Chapecó",
              id_estado: 24
          },
          {
              codigo_ibge: 4200556,
              nome: "Águas Frias",
              id_estado: 24
          },
          {
              codigo_ibge: 4200606,
              nome: "Águas Mornas",
              id_estado: 24
          },
          {
              codigo_ibge: 4200705,
              nome: "Alfredo Wagner",
              id_estado: 24
          },
          {
              codigo_ibge: 4200754,
              nome: "Alto Bela Vista",
              id_estado: 24
          },
          {
              codigo_ibge: 4200804,
              nome: "Anchieta",
              id_estado: 24
          },
          {
              codigo_ibge: 4200903,
              nome: "Angelina",
              id_estado: 24
          },
          {
              codigo_ibge: 4201000,
              nome: "Anita Garibaldi",
              id_estado: 24
          },
          {
              codigo_ibge: 4201109,
              nome: "Anitápolis",
              id_estado: 24
          },
          {
              codigo_ibge: 4201208,
              nome: "Antônio Carlos",
              id_estado: 24
          },
          {
              codigo_ibge: 4201257,
              nome: "Apiúna",
              id_estado: 24
          },
          {
              codigo_ibge: 4201273,
              nome: "Arabutã",
              id_estado: 24
          },
          {
              codigo_ibge: 4201307,
              nome: "Araquari",
              id_estado: 24
          },
          {
              codigo_ibge: 4201406,
              nome: "Araranguá",
              id_estado: 24
          },
          {
              codigo_ibge: 4201505,
              nome: "Armazém",
              id_estado: 24
          },
          {
              codigo_ibge: 4201604,
              nome: "Arroio Trinta",
              id_estado: 24
          },
          {
              codigo_ibge: 4201653,
              nome: "Arvoredo",
              id_estado: 24
          },
          {
              codigo_ibge: 4201703,
              nome: "Ascurra",
              id_estado: 24
          },
          {
              codigo_ibge: 4201802,
              nome: "Atalanta",
              id_estado: 24
          },
          {
              codigo_ibge: 4201901,
              nome: "Aurora",
              id_estado: 24
          },
          {
              codigo_ibge: 4201950,
              nome: "Balneário Arroio do Silva",
              id_estado: 24
          },
          {
              codigo_ibge: 4202008,
              nome: "Balneário Camboriú",
              id_estado: 24
          },
          {
              codigo_ibge: 4202057,
              nome: "Balneário Barra do Sul",
              id_estado: 24
          },
          {
              codigo_ibge: 4202073,
              nome: "Balneário Gaivota",
              id_estado: 24
          },
          {
              codigo_ibge: 4202081,
              nome: "Bandeirante",
              id_estado: 24
          },
          {
              codigo_ibge: 4202099,
              nome: "Barra Bonita",
              id_estado: 24
          },
          {
              codigo_ibge: 4202107,
              nome: "Barra Velha",
              id_estado: 24
          },
          {
              codigo_ibge: 4202131,
              nome: "Bela Vista do Toldo",
              id_estado: 24
          },
          {
              codigo_ibge: 4202156,
              nome: "Belmonte",
              id_estado: 24
          },
          {
              codigo_ibge: 4202206,
              nome: "Benedito Novo",
              id_estado: 24
          },
          {
              codigo_ibge: 4202305,
              nome: "Biguaçu",
              id_estado: 24
          },
          {
              codigo_ibge: 4202404,
              nome: "Blumenau",
              id_estado: 24
          },
          {
              codigo_ibge: 4202438,
              nome: "Bocaina do Sul",
              id_estado: 24
          },
          {
              codigo_ibge: 4202453,
              nome: "Bombinhas",
              id_estado: 24
          },
          {
              codigo_ibge: 4202503,
              nome: "Bom Jardim da Serra",
              id_estado: 24
          },
          {
              codigo_ibge: 4202537,
              nome: "Bom Jesus",
              id_estado: 24
          },
          {
              codigo_ibge: 4202578,
              nome: "Bom Jesus do Oeste",
              id_estado: 24
          },
          {
              codigo_ibge: 4202602,
              nome: "Bom Retiro",
              id_estado: 24
          },
          {
              codigo_ibge: 4202701,
              nome: "Botuverá",
              id_estado: 24
          },
          {
              codigo_ibge: 4202800,
              nome: "Braço do Norte",
              id_estado: 24
          },
          {
              codigo_ibge: 4202859,
              nome: "Braço do Trombudo",
              id_estado: 24
          },
          {
              codigo_ibge: 4202875,
              nome: "Brunópolis",
              id_estado: 24
          },
          {
              codigo_ibge: 4202909,
              nome: "Brusque",
              id_estado: 24
          },
          {
              codigo_ibge: 4203006,
              nome: "Caçador",
              id_estado: 24
          },
          {
              codigo_ibge: 4203105,
              nome: "Caibi",
              id_estado: 24
          },
          {
              codigo_ibge: 4203154,
              nome: "Calmon",
              id_estado: 24
          },
          {
              codigo_ibge: 4203204,
              nome: "Camboriú",
              id_estado: 24
          },
          {
              codigo_ibge: 4203253,
              nome: "Capão Alto",
              id_estado: 24
          },
          {
              codigo_ibge: 4203303,
              nome: "Campo Alegre",
              id_estado: 24
          },
          {
              codigo_ibge: 4203402,
              nome: "Campo Belo do Sul",
              id_estado: 24
          },
          {
              codigo_ibge: 4203501,
              nome: "Campo Erê",
              id_estado: 24
          },
          {
              codigo_ibge: 4203600,
              nome: "Campos Novos",
              id_estado: 24
          },
          {
              codigo_ibge: 4203709,
              nome: "Canelinha",
              id_estado: 24
          },
          {
              codigo_ibge: 4203808,
              nome: "Canoinhas",
              id_estado: 24
          },
          {
              codigo_ibge: 4203907,
              nome: "Capinzal",
              id_estado: 24
          },
          {
              codigo_ibge: 4203956,
              nome: "Capivari de Baixo",
              id_estado: 24
          },
          {
              codigo_ibge: 4204004,
              nome: "Catanduvas",
              id_estado: 24
          },
          {
              codigo_ibge: 4204103,
              nome: "Caxambu do Sul",
              id_estado: 24
          },
          {
              codigo_ibge: 4204152,
              nome: "Celso Ramos",
              id_estado: 24
          },
          {
              codigo_ibge: 4204178,
              nome: "Cerro Negro",
              id_estado: 24
          },
          {
              codigo_ibge: 4204194,
              nome: "Chapadão do Lageado",
              id_estado: 24
          },
          {
              codigo_ibge: 4204202,
              nome: "Chapecó",
              id_estado: 24
          },
          {
              codigo_ibge: 4204251,
              nome: "Cocal do Sul",
              id_estado: 24
          },
          {
              codigo_ibge: 4204301,
              nome: "Concórdia",
              id_estado: 24
          },
          {
              codigo_ibge: 4204350,
              nome: "Cordilheira Alta",
              id_estado: 24
          },
          {
              codigo_ibge: 4204400,
              nome: "Coronel Freitas",
              id_estado: 24
          },
          {
              codigo_ibge: 4204459,
              nome: "Coronel Martins",
              id_estado: 24
          },
          {
              codigo_ibge: 4204509,
              nome: "Corupá",
              id_estado: 24
          },
          {
              codigo_ibge: 4204558,
              nome: "Correia Pinto",
              id_estado: 24
          },
          {
              codigo_ibge: 4204608,
              nome: "Criciúma",
              id_estado: 24
          },
          {
              codigo_ibge: 4204707,
              nome: "Cunha Porã",
              id_estado: 24
          },
          {
              codigo_ibge: 4204756,
              nome: "Cunhataí",
              id_estado: 24
          },
          {
              codigo_ibge: 4204806,
              nome: "Curitibanos",
              id_estado: 24
          },
          {
              codigo_ibge: 4204905,
              nome: "Descanso",
              id_estado: 24
          },
          {
              codigo_ibge: 4205001,
              nome: "Dionísio Cerqueira",
              id_estado: 24
          },
          {
              codigo_ibge: 4205100,
              nome: "Dona Emma",
              id_estado: 24
          },
          {
              codigo_ibge: 4205159,
              nome: "Doutor Pedrinho",
              id_estado: 24
          },
          {
              codigo_ibge: 4205175,
              nome: "Entre Rios",
              id_estado: 24
          },
          {
              codigo_ibge: 4205191,
              nome: "Ermo",
              id_estado: 24
          },
          {
              codigo_ibge: 4205209,
              nome: "Erval Velho",
              id_estado: 24
          },
          {
              codigo_ibge: 4205308,
              nome: "Faxinal dos Guedes",
              id_estado: 24
          },
          {
              codigo_ibge: 4205357,
              nome: "Flor do Sertão",
              id_estado: 24
          },
          {
              codigo_ibge: 4205407,
              nome: "Florianópolis",
              id_estado: 24
          },
          {
              codigo_ibge: 4205431,
              nome: "Formosa do Sul",
              id_estado: 24
          },
          {
              codigo_ibge: 4205456,
              nome: "Forquilhinha",
              id_estado: 24
          },
          {
              codigo_ibge: 4205506,
              nome: "Fraiburgo",
              id_estado: 24
          },
          {
              codigo_ibge: 4205555,
              nome: "Frei Rogério",
              id_estado: 24
          },
          {
              codigo_ibge: 4205605,
              nome: "Galvão",
              id_estado: 24
          },
          {
              codigo_ibge: 4205704,
              nome: "Garopaba",
              id_estado: 24
          },
          {
              codigo_ibge: 4205803,
              nome: "Garuva",
              id_estado: 24
          },
          {
              codigo_ibge: 4205902,
              nome: "Gaspar",
              id_estado: 24
          },
          {
              codigo_ibge: 4206009,
              nome: "Governador Celso Ramos",
              id_estado: 24
          },
          {
              codigo_ibge: 4206108,
              nome: "Grão Pará",
              id_estado: 24
          },
          {
              codigo_ibge: 4206207,
              nome: "Gravatal",
              id_estado: 24
          },
          {
              codigo_ibge: 4206306,
              nome: "Guabiruba",
              id_estado: 24
          },
          {
              codigo_ibge: 4206405,
              nome: "Guaraciaba",
              id_estado: 24
          },
          {
              codigo_ibge: 4206504,
              nome: "Guaramirim",
              id_estado: 24
          },
          {
              codigo_ibge: 4206603,
              nome: "Guarujá do Sul",
              id_estado: 24
          },
          {
              codigo_ibge: 4206652,
              nome: "Guatambú",
              id_estado: 24
          },
          {
              codigo_ibge: 4206702,
              nome: "Herval D'Oeste",
              id_estado: 24
          },
          {
              codigo_ibge: 4206751,
              nome: "Ibiam",
              id_estado: 24
          },
          {
              codigo_ibge: 4206801,
              nome: "Ibicaré",
              id_estado: 24
          },
          {
              codigo_ibge: 4206900,
              nome: "Ibirama",
              id_estado: 24
          },
          {
              codigo_ibge: 4207007,
              nome: "Içara",
              id_estado: 24
          },
          {
              codigo_ibge: 4207106,
              nome: "Ilhota",
              id_estado: 24
          },
          {
              codigo_ibge: 4207205,
              nome: "Imaruí",
              id_estado: 24
          },
          {
              codigo_ibge: 4207304,
              nome: "Imbituba",
              id_estado: 24
          },
          {
              codigo_ibge: 4207403,
              nome: "Imbuia",
              id_estado: 24
          },
          {
              codigo_ibge: 4207502,
              nome: "Indaial",
              id_estado: 24
          },
          {
              codigo_ibge: 4207577,
              nome: "Iomerê",
              id_estado: 24
          },
          {
              codigo_ibge: 4207601,
              nome: "Ipira",
              id_estado: 24
          },
          {
              codigo_ibge: 4207650,
              nome: "Iporã do Oeste",
              id_estado: 24
          },
          {
              codigo_ibge: 4207684,
              nome: "Ipuaçu",
              id_estado: 24
          },
          {
              codigo_ibge: 4207700,
              nome: "Ipumirim",
              id_estado: 24
          },
          {
              codigo_ibge: 4207759,
              nome: "Iraceminha",
              id_estado: 24
          },
          {
              codigo_ibge: 4207809,
              nome: "Irani",
              id_estado: 24
          },
          {
              codigo_ibge: 4207858,
              nome: "Irati",
              id_estado: 24
          },
          {
              codigo_ibge: 4207908,
              nome: "Irineópolis",
              id_estado: 24
          },
          {
              codigo_ibge: 4208005,
              nome: "Itá",
              id_estado: 24
          },
          {
              codigo_ibge: 4208104,
              nome: "Itaiópolis",
              id_estado: 24
          },
          {
              codigo_ibge: 4208203,
              nome: "Itajaí",
              id_estado: 24
          },
          {
              codigo_ibge: 4208302,
              nome: "Itapema",
              id_estado: 24
          },
          {
              codigo_ibge: 4208401,
              nome: "Itapiranga",
              id_estado: 24
          },
          {
              codigo_ibge: 4208450,
              nome: "Itapoá",
              id_estado: 24
          },
          {
              codigo_ibge: 4208500,
              nome: "Ituporanga",
              id_estado: 24
          },
          {
              codigo_ibge: 4208609,
              nome: "Jaborá",
              id_estado: 24
          },
          {
              codigo_ibge: 4208708,
              nome: "Jacinto Machado",
              id_estado: 24
          },
          {
              codigo_ibge: 4208807,
              nome: "Jaguaruna",
              id_estado: 24
          },
          {
              codigo_ibge: 4208906,
              nome: "Jaraguá do Sul",
              id_estado: 24
          },
          {
              codigo_ibge: 4208955,
              nome: "Jardinópolis",
              id_estado: 24
          },
          {
              codigo_ibge: 4209003,
              nome: "Joaçaba",
              id_estado: 24
          },
          {
              codigo_ibge: 4209102,
              nome: "Joinville",
              id_estado: 24
          },
          {
              codigo_ibge: 4209151,
              nome: "José Boiteux",
              id_estado: 24
          },
          {
              codigo_ibge: 4209177,
              nome: "Jupiá",
              id_estado: 24
          },
          {
              codigo_ibge: 4209201,
              nome: "Lacerdópolis",
              id_estado: 24
          },
          {
              codigo_ibge: 4209300,
              nome: "Lages",
              id_estado: 24
          },
          {
              codigo_ibge: 4209409,
              nome: "Laguna",
              id_estado: 24
          },
          {
              codigo_ibge: 4209458,
              nome: "Lajeado Grande",
              id_estado: 24
          },
          {
              codigo_ibge: 4209508,
              nome: "Laurentino",
              id_estado: 24
          },
          {
              codigo_ibge: 4209607,
              nome: "Lauro Muller",
              id_estado: 24
          },
          {
              codigo_ibge: 4209706,
              nome: "Lebon Régis",
              id_estado: 24
          },
          {
              codigo_ibge: 4209805,
              nome: "Leoberto Leal",
              id_estado: 24
          },
          {
              codigo_ibge: 4209854,
              nome: "Lindóia do Sul",
              id_estado: 24
          },
          {
              codigo_ibge: 4209904,
              nome: "Lontras",
              id_estado: 24
          },
          {
              codigo_ibge: 4210001,
              nome: "Luiz Alves",
              id_estado: 24
          },
          {
              codigo_ibge: 4210035,
              nome: "Luzerna",
              id_estado: 24
          },
          {
              codigo_ibge: 4210050,
              nome: "Macieira",
              id_estado: 24
          },
          {
              codigo_ibge: 4210100,
              nome: "Mafra",
              id_estado: 24
          },
          {
              codigo_ibge: 4210209,
              nome: "Major Gercino",
              id_estado: 24
          },
          {
              codigo_ibge: 4210308,
              nome: "Major Vieira",
              id_estado: 24
          },
          {
              codigo_ibge: 4210407,
              nome: "Maracajá",
              id_estado: 24
          },
          {
              codigo_ibge: 4210506,
              nome: "Maravilha",
              id_estado: 24
          },
          {
              codigo_ibge: 4210555,
              nome: "Marema",
              id_estado: 24
          },
          {
              codigo_ibge: 4210605,
              nome: "Massaranduba",
              id_estado: 24
          },
          {
              codigo_ibge: 4210704,
              nome: "Matos Costa",
              id_estado: 24
          },
          {
              codigo_ibge: 4210803,
              nome: "Meleiro",
              id_estado: 24
          },
          {
              codigo_ibge: 4210852,
              nome: "Mirim Doce",
              id_estado: 24
          },
          {
              codigo_ibge: 4210902,
              nome: "Modelo",
              id_estado: 24
          },
          {
              codigo_ibge: 4211009,
              nome: "Mondaí",
              id_estado: 24
          },
          {
              codigo_ibge: 4211058,
              nome: "Monte Carlo",
              id_estado: 24
          },
          {
              codigo_ibge: 4211108,
              nome: "Monte Castelo",
              id_estado: 24
          },
          {
              codigo_ibge: 4211207,
              nome: "Morro da Fumaça",
              id_estado: 24
          },
          {
              codigo_ibge: 4211256,
              nome: "Morro Grande",
              id_estado: 24
          },
          {
              codigo_ibge: 4211306,
              nome: "Navegantes",
              id_estado: 24
          },
          {
              codigo_ibge: 4211405,
              nome: "Nova Erechim",
              id_estado: 24
          },
          {
              codigo_ibge: 4211454,
              nome: "Nova Itaberaba",
              id_estado: 24
          },
          {
              codigo_ibge: 4211504,
              nome: "Nova Trento",
              id_estado: 24
          },
          {
              codigo_ibge: 4211603,
              nome: "Nova Veneza",
              id_estado: 24
          },
          {
              codigo_ibge: 4211652,
              nome: "Novo Horizonte",
              id_estado: 24
          },
          {
              codigo_ibge: 4211702,
              nome: "Orleans",
              id_estado: 24
          },
          {
              codigo_ibge: 4211751,
              nome: "Otacílio Costa",
              id_estado: 24
          },
          {
              codigo_ibge: 4211801,
              nome: "Ouro",
              id_estado: 24
          },
          {
              codigo_ibge: 4211850,
              nome: "Ouro Verde",
              id_estado: 24
          },
          {
              codigo_ibge: 4211876,
              nome: "Paial",
              id_estado: 24
          },
          {
              codigo_ibge: 4211892,
              nome: "Painel",
              id_estado: 24
          },
          {
              codigo_ibge: 4211900,
              nome: "Palhoça",
              id_estado: 24
          },
          {
              codigo_ibge: 4212007,
              nome: "Palma Sola",
              id_estado: 24
          },
          {
              codigo_ibge: 4212056,
              nome: "Palmeira",
              id_estado: 24
          },
          {
              codigo_ibge: 4212106,
              nome: "Palmitos",
              id_estado: 24
          },
          {
              codigo_ibge: 4212205,
              nome: "Papanduva",
              id_estado: 24
          },
          {
              codigo_ibge: 4212239,
              nome: "Paraíso",
              id_estado: 24
          },
          {
              codigo_ibge: 4212254,
              nome: "Passo de Torres",
              id_estado: 24
          },
          {
              codigo_ibge: 4212270,
              nome: "Passos Maia",
              id_estado: 24
          },
          {
              codigo_ibge: 4212304,
              nome: "Paulo Lopes",
              id_estado: 24
          },
          {
              codigo_ibge: 4212403,
              nome: "Pedras Grandes",
              id_estado: 24
          },
          {
              codigo_ibge: 4212502,
              nome: "Penha",
              id_estado: 24
          },
          {
              codigo_ibge: 4212601,
              nome: "Peritiba",
              id_estado: 24
          },
          {
              codigo_ibge: 4212650,
              nome: "Pescaria Brava",
              id_estado: 24
          },
          {
              codigo_ibge: 4212700,
              nome: "Petrolândia",
              id_estado: 24
          },
          {
              codigo_ibge: 4212809,
              nome: "Balneário Piçarras",
              id_estado: 24
          },
          {
              codigo_ibge: 4212908,
              nome: "Pinhalzinho",
              id_estado: 24
          },
          {
              codigo_ibge: 4213005,
              nome: "Pinheiro Preto",
              id_estado: 24
          },
          {
              codigo_ibge: 4213104,
              nome: "Piratuba",
              id_estado: 24
          },
          {
              codigo_ibge: 4213153,
              nome: "Planalto Alegre",
              id_estado: 24
          },
          {
              codigo_ibge: 4213203,
              nome: "Pomerode",
              id_estado: 24
          },
          {
              codigo_ibge: 4213302,
              nome: "Ponte Alta",
              id_estado: 24
          },
          {
              codigo_ibge: 4213351,
              nome: "Ponte Alta do Norte",
              id_estado: 24
          },
          {
              codigo_ibge: 4213401,
              nome: "Ponte Serrada",
              id_estado: 24
          },
          {
              codigo_ibge: 4213500,
              nome: "Porto Belo",
              id_estado: 24
          },
          {
              codigo_ibge: 4213609,
              nome: "Porto União",
              id_estado: 24
          },
          {
              codigo_ibge: 4213708,
              nome: "Pouso Redondo",
              id_estado: 24
          },
          {
              codigo_ibge: 4213807,
              nome: "Praia Grande",
              id_estado: 24
          },
          {
              codigo_ibge: 4213906,
              nome: "Presidente Castello Branco",
              id_estado: 24
          },
          {
              codigo_ibge: 4214003,
              nome: "Presidente Getúlio",
              id_estado: 24
          },
          {
              codigo_ibge: 4214102,
              nome: "Presidente Nereu",
              id_estado: 24
          },
          {
              codigo_ibge: 4214151,
              nome: "Princesa",
              id_estado: 24
          },
          {
              codigo_ibge: 4214201,
              nome: "Quilombo",
              id_estado: 24
          },
          {
              codigo_ibge: 4214300,
              nome: "Rancho Queimado",
              id_estado: 24
          },
          {
              codigo_ibge: 4214409,
              nome: "Rio das Antas",
              id_estado: 24
          },
          {
              codigo_ibge: 4214508,
              nome: "Rio do Campo",
              id_estado: 24
          },
          {
              codigo_ibge: 4214607,
              nome: "Rio do Oeste",
              id_estado: 24
          },
          {
              codigo_ibge: 4214706,
              nome: "Rio dos Cedros",
              id_estado: 24
          },
          {
              codigo_ibge: 4214805,
              nome: "Rio do Sul",
              id_estado: 24
          },
          {
              codigo_ibge: 4214904,
              nome: "Rio Fortuna",
              id_estado: 24
          },
          {
              codigo_ibge: 4215000,
              nome: "Rio Negrinho",
              id_estado: 24
          },
          {
              codigo_ibge: 4215059,
              nome: "Rio Rufino",
              id_estado: 24
          },
          {
              codigo_ibge: 4215075,
              nome: "Riqueza",
              id_estado: 24
          },
          {
              codigo_ibge: 4215109,
              nome: "Rodeio",
              id_estado: 24
          },
          {
              codigo_ibge: 4215208,
              nome: "Romelândia",
              id_estado: 24
          },
          {
              codigo_ibge: 4215307,
              nome: "Salete",
              id_estado: 24
          },
          {
              codigo_ibge: 4215356,
              nome: "Saltinho",
              id_estado: 24
          },
          {
              codigo_ibge: 4215406,
              nome: "Salto Veloso",
              id_estado: 24
          },
          {
              codigo_ibge: 4215455,
              nome: "Sangão",
              id_estado: 24
          },
          {
              codigo_ibge: 4215505,
              nome: "Santa Cecília",
              id_estado: 24
          },
          {
              codigo_ibge: 4215554,
              nome: "Santa Helena",
              id_estado: 24
          },
          {
              codigo_ibge: 4215604,
              nome: "Santa Rosa de Lima",
              id_estado: 24
          },
          {
              codigo_ibge: 4215653,
              nome: "Santa Rosa do Sul",
              id_estado: 24
          },
          {
              codigo_ibge: 4215679,
              nome: "Santa Terezinha",
              id_estado: 24
          },
          {
              codigo_ibge: 4215687,
              nome: "Santa Terezinha do Progresso",
              id_estado: 24
          },
          {
              codigo_ibge: 4215695,
              nome: "Santiago do Sul",
              id_estado: 24
          },
          {
              codigo_ibge: 4215703,
              nome: "Santo Amaro da Imperatriz",
              id_estado: 24
          },
          {
              codigo_ibge: 4215752,
              nome: "São Bernardino",
              id_estado: 24
          },
          {
              codigo_ibge: 4215802,
              nome: "São Bento do Sul",
              id_estado: 24
          },
          {
              codigo_ibge: 4215901,
              nome: "São Bonifácio",
              id_estado: 24
          },
          {
              codigo_ibge: 4216008,
              nome: "São Carlos",
              id_estado: 24
          },
          {
              codigo_ibge: 4216057,
              nome: "São Cristovão do Sul",
              id_estado: 24
          },
          {
              codigo_ibge: 4216107,
              nome: "São Domingos",
              id_estado: 24
          },
          {
              codigo_ibge: 4216206,
              nome: "São Francisco do Sul",
              id_estado: 24
          },
          {
              codigo_ibge: 4216255,
              nome: "São João do Oeste",
              id_estado: 24
          },
          {
              codigo_ibge: 4216305,
              nome: "São João Batista",
              id_estado: 24
          },
          {
              codigo_ibge: 4216354,
              nome: "São João do Itaperiú",
              id_estado: 24
          },
          {
              codigo_ibge: 4216404,
              nome: "São João do Sul",
              id_estado: 24
          },
          {
              codigo_ibge: 4216503,
              nome: "São Joaquim",
              id_estado: 24
          },
          {
              codigo_ibge: 4216602,
              nome: "São José",
              id_estado: 24
          },
          {
              codigo_ibge: 4216701,
              nome: "São José do Cedro",
              id_estado: 24
          },
          {
              codigo_ibge: 4216800,
              nome: "São José do Cerrito",
              id_estado: 24
          },
          {
              codigo_ibge: 4216909,
              nome: "São Lourenço do Oeste",
              id_estado: 24
          },
          {
              codigo_ibge: 4217006,
              nome: "São Ludgero",
              id_estado: 24
          },
          {
              codigo_ibge: 4217105,
              nome: "São Martinho",
              id_estado: 24
          },
          {
              codigo_ibge: 4217154,
              nome: "São Miguel da Boa Vista",
              id_estado: 24
          },
          {
              codigo_ibge: 4217204,
              nome: "São Miguel do Oeste",
              id_estado: 24
          },
          {
              codigo_ibge: 4217253,
              nome: "São Pedro de Alcântara",
              id_estado: 24
          },
          {
              codigo_ibge: 4217303,
              nome: "Saudades",
              id_estado: 24
          },
          {
              codigo_ibge: 4217402,
              nome: "Schroeder",
              id_estado: 24
          },
          {
              codigo_ibge: 4217501,
              nome: "Seara",
              id_estado: 24
          },
          {
              codigo_ibge: 4217550,
              nome: "Serra Alta",
              id_estado: 24
          },
          {
              codigo_ibge: 4217600,
              nome: "Siderópolis",
              id_estado: 24
          },
          {
              codigo_ibge: 4217709,
              nome: "Sombrio",
              id_estado: 24
          },
          {
              codigo_ibge: 4217758,
              nome: "Sul Brasil",
              id_estado: 24
          },
          {
              codigo_ibge: 4217808,
              nome: "Taió",
              id_estado: 24
          },
          {
              codigo_ibge: 4217907,
              nome: "Tangará",
              id_estado: 24
          },
          {
              codigo_ibge: 4217956,
              nome: "Tigrinhos",
              id_estado: 24
          },
          {
              codigo_ibge: 4218004,
              nome: "Tijucas",
              id_estado: 24
          },
          {
              codigo_ibge: 4218103,
              nome: "Timbé do Sul",
              id_estado: 24
          },
          {
              codigo_ibge: 4218202,
              nome: "Timbó",
              id_estado: 24
          },
          {
              codigo_ibge: 4218251,
              nome: "Timbó Grande",
              id_estado: 24
          },
          {
              codigo_ibge: 4218301,
              nome: "Três Barras",
              id_estado: 24
          },
          {
              codigo_ibge: 4218350,
              nome: "Treviso",
              id_estado: 24
          },
          {
              codigo_ibge: 4218400,
              nome: "Treze de Maio",
              id_estado: 24
          },
          {
              codigo_ibge: 4218509,
              nome: "Treze Tílias",
              id_estado: 24
          },
          {
              codigo_ibge: 4218608,
              nome: "Trombudo Central",
              id_estado: 24
          },
          {
              codigo_ibge: 4218707,
              nome: "Tubarão",
              id_estado: 24
          },
          {
              codigo_ibge: 4218756,
              nome: "Tunápolis",
              id_estado: 24
          },
          {
              codigo_ibge: 4218806,
              nome: "Turvo",
              id_estado: 24
          },
          {
              codigo_ibge: 4218855,
              nome: "União do Oeste",
              id_estado: 24
          },
          {
              codigo_ibge: 4218905,
              nome: "Urubici",
              id_estado: 24
          },
          {
              codigo_ibge: 4218954,
              nome: "Urupema",
              id_estado: 24
          },
          {
              codigo_ibge: 4219002,
              nome: "Urussanga",
              id_estado: 24
          },
          {
              codigo_ibge: 4219101,
              nome: "Vargeão",
              id_estado: 24
          },
          {
              codigo_ibge: 4219150,
              nome: "Vargem",
              id_estado: 24
          },
          {
              codigo_ibge: 4219176,
              nome: "Vargem Bonita",
              id_estado: 24
          },
          {
              codigo_ibge: 4219200,
              nome: "Vidal Ramos",
              id_estado: 24
          },
          {
              codigo_ibge: 4219309,
              nome: "Videira",
              id_estado: 24
          },
          {
              codigo_ibge: 4219358,
              nome: "Vitor Meireles",
              id_estado: 24
          },
          {
              codigo_ibge: 4219408,
              nome: "Witmarsum",
              id_estado: 24
          },
          {
              codigo_ibge: 4219507,
              nome: "Xanxerê",
              id_estado: 24
          },
          {
              codigo_ibge: 4219606,
              nome: "Xavantina",
              id_estado: 24
          },
          {
              codigo_ibge: 4219705,
              nome: "Xaxim",
              id_estado: 24
          },
          {
              codigo_ibge: 4219853,
              nome: "Zortéa",
              id_estado: 24
          },
          {
              codigo_ibge: 4220000,
              nome: "Balneário Rincão",
              id_estado: 24
          },
          {
              codigo_ibge: 4300034,
              nome: "Aceguá",
              id_estado: 21
          },
          {
              codigo_ibge: 4300059,
              nome: "Água Santa",
              id_estado: 21
          },
          {
              codigo_ibge: 4300109,
              nome: "Agudo",
              id_estado: 21
          },
          {
              codigo_ibge: 4300208,
              nome: "Ajuricaba",
              id_estado: 21
          },
          {
              codigo_ibge: 4300307,
              nome: "Alecrim",
              id_estado: 21
          },
          {
              codigo_ibge: 4300406,
              nome: "Alegrete",
              id_estado: 21
          },
          {
              codigo_ibge: 4300455,
              nome: "Alegria",
              id_estado: 21
          },
          {
              codigo_ibge: 4300471,
              nome: "Almirante Tamandaré do Sul",
              id_estado: 21
          },
          {
              codigo_ibge: 4300505,
              nome: "Alpestre",
              id_estado: 21
          },
          {
              codigo_ibge: 4300554,
              nome: "Alto Alegre",
              id_estado: 21
          },
          {
              codigo_ibge: 4300570,
              nome: "Alto Feliz",
              id_estado: 21
          },
          {
              codigo_ibge: 4300604,
              nome: "Alvorada",
              id_estado: 21
          },
          {
              codigo_ibge: 4300638,
              nome: "Amaral Ferrador",
              id_estado: 21
          },
          {
              codigo_ibge: 4300646,
              nome: "Ametista do Sul",
              id_estado: 21
          },
          {
              codigo_ibge: 4300661,
              nome: "André da Rocha",
              id_estado: 21
          },
          {
              codigo_ibge: 4300703,
              nome: "Anta Gorda",
              id_estado: 21
          },
          {
              codigo_ibge: 4300802,
              nome: "Antônio Prado",
              id_estado: 21
          },
          {
              codigo_ibge: 4300851,
              nome: "Arambaré",
              id_estado: 21
          },
          {
              codigo_ibge: 4300877,
              nome: "Araricá",
              id_estado: 21
          },
          {
              codigo_ibge: 4300901,
              nome: "Aratiba",
              id_estado: 21
          },
          {
              codigo_ibge: 4301008,
              nome: "Arroio do Meio",
              id_estado: 21
          },
          {
              codigo_ibge: 4301057,
              nome: "Arroio do Sal",
              id_estado: 21
          },
          {
              codigo_ibge: 4301073,
              nome: "Arroio do Padre",
              id_estado: 21
          },
          {
              codigo_ibge: 4301107,
              nome: "Arroio dos Ratos",
              id_estado: 21
          },
          {
              codigo_ibge: 4301206,
              nome: "Arroio do Tigre",
              id_estado: 21
          },
          {
              codigo_ibge: 4301305,
              nome: "Arroio Grande",
              id_estado: 21
          },
          {
              codigo_ibge: 4301404,
              nome: "Arvorezinha",
              id_estado: 21
          },
          {
              codigo_ibge: 4301503,
              nome: "Augusto Pestana",
              id_estado: 21
          },
          {
              codigo_ibge: 4301552,
              nome: "Áurea",
              id_estado: 21
          },
          {
              codigo_ibge: 4301602,
              nome: "Bagé",
              id_estado: 21
          },
          {
              codigo_ibge: 4301636,
              nome: "Balneário Pinhal",
              id_estado: 21
          },
          {
              codigo_ibge: 4301651,
              nome: "Barão",
              id_estado: 21
          },
          {
              codigo_ibge: 4301701,
              nome: "Barão de Cotegipe",
              id_estado: 21
          },
          {
              codigo_ibge: 4301750,
              nome: "Barão do Triunfo",
              id_estado: 21
          },
          {
              codigo_ibge: 4301800,
              nome: "Barracão",
              id_estado: 21
          },
          {
              codigo_ibge: 4301859,
              nome: "Barra do Guarita",
              id_estado: 21
          },
          {
              codigo_ibge: 4301875,
              nome: "Barra do Quaraí",
              id_estado: 21
          },
          {
              codigo_ibge: 4301909,
              nome: "Barra do Ribeiro",
              id_estado: 21
          },
          {
              codigo_ibge: 4301925,
              nome: "Barra do Rio Azul",
              id_estado: 21
          },
          {
              codigo_ibge: 4301958,
              nome: "Barra Funda",
              id_estado: 21
          },
          {
              codigo_ibge: 4302006,
              nome: "Barros Cassal",
              id_estado: 21
          },
          {
              codigo_ibge: 4302055,
              nome: "Benjamin Constant do Sul",
              id_estado: 21
          },
          {
              codigo_ibge: 4302105,
              nome: "Bento Gonçalves",
              id_estado: 21
          },
          {
              codigo_ibge: 4302154,
              nome: "Boa Vista das Missões",
              id_estado: 21
          },
          {
              codigo_ibge: 4302204,
              nome: "Boa Vista do Buricá",
              id_estado: 21
          },
          {
              codigo_ibge: 4302220,
              nome: "Boa Vista do Cadeado",
              id_estado: 21
          },
          {
              codigo_ibge: 4302238,
              nome: "Boa Vista do Incra",
              id_estado: 21
          },
          {
              codigo_ibge: 4302253,
              nome: "Boa Vista do Sul",
              id_estado: 21
          },
          {
              codigo_ibge: 4302303,
              nome: "Bom Jesus",
              id_estado: 21
          },
          {
              codigo_ibge: 4302352,
              nome: "Bom Princípio",
              id_estado: 21
          },
          {
              codigo_ibge: 4302378,
              nome: "Bom Progresso",
              id_estado: 21
          },
          {
              codigo_ibge: 4302402,
              nome: "Bom Retiro do Sul",
              id_estado: 21
          },
          {
              codigo_ibge: 4302451,
              nome: "Boqueirão do Leão",
              id_estado: 21
          },
          {
              codigo_ibge: 4302501,
              nome: "Bossoroca",
              id_estado: 21
          },
          {
              codigo_ibge: 4302584,
              nome: "Bozano",
              id_estado: 21
          },
          {
              codigo_ibge: 4302600,
              nome: "Braga",
              id_estado: 21
          },
          {
              codigo_ibge: 4302659,
              nome: "Brochier",
              id_estado: 21
          },
          {
              codigo_ibge: 4302709,
              nome: "Butiá",
              id_estado: 21
          },
          {
              codigo_ibge: 4302808,
              nome: "Caçapava do Sul",
              id_estado: 21
          },
          {
              codigo_ibge: 4302907,
              nome: "Cacequi",
              id_estado: 21
          },
          {
              codigo_ibge: 4303004,
              nome: "Cachoeira do Sul",
              id_estado: 21
          },
          {
              codigo_ibge: 4303103,
              nome: "Cachoeirinha",
              id_estado: 21
          },
          {
              codigo_ibge: 4303202,
              nome: "Cacique Doble",
              id_estado: 21
          },
          {
              codigo_ibge: 4303301,
              nome: "Caibaté",
              id_estado: 21
          },
          {
              codigo_ibge: 4303400,
              nome: "Caiçara",
              id_estado: 21
          },
          {
              codigo_ibge: 4303509,
              nome: "Camaquã",
              id_estado: 21
          },
          {
              codigo_ibge: 4303558,
              nome: "Camargo",
              id_estado: 21
          },
          {
              codigo_ibge: 4303608,
              nome: "Cambará do Sul",
              id_estado: 21
          },
          {
              codigo_ibge: 4303673,
              nome: "Campestre da Serra",
              id_estado: 21
          },
          {
              codigo_ibge: 4303707,
              nome: "Campina das Missões",
              id_estado: 21
          },
          {
              codigo_ibge: 4303806,
              nome: "Campinas do Sul",
              id_estado: 21
          },
          {
              codigo_ibge: 4303905,
              nome: "Campo Bom",
              id_estado: 21
          },
          {
              codigo_ibge: 4304002,
              nome: "Campo Novo",
              id_estado: 21
          },
          {
              codigo_ibge: 4304101,
              nome: "Campos Borges",
              id_estado: 21
          },
          {
              codigo_ibge: 4304200,
              nome: "Candelária",
              id_estado: 21
          },
          {
              codigo_ibge: 4304309,
              nome: "Cândido Godói",
              id_estado: 21
          },
          {
              codigo_ibge: 4304358,
              nome: "Candiota",
              id_estado: 21
          },
          {
              codigo_ibge: 4304408,
              nome: "Canela",
              id_estado: 21
          },
          {
              codigo_ibge: 4304507,
              nome: "Canguçu",
              id_estado: 21
          },
          {
              codigo_ibge: 4304606,
              nome: "Canoas",
              id_estado: 21
          },
          {
              codigo_ibge: 4304614,
              nome: "Canudos do Vale",
              id_estado: 21
          },
          {
              codigo_ibge: 4304622,
              nome: "Capão Bonito do Sul",
              id_estado: 21
          },
          {
              codigo_ibge: 4304630,
              nome: "Capão da Canoa",
              id_estado: 21
          },
          {
              codigo_ibge: 4304655,
              nome: "Capão do Cipó",
              id_estado: 21
          },
          {
              codigo_ibge: 4304663,
              nome: "Capão do Leão",
              id_estado: 21
          },
          {
              codigo_ibge: 4304671,
              nome: "Capivari do Sul",
              id_estado: 21
          },
          {
              codigo_ibge: 4304689,
              nome: "Capela de Santana",
              id_estado: 21
          },
          {
              codigo_ibge: 4304697,
              nome: "Capitão",
              id_estado: 21
          },
          {
              codigo_ibge: 4304705,
              nome: "Carazinho",
              id_estado: 21
          },
          {
              codigo_ibge: 4304713,
              nome: "Caraá",
              id_estado: 21
          },
          {
              codigo_ibge: 4304804,
              nome: "Carlos Barbosa",
              id_estado: 21
          },
          {
              codigo_ibge: 4304853,
              nome: "Carlos Gomes",
              id_estado: 21
          },
          {
              codigo_ibge: 4304903,
              nome: "Casca",
              id_estado: 21
          },
          {
              codigo_ibge: 4304952,
              nome: "Caseiros",
              id_estado: 21
          },
          {
              codigo_ibge: 4305009,
              nome: "Catuípe",
              id_estado: 21
          },
          {
              codigo_ibge: 4305108,
              nome: "Caxias do Sul",
              id_estado: 21
          },
          {
              codigo_ibge: 4305116,
              nome: "Centenário",
              id_estado: 21
          },
          {
              codigo_ibge: 4305124,
              nome: "Cerrito",
              id_estado: 21
          },
          {
              codigo_ibge: 4305132,
              nome: "Cerro Branco",
              id_estado: 21
          },
          {
              codigo_ibge: 4305157,
              nome: "Cerro Grande",
              id_estado: 21
          },
          {
              codigo_ibge: 4305173,
              nome: "Cerro Grande do Sul",
              id_estado: 21
          },
          {
              codigo_ibge: 4305207,
              nome: "Cerro Largo",
              id_estado: 21
          },
          {
              codigo_ibge: 4305306,
              nome: "Chapada",
              id_estado: 21
          },
          {
              codigo_ibge: 4305355,
              nome: "Charqueadas",
              id_estado: 21
          },
          {
              codigo_ibge: 4305371,
              nome: "Charrua",
              id_estado: 21
          },
          {
              codigo_ibge: 4305405,
              nome: "Chiapetta",
              id_estado: 21
          },
          {
              codigo_ibge: 4305439,
              nome: "Chuí",
              id_estado: 21
          },
          {
              codigo_ibge: 4305447,
              nome: "Chuvisca",
              id_estado: 21
          },
          {
              codigo_ibge: 4305454,
              nome: "Cidreira",
              id_estado: 21
          },
          {
              codigo_ibge: 4305504,
              nome: "Ciríaco",
              id_estado: 21
          },
          {
              codigo_ibge: 4305587,
              nome: "Colinas",
              id_estado: 21
          },
          {
              codigo_ibge: 4305603,
              nome: "Colorado",
              id_estado: 21
          },
          {
              codigo_ibge: 4305702,
              nome: "Condor",
              id_estado: 21
          },
          {
              codigo_ibge: 4305801,
              nome: "Constantina",
              id_estado: 21
          },
          {
              codigo_ibge: 4305835,
              nome: "Coqueiro Baixo",
              id_estado: 21
          },
          {
              codigo_ibge: 4305850,
              nome: "Coqueiros do Sul",
              id_estado: 21
          },
          {
              codigo_ibge: 4305871,
              nome: "Coronel Barros",
              id_estado: 21
          },
          {
              codigo_ibge: 4305900,
              nome: "Coronel Bicaco",
              id_estado: 21
          },
          {
              codigo_ibge: 4305934,
              nome: "Coronel Pilar",
              id_estado: 21
          },
          {
              codigo_ibge: 4305959,
              nome: "Cotiporã",
              id_estado: 21
          },
          {
              codigo_ibge: 4305975,
              nome: "Coxilha",
              id_estado: 21
          },
          {
              codigo_ibge: 4306007,
              nome: "Crissiumal",
              id_estado: 21
          },
          {
              codigo_ibge: 4306056,
              nome: "Cristal",
              id_estado: 21
          },
          {
              codigo_ibge: 4306072,
              nome: "Cristal do Sul",
              id_estado: 21
          },
          {
              codigo_ibge: 4306106,
              nome: "Cruz Alta",
              id_estado: 21
          },
          {
              codigo_ibge: 4306130,
              nome: "Cruzaltense",
              id_estado: 21
          },
          {
              codigo_ibge: 4306205,
              nome: "Cruzeiro do Sul",
              id_estado: 21
          },
          {
              codigo_ibge: 4306304,
              nome: "David Canabarro",
              id_estado: 21
          },
          {
              codigo_ibge: 4306320,
              nome: "Derrubadas",
              id_estado: 21
          },
          {
              codigo_ibge: 4306353,
              nome: "Dezesseis de Novembro",
              id_estado: 21
          },
          {
              codigo_ibge: 4306379,
              nome: "Dilermando de Aguiar",
              id_estado: 21
          },
          {
              codigo_ibge: 4306403,
              nome: "Dois Irmãos",
              id_estado: 21
          },
          {
              codigo_ibge: 4306429,
              nome: "Dois Irmãos das Missões",
              id_estado: 21
          },
          {
              codigo_ibge: 4306452,
              nome: "Dois Lajeados",
              id_estado: 21
          },
          {
              codigo_ibge: 4306502,
              nome: "Dom Feliciano",
              id_estado: 21
          },
          {
              codigo_ibge: 4306551,
              nome: "Dom Pedro de Alcântara",
              id_estado: 21
          },
          {
              codigo_ibge: 4306601,
              nome: "Dom Pedrito",
              id_estado: 21
          },
          {
              codigo_ibge: 4306700,
              nome: "Dona Francisca",
              id_estado: 21
          },
          {
              codigo_ibge: 4306734,
              nome: "Doutor Maurício Cardoso",
              id_estado: 21
          },
          {
              codigo_ibge: 4306759,
              nome: "Doutor Ricardo",
              id_estado: 21
          },
          {
              codigo_ibge: 4306767,
              nome: "Eldorado do Sul",
              id_estado: 21
          },
          {
              codigo_ibge: 4306809,
              nome: "Encantado",
              id_estado: 21
          },
          {
              codigo_ibge: 4306908,
              nome: "Encruzilhada do Sul",
              id_estado: 21
          },
          {
              codigo_ibge: 4306924,
              nome: "Engenho Velho",
              id_estado: 21
          },
          {
              codigo_ibge: 4306932,
              nome: "Entre-Ijuís",
              id_estado: 21
          },
          {
              codigo_ibge: 4306957,
              nome: "Entre Rios do Sul",
              id_estado: 21
          },
          {
              codigo_ibge: 4306973,
              nome: "Erebango",
              id_estado: 21
          },
          {
              codigo_ibge: 4307005,
              nome: "Erechim",
              id_estado: 21
          },
          {
              codigo_ibge: 4307054,
              nome: "Ernestina",
              id_estado: 21
          },
          {
              codigo_ibge: 4307104,
              nome: "Herval",
              id_estado: 21
          },
          {
              codigo_ibge: 4307203,
              nome: "Erval Grande",
              id_estado: 21
          },
          {
              codigo_ibge: 4307302,
              nome: "Erval Seco",
              id_estado: 21
          },
          {
              codigo_ibge: 4307401,
              nome: "Esmeralda",
              id_estado: 21
          },
          {
              codigo_ibge: 4307450,
              nome: "Esperança do Sul",
              id_estado: 21
          },
          {
              codigo_ibge: 4307500,
              nome: "Espumoso",
              id_estado: 21
          },
          {
              codigo_ibge: 4307559,
              nome: "Estação",
              id_estado: 21
          },
          {
              codigo_ibge: 4307609,
              nome: "Estância Velha",
              id_estado: 21
          },
          {
              codigo_ibge: 4307708,
              nome: "Esteio",
              id_estado: 21
          },
          {
              codigo_ibge: 4307807,
              nome: "Estrela",
              id_estado: 21
          },
          {
              codigo_ibge: 4307815,
              nome: "Estrela Velha",
              id_estado: 21
          },
          {
              codigo_ibge: 4307831,
              nome: "Eugênio de Castro",
              id_estado: 21
          },
          {
              codigo_ibge: 4307864,
              nome: "Fagundes Varela",
              id_estado: 21
          },
          {
              codigo_ibge: 4307906,
              nome: "Farroupilha",
              id_estado: 21
          },
          {
              codigo_ibge: 4308003,
              nome: "Faxinal do Soturno",
              id_estado: 21
          },
          {
              codigo_ibge: 4308052,
              nome: "Faxinalzinho",
              id_estado: 21
          },
          {
              codigo_ibge: 4308078,
              nome: "Fazenda Vilanova",
              id_estado: 21
          },
          {
              codigo_ibge: 4308102,
              nome: "Feliz",
              id_estado: 21
          },
          {
              codigo_ibge: 4308201,
              nome: "Flores da Cunha",
              id_estado: 21
          },
          {
              codigo_ibge: 4308250,
              nome: "Floriano Peixoto",
              id_estado: 21
          },
          {
              codigo_ibge: 4308300,
              nome: "Fontoura Xavier",
              id_estado: 21
          },
          {
              codigo_ibge: 4308409,
              nome: "Formigueiro",
              id_estado: 21
          },
          {
              codigo_ibge: 4308433,
              nome: "Forquetinha",
              id_estado: 21
          },
          {
              codigo_ibge: 4308458,
              nome: "Fortaleza dos Valos",
              id_estado: 21
          },
          {
              codigo_ibge: 4308508,
              nome: "Frederico Westphalen",
              id_estado: 21
          },
          {
              codigo_ibge: 4308607,
              nome: "Garibaldi",
              id_estado: 21
          },
          {
              codigo_ibge: 4308656,
              nome: "Garruchos",
              id_estado: 21
          },
          {
              codigo_ibge: 4308706,
              nome: "Gaurama",
              id_estado: 21
          },
          {
              codigo_ibge: 4308805,
              nome: "General Câmara",
              id_estado: 21
          },
          {
              codigo_ibge: 4308854,
              nome: "Gentil",
              id_estado: 21
          },
          {
              codigo_ibge: 4308904,
              nome: "Getúlio Vargas",
              id_estado: 21
          },
          {
              codigo_ibge: 4309001,
              nome: "Giruá",
              id_estado: 21
          },
          {
              codigo_ibge: 4309050,
              nome: "Glorinha",
              id_estado: 21
          },
          {
              codigo_ibge: 4309100,
              nome: "Gramado",
              id_estado: 21
          },
          {
              codigo_ibge: 4309126,
              nome: "Gramado dos Loureiros",
              id_estado: 21
          },
          {
              codigo_ibge: 4309159,
              nome: "Gramado Xavier",
              id_estado: 21
          },
          {
              codigo_ibge: 4309209,
              nome: "Gravataí",
              id_estado: 21
          },
          {
              codigo_ibge: 4309258,
              nome: "Guabiju",
              id_estado: 21
          },
          {
              codigo_ibge: 4309308,
              nome: "Guaíba",
              id_estado: 21
          },
          {
              codigo_ibge: 4309407,
              nome: "Guaporé",
              id_estado: 21
          },
          {
              codigo_ibge: 4309506,
              nome: "Guarani das Missões",
              id_estado: 21
          },
          {
              codigo_ibge: 4309555,
              nome: "Harmonia",
              id_estado: 21
          },
          {
              codigo_ibge: 4309571,
              nome: "Herveiras",
              id_estado: 21
          },
          {
              codigo_ibge: 4309605,
              nome: "Horizontina",
              id_estado: 21
          },
          {
              codigo_ibge: 4309654,
              nome: "Hulha Negra",
              id_estado: 21
          },
          {
              codigo_ibge: 4309704,
              nome: "Humaitá",
              id_estado: 21
          },
          {
              codigo_ibge: 4309753,
              nome: "Ibarama",
              id_estado: 21
          },
          {
              codigo_ibge: 4309803,
              nome: "Ibiaçá",
              id_estado: 21
          },
          {
              codigo_ibge: 4309902,
              nome: "Ibiraiaras",
              id_estado: 21
          },
          {
              codigo_ibge: 4309951,
              nome: "Ibirapuitã",
              id_estado: 21
          },
          {
              codigo_ibge: 4310009,
              nome: "Ibirubá",
              id_estado: 21
          },
          {
              codigo_ibge: 4310108,
              nome: "Igrejinha",
              id_estado: 21
          },
          {
              codigo_ibge: 4310207,
              nome: "Ijuí",
              id_estado: 21
          },
          {
              codigo_ibge: 4310306,
              nome: "Ilópolis",
              id_estado: 21
          },
          {
              codigo_ibge: 4310330,
              nome: "Imbé",
              id_estado: 21
          },
          {
              codigo_ibge: 4310363,
              nome: "Imigrante",
              id_estado: 21
          },
          {
              codigo_ibge: 4310405,
              nome: "Independência",
              id_estado: 21
          },
          {
              codigo_ibge: 4310413,
              nome: "Inhacorá",
              id_estado: 21
          },
          {
              codigo_ibge: 4310439,
              nome: "Ipê",
              id_estado: 21
          },
          {
              codigo_ibge: 4310462,
              nome: "Ipiranga do Sul",
              id_estado: 21
          },
          {
              codigo_ibge: 4310504,
              nome: "Iraí",
              id_estado: 21
          },
          {
              codigo_ibge: 4310538,
              nome: "Itaara",
              id_estado: 21
          },
          {
              codigo_ibge: 4310553,
              nome: "Itacurubi",
              id_estado: 21
          },
          {
              codigo_ibge: 4310579,
              nome: "Itapuca",
              id_estado: 21
          },
          {
              codigo_ibge: 4310603,
              nome: "Itaqui",
              id_estado: 21
          },
          {
              codigo_ibge: 4310652,
              nome: "Itati",
              id_estado: 21
          },
          {
              codigo_ibge: 4310702,
              nome: "Itatiba do Sul",
              id_estado: 21
          },
          {
              codigo_ibge: 4310751,
              nome: "Ivorá",
              id_estado: 21
          },
          {
              codigo_ibge: 4310801,
              nome: "Ivoti",
              id_estado: 21
          },
          {
              codigo_ibge: 4310850,
              nome: "Jaboticaba",
              id_estado: 21
          },
          {
              codigo_ibge: 4310876,
              nome: "Jacuizinho",
              id_estado: 21
          },
          {
              codigo_ibge: 4310900,
              nome: "Jacutinga",
              id_estado: 21
          },
          {
              codigo_ibge: 4311007,
              nome: "Jaguarão",
              id_estado: 21
          },
          {
              codigo_ibge: 4311106,
              nome: "Jaguari",
              id_estado: 21
          },
          {
              codigo_ibge: 4311122,
              nome: "Jaquirana",
              id_estado: 21
          },
          {
              codigo_ibge: 4311130,
              nome: "Jari",
              id_estado: 21
          },
          {
              codigo_ibge: 4311155,
              nome: "Jóia",
              id_estado: 21
          },
          {
              codigo_ibge: 4311205,
              nome: "Júlio de Castilhos",
              id_estado: 21
          },
          {
              codigo_ibge: 4311239,
              nome: "Lagoa Bonita do Sul",
              id_estado: 21
          },
          {
              codigo_ibge: 4311254,
              nome: "Lagoão",
              id_estado: 21
          },
          {
              codigo_ibge: 4311270,
              nome: "Lagoa dos Três Cantos",
              id_estado: 21
          },
          {
              codigo_ibge: 4311304,
              nome: "Lagoa Vermelha",
              id_estado: 21
          },
          {
              codigo_ibge: 4311403,
              nome: "Lajeado",
              id_estado: 21
          },
          {
              codigo_ibge: 4311429,
              nome: "Lajeado do Bugre",
              id_estado: 21
          },
          {
              codigo_ibge: 4311502,
              nome: "Lavras do Sul",
              id_estado: 21
          },
          {
              codigo_ibge: 4311601,
              nome: "Liberato Salzano",
              id_estado: 21
          },
          {
              codigo_ibge: 4311627,
              nome: "Lindolfo Collor",
              id_estado: 21
          },
          {
              codigo_ibge: 4311643,
              nome: "Linha Nova",
              id_estado: 21
          },
          {
              codigo_ibge: 4311700,
              nome: "Machadinho",
              id_estado: 21
          },
          {
              codigo_ibge: 4311718,
              nome: "Maçambará",
              id_estado: 21
          },
          {
              codigo_ibge: 4311734,
              nome: "Mampituba",
              id_estado: 21
          },
          {
              codigo_ibge: 4311759,
              nome: "Manoel Viana",
              id_estado: 21
          },
          {
              codigo_ibge: 4311775,
              nome: "Maquiné",
              id_estado: 21
          },
          {
              codigo_ibge: 4311791,
              nome: "Maratá",
              id_estado: 21
          },
          {
              codigo_ibge: 4311809,
              nome: "Marau",
              id_estado: 21
          },
          {
              codigo_ibge: 4311908,
              nome: "Marcelino Ramos",
              id_estado: 21
          },
          {
              codigo_ibge: 4311981,
              nome: "Mariana Pimentel",
              id_estado: 21
          },
          {
              codigo_ibge: 4312005,
              nome: "Mariano Moro",
              id_estado: 21
          },
          {
              codigo_ibge: 4312054,
              nome: "Marques de Souza",
              id_estado: 21
          },
          {
              codigo_ibge: 4312104,
              nome: "Mata",
              id_estado: 21
          },
          {
              codigo_ibge: 4312138,
              nome: "Mato Castelhano",
              id_estado: 21
          },
          {
              codigo_ibge: 4312153,
              nome: "Mato Leitão",
              id_estado: 21
          },
          {
              codigo_ibge: 4312179,
              nome: "Mato Queimado",
              id_estado: 21
          },
          {
              codigo_ibge: 4312203,
              nome: "Maximiliano de Almeida",
              id_estado: 21
          },
          {
              codigo_ibge: 4312252,
              nome: "Minas do Leão",
              id_estado: 21
          },
          {
              codigo_ibge: 4312302,
              nome: "Miraguaí",
              id_estado: 21
          },
          {
              codigo_ibge: 4312351,
              nome: "Montauri",
              id_estado: 21
          },
          {
              codigo_ibge: 4312377,
              nome: "Monte Alegre dos Campos",
              id_estado: 21
          },
          {
              codigo_ibge: 4312385,
              nome: "Monte Belo do Sul",
              id_estado: 21
          },
          {
              codigo_ibge: 4312401,
              nome: "Montenegro",
              id_estado: 21
          },
          {
              codigo_ibge: 4312427,
              nome: "Mormaço",
              id_estado: 21
          },
          {
              codigo_ibge: 4312443,
              nome: "Morrinhos do Sul",
              id_estado: 21
          },
          {
              codigo_ibge: 4312450,
              nome: "Morro Redondo",
              id_estado: 21
          },
          {
              codigo_ibge: 4312476,
              nome: "Morro Reuter",
              id_estado: 21
          },
          {
              codigo_ibge: 4312500,
              nome: "Mostardas",
              id_estado: 21
          },
          {
              codigo_ibge: 4312609,
              nome: "Muçum",
              id_estado: 21
          },
          {
              codigo_ibge: 4312617,
              nome: "Muitos Capões",
              id_estado: 21
          },
          {
              codigo_ibge: 4312625,
              nome: "Muliterno",
              id_estado: 21
          },
          {
              codigo_ibge: 4312658,
              nome: "Não-Me-Toque",
              id_estado: 21
          },
          {
              codigo_ibge: 4312674,
              nome: "Nicolau Vergueiro",
              id_estado: 21
          },
          {
              codigo_ibge: 4312708,
              nome: "Nonoai",
              id_estado: 21
          },
          {
              codigo_ibge: 4312757,
              nome: "Nova Alvorada",
              id_estado: 21
          },
          {
              codigo_ibge: 4312807,
              nome: "Nova Araçá",
              id_estado: 21
          },
          {
              codigo_ibge: 4312906,
              nome: "Nova Bassano",
              id_estado: 21
          },
          {
              codigo_ibge: 4312955,
              nome: "Nova Boa Vista",
              id_estado: 21
          },
          {
              codigo_ibge: 4313003,
              nome: "Nova Bréscia",
              id_estado: 21
          },
          {
              codigo_ibge: 4313011,
              nome: "Nova Candelária",
              id_estado: 21
          },
          {
              codigo_ibge: 4313037,
              nome: "Nova Esperança do Sul",
              id_estado: 21
          },
          {
              codigo_ibge: 4313060,
              nome: "Nova Hartz",
              id_estado: 21
          },
          {
              codigo_ibge: 4313086,
              nome: "Nova Pádua",
              id_estado: 21
          },
          {
              codigo_ibge: 4313102,
              nome: "Nova Palma",
              id_estado: 21
          },
          {
              codigo_ibge: 4313201,
              nome: "Nova Petrópolis",
              id_estado: 21
          },
          {
              codigo_ibge: 4313300,
              nome: "Nova Prata",
              id_estado: 21
          },
          {
              codigo_ibge: 4313334,
              nome: "Nova Ramada",
              id_estado: 21
          },
          {
              codigo_ibge: 4313359,
              nome: "Nova Roma do Sul",
              id_estado: 21
          },
          {
              codigo_ibge: 4313375,
              nome: "Nova Santa Rita",
              id_estado: 21
          },
          {
              codigo_ibge: 4313391,
              nome: "Novo Cabrais",
              id_estado: 21
          },
          {
              codigo_ibge: 4313409,
              nome: "Novo Hamburgo",
              id_estado: 21
          },
          {
              codigo_ibge: 4313425,
              nome: "Novo Machado",
              id_estado: 21
          },
          {
              codigo_ibge: 4313441,
              nome: "Novo Tiradentes",
              id_estado: 21
          },
          {
              codigo_ibge: 4313466,
              nome: "Novo Xingu",
              id_estado: 21
          },
          {
              codigo_ibge: 4313490,
              nome: "Novo Barreiro",
              id_estado: 21
          },
          {
              codigo_ibge: 4313508,
              nome: "Osório",
              id_estado: 21
          },
          {
              codigo_ibge: 4313607,
              nome: "Paim Filho",
              id_estado: 21
          },
          {
              codigo_ibge: 4313656,
              nome: "Palmares do Sul",
              id_estado: 21
          },
          {
              codigo_ibge: 4313706,
              nome: "Palmeira das Missões",
              id_estado: 21
          },
          {
              codigo_ibge: 4313805,
              nome: "Palmitinho",
              id_estado: 21
          },
          {
              codigo_ibge: 4313904,
              nome: "Panambi",
              id_estado: 21
          },
          {
              codigo_ibge: 4313953,
              nome: "Pantano Grande",
              id_estado: 21
          },
          {
              codigo_ibge: 4314001,
              nome: "Paraí",
              id_estado: 21
          },
          {
              codigo_ibge: 4314027,
              nome: "Paraíso do Sul",
              id_estado: 21
          },
          {
              codigo_ibge: 4314035,
              nome: "Pareci Novo",
              id_estado: 21
          },
          {
              codigo_ibge: 4314050,
              nome: "Parobé",
              id_estado: 21
          },
          {
              codigo_ibge: 4314068,
              nome: "Passa Sete",
              id_estado: 21
          },
          {
              codigo_ibge: 4314076,
              nome: "Passo do Sobrado",
              id_estado: 21
          },
          {
              codigo_ibge: 4314100,
              nome: "Passo Fundo",
              id_estado: 21
          },
          {
              codigo_ibge: 4314134,
              nome: "Paulo Bento",
              id_estado: 21
          },
          {
              codigo_ibge: 4314159,
              nome: "Paverama",
              id_estado: 21
          },
          {
              codigo_ibge: 4314175,
              nome: "Pedras Altas",
              id_estado: 21
          },
          {
              codigo_ibge: 4314209,
              nome: "Pedro Osório",
              id_estado: 21
          },
          {
              codigo_ibge: 4314308,
              nome: "Pejuçara",
              id_estado: 21
          },
          {
              codigo_ibge: 4314407,
              nome: "Pelotas",
              id_estado: 21
          },
          {
              codigo_ibge: 4314423,
              nome: "Picada Café",
              id_estado: 21
          },
          {
              codigo_ibge: 4314456,
              nome: "Pinhal",
              id_estado: 21
          },
          {
              codigo_ibge: 4314464,
              nome: "Pinhal da Serra",
              id_estado: 21
          },
          {
              codigo_ibge: 4314472,
              nome: "Pinhal Grande",
              id_estado: 21
          },
          {
              codigo_ibge: 4314498,
              nome: "Pinheirinho do Vale",
              id_estado: 21
          },
          {
              codigo_ibge: 4314506,
              nome: "Pinheiro Machado",
              id_estado: 21
          },
          {
              codigo_ibge: 4314548,
              nome: "Pinto Bandeira",
              id_estado: 21
          },
          {
              codigo_ibge: 4314555,
              nome: "Pirapó",
              id_estado: 21
          },
          {
              codigo_ibge: 4314605,
              nome: "Piratini",
              id_estado: 21
          },
          {
              codigo_ibge: 4314704,
              nome: "Planalto",
              id_estado: 21
          },
          {
              codigo_ibge: 4314753,
              nome: "Poço das Antas",
              id_estado: 21
          },
          {
              codigo_ibge: 4314779,
              nome: "Pontão",
              id_estado: 21
          },
          {
              codigo_ibge: 4314787,
              nome: "Ponte Preta",
              id_estado: 21
          },
          {
              codigo_ibge: 4314803,
              nome: "Portão",
              id_estado: 21
          },
          {
              codigo_ibge: 4314902,
              nome: "Porto Alegre",
              id_estado: 21
          },
          {
              codigo_ibge: 4315008,
              nome: "Porto Lucena",
              id_estado: 21
          },
          {
              codigo_ibge: 4315057,
              nome: "Porto Mauá",
              id_estado: 21
          },
          {
              codigo_ibge: 4315073,
              nome: "Porto Vera Cruz",
              id_estado: 21
          },
          {
              codigo_ibge: 4315107,
              nome: "Porto Xavier",
              id_estado: 21
          },
          {
              codigo_ibge: 4315131,
              nome: "Pouso Novo",
              id_estado: 21
          },
          {
              codigo_ibge: 4315149,
              nome: "Presidente Lucena",
              id_estado: 21
          },
          {
              codigo_ibge: 4315156,
              nome: "Progresso",
              id_estado: 21
          },
          {
              codigo_ibge: 4315172,
              nome: "Protásio Alves",
              id_estado: 21
          },
          {
              codigo_ibge: 4315206,
              nome: "Putinga",
              id_estado: 21
          },
          {
              codigo_ibge: 4315305,
              nome: "Quaraí",
              id_estado: 21
          },
          {
              codigo_ibge: 4315313,
              nome: "Quatro Irmãos",
              id_estado: 21
          },
          {
              codigo_ibge: 4315321,
              nome: "Quevedos",
              id_estado: 21
          },
          {
              codigo_ibge: 4315354,
              nome: "Quinze de Novembro",
              id_estado: 21
          },
          {
              codigo_ibge: 4315404,
              nome: "Redentora",
              id_estado: 21
          },
          {
              codigo_ibge: 4315453,
              nome: "Relvado",
              id_estado: 21
          },
          {
              codigo_ibge: 4315503,
              nome: "Restinga Seca",
              id_estado: 21
          },
          {
              codigo_ibge: 4315552,
              nome: "Rio dos Índios",
              id_estado: 21
          },
          {
              codigo_ibge: 4315602,
              nome: "Rio Grande",
              id_estado: 21
          },
          {
              codigo_ibge: 4315701,
              nome: "Rio Pardo",
              id_estado: 21
          },
          {
              codigo_ibge: 4315750,
              nome: "Riozinho",
              id_estado: 21
          },
          {
              codigo_ibge: 4315800,
              nome: "Roca Sales",
              id_estado: 21
          },
          {
              codigo_ibge: 4315909,
              nome: "Rodeio Bonito",
              id_estado: 21
          },
          {
              codigo_ibge: 4315958,
              nome: "Rolador",
              id_estado: 21
          },
          {
              codigo_ibge: 4316006,
              nome: "Rolante",
              id_estado: 21
          },
          {
              codigo_ibge: 4316105,
              nome: "Ronda Alta",
              id_estado: 21
          },
          {
              codigo_ibge: 4316204,
              nome: "Rondinha",
              id_estado: 21
          },
          {
              codigo_ibge: 4316303,
              nome: "Roque Gonzales",
              id_estado: 21
          },
          {
              codigo_ibge: 4316402,
              nome: "Rosário do Sul",
              id_estado: 21
          },
          {
              codigo_ibge: 4316428,
              nome: "Sagrada Família",
              id_estado: 21
          },
          {
              codigo_ibge: 4316436,
              nome: "Saldanha Marinho",
              id_estado: 21
          },
          {
              codigo_ibge: 4316451,
              nome: "Salto do Jacuí",
              id_estado: 21
          },
          {
              codigo_ibge: 4316477,
              nome: "Salvador das Missões",
              id_estado: 21
          },
          {
              codigo_ibge: 4316501,
              nome: "Salvador do Sul",
              id_estado: 21
          },
          {
              codigo_ibge: 4316600,
              nome: "Sananduva",
              id_estado: 21
          },
          {
              codigo_ibge: 4316709,
              nome: "Santa Bárbara do Sul",
              id_estado: 21
          },
          {
              codigo_ibge: 4316733,
              nome: "Santa Cecília do Sul",
              id_estado: 21
          },
          {
              codigo_ibge: 4316758,
              nome: "Santa Clara do Sul",
              id_estado: 21
          },
          {
              codigo_ibge: 4316808,
              nome: "Santa Cruz do Sul",
              id_estado: 21
          },
          {
              codigo_ibge: 4316907,
              nome: "Santa Maria",
              id_estado: 21
          },
          {
              codigo_ibge: 4316956,
              nome: "Santa Maria do Herval",
              id_estado: 21
          },
          {
              codigo_ibge: 4316972,
              nome: "Santa Margarida do Sul",
              id_estado: 21
          },
          {
              codigo_ibge: 4317004,
              nome: "Santana da Boa Vista",
              id_estado: 21
          },
          {
              codigo_ibge: 4317103,
              nome: "Sant'Ana do Livramento",
              id_estado: 21
          },
          {
              codigo_ibge: 4317202,
              nome: "Santa Rosa",
              id_estado: 21
          },
          {
              codigo_ibge: 4317251,
              nome: "Santa Tereza",
              id_estado: 21
          },
          {
              codigo_ibge: 4317301,
              nome: "Santa Vitória do Palmar",
              id_estado: 21
          },
          {
              codigo_ibge: 4317400,
              nome: "Santiago",
              id_estado: 21
          },
          {
              codigo_ibge: 4317509,
              nome: "Santo Ângelo",
              id_estado: 21
          },
          {
              codigo_ibge: 4317558,
              nome: "Santo Antônio do Palma",
              id_estado: 21
          },
          {
              codigo_ibge: 4317608,
              nome: "Santo Antônio da Patrulha",
              id_estado: 21
          },
          {
              codigo_ibge: 4317707,
              nome: "Santo Antônio das Missões",
              id_estado: 21
          },
          {
              codigo_ibge: 4317756,
              nome: "Santo Antônio do Planalto",
              id_estado: 21
          },
          {
              codigo_ibge: 4317806,
              nome: "Santo Augusto",
              id_estado: 21
          },
          {
              codigo_ibge: 4317905,
              nome: "Santo Cristo",
              id_estado: 21
          },
          {
              codigo_ibge: 4317954,
              nome: "Santo Expedito do Sul",
              id_estado: 21
          },
          {
              codigo_ibge: 4318002,
              nome: "São Borja",
              id_estado: 21
          },
          {
              codigo_ibge: 4318051,
              nome: "São Domingos do Sul",
              id_estado: 21
          },
          {
              codigo_ibge: 4318101,
              nome: "São Francisco de Assis",
              id_estado: 21
          },
          {
              codigo_ibge: 4318200,
              nome: "São Francisco de Paula",
              id_estado: 21
          },
          {
              codigo_ibge: 4318309,
              nome: "São Gabriel",
              id_estado: 21
          },
          {
              codigo_ibge: 4318408,
              nome: "São Jerônimo",
              id_estado: 21
          },
          {
              codigo_ibge: 4318424,
              nome: "São João da Urtiga",
              id_estado: 21
          },
          {
              codigo_ibge: 4318432,
              nome: "São João do Polêsine",
              id_estado: 21
          },
          {
              codigo_ibge: 4318440,
              nome: "São Jorge",
              id_estado: 21
          },
          {
              codigo_ibge: 4318457,
              nome: "São José das Missões",
              id_estado: 21
          },
          {
              codigo_ibge: 4318465,
              nome: "São José do Herval",
              id_estado: 21
          },
          {
              codigo_ibge: 4318481,
              nome: "São José do Hortêncio",
              id_estado: 21
          },
          {
              codigo_ibge: 4318499,
              nome: "São José do Inhacorá",
              id_estado: 21
          },
          {
              codigo_ibge: 4318507,
              nome: "São José do Norte",
              id_estado: 21
          },
          {
              codigo_ibge: 4318606,
              nome: "São José do Ouro",
              id_estado: 21
          },
          {
              codigo_ibge: 4318614,
              nome: "São José do Sul",
              id_estado: 21
          },
          {
              codigo_ibge: 4318622,
              nome: "São José dos Ausentes",
              id_estado: 21
          },
          {
              codigo_ibge: 4318705,
              nome: "São Leopoldo",
              id_estado: 21
          },
          {
              codigo_ibge: 4318804,
              nome: "São Lourenço do Sul",
              id_estado: 21
          },
          {
              codigo_ibge: 4318903,
              nome: "São Luiz Gonzaga",
              id_estado: 21
          },
          {
              codigo_ibge: 4319000,
              nome: "São Marcos",
              id_estado: 21
          },
          {
              codigo_ibge: 4319109,
              nome: "São Martinho",
              id_estado: 21
          },
          {
              codigo_ibge: 4319125,
              nome: "São Martinho da Serra",
              id_estado: 21
          },
          {
              codigo_ibge: 4319158,
              nome: "São Miguel das Missões",
              id_estado: 21
          },
          {
              codigo_ibge: 4319208,
              nome: "São Nicolau",
              id_estado: 21
          },
          {
              codigo_ibge: 4319307,
              nome: "São Paulo das Missões",
              id_estado: 21
          },
          {
              codigo_ibge: 4319356,
              nome: "São Pedro da Serra",
              id_estado: 21
          },
          {
              codigo_ibge: 4319364,
              nome: "São Pedro das Missões",
              id_estado: 21
          },
          {
              codigo_ibge: 4319372,
              nome: "São Pedro do Butiá",
              id_estado: 21
          },
          {
              codigo_ibge: 4319406,
              nome: "São Pedro do Sul",
              id_estado: 21
          },
          {
              codigo_ibge: 4319505,
              nome: "São Sebastião do Caí",
              id_estado: 21
          },
          {
              codigo_ibge: 4319604,
              nome: "São Sepé",
              id_estado: 21
          },
          {
              codigo_ibge: 4319703,
              nome: "São Valentim",
              id_estado: 21
          },
          {
              codigo_ibge: 4319711,
              nome: "São Valentim do Sul",
              id_estado: 21
          },
          {
              codigo_ibge: 4319737,
              nome: "São Valério do Sul",
              id_estado: 21
          },
          {
              codigo_ibge: 4319752,
              nome: "São Vendelino",
              id_estado: 21
          },
          {
              codigo_ibge: 4319802,
              nome: "São Vicente do Sul",
              id_estado: 21
          },
          {
              codigo_ibge: 4319901,
              nome: "Sapiranga",
              id_estado: 21
          },
          {
              codigo_ibge: 4320008,
              nome: "Sapucaia do Sul",
              id_estado: 21
          },
          {
              codigo_ibge: 4320107,
              nome: "Sarandi",
              id_estado: 21
          },
          {
              codigo_ibge: 4320206,
              nome: "Seberi",
              id_estado: 21
          },
          {
              codigo_ibge: 4320230,
              nome: "Sede Nova",
              id_estado: 21
          },
          {
              codigo_ibge: 4320263,
              nome: "Segredo",
              id_estado: 21
          },
          {
              codigo_ibge: 4320305,
              nome: "Selbach",
              id_estado: 21
          },
          {
              codigo_ibge: 4320321,
              nome: "Senador Salgado Filho",
              id_estado: 21
          },
          {
              codigo_ibge: 4320354,
              nome: "Sentinela do Sul",
              id_estado: 21
          },
          {
              codigo_ibge: 4320404,
              nome: "Serafina Corrêa",
              id_estado: 21
          },
          {
              codigo_ibge: 4320453,
              nome: "Sério",
              id_estado: 21
          },
          {
              codigo_ibge: 4320503,
              nome: "Sertão",
              id_estado: 21
          },
          {
              codigo_ibge: 4320552,
              nome: "Sertão Santana",
              id_estado: 21
          },
          {
              codigo_ibge: 4320578,
              nome: "Sete de Setembro",
              id_estado: 21
          },
          {
              codigo_ibge: 4320602,
              nome: "Severiano de Almeida",
              id_estado: 21
          },
          {
              codigo_ibge: 4320651,
              nome: "Silveira Martins",
              id_estado: 21
          },
          {
              codigo_ibge: 4320677,
              nome: "Sinimbu",
              id_estado: 21
          },
          {
              codigo_ibge: 4320701,
              nome: "Sobradinho",
              id_estado: 21
          },
          {
              codigo_ibge: 4320800,
              nome: "Soledade",
              id_estado: 21
          },
          {
              codigo_ibge: 4320859,
              nome: "Tabaí",
              id_estado: 21
          },
          {
              codigo_ibge: 4320909,
              nome: "Tapejara",
              id_estado: 21
          },
          {
              codigo_ibge: 4321006,
              nome: "Tapera",
              id_estado: 21
          },
          {
              codigo_ibge: 4321105,
              nome: "Tapes",
              id_estado: 21
          },
          {
              codigo_ibge: 4321204,
              nome: "Taquara",
              id_estado: 21
          },
          {
              codigo_ibge: 4321303,
              nome: "Taquari",
              id_estado: 21
          },
          {
              codigo_ibge: 4321329,
              nome: "Taquaruçu do Sul",
              id_estado: 21
          },
          {
              codigo_ibge: 4321352,
              nome: "Tavares",
              id_estado: 21
          },
          {
              codigo_ibge: 4321402,
              nome: "Tenente Portela",
              id_estado: 21
          },
          {
              codigo_ibge: 4321436,
              nome: "Terra de Areia",
              id_estado: 21
          },
          {
              codigo_ibge: 4321451,
              nome: "Teutônia",
              id_estado: 21
          },
          {
              codigo_ibge: 4321469,
              nome: "Tio Hugo",
              id_estado: 21
          },
          {
              codigo_ibge: 4321477,
              nome: "Tiradentes do Sul",
              id_estado: 21
          },
          {
              codigo_ibge: 4321493,
              nome: "Toropi",
              id_estado: 21
          },
          {
              codigo_ibge: 4321501,
              nome: "Torres",
              id_estado: 21
          },
          {
              codigo_ibge: 4321600,
              nome: "Tramandaí",
              id_estado: 21
          },
          {
              codigo_ibge: 4321626,
              nome: "Travesseiro",
              id_estado: 21
          },
          {
              codigo_ibge: 4321634,
              nome: "Três Arroios",
              id_estado: 21
          },
          {
              codigo_ibge: 4321667,
              nome: "Três Cachoeiras",
              id_estado: 21
          },
          {
              codigo_ibge: 4321709,
              nome: "Três Coroas",
              id_estado: 21
          },
          {
              codigo_ibge: 4321808,
              nome: "Três de Maio",
              id_estado: 21
          },
          {
              codigo_ibge: 4321832,
              nome: "Três Forquilhas",
              id_estado: 21
          },
          {
              codigo_ibge: 4321857,
              nome: "Três Palmeiras",
              id_estado: 21
          },
          {
              codigo_ibge: 4321907,
              nome: "Três Passos",
              id_estado: 21
          },
          {
              codigo_ibge: 4321956,
              nome: "Trindade do Sul",
              id_estado: 21
          },
          {
              codigo_ibge: 4322004,
              nome: "Triunfo",
              id_estado: 21
          },
          {
              codigo_ibge: 4322103,
              nome: "Tucunduva",
              id_estado: 21
          },
          {
              codigo_ibge: 4322152,
              nome: "Tunas",
              id_estado: 21
          },
          {
              codigo_ibge: 4322186,
              nome: "Tupanci do Sul",
              id_estado: 21
          },
          {
              codigo_ibge: 4322202,
              nome: "Tupanciretã",
              id_estado: 21
          },
          {
              codigo_ibge: 4322251,
              nome: "Tupandi",
              id_estado: 21
          },
          {
              codigo_ibge: 4322301,
              nome: "Tuparendi",
              id_estado: 21
          },
          {
              codigo_ibge: 4322327,
              nome: "Turuçu",
              id_estado: 21
          },
          {
              codigo_ibge: 4322343,
              nome: "Ubiretama",
              id_estado: 21
          },
          {
              codigo_ibge: 4322350,
              nome: "União da Serra",
              id_estado: 21
          },
          {
              codigo_ibge: 4322376,
              nome: "Unistalda",
              id_estado: 21
          },
          {
              codigo_ibge: 4322400,
              nome: "Uruguaiana",
              id_estado: 21
          },
          {
              codigo_ibge: 4322509,
              nome: "Vacaria",
              id_estado: 21
          },
          {
              codigo_ibge: 4322525,
              nome: "Vale Verde",
              id_estado: 21
          },
          {
              codigo_ibge: 4322533,
              nome: "Vale do Sol",
              id_estado: 21
          },
          {
              codigo_ibge: 4322541,
              nome: "Vale Real",
              id_estado: 21
          },
          {
              codigo_ibge: 4322558,
              nome: "Vanini",
              id_estado: 21
          },
          {
              codigo_ibge: 4322608,
              nome: "Venâncio Aires",
              id_estado: 21
          },
          {
              codigo_ibge: 4322707,
              nome: "Vera Cruz",
              id_estado: 21
          },
          {
              codigo_ibge: 4322806,
              nome: "Veranópolis",
              id_estado: 21
          },
          {
              codigo_ibge: 4322855,
              nome: "Vespasiano Correa",
              id_estado: 21
          },
          {
              codigo_ibge: 4322905,
              nome: "Viadutos",
              id_estado: 21
          },
          {
              codigo_ibge: 4323002,
              nome: "Viamão",
              id_estado: 21
          },
          {
              codigo_ibge: 4323101,
              nome: "Vicente Dutra",
              id_estado: 21
          },
          {
              codigo_ibge: 4323200,
              nome: "Victor Graeff",
              id_estado: 21
          },
          {
              codigo_ibge: 4323309,
              nome: "Vila Flores",
              id_estado: 21
          },
          {
              codigo_ibge: 4323358,
              nome: "Vila Lângaro",
              id_estado: 21
          },
          {
              codigo_ibge: 4323408,
              nome: "Vila Maria",
              id_estado: 21
          },
          {
              codigo_ibge: 4323457,
              nome: "Vila Nova do Sul",
              id_estado: 21
          },
          {
              codigo_ibge: 4323507,
              nome: "Vista Alegre",
              id_estado: 21
          },
          {
              codigo_ibge: 4323606,
              nome: "Vista Alegre do Prata",
              id_estado: 21
          },
          {
              codigo_ibge: 4323705,
              nome: "Vista Gaúcha",
              id_estado: 21
          },
          {
              codigo_ibge: 4323754,
              nome: "Vitória das Missões",
              id_estado: 21
          },
          {
              codigo_ibge: 4323770,
              nome: "Westfalia",
              id_estado: 21
          },
          {
              codigo_ibge: 4323804,
              nome: "Xangri-lá",
              id_estado: 21
          },
          {
              codigo_ibge: 5000203,
              nome: "Água Clara",
              id_estado: 12
          },
          {
              codigo_ibge: 5000252,
              nome: "Alcinópolis",
              id_estado: 12
          },
          {
              codigo_ibge: 5000609,
              nome: "Amambai",
              id_estado: 12
          },
          {
              codigo_ibge: 5000708,
              nome: "Anastácio",
              id_estado: 12
          },
          {
              codigo_ibge: 5000807,
              nome: "Anaurilândia",
              id_estado: 12
          },
          {
              codigo_ibge: 5000856,
              nome: "Angélica",
              id_estado: 12
          },
          {
              codigo_ibge: 5000906,
              nome: "Antônio João",
              id_estado: 12
          },
          {
              codigo_ibge: 5001003,
              nome: "Aparecida do Taboado",
              id_estado: 12
          },
          {
              codigo_ibge: 5001102,
              nome: "Aquidauana",
              id_estado: 12
          },
          {
              codigo_ibge: 5001243,
              nome: "Aral Moreira",
              id_estado: 12
          },
          {
              codigo_ibge: 5001508,
              nome: "Bandeirantes",
              id_estado: 12
          },
          {
              codigo_ibge: 5001904,
              nome: "Bataguassu",
              id_estado: 12
          },
          {
              codigo_ibge: 5002001,
              nome: "Batayporã",
              id_estado: 12
          },
          {
              codigo_ibge: 5002100,
              nome: "Bela Vista",
              id_estado: 12
          },
          {
              codigo_ibge: 5002159,
              nome: "Bodoquena",
              id_estado: 12
          },
          {
              codigo_ibge: 5002209,
              nome: "Bonito",
              id_estado: 12
          },
          {
              codigo_ibge: 5002308,
              nome: "Brasilândia",
              id_estado: 12
          },
          {
              codigo_ibge: 5002407,
              nome: "Caarapó",
              id_estado: 12
          },
          {
              codigo_ibge: 5002605,
              nome: "Camapuã",
              id_estado: 12
          },
          {
              codigo_ibge: 5002704,
              nome: "Campo Grande",
              id_estado: 12
          },
          {
              codigo_ibge: 5002803,
              nome: "Caracol",
              id_estado: 12
          },
          {
              codigo_ibge: 5002902,
              nome: "Cassilândia",
              id_estado: 12
          },
          {
              codigo_ibge: 5002951,
              nome: "Chapadão do Sul",
              id_estado: 12
          },
          {
              codigo_ibge: 5003108,
              nome: "Corguinho",
              id_estado: 12
          },
          {
              codigo_ibge: 5003157,
              nome: "Coronel Sapucaia",
              id_estado: 12
          },
          {
              codigo_ibge: 5003207,
              nome: "Corumbá",
              id_estado: 12
          },
          {
              codigo_ibge: 5003256,
              nome: "Costa Rica",
              id_estado: 12
          },
          {
              codigo_ibge: 5003306,
              nome: "Coxim",
              id_estado: 12
          },
          {
              codigo_ibge: 5003454,
              nome: "Deodápolis",
              id_estado: 12
          },
          {
              codigo_ibge: 5003488,
              nome: "Dois Irmãos do Buriti",
              id_estado: 12
          },
          {
              codigo_ibge: 5003504,
              nome: "Douradina",
              id_estado: 12
          },
          {
              codigo_ibge: 5003702,
              nome: "Dourados",
              id_estado: 12
          },
          {
              codigo_ibge: 5003751,
              nome: "Eldorado",
              id_estado: 12
          },
          {
              codigo_ibge: 5003801,
              nome: "Fátima do Sul",
              id_estado: 12
          },
          {
              codigo_ibge: 5003900,
              nome: "Figueirão",
              id_estado: 12
          },
          {
              codigo_ibge: 5004007,
              nome: "Glória de Dourados",
              id_estado: 12
          },
          {
              codigo_ibge: 5004106,
              nome: "Guia Lopes da Laguna",
              id_estado: 12
          },
          {
              codigo_ibge: 5004304,
              nome: "Iguatemi",
              id_estado: 12
          },
          {
              codigo_ibge: 5004403,
              nome: "Inocência",
              id_estado: 12
          },
          {
              codigo_ibge: 5004502,
              nome: "Itaporã",
              id_estado: 12
          },
          {
              codigo_ibge: 5004601,
              nome: "Itaquiraí",
              id_estado: 12
          },
          {
              codigo_ibge: 5004700,
              nome: "Ivinhema",
              id_estado: 12
          },
          {
              codigo_ibge: 5004809,
              nome: "Japorã",
              id_estado: 12
          },
          {
              codigo_ibge: 5004908,
              nome: "Jaraguari",
              id_estado: 12
          },
          {
              codigo_ibge: 5005004,
              nome: "Jardim",
              id_estado: 12
          },
          {
              codigo_ibge: 5005103,
              nome: "Jateí",
              id_estado: 12
          },
          {
              codigo_ibge: 5005152,
              nome: "Juti",
              id_estado: 12
          },
          {
              codigo_ibge: 5005202,
              nome: "Ladário",
              id_estado: 12
          },
          {
              codigo_ibge: 5005251,
              nome: "Laguna Carapã",
              id_estado: 12
          },
          {
              codigo_ibge: 5005400,
              nome: "Maracaju",
              id_estado: 12
          },
          {
              codigo_ibge: 5005608,
              nome: "Miranda",
              id_estado: 12
          },
          {
              codigo_ibge: 5005681,
              nome: "Mundo Novo",
              id_estado: 12
          },
          {
              codigo_ibge: 5005707,
              nome: "Naviraí",
              id_estado: 12
          },
          {
              codigo_ibge: 5005806,
              nome: "Nioaque",
              id_estado: 12
          },
          {
              codigo_ibge: 5006002,
              nome: "Nova Alvorada do Sul",
              id_estado: 12
          },
          {
              codigo_ibge: 5006200,
              nome: "Nova Andradina",
              id_estado: 12
          },
          {
              codigo_ibge: 5006259,
              nome: "Novo Horizonte do Sul",
              id_estado: 12
          },
          {
              codigo_ibge: 5006275,
              nome: "Paraíso das Águas",
              id_estado: 12
          },
          {
              codigo_ibge: 5006309,
              nome: "Paranaíba",
              id_estado: 12
          },
          {
              codigo_ibge: 5006358,
              nome: "Paranhos",
              id_estado: 12
          },
          {
              codigo_ibge: 5006408,
              nome: "Pedro Gomes",
              id_estado: 12
          },
          {
              codigo_ibge: 5006606,
              nome: "Ponta Porã",
              id_estado: 12
          },
          {
              codigo_ibge: 5006903,
              nome: "Porto Murtinho",
              id_estado: 12
          },
          {
              codigo_ibge: 5007109,
              nome: "Ribas do Rio Pardo",
              id_estado: 12
          },
          {
              codigo_ibge: 5007208,
              nome: "Rio Brilhante",
              id_estado: 12
          },
          {
              codigo_ibge: 5007307,
              nome: "Rio Negro",
              id_estado: 12
          },
          {
              codigo_ibge: 5007406,
              nome: "Rio Verde de Mato Grosso",
              id_estado: 12
          },
          {
              codigo_ibge: 5007505,
              nome: "Rochedo",
              id_estado: 12
          },
          {
              codigo_ibge: 5007554,
              nome: "Santa Rita do Pardo",
              id_estado: 12
          },
          {
              codigo_ibge: 5007695,
              nome: "São Gabriel do Oeste",
              id_estado: 12
          },
          {
              codigo_ibge: 5007703,
              nome: "Sete Quedas",
              id_estado: 12
          },
          {
              codigo_ibge: 5007802,
              nome: "Selvíria",
              id_estado: 12
          },
          {
              codigo_ibge: 5007901,
              nome: "Sidrolândia",
              id_estado: 12
          },
          {
              codigo_ibge: 5007935,
              nome: "Sonora",
              id_estado: 12
          },
          {
              codigo_ibge: 5007950,
              nome: "Tacuru",
              id_estado: 12
          },
          {
              codigo_ibge: 5007976,
              nome: "Taquarussu",
              id_estado: 12
          },
          {
              codigo_ibge: 5008008,
              nome: "Terenos",
              id_estado: 12
          },
          {
              codigo_ibge: 5008305,
              nome: "Três Lagoas",
              id_estado: 12
          },
          {
              codigo_ibge: 5008404,
              nome: "Vicentina",
              id_estado: 12
          },
          {
              codigo_ibge: 5100102,
              nome: "Acorizal",
              id_estado: 11
          },
          {
              codigo_ibge: 5100201,
              nome: "Água Boa",
              id_estado: 11
          },
          {
              codigo_ibge: 5100250,
              nome: "Alta Floresta",
              id_estado: 11
          },
          {
              codigo_ibge: 5100300,
              nome: "Alto Araguaia",
              id_estado: 11
          },
          {
              codigo_ibge: 5100359,
              nome: "Alto Boa Vista",
              id_estado: 11
          },
          {
              codigo_ibge: 5100409,
              nome: "Alto Garças",
              id_estado: 11
          },
          {
              codigo_ibge: 5100508,
              nome: "Alto Paraguai",
              id_estado: 11
          },
          {
              codigo_ibge: 5100607,
              nome: "Alto Taquari",
              id_estado: 11
          },
          {
              codigo_ibge: 5100805,
              nome: "Apiacás",
              id_estado: 11
          },
          {
              codigo_ibge: 5101001,
              nome: "Araguaiana",
              id_estado: 11
          },
          {
              codigo_ibge: 5101209,
              nome: "Araguainha",
              id_estado: 11
          },
          {
              codigo_ibge: 5101258,
              nome: "Araputanga",
              id_estado: 11
          },
          {
              codigo_ibge: 5101308,
              nome: "Arenápolis",
              id_estado: 11
          },
          {
              codigo_ibge: 5101407,
              nome: "Aripuanã",
              id_estado: 11
          },
          {
              codigo_ibge: 5101605,
              nome: "Barão de Melgaço",
              id_estado: 11
          },
          {
              codigo_ibge: 5101704,
              nome: "Barra do Bugres",
              id_estado: 11
          },
          {
              codigo_ibge: 5101803,
              nome: "Barra do Garças",
              id_estado: 11
          },
          {
              codigo_ibge: 5101852,
              nome: "Bom Jesus do Araguaia",
              id_estado: 11
          },
          {
              codigo_ibge: 5101902,
              nome: "Brasnorte",
              id_estado: 11
          },
          {
              codigo_ibge: 5102504,
              nome: "Cáceres",
              id_estado: 11
          },
          {
              codigo_ibge: 5102603,
              nome: "Campinápolis",
              id_estado: 11
          },
          {
              codigo_ibge: 5102637,
              nome: "Campo Novo do Parecis",
              id_estado: 11
          },
          {
              codigo_ibge: 5102678,
              nome: "Campo Verde",
              id_estado: 11
          },
          {
              codigo_ibge: 5102686,
              nome: "Campos de Júlio",
              id_estado: 11
          },
          {
              codigo_ibge: 5102694,
              nome: "Canabrava do Norte",
              id_estado: 11
          },
          {
              codigo_ibge: 5102702,
              nome: "Canarana",
              id_estado: 11
          },
          {
              codigo_ibge: 5102793,
              nome: "Carlinda",
              id_estado: 11
          },
          {
              codigo_ibge: 5102850,
              nome: "Castanheira",
              id_estado: 11
          },
          {
              codigo_ibge: 5103007,
              nome: "Chapada dos Guimarães",
              id_estado: 11
          },
          {
              codigo_ibge: 5103056,
              nome: "Cláudia",
              id_estado: 11
          },
          {
              codigo_ibge: 5103106,
              nome: "Cocalinho",
              id_estado: 11
          },
          {
              codigo_ibge: 5103205,
              nome: "Colíder",
              id_estado: 11
          },
          {
              codigo_ibge: 5103254,
              nome: "Colniza",
              id_estado: 11
          },
          {
              codigo_ibge: 5103304,
              nome: "Comodoro",
              id_estado: 11
          },
          {
              codigo_ibge: 5103353,
              nome: "Confresa",
              id_estado: 11
          },
          {
              codigo_ibge: 5103361,
              nome: "Conquista D'Oeste",
              id_estado: 11
          },
          {
              codigo_ibge: 5103379,
              nome: "Cotriguaçu",
              id_estado: 11
          },
          {
              codigo_ibge: 5103403,
              nome: "Cuiabá",
              id_estado: 11
          },
          {
              codigo_ibge: 5103437,
              nome: "Curvelândia",
              id_estado: 11
          },
          {
              codigo_ibge: 5103452,
              nome: "Denise",
              id_estado: 11
          },
          {
              codigo_ibge: 5103502,
              nome: "Diamantino",
              id_estado: 11
          },
          {
              codigo_ibge: 5103601,
              nome: "Dom Aquino",
              id_estado: 11
          },
          {
              codigo_ibge: 5103700,
              nome: "Feliz Natal",
              id_estado: 11
          },
          {
              codigo_ibge: 5103809,
              nome: "Figueirópolis D'Oeste",
              id_estado: 11
          },
          {
              codigo_ibge: 5103858,
              nome: "Gaúcha do Norte",
              id_estado: 11
          },
          {
              codigo_ibge: 5103908,
              nome: "General Carneiro",
              id_estado: 11
          },
          {
              codigo_ibge: 5103957,
              nome: "Glória D'Oeste",
              id_estado: 11
          },
          {
              codigo_ibge: 5104104,
              nome: "Guarantã do Norte",
              id_estado: 11
          },
          {
              codigo_ibge: 5104203,
              nome: "Guiratinga",
              id_estado: 11
          },
          {
              codigo_ibge: 5104500,
              nome: "Indiavaí",
              id_estado: 11
          },
          {
              codigo_ibge: 5104526,
              nome: "Ipiranga do Norte",
              id_estado: 11
          },
          {
              codigo_ibge: 5104542,
              nome: "Itanhangá",
              id_estado: 11
          },
          {
              codigo_ibge: 5104559,
              nome: "Itaúba",
              id_estado: 11
          },
          {
              codigo_ibge: 5104609,
              nome: "Itiquira",
              id_estado: 11
          },
          {
              codigo_ibge: 5104807,
              nome: "Jaciara",
              id_estado: 11
          },
          {
              codigo_ibge: 5104906,
              nome: "Jangada",
              id_estado: 11
          },
          {
              codigo_ibge: 5105002,
              nome: "Jauru",
              id_estado: 11
          },
          {
              codigo_ibge: 5105101,
              nome: "Juara",
              id_estado: 11
          },
          {
              codigo_ibge: 5105150,
              nome: "Juína",
              id_estado: 11
          },
          {
              codigo_ibge: 5105176,
              nome: "Juruena",
              id_estado: 11
          },
          {
              codigo_ibge: 5105200,
              nome: "Juscimeira",
              id_estado: 11
          },
          {
              codigo_ibge: 5105234,
              nome: "Lambari D'Oeste",
              id_estado: 11
          },
          {
              codigo_ibge: 5105259,
              nome: "Lucas do Rio Verde",
              id_estado: 11
          },
          {
              codigo_ibge: 5105309,
              nome: "Luciara",
              id_estado: 11
          },
          {
              codigo_ibge: 5105507,
              nome: "Vila Bela da Santíssima Trindade",
              id_estado: 11
          },
          {
              codigo_ibge: 5105580,
              nome: "Marcelândia",
              id_estado: 11
          },
          {
              codigo_ibge: 5105606,
              nome: "Matupá",
              id_estado: 11
          },
          {
              codigo_ibge: 5105622,
              nome: "Mirassol D'Oeste",
              id_estado: 11
          },
          {
              codigo_ibge: 5105903,
              nome: "Nobres",
              id_estado: 11
          },
          {
              codigo_ibge: 5106000,
              nome: "Nortelândia",
              id_estado: 11
          },
          {
              codigo_ibge: 5106109,
              nome: "Nossa Senhora do Livramento",
              id_estado: 11
          },
          {
              codigo_ibge: 5106158,
              nome: "Nova Bandeirantes",
              id_estado: 11
          },
          {
              codigo_ibge: 5106174,
              nome: "Nova Nazaré",
              id_estado: 11
          },
          {
              codigo_ibge: 5106182,
              nome: "Nova Lacerda",
              id_estado: 11
          },
          {
              codigo_ibge: 5106190,
              nome: "Nova Santa Helena",
              id_estado: 11
          },
          {
              codigo_ibge: 5106208,
              nome: "Nova Brasilândia",
              id_estado: 11
          },
          {
              codigo_ibge: 5106216,
              nome: "Nova Canaã do Norte",
              id_estado: 11
          },
          {
              codigo_ibge: 5106224,
              nome: "Nova Mutum",
              id_estado: 11
          },
          {
              codigo_ibge: 5106232,
              nome: "Nova Olímpia",
              id_estado: 11
          },
          {
              codigo_ibge: 5106240,
              nome: "Nova Ubiratã",
              id_estado: 11
          },
          {
              codigo_ibge: 5106257,
              nome: "Nova Xavantina",
              id_estado: 11
          },
          {
              codigo_ibge: 5106265,
              nome: "Novo Mundo",
              id_estado: 11
          },
          {
              codigo_ibge: 5106273,
              nome: "Novo Horizonte do Norte",
              id_estado: 11
          },
          {
              codigo_ibge: 5106281,
              nome: "Novo São Joaquim",
              id_estado: 11
          },
          {
              codigo_ibge: 5106299,
              nome: "Paranaíta",
              id_estado: 11
          },
          {
              codigo_ibge: 5106307,
              nome: "Paranatinga",
              id_estado: 11
          },
          {
              codigo_ibge: 5106315,
              nome: "Novo Santo Antônio",
              id_estado: 11
          },
          {
              codigo_ibge: 5106372,
              nome: "Pedra Preta",
              id_estado: 11
          },
          {
              codigo_ibge: 5106422,
              nome: "Peixoto de Azevedo",
              id_estado: 11
          },
          {
              codigo_ibge: 5106455,
              nome: "Planalto da Serra",
              id_estado: 11
          },
          {
              codigo_ibge: 5106505,
              nome: "Poconé",
              id_estado: 11
          },
          {
              codigo_ibge: 5106653,
              nome: "Pontal do Araguaia",
              id_estado: 11
          },
          {
              codigo_ibge: 5106703,
              nome: "Ponte Branca",
              id_estado: 11
          },
          {
              codigo_ibge: 5106752,
              nome: "Pontes e Lacerda",
              id_estado: 11
          },
          {
              codigo_ibge: 5106778,
              nome: "Porto Alegre do Norte",
              id_estado: 11
          },
          {
              codigo_ibge: 5106802,
              nome: "Porto dos Gaúchos",
              id_estado: 11
          },
          {
              codigo_ibge: 5106828,
              nome: "Porto Esperidião",
              id_estado: 11
          },
          {
              codigo_ibge: 5106851,
              nome: "Porto Estrela",
              id_estado: 11
          },
          {
              codigo_ibge: 5107008,
              nome: "Poxoréo",
              id_estado: 11
          },
          {
              codigo_ibge: 5107040,
              nome: "Primavera do Leste",
              id_estado: 11
          },
          {
              codigo_ibge: 5107065,
              nome: "Querência",
              id_estado: 11
          },
          {
              codigo_ibge: 5107107,
              nome: "São José dos Quatro Marcos",
              id_estado: 11
          },
          {
              codigo_ibge: 5107156,
              nome: "Reserva do Cabaçal",
              id_estado: 11
          },
          {
              codigo_ibge: 5107180,
              nome: "Ribeirão Cascalheira",
              id_estado: 11
          },
          {
              codigo_ibge: 5107198,
              nome: "Ribeirãozinho",
              id_estado: 11
          },
          {
              codigo_ibge: 5107206,
              nome: "Rio Branco",
              id_estado: 11
          },
          {
              codigo_ibge: 5107248,
              nome: "Santa Carmem",
              id_estado: 11
          },
          {
              codigo_ibge: 5107263,
              nome: "Santo Afonso",
              id_estado: 11
          },
          {
              codigo_ibge: 5107297,
              nome: "São José do Povo",
              id_estado: 11
          },
          {
              codigo_ibge: 5107305,
              nome: "São José do Rio Claro",
              id_estado: 11
          },
          {
              codigo_ibge: 5107354,
              nome: "São José do Xingu",
              id_estado: 11
          },
          {
              codigo_ibge: 5107404,
              nome: "São Pedro da Cipa",
              id_estado: 11
          },
          {
              codigo_ibge: 5107578,
              nome: "Rondolândia",
              id_estado: 11
          },
          {
              codigo_ibge: 5107602,
              nome: "Rondonópolis",
              id_estado: 11
          },
          {
              codigo_ibge: 5107701,
              nome: "Rosário Oeste",
              id_estado: 11
          },
          {
              codigo_ibge: 5107743,
              nome: "Santa Cruz do Xingu",
              id_estado: 11
          },
          {
              codigo_ibge: 5107750,
              nome: "Salto do Céu",
              id_estado: 11
          },
          {
              codigo_ibge: 5107768,
              nome: "Santa Rita do Trivelato",
              id_estado: 11
          },
          {
              codigo_ibge: 5107776,
              nome: "Santa Terezinha",
              id_estado: 11
          },
          {
              codigo_ibge: 5107792,
              nome: "Santo Antônio do Leste",
              id_estado: 11
          },
          {
              codigo_ibge: 5107800,
              nome: "Santo Antônio do Leverger",
              id_estado: 11
          },
          {
              codigo_ibge: 5107859,
              nome: "São Félix do Araguaia",
              id_estado: 11
          },
          {
              codigo_ibge: 5107875,
              nome: "Sapezal",
              id_estado: 11
          },
          {
              codigo_ibge: 5107883,
              nome: "Serra Nova Dourada",
              id_estado: 11
          },
          {
              codigo_ibge: 5107909,
              nome: "Sinop",
              id_estado: 11
          },
          {
              codigo_ibge: 5107925,
              nome: "Sorriso",
              id_estado: 11
          },
          {
              codigo_ibge: 5107941,
              nome: "Tabaporã",
              id_estado: 11
          },
          {
              codigo_ibge: 5107958,
              nome: "Tangará da Serra",
              id_estado: 11
          },
          {
              codigo_ibge: 5108006,
              nome: "Tapurah",
              id_estado: 11
          },
          {
              codigo_ibge: 5108055,
              nome: "Terra Nova do Norte",
              id_estado: 11
          },
          {
              codigo_ibge: 5108105,
              nome: "Tesouro",
              id_estado: 11
          },
          {
              codigo_ibge: 5108204,
              nome: "Torixoréu",
              id_estado: 11
          },
          {
              codigo_ibge: 5108303,
              nome: "União do Sul",
              id_estado: 11
          },
          {
              codigo_ibge: 5108352,
              nome: "Vale de São Domingos",
              id_estado: 11
          },
          {
              codigo_ibge: 5108402,
              nome: "Várzea Grande",
              id_estado: 11
          },
          {
              codigo_ibge: 5108501,
              nome: "Vera",
              id_estado: 11
          },
          {
              codigo_ibge: 5108600,
              nome: "Vila Rica",
              id_estado: 11
          },
          {
              codigo_ibge: 5108808,
              nome: "Nova Guarita",
              id_estado: 11
          },
          {
              codigo_ibge: 5108857,
              nome: "Nova Marilândia",
              id_estado: 11
          },
          {
              codigo_ibge: 5108907,
              nome: "Nova Maringá",
              id_estado: 11
          },
          {
              codigo_ibge: 5108956,
              nome: "Nova Monte Verde",
              id_estado: 11
          },
          {
              codigo_ibge: 5200050,
              nome: "Abadia de Goiás",
              id_estado: 9
          },
          {
              codigo_ibge: 5200100,
              nome: "Abadiânia",
              id_estado: 9
          },
          {
              codigo_ibge: 5200134,
              nome: "Acreúna",
              id_estado: 9
          },
          {
              codigo_ibge: 5200159,
              nome: "Adelândia",
              id_estado: 9
          },
          {
              codigo_ibge: 5200175,
              nome: "Água Fria de Goiás",
              id_estado: 9
          },
          {
              codigo_ibge: 5200209,
              nome: "Água Limpa",
              id_estado: 9
          },
          {
              codigo_ibge: 5200258,
              nome: "Águas Lindas de Goiás",
              id_estado: 9
          },
          {
              codigo_ibge: 5200308,
              nome: "Alexânia",
              id_estado: 9
          },
          {
              codigo_ibge: 5200506,
              nome: "Aloândia",
              id_estado: 9
          },
          {
              codigo_ibge: 5200555,
              nome: "Alto Horizonte",
              id_estado: 9
          },
          {
              codigo_ibge: 5200605,
              nome: "Alto Paraíso de Goiás",
              id_estado: 9
          },
          {
              codigo_ibge: 5200803,
              nome: "Alvorada do Norte",
              id_estado: 9
          },
          {
              codigo_ibge: 5200829,
              nome: "Amaralina",
              id_estado: 9
          },
          {
              codigo_ibge: 5200852,
              nome: "Americano do Brasil",
              id_estado: 9
          },
          {
              codigo_ibge: 5200902,
              nome: "Amorinópolis",
              id_estado: 9
          },
          {
              codigo_ibge: 5201108,
              nome: "Anápolis",
              id_estado: 9
          },
          {
              codigo_ibge: 5201207,
              nome: "Anhanguera",
              id_estado: 9
          },
          {
              codigo_ibge: 5201306,
              nome: "Anicuns",
              id_estado: 9
          },
          {
              codigo_ibge: 5201405,
              nome: "Aparecida de Goiânia",
              id_estado: 9
          },
          {
              codigo_ibge: 5201454,
              nome: "Aparecida do Rio Doce",
              id_estado: 9
          },
          {
              codigo_ibge: 5201504,
              nome: "Aporé",
              id_estado: 9
          },
          {
              codigo_ibge: 5201603,
              nome: "Araçu",
              id_estado: 9
          },
          {
              codigo_ibge: 5201702,
              nome: "Aragarças",
              id_estado: 9
          },
          {
              codigo_ibge: 5201801,
              nome: "Aragoiânia",
              id_estado: 9
          },
          {
              codigo_ibge: 5202155,
              nome: "Araguapaz",
              id_estado: 9
          },
          {
              codigo_ibge: 5202353,
              nome: "Arenópolis",
              id_estado: 9
          },
          {
              codigo_ibge: 5202502,
              nome: "Aruanã",
              id_estado: 9
          },
          {
              codigo_ibge: 5202601,
              nome: "Aurilândia",
              id_estado: 9
          },
          {
              codigo_ibge: 5202809,
              nome: "Avelinópolis",
              id_estado: 9
          },
          {
              codigo_ibge: 5203104,
              nome: "Baliza",
              id_estado: 9
          },
          {
              codigo_ibge: 5203203,
              nome: "Barro Alto",
              id_estado: 9
          },
          {
              codigo_ibge: 5203302,
              nome: "Bela Vista de Goiás",
              id_estado: 9
          },
          {
              codigo_ibge: 5203401,
              nome: "Bom Jardim de Goiás",
              id_estado: 9
          },
          {
              codigo_ibge: 5203500,
              nome: "Bom Jesus de Goiás",
              id_estado: 9
          },
          {
              codigo_ibge: 5203559,
              nome: "Bonfinópolis",
              id_estado: 9
          },
          {
              codigo_ibge: 5203575,
              nome: "Bonópolis",
              id_estado: 9
          },
          {
              codigo_ibge: 5203609,
              nome: "Brazabrantes",
              id_estado: 9
          },
          {
              codigo_ibge: 5203807,
              nome: "Britânia",
              id_estado: 9
          },
          {
              codigo_ibge: 5203906,
              nome: "Buriti Alegre",
              id_estado: 9
          },
          {
              codigo_ibge: 5203939,
              nome: "Buriti de Goiás",
              id_estado: 9
          },
          {
              codigo_ibge: 5203962,
              nome: "Buritinópolis",
              id_estado: 9
          },
          {
              codigo_ibge: 5204003,
              nome: "Cabeceiras",
              id_estado: 9
          },
          {
              codigo_ibge: 5204102,
              nome: "Cachoeira Alta",
              id_estado: 9
          },
          {
              codigo_ibge: 5204201,
              nome: "Cachoeira de Goiás",
              id_estado: 9
          },
          {
              codigo_ibge: 5204250,
              nome: "Cachoeira Dourada",
              id_estado: 9
          },
          {
              codigo_ibge: 5204300,
              nome: "Caçu",
              id_estado: 9
          },
          {
              codigo_ibge: 5204409,
              nome: "Caiapônia",
              id_estado: 9
          },
          {
              codigo_ibge: 5204508,
              nome: "Caldas Novas",
              id_estado: 9
          },
          {
              codigo_ibge: 5204557,
              nome: "Caldazinha",
              id_estado: 9
          },
          {
              codigo_ibge: 5204607,
              nome: "Campestre de Goiás",
              id_estado: 9
          },
          {
              codigo_ibge: 5204656,
              nome: "Campinaçu",
              id_estado: 9
          },
          {
              codigo_ibge: 5204706,
              nome: "Campinorte",
              id_estado: 9
          },
          {
              codigo_ibge: 5204805,
              nome: "Campo Alegre de Goiás",
              id_estado: 9
          },
          {
              codigo_ibge: 5204854,
              nome: "Campo Limpo de Goiás",
              id_estado: 9
          },
          {
              codigo_ibge: 5204904,
              nome: "Campos Belos",
              id_estado: 9
          },
          {
              codigo_ibge: 5204953,
              nome: "Campos Verdes",
              id_estado: 9
          },
          {
              codigo_ibge: 5205000,
              nome: "Carmo do Rio Verde",
              id_estado: 9
          },
          {
              codigo_ibge: 5205059,
              nome: "Castelândia",
              id_estado: 9
          },
          {
              codigo_ibge: 5205109,
              nome: "Catalão",
              id_estado: 9
          },
          {
              codigo_ibge: 5205208,
              nome: "Caturaí",
              id_estado: 9
          },
          {
              codigo_ibge: 5205307,
              nome: "Cavalcante",
              id_estado: 9
          },
          {
              codigo_ibge: 5205406,
              nome: "Ceres",
              id_estado: 9
          },
          {
              codigo_ibge: 5205455,
              nome: "Cezarina",
              id_estado: 9
          },
          {
              codigo_ibge: 5205471,
              nome: "Chapadão do Céu",
              id_estado: 9
          },
          {
              codigo_ibge: 5205497,
              nome: "Cidade Ocidental",
              id_estado: 9
          },
          {
              codigo_ibge: 5205513,
              nome: "Cocalzinho de Goiás",
              id_estado: 9
          },
          {
              codigo_ibge: 5205521,
              nome: "Colinas do Sul",
              id_estado: 9
          },
          {
              codigo_ibge: 5205703,
              nome: "Córrego do Ouro",
              id_estado: 9
          },
          {
              codigo_ibge: 5205802,
              nome: "Corumbá de Goiás",
              id_estado: 9
          },
          {
              codigo_ibge: 5205901,
              nome: "Corumbaíba",
              id_estado: 9
          },
          {
              codigo_ibge: 5206206,
              nome: "Cristalina",
              id_estado: 9
          },
          {
              codigo_ibge: 5206305,
              nome: "Cristianópolis",
              id_estado: 9
          },
          {
              codigo_ibge: 5206404,
              nome: "Crixás",
              id_estado: 9
          },
          {
              codigo_ibge: 5206503,
              nome: "Cromínia",
              id_estado: 9
          },
          {
              codigo_ibge: 5206602,
              nome: "Cumari",
              id_estado: 9
          },
          {
              codigo_ibge: 5206701,
              nome: "Damianópolis",
              id_estado: 9
          },
          {
              codigo_ibge: 5206800,
              nome: "Damolândia",
              id_estado: 9
          },
          {
              codigo_ibge: 5206909,
              nome: "Davinópolis",
              id_estado: 9
          },
          {
              codigo_ibge: 5207105,
              nome: "Diorama",
              id_estado: 9
          },
          {
              codigo_ibge: 5207253,
              nome: "Doverlândia",
              id_estado: 9
          },
          {
              codigo_ibge: 5207352,
              nome: "Edealina",
              id_estado: 9
          },
          {
              codigo_ibge: 5207402,
              nome: "Edéia",
              id_estado: 9
          },
          {
              codigo_ibge: 5207501,
              nome: "Estrela do Norte",
              id_estado: 9
          },
          {
              codigo_ibge: 5207535,
              nome: "Faina",
              id_estado: 9
          },
          {
              codigo_ibge: 5207600,
              nome: "Fazenda Nova",
              id_estado: 9
          },
          {
              codigo_ibge: 5207808,
              nome: "Firminópolis",
              id_estado: 9
          },
          {
              codigo_ibge: 5207907,
              nome: "Flores de Goiás",
              id_estado: 9
          },
          {
              codigo_ibge: 5208004,
              nome: "Formosa",
              id_estado: 9
          },
          {
              codigo_ibge: 5208103,
              nome: "Formoso",
              id_estado: 9
          },
          {
              codigo_ibge: 5208152,
              nome: "Gameleira de Goiás",
              id_estado: 9
          },
          {
              codigo_ibge: 5208301,
              nome: "Divinópolis de Goiás",
              id_estado: 9
          },
          {
              codigo_ibge: 5208400,
              nome: "Goianápolis",
              id_estado: 9
          },
          {
              codigo_ibge: 5208509,
              nome: "Goiandira",
              id_estado: 9
          },
          {
              codigo_ibge: 5208608,
              nome: "Goianésia",
              id_estado: 9
          },
          {
              codigo_ibge: 5208707,
              nome: "Goiânia",
              id_estado: 9
          },
          {
              codigo_ibge: 5208806,
              nome: "Goianira",
              id_estado: 9
          },
          {
              codigo_ibge: 5208905,
              nome: "Goiás",
              id_estado: 9
          },
          {
              codigo_ibge: 5209101,
              nome: "Goiatuba",
              id_estado: 9
          },
          {
              codigo_ibge: 5209150,
              nome: "Gouvelândia",
              id_estado: 9
          },
          {
              codigo_ibge: 5209200,
              nome: "Guapó",
              id_estado: 9
          },
          {
              codigo_ibge: 5209291,
              nome: "Guaraíta",
              id_estado: 9
          },
          {
              codigo_ibge: 5209408,
              nome: "Guarani de Goiás",
              id_estado: 9
          },
          {
              codigo_ibge: 5209457,
              nome: "Guarinos",
              id_estado: 9
          },
          {
              codigo_ibge: 5209606,
              nome: "Heitoraí",
              id_estado: 9
          },
          {
              codigo_ibge: 5209705,
              nome: "Hidrolândia",
              id_estado: 9
          },
          {
              codigo_ibge: 5209804,
              nome: "Hidrolina",
              id_estado: 9
          },
          {
              codigo_ibge: 5209903,
              nome: "Iaciara",
              id_estado: 9
          },
          {
              codigo_ibge: 5209937,
              nome: "Inaciolândia",
              id_estado: 9
          },
          {
              codigo_ibge: 5209952,
              nome: "Indiara",
              id_estado: 9
          },
          {
              codigo_ibge: 5210000,
              nome: "Inhumas",
              id_estado: 9
          },
          {
              codigo_ibge: 5210109,
              nome: "Ipameri",
              id_estado: 9
          },
          {
              codigo_ibge: 5210158,
              nome: "Ipiranga de Goiás",
              id_estado: 9
          },
          {
              codigo_ibge: 5210208,
              nome: "Iporá",
              id_estado: 9
          },
          {
              codigo_ibge: 5210307,
              nome: "Israelândia",
              id_estado: 9
          },
          {
              codigo_ibge: 5210406,
              nome: "Itaberaí",
              id_estado: 9
          },
          {
              codigo_ibge: 5210562,
              nome: "Itaguari",
              id_estado: 9
          },
          {
              codigo_ibge: 5210604,
              nome: "Itaguaru",
              id_estado: 9
          },
          {
              codigo_ibge: 5210802,
              nome: "Itajá",
              id_estado: 9
          },
          {
              codigo_ibge: 5210901,
              nome: "Itapaci",
              id_estado: 9
          },
          {
              codigo_ibge: 5211008,
              nome: "Itapirapuã",
              id_estado: 9
          },
          {
              codigo_ibge: 5211206,
              nome: "Itapuranga",
              id_estado: 9
          },
          {
              codigo_ibge: 5211305,
              nome: "Itarumã",
              id_estado: 9
          },
          {
              codigo_ibge: 5211404,
              nome: "Itauçu",
              id_estado: 9
          },
          {
              codigo_ibge: 5211503,
              nome: "Itumbiara",
              id_estado: 9
          },
          {
              codigo_ibge: 5211602,
              nome: "Ivolândia",
              id_estado: 9
          },
          {
              codigo_ibge: 5211701,
              nome: "Jandaia",
              id_estado: 9
          },
          {
              codigo_ibge: 5211800,
              nome: "Jaraguá",
              id_estado: 9
          },
          {
              codigo_ibge: 5211909,
              nome: "Jataí",
              id_estado: 9
          },
          {
              codigo_ibge: 5212006,
              nome: "Jaupaci",
              id_estado: 9
          },
          {
              codigo_ibge: 5212055,
              nome: "Jesúpolis",
              id_estado: 9
          },
          {
              codigo_ibge: 5212105,
              nome: "Joviânia",
              id_estado: 9
          },
          {
              codigo_ibge: 5212204,
              nome: "Jussara",
              id_estado: 9
          },
          {
              codigo_ibge: 5212253,
              nome: "Lagoa Santa",
              id_estado: 9
          },
          {
              codigo_ibge: 5212303,
              nome: "Leopoldo de Bulhões",
              id_estado: 9
          },
          {
              codigo_ibge: 5212501,
              nome: "Luziânia",
              id_estado: 9
          },
          {
              codigo_ibge: 5212600,
              nome: "Mairipotaba",
              id_estado: 9
          },
          {
              codigo_ibge: 5212709,
              nome: "Mambaí",
              id_estado: 9
          },
          {
              codigo_ibge: 5212808,
              nome: "Mara Rosa",
              id_estado: 9
          },
          {
              codigo_ibge: 5212907,
              nome: "Marzagão",
              id_estado: 9
          },
          {
              codigo_ibge: 5212956,
              nome: "Matrinchã",
              id_estado: 9
          },
          {
              codigo_ibge: 5213004,
              nome: "Maurilândia",
              id_estado: 9
          },
          {
              codigo_ibge: 5213053,
              nome: "Mimoso de Goiás",
              id_estado: 9
          },
          {
              codigo_ibge: 5213087,
              nome: "Minaçu",
              id_estado: 9
          },
          {
              codigo_ibge: 5213103,
              nome: "Mineiros",
              id_estado: 9
          },
          {
              codigo_ibge: 5213400,
              nome: "Moiporá",
              id_estado: 9
          },
          {
              codigo_ibge: 5213509,
              nome: "Monte Alegre de Goiás",
              id_estado: 9
          },
          {
              codigo_ibge: 5213707,
              nome: "Montes Claros de Goiás",
              id_estado: 9
          },
          {
              codigo_ibge: 5213756,
              nome: "Montividiu",
              id_estado: 9
          },
          {
              codigo_ibge: 5213772,
              nome: "Montividiu do Norte",
              id_estado: 9
          },
          {
              codigo_ibge: 5213806,
              nome: "Morrinhos",
              id_estado: 9
          },
          {
              codigo_ibge: 5213855,
              nome: "Morro Agudo de Goiás",
              id_estado: 9
          },
          {
              codigo_ibge: 5213905,
              nome: "Mossâmedes",
              id_estado: 9
          },
          {
              codigo_ibge: 5214002,
              nome: "Mozarlândia",
              id_estado: 9
          },
          {
              codigo_ibge: 5214051,
              nome: "Mundo Novo",
              id_estado: 9
          },
          {
              codigo_ibge: 5214101,
              nome: "Mutunópolis",
              id_estado: 9
          },
          {
              codigo_ibge: 5214408,
              nome: "Nazário",
              id_estado: 9
          },
          {
              codigo_ibge: 5214507,
              nome: "Nerópolis",
              id_estado: 9
          },
          {
              codigo_ibge: 5214606,
              nome: "Niquelândia",
              id_estado: 9
          },
          {
              codigo_ibge: 5214705,
              nome: "Nova América",
              id_estado: 9
          },
          {
              codigo_ibge: 5214804,
              nome: "Nova Aurora",
              id_estado: 9
          },
          {
              codigo_ibge: 5214838,
              nome: "Nova Crixás",
              id_estado: 9
          },
          {
              codigo_ibge: 5214861,
              nome: "Nova Glória",
              id_estado: 9
          },
          {
              codigo_ibge: 5214879,
              nome: "Nova Iguaçu de Goiás",
              id_estado: 9
          },
          {
              codigo_ibge: 5214903,
              nome: "Nova Roma",
              id_estado: 9
          },
          {
              codigo_ibge: 5215009,
              nome: "Nova Veneza",
              id_estado: 9
          },
          {
              codigo_ibge: 5215207,
              nome: "Novo Brasil",
              id_estado: 9
          },
          {
              codigo_ibge: 5215231,
              nome: "Novo Gama",
              id_estado: 9
          },
          {
              codigo_ibge: 5215256,
              nome: "Novo Planalto",
              id_estado: 9
          },
          {
              codigo_ibge: 5215306,
              nome: "Orizona",
              id_estado: 9
          },
          {
              codigo_ibge: 5215405,
              nome: "Ouro Verde de Goiás",
              id_estado: 9
          },
          {
              codigo_ibge: 5215504,
              nome: "Ouvidor",
              id_estado: 9
          },
          {
              codigo_ibge: 5215603,
              nome: "Padre Bernardo",
              id_estado: 9
          },
          {
              codigo_ibge: 5215652,
              nome: "Palestina de Goiás",
              id_estado: 9
          },
          {
              codigo_ibge: 5215702,
              nome: "Palmeiras de Goiás",
              id_estado: 9
          },
          {
              codigo_ibge: 5215801,
              nome: "Palmelo",
              id_estado: 9
          },
          {
              codigo_ibge: 5215900,
              nome: "Palminópolis",
              id_estado: 9
          },
          {
              codigo_ibge: 5216007,
              nome: "Panamá",
              id_estado: 9
          },
          {
              codigo_ibge: 5216304,
              nome: "Paranaiguara",
              id_estado: 9
          },
          {
              codigo_ibge: 5216403,
              nome: "Paraúna",
              id_estado: 9
          },
          {
              codigo_ibge: 5216452,
              nome: "Perolândia",
              id_estado: 9
          },
          {
              codigo_ibge: 5216809,
              nome: "Petrolina de Goiás",
              id_estado: 9
          },
          {
              codigo_ibge: 5216908,
              nome: "Pilar de Goiás",
              id_estado: 9
          },
          {
              codigo_ibge: 5217104,
              nome: "Piracanjuba",
              id_estado: 9
          },
          {
              codigo_ibge: 5217203,
              nome: "Piranhas",
              id_estado: 9
          },
          {
              codigo_ibge: 5217302,
              nome: "Pirenópolis",
              id_estado: 9
          },
          {
              codigo_ibge: 5217401,
              nome: "Pires do Rio",
              id_estado: 9
          },
          {
              codigo_ibge: 5217609,
              nome: "Planaltina",
              id_estado: 9
          },
          {
              codigo_ibge: 5217708,
              nome: "Pontalina",
              id_estado: 9
          },
          {
              codigo_ibge: 5218003,
              nome: "Porangatu",
              id_estado: 9
          },
          {
              codigo_ibge: 5218052,
              nome: "Porteirão",
              id_estado: 9
          },
          {
              codigo_ibge: 5218102,
              nome: "Portelândia",
              id_estado: 9
          },
          {
              codigo_ibge: 5218300,
              nome: "Posse",
              id_estado: 9
          },
          {
              codigo_ibge: 5218391,
              nome: "Professor Jamil",
              id_estado: 9
          },
          {
              codigo_ibge: 5218508,
              nome: "Quirinópolis",
              id_estado: 9
          },
          {
              codigo_ibge: 5218607,
              nome: "Rialma",
              id_estado: 9
          },
          {
              codigo_ibge: 5218706,
              nome: "Rianápolis",
              id_estado: 9
          },
          {
              codigo_ibge: 5218789,
              nome: "Rio Quente",
              id_estado: 9
          },
          {
              codigo_ibge: 5218805,
              nome: "Rio Verde",
              id_estado: 9
          },
          {
              codigo_ibge: 5218904,
              nome: "Rubiataba",
              id_estado: 9
          },
          {
              codigo_ibge: 5219001,
              nome: "Sanclerlândia",
              id_estado: 9
          },
          {
              codigo_ibge: 5219100,
              nome: "Santa Bárbara de Goiás",
              id_estado: 9
          },
          {
              codigo_ibge: 5219209,
              nome: "Santa Cruz de Goiás",
              id_estado: 9
          },
          {
              codigo_ibge: 5219258,
              nome: "Santa Fé de Goiás",
              id_estado: 9
          },
          {
              codigo_ibge: 5219308,
              nome: "Santa Helena de Goiás",
              id_estado: 9
          },
          {
              codigo_ibge: 5219357,
              nome: "Santa Isabel",
              id_estado: 9
          },
          {
              codigo_ibge: 5219407,
              nome: "Santa Rita do Araguaia",
              id_estado: 9
          },
          {
              codigo_ibge: 5219456,
              nome: "Santa Rita do Novo Destino",
              id_estado: 9
          },
          {
              codigo_ibge: 5219506,
              nome: "Santa Rosa de Goiás",
              id_estado: 9
          },
          {
              codigo_ibge: 5219605,
              nome: "Santa Tereza de Goiás",
              id_estado: 9
          },
          {
              codigo_ibge: 5219704,
              nome: "Santa Terezinha de Goiás",
              id_estado: 9
          },
          {
              codigo_ibge: 5219712,
              nome: "Santo Antônio da Barra",
              id_estado: 9
          },
          {
              codigo_ibge: 5219738,
              nome: "Santo Antônio de Goiás",
              id_estado: 9
          },
          {
              codigo_ibge: 5219753,
              nome: "Santo Antônio do Descoberto",
              id_estado: 9
          },
          {
              codigo_ibge: 5219803,
              nome: "São Domingos",
              id_estado: 9
          },
          {
              codigo_ibge: 5219902,
              nome: "São Francisco de Goiás",
              id_estado: 9
          },
          {
              codigo_ibge: 5220009,
              nome: "São João D'Aliança",
              id_estado: 9
          },
          {
              codigo_ibge: 5220058,
              nome: "São João da Paraúna",
              id_estado: 9
          },
          {
              codigo_ibge: 5220108,
              nome: "São Luís de Montes Belos",
              id_estado: 9
          },
          {
              codigo_ibge: 5220157,
              nome: "São Luíz do Norte",
              id_estado: 9
          },
          {
              codigo_ibge: 5220207,
              nome: "São Miguel do Araguaia",
              id_estado: 9
          },
          {
              codigo_ibge: 5220264,
              nome: "São Miguel do Passa Quatro",
              id_estado: 9
          },
          {
              codigo_ibge: 5220280,
              nome: "São Patrício",
              id_estado: 9
          },
          {
              codigo_ibge: 5220405,
              nome: "São Simão",
              id_estado: 9
          },
          {
              codigo_ibge: 5220454,
              nome: "Senador Canedo",
              id_estado: 9
          },
          {
              codigo_ibge: 5220504,
              nome: "Serranópolis",
              id_estado: 9
          },
          {
              codigo_ibge: 5220603,
              nome: "Silvânia",
              id_estado: 9
          },
          {
              codigo_ibge: 5220686,
              nome: "Simolândia",
              id_estado: 9
          },
          {
              codigo_ibge: 5220702,
              nome: "Sítio D'Abadia",
              id_estado: 9
          },
          {
              codigo_ibge: 5221007,
              nome: "Taquaral de Goiás",
              id_estado: 9
          },
          {
              codigo_ibge: 5221080,
              nome: "Teresina de Goiás",
              id_estado: 9
          },
          {
              codigo_ibge: 5221197,
              nome: "Terezópolis de Goiás",
              id_estado: 9
          },
          {
              codigo_ibge: 5221304,
              nome: "Três Ranchos",
              id_estado: 9
          },
          {
              codigo_ibge: 5221403,
              nome: "Trindade",
              id_estado: 9
          },
          {
              codigo_ibge: 5221452,
              nome: "Trombas",
              id_estado: 9
          },
          {
              codigo_ibge: 5221502,
              nome: "Turvânia",
              id_estado: 9
          },
          {
              codigo_ibge: 5221551,
              nome: "Turvelândia",
              id_estado: 9
          },
          {
              codigo_ibge: 5221577,
              nome: "Uirapuru",
              id_estado: 9
          },
          {
              codigo_ibge: 5221601,
              nome: "Uruaçu",
              id_estado: 9
          },
          {
              codigo_ibge: 5221700,
              nome: "Uruana",
              id_estado: 9
          },
          {
              codigo_ibge: 5221809,
              nome: "Urutaí",
              id_estado: 9
          },
          {
              codigo_ibge: 5221858,
              nome: "Valparaíso de Goiás",
              id_estado: 9
          },
          {
              codigo_ibge: 5221908,
              nome: "Varjão",
              id_estado: 9
          },
          {
              codigo_ibge: 5222005,
              nome: "Vianópolis",
              id_estado: 9
          },
          {
              codigo_ibge: 5222054,
              nome: "Vicentinópolis",
              id_estado: 9
          },
          {
              codigo_ibge: 5222203,
              nome: "Vila Boa",
              id_estado: 9
          },
          {
              codigo_ibge: 5222302,
              nome: "Vila Propício",
              id_estado: 9
          },
          {
              codigo_ibge: 5300108,
              nome: "Brasília",
              id_estado: 7
          }
      ];

  console.log(" -- executando carga de cidades -- ");

  const chunkSize = 500; // Defina um tamanho seguro para o SQL
  for (let i = 0; i < cidadesBrasilIbge.length; i += chunkSize) {
    const chunk = cidadesBrasilIbge.slice(i, i + chunkSize);
    await Conn('cidades').insert(chunk);
  }
  console.log("Carga de cidades concluída com sucesso!");
}
