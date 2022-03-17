import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Users extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.string('name')
      table.string('last_name')
      table.string('email')
      table.string('password')
    })
  }

  public async down() {
    this.schema.alterTable(this.tableName, (table) => {})
  }
}
