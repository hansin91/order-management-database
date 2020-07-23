import {MigrationInterface, QueryRunner} from "typeorm";

export class DefaultDateInMProductStock1595481122108 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.query(`ALTER TABLE m_product_stock change created_date created_date DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP`)
      await queryRunner.query(`ALTER TABLE m_product_stock change modified_date modified_date DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP`)
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
