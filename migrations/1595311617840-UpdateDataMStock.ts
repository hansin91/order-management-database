import {MigrationInterface, QueryRunner} from "typeorm";

export class UpdateDataMStock1595311617840 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.query(`UPDATE m_stock SET code ='E', name='Ending' WHERE code = 'C'`)
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
