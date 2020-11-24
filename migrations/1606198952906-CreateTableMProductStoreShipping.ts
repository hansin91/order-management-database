import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTableMProductStoreShipping1606198952906 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.createTable(new Table({
        name: 'm_product_store_shipping',
        columns: [
            {
                name: 'product_store_id',
                type: 'int',
                isNullable: true
            },
            {
                name: 'shipping_source_id',
                type: 'int',
                isNullable: true
            },
            {
                name: 'shopee_logistic_id',
                type: 'int',
                isNullable: true,
            },
            {
                name: 'estimated_shippig_fee',
                type: 'decimal',
                isNullable: true
            }
        ]
      }), true)
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.dropTable('m_product_store_shipping');
    }

}
