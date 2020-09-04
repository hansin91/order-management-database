import {MigrationInterface, QueryRunner} from "typeorm";

export class RenameTableMUploadedOrder1599208544404 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.query(`ALTER TABLE m_uploaded_order RENAME TO m_uploaded_file`)
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.query(`ALTER TABLE m_uploaded_file RENAME TO m_uploaded_order`)
    }

}
