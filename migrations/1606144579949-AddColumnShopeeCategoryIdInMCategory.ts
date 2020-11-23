import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddColumnShopeeCategoryIdInMCategory1606144579949 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.addColumn('m_category', new TableColumn({
        name: 'shopee_category_id',
        type: 'int',
        isNullable: true
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.dropColumn('m_category', 'shopee_category_id')
    }

}
