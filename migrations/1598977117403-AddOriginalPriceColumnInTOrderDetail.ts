import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddOriginalPriceColumnInTOrderDetail1598977117403 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.addColumn('t_order_detail', new TableColumn({
        name: 'original_price',
        type: 'decimal',
        precision: 10,
        scale: 0,
        isNullable: true
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.dropColumn('t_order_detail', 'original_price')
    }

}
