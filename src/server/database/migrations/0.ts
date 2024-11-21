import { Knex } from "knex";

export async function up(knex: Knex) {
    console.log('--executando criação do banco de dados da aplicação--');
    return knex
        .schema
        .createTable('estados', table => {
            table.bigIncrements('id').index().notNullable(),
            table.string('nome', 255).index().notNullable(),
            table.bigInteger('codigo_ibge').nullable(),
            table.boolean('ativo').notNullable().defaultTo(true)
        })
        .createTable('cidades', table => {
            table.bigIncrements('id').index().primary(),
                table.string('nome', 255).index().notNullable(),
                table.bigInteger('id_estado').index().nullable().references('id').inTable('estados').onDelete('RESTRICT').onUpdate('CASCADE'),
                table.boolean('ativo').nullable().defaultTo(true)
        })
        .then(() => console.log('--banco criado com sucesso--'));
}

export async function down(knex: Knex) {
    console.log('executando drop de tabela de --CIDADES--');
    return knex
        .schema
        .dropTable('cidades')        
        .then(() => console.log('drop com sucesso'));
}