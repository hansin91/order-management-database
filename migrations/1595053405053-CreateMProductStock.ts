import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateMProductStock1595053405053 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.createTable(new Table({
        name: 'm_product_stock',
        columns: [
            {
                name: 'product_id',
                type: 'int',
                isNullable: false
              },
              {
                name: 'stock_id',
                type: 'int',
                isNullable: false
              },
              {
                name: 'quantity',
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
      }), true)
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.dropTable('m_product_stock', true);
    }

}
