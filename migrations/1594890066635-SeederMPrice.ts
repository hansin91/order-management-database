import {MigrationInterface, QueryRunner} from "typeorm";

export class SeederMPrice1594890066635 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.query(`INSERT INTO OrderManagement.m_price (name, code) VALUES ('Base Price', 'BP')`)
      await queryRunner.query(`INSERT INTO OrderManagement.m_price (name, code) VALUES ('Selling Price', 'SP')`)
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
