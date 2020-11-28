import {MigrationInterface, QueryRunner} from "typeorm";

export class NullabelShopeeAttributeId1606545006442 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE m_attribute change shopee_attribute_id shopee_attribute_id INT(11) NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
