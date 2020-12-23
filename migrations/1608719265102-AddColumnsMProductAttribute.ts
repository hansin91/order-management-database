import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddColumnsMProductAttribute1608719265102 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.addColumn('m_product_attribute', new TableColumn({
        name: 'attribute_name',
        type: 'varchar',
        isNullable: false
      }))

      await queryRunner.addColumn('m_product_attribute', new TableColumn({
        name: 'attribute_type',
        type: 'varchar',
        isNullable: false
      }))

     await queryRunner.addColumn('m_product_attribute', new TableColumn({
        name: 'is_mandatory',
        type: 'boolean',
        isNullable: false
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.dropColumn('m_product_attribute', 'attribute_name');
      await queryRunner.dropColumn('m_product_attribute', 'attribute_type');
      await queryRunner.dropColumn('m_product_attribute', 'is_mandatory');
    }

}
