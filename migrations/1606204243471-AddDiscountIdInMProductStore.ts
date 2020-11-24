import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddDiscountIdInMProductStore1606204243471 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.addColumn('m_product_store', new TableColumn({
            name: 'discount_id',
            type: 'text',
            isNullable: true
          }))
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.dropColumn('m_product_store', 'discount_id');
    }

}
