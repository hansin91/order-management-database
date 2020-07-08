import {MigrationInterface, QueryRunner, Table} from 'typeorm';

export class CreateMStockTable1594047223233 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.createTable(new Table({
        name: 'm_stock',
        columns: [
          {
            name: 'id',
            type: 'int',
            isGenerated: true,
            isPrimary: true,
            isNullable: false,
            generationStrategy: 'increment'
          },
          {
            name: 'name',
            type: 'varchar',
            length: '50',
            isNullable: false,
            isUnique: true
          },
          {
            name: 'code',
            type: 'varchar',
            length: '10',
            isNullable: false,
            isUnique: true
          }
        ]
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
