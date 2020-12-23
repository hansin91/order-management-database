import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddColumnInMProductAttribute1608735810383 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.addColumn('m_product_attribute', new TableColumn({
        name: 'category_attribute_id',
        type: 'int',
        isNullable: false
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.dropColumn('m_product_attribute', 'category_attribute_id');
    }

}
