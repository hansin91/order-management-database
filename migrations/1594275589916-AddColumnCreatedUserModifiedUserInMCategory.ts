import {MigrationInterface, QueryRunner, TableColumn} from 'typeorm';

export class AddColumnCreatedUserModifiedUserInMCategory1594275589916 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.addColumn('m_category', new TableColumn({
        name: 'created_user',
        type: 'int',
        isNullable: false
      }))

      await queryRunner.addColumn('m_category', new TableColumn({
        name: 'modified_user',
        type: 'int',
        isNullable: false
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.dropColumn('m_category', 'created_user')
      await queryRunner.dropColumn('m_category', 'modified_user')
    }

}
