import {MigrationInterface, QueryRunner} from 'typeorm';

export class SeederMWarehouse1594091524127 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.query(`INSERT INTO OrderManagement.m_warehouse (name, code) VALUES ('Warehouse 4', '04') `)
      await queryRunner.query(`INSERT INTO OrderManagement.m_warehouse (name, code) VALUES ('Warehouse 39', '39') `)
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
