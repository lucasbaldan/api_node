import { Knex } from "knex";

export async function up(knex: Knex) {
    console.log('executando create de tabela de --CIDADES--');
    return knex
        .schema
        .createTable('cidades', table => {
            table.bigIncrements('id').index().primary(),
                table.string('nome', 255).notNullable(),
                table.integer('id_estado').nullable,
                table.boolean('ativo').nullable()
        }).then(() => console.log('create com sucesso'));
}

export async function down(knex: Knex) {
    console.log('executando drop de tabela de --CIDADES--');
    return knex
        .schema
        .dropTable('cidades')        
        .then(() => console.log('drop com sucesso'));
}