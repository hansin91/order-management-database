import {MigrationInterface, QueryRunner, Table} from 'typeorm';

export class CreateMLocationTable1594094650665 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.createTable(new Table({
        name: 'm_location',
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
            name: 'warehouse_id',
            type: 'int',
            isNullable: false
          },
          {
            name: 'room_id',
            type: 'int',
            isNullable: false
          },
          {
            name: 'rack_id',
            type: 'int',
            isNullable: false
          },
          {
            name: 'created_date',
            type: 'datetime',
            isNullable: false
          },
          {
            name: 'modified_date',
            type: 'datetime',
            isNullable: false
          },
          {
            name: 'created_user',
            type: 'int',
            isNullable: false
          },
          {
            name: 'modified_user',
            type: 'int',
            isNullable: false
          }
        ]
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.dropTable('m_location');
    }

}
