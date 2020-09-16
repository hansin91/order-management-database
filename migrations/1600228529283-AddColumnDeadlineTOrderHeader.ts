import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddColumnDeadlineTOrderHeader1600228529283 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.addColumn('t_order_header', new TableColumn({
        name: 'deadline',
        type: 'datetime',
        isNullable: true
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.dropColumn('t_order_header', 'deadline')
    }

}
