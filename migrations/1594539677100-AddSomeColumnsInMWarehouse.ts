import {MigrationInterface, QueryRunner, TableColumn} from 'typeorm';

export class AddSomeColumnsInMWarehouse1594539677100 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.addColumn('m_warehouse', new TableColumn({
        name: 'created_date',
        type: 'datetime',
        isNullable: false,
        default: 'CURRENT_TIMESTAMP'
      }))

      await queryRunner.addColumn('m_warehouse', new TableColumn({
        name: 'modified_date',
        type: 'datetime',
        isNullable: false,
        default: 'CURRENT_TIMESTAMP'
      }))

      await queryRunner.addColumn('m_warehouse', new TableColumn({
        name: 'created_user',
        type: 'int',
        isNullable: false,
        default: 1
      }))

      await queryRunner.addColumn('m_warehouse', new TableColumn({
        name: 'modified_user',
        type: 'int',
        isNullable: false,
        default: 1
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.dropColumn('m_warehouse', 'created_date')
      await queryRunner.dropColumn('m_warehouse', 'modified_date')
      await queryRunner.dropColumn('m_warehouse', 'created_user')
      await queryRunner.dropColumn('m_warehouse', 'modified_user')
    }

}
