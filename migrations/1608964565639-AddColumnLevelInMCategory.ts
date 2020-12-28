import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddColumnLevelInMCategory1608964565639 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.addColumn('m_category', new TableColumn({
        name: 'level',
        type: 'int',
        isNullable: false
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.dropColumn('m_category', 'level');
    }

}
