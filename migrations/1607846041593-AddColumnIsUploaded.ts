import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddColumnIsUploaded1607846041593 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.addColumn('m_uploaded_file', new TableColumn({
        name: 'is_uploaded',
        type: 'boolean',
        default: false
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.dropColumn('m_uploaded_file', 'is_uploaded');
    }

}
