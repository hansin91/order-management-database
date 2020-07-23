import {MigrationInterface, QueryRunner} from "typeorm";

export class UpdateInputnameMStock1595471749573 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.query(`UPDATE m_stock SET input_name ='initialStock' WHERE code ='I'`)
      await queryRunner.query(`UPDATE m_stock SET input_name ='endingStock' WHERE code ='E'`)
      await queryRunner.query(`UPDATE m_stock SET input_name ='maxStock' WHERE code ='MAX'`)
      await queryRunner.query(`UPDATE m_stock SET input_name ='minStock' WHERE code ='MIN'`)
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
