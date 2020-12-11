import {MigrationInterface, QueryRunner} from "typeorm";

export class RemoveColumnIsActiveInProductPrice1607695315317 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.dropColumn('m_product_price', 'is_active');
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
