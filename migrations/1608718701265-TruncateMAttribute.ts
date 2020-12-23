import {MigrationInterface, QueryRunner} from "typeorm";

export class TruncateMAttribute1608718701265 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.query(`TRUNCATE OrderManagement.m_attribute`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
