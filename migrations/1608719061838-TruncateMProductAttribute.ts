import {MigrationInterface, QueryRunner} from "typeorm";

export class TruncateMProductAttribute1608719061838 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.query(`TRUNCATE OrderManagement.m_product_attribute`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
