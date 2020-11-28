import {MigrationInterface, QueryRunner} from "typeorm";

export class DropColumnShopeeAttributeId1606547101116 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.dropColumn('m_attribute', 'shopee_attribute_id');
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
