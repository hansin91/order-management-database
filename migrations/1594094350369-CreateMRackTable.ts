import {MigrationInterface, QueryRunner, Table} from 'typeorm';

export class CreateMRackTable1594094350369 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.createTable(new Table({
        name: 'm_rack',
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
            length: '20',
            isNullable: false,
            isUnique: true
          },
          {
            name: 'code',
            type: 'varchar',
            length: '20',
            isNullable: false,
            isUnique: true
          }
        ]
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.dropTable('m_rack');
    }

}
