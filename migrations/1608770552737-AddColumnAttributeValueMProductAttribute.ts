import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddColumnAttributeValueMProductAttribute1608770552737 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.addColumn('m_product_attribute', new TableColumn({
        name: 'attribute_value',
        type: 'varchar',
        isNullable: false
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.dropColumn('m_product_attribute', 'attribute_value');
    }

}
