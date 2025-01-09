import { Knex } from "knex";

export async function up(knex: Knex) {
    console.log('--executando criação do banco de dados da aplicação--');
    return knex
        .schema
        .createTable('estados', table => {
            table.bigIncrements('id').index().notNullable(),
                table.string('nome', 255).index().notNullable(),
                table.string('UF', 2).index().nullable(),
                table.bigInteger('codigo_ibge').nullable(),
                table.boolean('ativo').notNullable().defaultTo(true)
        })
        .createTable('cidades', table => {
            table.bigIncrements('id').index().primary(),
                table.string('nome', 255).index().notNullable(),
                table.bigInteger('id_estado').unsigned().index().nullable().references('id').inTable('estados').onDelete('RESTRICT').onUpdate('CASCADE'),
                table.bigInteger('codigo_ibge').nullable(),
                table.boolean('ativo').notNullable().defaultTo(true)
        })
        .createTable('pessoas', table => {
            table.bigIncrements('id').index().notNullable(),
                table.string('nome', 255).index().notNullable(),
                table.boolean('pessoa_juridica').defaultTo(false).notNullable(),
                table.string('razao_social', 500).index().nullable(),
                table.string('nome_fantasia').index().nullable(),
                table.bigInteger('cpf_cnpj').index().nullable(),
                table.string('logradouro', 500).nullable(),
                table.string('numero_endereco', 10).nullable(),
                table.string('numero_telefone', 20).index().nullable(),
                table.date('data_nascimento').nullable(),
                table.bigInteger('id_pessoa_gestor').unsigned().nullable().index().references('id').inTable('pessoas').onDelete('RESTRICT').onUpdate('CASCADE'),
                table.bigInteger('id_cidade').unsigned().nullable().index().references('id').inTable('cidades').onDelete('RESTRICT').onUpdate('CASCADE'),
                table.boolean('ativo').notNullable().defaultTo(true)
        })
        .createTable('usuarios', table => {
            table.bigIncrements('id').index().primary(),
                table.string('login', 255).index().notNullable().checkLength('>=', 6),
                table.string('senha', 500).notNullable().checkLength('>=', 6),
                table.bigInteger('id_pessoa').unsigned().index().references('id').inTable('pessoas').onDelete('RESTRICT').onUpdate('CASCADE').notNullable(),
                table.boolean('ativo').nullable().defaultTo(true)
        })
        .createTable('auditoria', table => {
            table.bigIncrements('id').index().primary(),
                table.string('id_usuario', 20).index().notNullable(),
                table.string('nome_usuario', 500).index().notNullable(),
                table.string('nome_pessoa_usuario', 500).index().notNullable(),
                table.string('acao', 50).index().notNullable(),
                table.dateTime('dthr_acao').index().notNullable(),
                table.text('dados_acao').index().notNullable(),
                table.text('dados_requisicao').nullable()
        })
        .createTable('historico_acessos', table => {
            table.bigIncrements('id').index().primary(),
                table.string('id_usuario', 20).index().notNullable(),
                table.string('token', 1000).index().notNullable(),
                table.dateTime('dthr_autenticao').index().notNullable(),
                table.boolean('revogacao').index().notNullable(),
                table.dateTime('dthr_revogacao').index().nullable()
                table.integer('quant_requisicoes').index().nullable()
        })
        .then(() => console.log('--banco e tabelas criados com sucesso--'));
}

export async function down(knex: Knex) {
    console.log('executando drop da base de dados');
    return knex
        .schema
        .dropTable('usuarios')
        .dropTable('pessoas')
        .dropTable('cidades')
        .dropTable('estados')
        .dropTable('auditoria')
        .dropTable('historicoAcessos')
        .then(() => console.log('drop com sucesso'));
}