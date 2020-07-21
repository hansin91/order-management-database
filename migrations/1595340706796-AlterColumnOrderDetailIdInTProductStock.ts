import {MigrationInterface, QueryRunner} from "typeorm";

export class AlterColumnOrderDetailIdInTProductStock1595340706796 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.query(`ALTER TABLE t_product_stock change order_detail_id order_detail_id INT(11) NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
