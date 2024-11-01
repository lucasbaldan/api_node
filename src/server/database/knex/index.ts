import { knex } from 'knex';

import {dev, production, test} from './ConnConfig';

const getAmbiente = () => {
    switch (process.env.NODE_ENV) {
        case 'prod': return production;
        case 'test': return test;

        default: return dev;
    }
};

export const Conn = knex(getAmbiente());