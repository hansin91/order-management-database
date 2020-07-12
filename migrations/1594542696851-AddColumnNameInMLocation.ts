import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddColumnNameInMLocation1594542696851 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.addColumn('m_location', new TableColumn({
        name: 'name',
        type: 'varchar',
        isNullable: true
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
       await queryRunner.dropColumn('m_location', 'name');
    }

}
