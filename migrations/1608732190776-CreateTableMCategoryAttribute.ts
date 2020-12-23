import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTableMCategoryAttribute1608732190776 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.createTable(new Table({
        name: 'm_category_attribute',
        columns: [
            {
                name: 'category_id',
                type: 'int',
                isNullable: false
            },
            {
                name: 'attribute_id',
                type: 'int',
                isNullable: false
            },
            {
                name: 'shopee_attribute_id',
                type: 'int',
                isNullable: false
            }
        ]
      }), true);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.dropTable('m_category_attribute');
    }

}
