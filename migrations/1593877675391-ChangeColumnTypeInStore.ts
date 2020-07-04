import {MigrationInterface, QueryRunner} from 'typeorm';

export class ChangeColumnTypeInStore1593877675391 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.query(`UPDATE OrderManagement.m_store SET user_modified = 1, user_created = 1`)
      await queryRunner.query(`ALTER TABLE m_store change user_created user_created INT(11) NOT NULL`);
      await queryRunner.query(`ALTER TABLE m_store change user_modified user_modified INT(11) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
