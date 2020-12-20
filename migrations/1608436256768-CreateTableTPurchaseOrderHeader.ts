import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTableTPurchaseOrderHeader1608436256768 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.createTable(new Table({
        name: 't_purchase_order_header',
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
            name: 'invoice_number',
            type: 'varchar',
            isNullable: false
          },
          {
            name: 'invoice_date',
            type: 'date',
            isNullable: false
          },
          {
            name: 'due_date',
            type: 'datetime',
            isNullable: false
          },
          {
            name: 'payment_date',
            type: 'datetime',
            isNullable: false
          },
          {
            name: 'supplier_id',
            type: 'int',
            isNullable: false
          },
          {
            name: 'customer_id',
            type: 'int',
            isNullable: true
          },
          {
            name: 'status',
            type: 'int',
            isNullable: false
          },
          {
            name: 'is_paid',
            type: 'boolean',
            isNullable: false,
            default: false
          },
          {
            name: 'total',
            type: 'decimal',
            isNullable: false,
            precision: 10,
            scale: 2
          },
          {
            name: 'date_created',
            type: 'datetime',
            isNullable: false,
          },
          {
            name: 'date_modified',
            type: 'datetime',
            isNullable: false
          },
          {
            name: 'user_created',
            type: 'int',
            isNullable: false
          },
          {
            name: 'user_modified',
            type: 'int',
            isNullable: false
          }
        ]
      }), true)
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.dropTable('t_purchase_order_header', true);
    }

}
