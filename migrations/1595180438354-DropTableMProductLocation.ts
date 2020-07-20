import {MigrationInterface, QueryRunner} from "typeorm";

export class DropTableMProductLocation1595180438354 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.dropTable('m_product_location');
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
