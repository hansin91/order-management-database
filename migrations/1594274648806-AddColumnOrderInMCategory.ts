import {MigrationInterface, QueryRunner, TableColumn} from 'typeorm';

export class AddColumnOrderInMCategory1594274648806 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.addColumn('m_category', new TableColumn({
        name: 'order',
        type: 'int',
        isNullable: false,
        default: 1
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.dropColumn('m_category', 'order');
    }

}
