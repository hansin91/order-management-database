import {MigrationInterface, QueryRunner} from "typeorm";

export class DeleteColumnsInMAttribute1608730681998 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.dropColumn('m_attribute', 'options');
      await queryRunner.dropColumn('m_attribute', 'values');
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
