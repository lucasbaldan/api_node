import supertest from "supertest";
import { server } from "../src/server/Server";
import { Conn } from "../src/server/database/knex";

beforeAll(async () => {
    await Conn.migrate.latest();
});

afterAll(async () => {
    await Conn.destroy();
})

export const testServer = supertest(server);