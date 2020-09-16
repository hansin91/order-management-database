import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddColumnnPaymentDateInTOrderHeader1600233549348 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.addColumn('t_order_header', new TableColumn({
        name: 'payment_date',
        type: 'datetime',
        isNullable: true
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.dropColumn('t_order_header', 'payment_date')
    }

}
