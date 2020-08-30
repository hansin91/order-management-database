import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddModifiedUserModifiedDateInUploadedOrderTable1598791027990 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.addColumn('m_uploaded_order', new TableColumn({
        name: 'modified_user',
        type: 'int',
        isNullable: false,
        default: 1
      }))

      await queryRunner.addColumn('m_uploaded_order', new TableColumn({
        name: 'modified_date',
        type: 'datetime',
        isNullable: false,
        default: 'CURRENT_TIMESTAMP'
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.dropColumn('m_uploaded_order', 'modified_user')
      await queryRunner.dropColumn('m_uploaded_order', 'modified_date')
    }

}
