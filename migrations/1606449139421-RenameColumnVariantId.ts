import {MigrationInterface, QueryRunner} from "typeorm";

export class RenameColumnVariantId1606449139421 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE m_product change variant_id variation_id TEXT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
