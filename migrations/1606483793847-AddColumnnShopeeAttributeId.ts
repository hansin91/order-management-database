import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddColumnnShopeeAttributeId1606483793847 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.addColumn('m_attribute', new TableColumn({
        name: 'shopee_attribute_id',
        type: 'int',
        isNullable: false,
        isUnique: true
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.dropColumn('m_attribute', 'shopee_attribute_id')
    }

}
