import 'dotenv/config';
import supertest from "supertest";
import { server } from "../src/server/Server";
import { Conn } from "../src/server/database/knex";

export const configTest = {
    acessToken: ''
}

export const testServer = supertest(server);

beforeAll(async () => {
    await Conn.migrate.latest().then(async () => {
        await Conn.seed.run().then(async () => {
            const result = await testServer.post('/usuarios/login')
                .send({ login: 'sysadmin', senha: '123456' });
            configTest.acessToken = result.body.data.acessToken;
        })
            .catch((e) => console.log(e));
    }).catch((e) => console.log(e));
});

afterAll(async () => {
    await Conn.destroy();
})

