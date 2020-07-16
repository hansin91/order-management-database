import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateMProductPriceTable1594890310615 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.createTable(new Table({
        name: 'm_product_price',
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
            name: 'price_id',
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
            name: 'modified_date',
            type: 'datetime',
            isNullable: false,
            default: 'CURRENT_TIMESTAMP'
          },
          {
            name: 'created_user',
            type: 'int',
            isNullable: false,
            default: 1
          },
          {
            name: 'modified_user',
            type: 'int',
            isNullable: false,
            default: 1
          }
        ]
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.dropTable('m_product_price')
    }

}
