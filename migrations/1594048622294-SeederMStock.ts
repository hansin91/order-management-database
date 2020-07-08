import {MigrationInterface, QueryRunner} from 'typeorm';

export class SeederMStock1594048622294 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.query(`INSERT INTO OrderManagement.m_stock (name, code) VALUES ('Initial', 'I') `);
      await queryRunner.query(`INSERT INTO OrderManagement.m_stock (name, code) VALUES ('Out', 'OUT') `);
      await queryRunner.query(`INSERT INTO OrderManagement.m_stock (name, code) VALUES ('In', 'IN') `);
      await queryRunner.query(`INSERT INTO OrderManagement.m_stock (name, code) VALUES ('Maximum', 'MAX') `);
      await queryRunner.query(`INSERT INTO OrderManagement.m_stock (name, code) VALUES ('Minimum', 'MIN') `);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
