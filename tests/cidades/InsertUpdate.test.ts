import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";
import { number, object } from "yup";

describe('Cidades - Insert or Update', () => {

    
    it('Validadores de entrada', async () => {

        const result = await testServer.post('/cidades')
            .send({ nome: 'a', id_estado: 'es', ativo: 'evwe' });

        const result1 = await testServer.post('/cidades')
            .send({ });

            expect(result.statusCode).toEqual(StatusCodes.BAD_REQUEST);
            expect(result.body).toHaveProperty("errors.body.nome");
            expect(result.body).toHaveProperty("errors.body.id_estado");
            expect(result.body).toHaveProperty("errors.body.ativo");

            expect(result1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
            expect(result1.body).toHaveProperty("errors.body.nome");
            expect(result1.body).toHaveProperty("errors.body.id_estado");
            expect(result1.body).toHaveProperty("errors.body.ativo");
    });

    it('Tenta inserir', async () => {

        const result = await testServer.post('/cidades')
            .send({ nome: 'Caxias do Sul', id_estado: 1, ativo: true });

            expect(result.statusCode).toEqual(StatusCodes.OK);
            expect(result.body).toMatchObject({
                json: true,
                errors: '',
                data: {
                  id: expect.any(number),
                  nome: "caxias do sul",
                  id_estado: 1,
                  ativo: 1
                }
              });
    });

    // it('Tenta atualizar', async () => {

    //     const result = await testServer.post('/cidades')
    //         .send({ nome: 'Caxias do Sul', uf: "ES" });

    //         expect(result.statusCode).toEqual(StatusCodes.OK);
    //         expect(result.body[1]).toHaveProperty("main_error");
    // });
    
});


