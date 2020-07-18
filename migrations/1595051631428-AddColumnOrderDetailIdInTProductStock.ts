import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddColumnOrderDetailIdInTProductStock1595051631428 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.addColumn('t_product_stock', new TableColumn({
        name: 'order_detail_id',
        type: 'int',
        isNullable: false
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.dropColumn('t_product_stock', 'order_detail_id');
    }

}
