import { Knex } from 'knex';
import path from 'path';
import 'dotenv/config';

export const development: Knex.Config = {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
        filename: path.resolve(__dirname, '..', '..', '..', '..', 'database.sqlite'),
    },
    migrations: {
        directory: path.resolve(__dirname, '..', 'migrations'),
        extension: 'ts',
    },
    seeds: {
        directory: path.resolve(__dirname, '..', 'seeds'),
        extension: 'ts',
    },
    pool: {
        afterCreate: (connection: any, done: Function) => {
            connection.run('PRAGMA foreign_keys = ON');
            done();
        }
    }
}

export const test: Knex.Config = {
    ...development,
    connection: ':memory:',
}

export const production: Knex.Config = {
    client: process.env.DB_DRIVER,
    migrations: {
        tableName: 'sistema_migrations',
        directory: path.resolve(__dirname, '..', 'migrations'),
        disableTransactions: false,
        extension: 'js',
    },
    seeds: {
        directory: path.resolve(__dirname, '..', 'seeds'),
        extension: 'js',
    },
    connection: {
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        port: Number(process.env.DB_PORT || 3306),
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
    },
}