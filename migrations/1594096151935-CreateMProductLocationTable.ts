import {MigrationInterface, QueryRunner, Table} from 'typeorm';

export class CreateMProductLocationTable1594096151935 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.createTable(new Table({
        name: 'm_product_location',
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
            name: 'product_id',
            type: 'int',
            isNullable: false
          },
          {
            name: 'location_id',
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
      await queryRunner.dropTable('m_product_location');
    }

}
