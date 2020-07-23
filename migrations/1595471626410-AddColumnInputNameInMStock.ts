import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddColumnInputNameInMStock1595471626410 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.addColumn('m_stock', new TableColumn({
        name: 'input_name',
        type: 'varchar',
        length: '50',
        isNullable: true
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.dropColumn('m_stock', 'input_name')
    }

}
