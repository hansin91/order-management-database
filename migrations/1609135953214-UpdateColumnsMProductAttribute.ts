import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class UpdateColumnsMProductAttribute1609135953214 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.dropForeignKey('m_product_attribute', 'foreign_key_category_attribute_id')
      await queryRunner.dropColumn('m_product_attribute', 'category_attribute_id');
      await queryRunner.addColumn('m_product_attribute', new TableColumn({
        name: 'shopee_attribute_id',
        type: 'int',
        isNullable: false
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.dropColumn('m_product_attribute', 'shopee_attribute_id');
    }

}
