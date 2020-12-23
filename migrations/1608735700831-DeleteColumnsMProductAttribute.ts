import {MigrationInterface, QueryRunner} from "typeorm";

export class DeleteColumnsMProductAttribute1608735700831 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.dropColumn('m_product_attribute', 'attribute_id');
      await queryRunner.dropColumn('m_product_attribute', 'attribute_value');
      await queryRunner.dropColumn('m_product_attribute', 'attribute_name');
      await queryRunner.dropColumn('m_product_attribute', 'attribute_type');
      await queryRunner.dropColumn('m_product_attribute', 'is_mandatory');
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
