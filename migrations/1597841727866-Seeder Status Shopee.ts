import {MigrationInterface, QueryRunner} from "typeorm";

export class SeederStatusShopee1597841727866 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`INSERT INTO OrderManagement.m_status (name, value, flag, sequence, filter_name)
        VALUES ('Shipped', 0, 'order_shopee', 8, 'SHIPPED')`);
        await queryRunner.query(`INSERT INTO OrderManagement.m_status (name, value, flag, sequence, filter_name)
        VALUES ('To Confirm Receive', 0, 'order_shopee', 9, 'TO_CONFIRM_RECEIVE')`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
