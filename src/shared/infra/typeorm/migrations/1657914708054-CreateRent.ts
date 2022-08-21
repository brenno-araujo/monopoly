import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateRent1657914708054 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'rent',
        columns: [
          {
            name: 'id',
            type: 'varchar(36)',
            isPrimary: true,
          },
          {
            name: 'property_id',
            type: 'varchar(36)',
          },
          {
            name: 'player_id',
            type: 'varchar(36)',
          },
          {
            name: 'price',
            type: 'decimal',
            precision: 10,
            scale: 2,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('rent');
  }
}
