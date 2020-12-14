import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddColumnnFirstRecipientSortCode1607986950657 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.addColumn('t_order_header', new TableColumn({
        name: 'first_recipient_sort_code',
        type: 'varchar',
        isNullable: true
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.dropColumn('t_order_header', 'first_recipient_sort_code');
    }

}
