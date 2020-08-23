import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUploadedOrderTable1598080290311 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.createTable(new Table({
        name: 'm_uploaded_order',
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
            type: 'text',
            isNullable: false
          },
          {
            name: 'file_path',
            type: 'text',
            isNullable: false
          },
          {
            name: 'store_id',
            type: 'int',
            isNullable: false
          },
          {
            name: 'created_date',
            type: 'datetime',
            isNullable: false,
            default: 'CURRENT_TIMESTAMP'
          },
          {
            name: 'finished_date',
            type :'datetime',
            isNullable: true,
          },
          {
            name: 'status',
            type: 'int',
            isNullable: false,
            default: 0
          },
          {
            name: 'created_user',
            type: 'int',
            isNullable: false,
            default: 1
          },
        ]
      }), true)
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.dropTable('m_uploaded_order');
    }

}
