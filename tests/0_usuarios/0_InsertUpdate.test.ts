import { StatusCodes } from "http-status-codes";
import { configTest, testServer } from "../jest.setup";

describe('Usuário - Cadastro e update', () => {

    it('Validadores de entrada', async () => {

        const result = await testServer.post('/usuarios/login')
            .set('Authorization', `Bearer ${configTest.acessToken}`)
            .send({ login: 'a', senha: 'es' });

            console.log(result.body);

        const result1 = await testServer.post('/usuarios/login')
            .set('Authorization', `Bearer ${configTest.acessToken}`)
            .send({});

            console.log(result1.body);

        expect(result.statusCode).toEqual(StatusCodes.BAD_REQUEST);
        expect(result.body).toHaveProperty("errors.body.login");
        expect(result.body).toHaveProperty("errors.body.senha");

        expect(result1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
        expect(result1.body).toHaveProperty("errors.body.login");
        expect(result1.body).toHaveProperty("errors.body.senha");
    });

    // it('Tenta atualizar', async () => {

    //     const result = await testServer.post('/cidades')
    //         .send({ nome: 'Caxias do Sul', uf: "ES" });

    //         expect(result.statusCode).toEqual(StatusCodes.OK);
    //         expect(result.body[1]).toHaveProperty("main_error");
    // });

});


