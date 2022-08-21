import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';

export default class PlayerSeed implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {
    await connection
      .createQueryBuilder()
      .insert()
      .into('players')
      .values([
        { id: '1', balance: 300.0, type: 'impulsivo', current_position: -1 },
        { id: '2', balance: 300.0, type: 'exigente', current_position: -1 },
        { id: '3', balance: 300.0, type: 'cauteloso', current_position: -1 },
        { id: '4', balance: 300.0, type: 'aleatorio', current_position: -1 },
      ])
      .execute();
  }
}
