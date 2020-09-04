import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTableMUploadedOrder1599208769945 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.createTable(new Table({
        name: 'm_uploaded_order',
        columns: [
          {
            name: 'order_number',
            type: 'varchar',
            isNullable: false
          },
          {
            name: 'created_date',
            type: 'datetime',
            isNullable: false,
            default: 'CURRENT_TIMESTAMP'
          },
          {
            name: 'file_id',
            type: 'int',
            isNullable: false
          }
        ]
      }), true)
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.dropTable('m_uploaded_order')
    }

}
