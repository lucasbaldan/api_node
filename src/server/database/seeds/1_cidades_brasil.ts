import { Knex } from "knex";
import { ICidade } from "../../entities";

export const seed = async (Conn: Knex) => {
    const [{ count }] = await Conn('cidades').count<[{count: number}]>('* as count');
    if(!Number.isInteger(count) || Number(count)) {
      // console.log('-- seed cidades não executado -> a tabela possui registros -- ');
      return;
    }


    const cidadesES = [
        "Afonso Cláudio",
        "Água Doce do Norte",
        "Águia Branca",
        "Alegre",
        "Alfredo Chaves",
        "Alto Rio Novo",
        "Anchieta",
        "Apiacá",
        "Aracruz",
        "Atilio Vivacqua",
        "Baixo Guandu",
        "Barra de São Francisco",
        "Boa Esperança",
        "Bom Jesus do Norte",
        "Brejetuba",
        "Cachoeiro de Itapemirim",
        "Cariacica",
        "Castelo",
        "Colatina",
        "Conceição da Barra",
        "Conceição do Castelo",
        "Divino de São Lourenço",
        "Domingos Martins",
        "Dores do Rio Preto",
        "Ecoporanga",
        "Fundão",
        "Governador Lindenberg",
        "Guaçuí",
        "Guarapari",
        "Ibatiba",
        "Ibiraçu",
        "Ibitirama",
        "Iconha",
        "Irupi",
        "Itaguaçu",
        "Itapemirim",
        "Itarana",
        "Iúna",
        "Jaguaré",
        "Jerônimo Monteiro",
        "João Neiva",
        "Laranja da Terra",
        "Linhares",
        "Mantenópolis",
        "Marataizes",
        "Marechal Floriano",
        "Marilândia",
        "Mimoso do Sul",
        "Montanha",
        "Mucurici",
        "Muniz Freire",
        "Muqui",
        "Nova Venécia",
        "Pancas",
        "Pedro Canário",
        "Pinheiros",
        "Piúma",
        "Ponto Belo",
        "Presidente Kennedy",
        "Rio Bananal",
        "Rio Novo do Sul",
        "Santa Leopoldina",
        "Santa Maria de Jetibá",
        "Santa Teresa",
        "São Domingos do Norte",
        "São Gabriel da Palha",
        "São José do Calçado",
        "São Mateus",
        "São Roque do Canaã",
        "Serra",
        "Sooretama",
        "Vargem Alta",
        "Venda Nova do Imigrante",
        "Viana",
        "Vila Pavão",
        "Vila Valério",
        "Vila Velha",
        "Vitória"
      ];

      const dadosCidades: ICidade[] = cidadesES.map((cidade) => ({
        ativo: true,
        id_estado: 1,
        nome: cidade,
      })) as ICidade[];
      
    console.log(" -- executando carga de cidades -- ");
    await Conn('cidades').insert(dadosCidades);
    
}