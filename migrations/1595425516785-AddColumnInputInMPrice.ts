import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddColumnInputInMPrice1595425516785 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.addColumn('m_price', new TableColumn({
        name: 'input_name',
        type: 'varchar',
        length: '50'
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.dropColumn('m_price', 'input_name');
    }

}
