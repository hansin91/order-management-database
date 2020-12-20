import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTableTPurchaseOrderDetail1608439319685 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.createTable(new Table({
        name: 't_purchase_order_detail',
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
                name: 'purchase_order_header_id',
                type: 'int',
                isNullable: false
            },
            {
                name: 'product_id',
                type: 'int',
                isNullable: false
            },
            {
                name: 'quantity',
                type: 'int',
                isNullable: false
            },
            {
                name: 'price',
                type: 'decimal',
                precision: 10,
                scale: 2,
                isNullable: false,
            },
            {
                name: 'PPn',
                type: 'decimal',
                isNullable: true,
                precision: 10,
                scale: 2
            },
            {
                name: 'discount_type',
                type: 'enum',
                isNullable: true
            },
            {
                name: 'discount_value',
                type: 'int',
                isNullable: true
            },
            {
                name: 'subtotal',
                type: 'decimal',
                precision: 10,
                scale: 2,
                isNullable: false
            }
        ]
      }), true)
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
