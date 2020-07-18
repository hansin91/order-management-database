import {MigrationInterface, QueryRunner} from "typeorm";

export class RemoveColumnsInMProductCategory1595041883568 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.dropColumn('m_product_category', 'id');
      await queryRunner.dropColumn('m_product_category', 'created_date');
      await queryRunner.dropColumn('m_product_category', 'modified_date');
      await queryRunner.dropForeignKey('m_product_category', 'FK_582a30ccf2b45a0fcdcd67bc9e9');
      await queryRunner.dropForeignKey('m_product_category', 'FK_ffb21b69bff33a5b6ad805f25c3');
      await queryRunner.dropColumn('m_product_category', 'created_user');
      await queryRunner.dropColumn('m_product_category', 'modified_user');
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
