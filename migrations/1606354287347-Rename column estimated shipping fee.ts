import {MigrationInterface, QueryRunner} from "typeorm";

export class RenameColumnEstimatedShippingFee1606354287347 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.query(`ALTER TABLE m_product_store_shipping change estimated_shippig_fee estimated_shipping_fee DECIMAL(10,0) NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
