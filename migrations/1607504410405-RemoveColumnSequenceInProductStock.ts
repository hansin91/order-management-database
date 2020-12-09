import {MigrationInterface, QueryRunner} from "typeorm";

export class RemoveColumnSequenceInProductStock1607504410405 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.dropColumn('m_product_stock', 'sequence');
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
