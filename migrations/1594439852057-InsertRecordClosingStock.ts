import {MigrationInterface, QueryRunner} from 'typeorm';

export class InsertRecordClosingStock1594439852057 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.query(`INSERT INTO OrderManagement.m_stock (name,code) VALUES ('Closing','C')`)
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
