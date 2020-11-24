import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTableMProductAttribute1606206059253 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.createTable(new Table({
        name: 'm_product_attribute',
        columns: [
            {
                name: 'product_id',
                type: 'int',
                isNullable: false
            },
            {
                name: 'attribute_id',
                type: 'int',
                isNullable: false
            },
            {
                name: 'attribute_value',
                type: 'varchar',
                isNullable: false
            }
        ]
      }), true)
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.dropTable('m_product_attribute', true);
    }

}
