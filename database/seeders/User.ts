import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class UserSeeder extends BaseSeeder {
  public async run() {
    const uniqueKey = 'email'
    await User.updateOrCreateMany(uniqueKey, [
      {
        fullName: 'Lucas Torres',
        email: 'virk@adonisjs.com',
        password: 'secret1',
      },
      {
        fullName: 'Yasmin Rosa',
        email: 'romain@adonisjs.com',
        password: 'supersecret1',
      },
      {
        fullName: 'Cristiano Ronaldo',
        email: 'cr7@cr7.com',
        password: 'cr7123',
      },
    ])
  }
}
