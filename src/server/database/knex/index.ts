import { knex } from 'knex';
//import config from './Config';

import { development, production, test } from './Config';

const getAmbiente = () => {
    switch (process.env.NODE_ENV) {
        case 'prod': return production;
        case 'test': return test;

        default: return development;
    }
};

export const Conn = knex(getAmbiente());