import { Knex } from "knex";

const TABLE_NAME = "users";

/**
 * update table users.
 *
 * @param   {Knex} knex
 * @returns {Promise}
 */
export async function up(knex: Knex): Promise<void> {
  return knex.schema.alterTable(TABLE_NAME, (table) => {
    table.string("password", 100).notNullable();
    table.string("email", 150).notNullable().alter();
  });
}

/**
 * rollback table users.
 *
 * @param   {Knex} knex
 * @returns {Promise}
 */
export async function down(knex: Knex): Promise<void> {
  return knex.schema.alterTable(TABLE_NAME, (table) => {
    table.dropColumn("password");
    table.string("email", 100).notNullable().alter();
  });
}
