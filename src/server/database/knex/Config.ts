import { Knex } from 'knex';
import path from 'path';

export const development: Knex.Config = {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
        filename: path.resolve(__dirname, '..', '..', '..', '..', 'database.sqlite'),
    },
    migrations: {
        directory: path.resolve(__dirname, '..', 'migrations'),
    },
    seeds: {
        directory: path.resolve(__dirname, '..', 'seeds'),
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
    ...development
}

// import { Knex } from "knex";
// import path from "path";

// const config: { [key: string]: Knex.Config } = {
//     development: {
//         client: 'sqlite3',
//         useNullAsDefault: true,
//         connection: {
//             filename: path.resolve(__dirname, '..', '..', '..', '..', 'database.sqlite'),
//         },
//         migrations: {
//             directory: path.resolve(__dirname, '..', 'migrations'),
//         },
//         seeds: {
//             directory: path.resolve(__dirname, '..', 'seeds'),
//         },
//         pool: {
//             afterCreate: (connection: any, done: Function) => {
//                 connection.run('PRAGMA foreign_keys = ON');
//                 done();
//             }
//         }
//     },
//     test: {
//         client: 'sqlite3',
//         useNullAsDefault: true,
//         connection: ':memory:',
//     },
//     production: {
//         client: 'sqlite3',
//         useNullAsDefault: true,
//         connection: {
//             filename: path.resolve(__dirname, '..', '..', '..', '..', 'database.sqlite'),
//         }
//     }
// };

// export default config;