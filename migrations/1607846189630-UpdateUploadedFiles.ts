import {MigrationInterface, QueryRunner} from "typeorm";

export class UpdateUploadedFiles1607846189630 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
     await queryRunner.query(`UPDATE OrderManagement.m_uploaded_file SET is_uploaded = 1`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
