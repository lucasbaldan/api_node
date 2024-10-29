import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";
import { object } from "yup";

describe('Cidades - Insert or Update', () => {

    
    it('Validadores de entrada', async () => {

        const result = await testServer.post('/cidades')
            .send({ nome: 'a', uf: 'es' });

            expect(result.statusCode).toEqual(StatusCodes.BAD_REQUEST);
            expect(result.body).toHaveProperty("errors.body.nome")
    });

    it('Tenta inserir ou atualizar', async () => {

        const result = await testServer.post('/cidades')
            .send({ nome: 'Caxias do Sul' });

            expect(result.statusCode).toEqual(StatusCodes.OK);
            expect(result.body).toEqual("object");
    });
});


