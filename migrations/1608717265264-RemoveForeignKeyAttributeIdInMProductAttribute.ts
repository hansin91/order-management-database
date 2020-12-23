import {MigrationInterface, QueryRunner} from "typeorm";

export class RemoveForeignKeyAttributeIdInMProductAttribute1608717265264 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.dropForeignKey('m_product_attribute', 'FK_be7b345bfff4111ed6be4126a9a');
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
