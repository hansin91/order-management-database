import {MigrationInterface, QueryRunner, Table} from 'typeorm';

export class CreateMProductStockTable1594049066662 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.createTable(new Table({
        name: 't_product_stock',
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
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.dropTable('t_product_stock')
    }
}
