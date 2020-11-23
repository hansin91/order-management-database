import {MigrationInterface, QueryRunner} from "typeorm";

export class UpdateColumnCategoryNameIsNotUnique1606148106129 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE m_category DROP INDEX UQ_274d2a4a901164352200af1138a`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
