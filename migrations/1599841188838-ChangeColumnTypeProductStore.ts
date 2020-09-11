import {MigrationInterface, QueryRunner} from "typeorm";

export class ChangeColumnTypeProductStore1599841188838 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.query(`ALTER TABLE m_product_store change variation_id variation_id TEXT NULL`);
      await queryRunner.query(`ALTER TABLE m_product_store change item_id item_id TEXT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
