import {MigrationInterface, QueryRunner, TableColumn} from 'typeorm';

export class AddColumnsCreatedDateCreatedUserModifiedDateModifiedUserInMProductCategory1594199374341 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.addColumn('m_product_category', new TableColumn({
        name: 'created_date',
        type: 'datetime',
        isNullable: false
      }))

      await queryRunner.addColumn('m_product_category', new TableColumn({
        name: 'modified_date',
        type: 'datetime',
        isNullable: false
      }))

      await queryRunner.addColumn('m_product_category', new TableColumn({
        name: 'created_user',
        type: 'int',
        isNullable: false
      }))

      await queryRunner.addColumn('m_product_category', new TableColumn({
        name: 'modified_user',
        type: 'int',
        isNullable: false
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.dropColumn('m_product_category', 'created_date')
      await queryRunner.dropColumn('m_product_category', 'modified_date')
      await queryRunner.dropColumn('m_product_category', 'created_user')
      await queryRunner.dropColumn('m_product_category', 'modified_user')
    }

}
