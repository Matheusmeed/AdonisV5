import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Users extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('name')
      table.dropColumn('password')
      table.dropColumn('email')
    })
  }

  public async down() {
    this.schema.alterTable(this.tableName, (table) => {})
  }
}
