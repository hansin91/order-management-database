import {MigrationInterface, QueryRunner, Table} from 'typeorm';

export class CreateMWarehouseTable1594090165353 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.createTable(new Table({
        name: 'm_warehouse',
        columns:[
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
            length: '20',
            isUnique: true,
            isNullable: false
          },
          {
            name: 'code',
            type: 'varchar',
            length: '10',
            isUnique: true,
            isNullable: false
          }
        ]
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.dropTable('m_warehouse');
    }

}
