import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddColumnNoteTPurchaseOrderHeader1608441729545 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.addColumn('t_purchase_order_header', new TableColumn({
        name: 'note',
        type: 'text',
        isNullable: true
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.dropColumn('t_purchase_order_header', 'note');
    }

}
