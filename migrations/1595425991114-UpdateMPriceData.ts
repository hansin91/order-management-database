import {MigrationInterface, QueryRunner} from "typeorm";

export class UpdateMPriceData1595425991114 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.query(`UPDATE m_price SET input_name ='basePrice' WHERE code = 'BP'`)
      await queryRunner.query(`UPDATE m_price SET input_name ='sellingPrice' WHERE code = 'SP'`)
      await queryRunner.query(`ALTER TABLE m_price change input_name input_name VARCHAR(50) NOT NULL UNIQUE`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
