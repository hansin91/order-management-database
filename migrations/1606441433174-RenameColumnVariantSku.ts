import {MigrationInterface, QueryRunner} from "typeorm";

export class RenameColumnVariantSku1606441433174 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE m_product_store change variant_sku variation_sku VARCHAR(255) NULL`);
        await queryRunner.query(`ALTER TABLE m_product change variant_sku variation_sku VARCHAR(255) NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
