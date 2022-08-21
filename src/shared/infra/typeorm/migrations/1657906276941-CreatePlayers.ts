import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreatePlayers1657906276941 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'players',
        columns: [
          {
            name: 'id',
            type: 'varchar(36)',
            isPrimary: true,
          },
          {
            name: 'balance',
            type: 'decimal',
            precision: 15,
            scale: 2,
          },
          {
            name: 'type',
            type: 'enum',
            enum: ['impulsivo', 'exigente', 'cauteloso', 'aleatorio'],
          },
          {
            name: 'current_position',
            type: 'int',
            default: 0,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('players');
  }
}
