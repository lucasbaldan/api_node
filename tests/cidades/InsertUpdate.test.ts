import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";
import { object } from "yup";

describe('Cidades - Insert or Update', () => {

    
    it('Validadores de entrada', async () => {

        const result = await testServer.post('/cidades')
            .send({ nome: 'a', uf: 'es', codigo_ibge: 'askc$%¨#$%$¨%' });

        const result1 = await testServer.post('/cidades')
            .send({ });

            expect(result.statusCode).toEqual(StatusCodes.BAD_REQUEST);
            expect(result.body).toHaveProperty("errors.body.nome");
            expect(result.body).toHaveProperty("errors.body.codigo_ibge");

            expect(result1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
            expect(result1.body).toHaveProperty("errors.body.nome");
            expect(result1.body).toHaveProperty("errors.body.uf");
    });

    it('Tenta inserir', async () => {

        const result = await testServer.post('/cidades')
            .send({ nome: 'Caxias do Sul', uf: "ES" });

            expect(result.statusCode).toEqual(StatusCodes.OK);
            expect(result.body).toHaveProperty("main_error");
    });

    it('Tenta atualizar', async () => {

        const result = await testServer.post('/cidades')
            .send({ nome: 'Caxias do Sul', uf: "ES" });

            expect(result.statusCode).toEqual(StatusCodes.OK);
            expect(result.body).toHaveProperty("main_error");
    });
    
});


