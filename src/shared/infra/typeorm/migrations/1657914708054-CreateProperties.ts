import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateProperties1657914708054 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'properties',
        columns: [
          {
            name: 'id',
            type: 'varchar(36)',
            isPrimary: true,
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'sale_price',
            type: 'decimal',
            precision: 10,
            scale: 2,
          },
          {
            name: 'rental_price',
            type: 'decimal',
            precision: 10,
            scale: 2,
          },
          {
            name: 'player_id',
            type: 'varchar(36)',
            isNullable: true,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('properties');
  }
}
