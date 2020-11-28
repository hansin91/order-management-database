import {MigrationInterface, QueryRunner} from "typeorm";

export class DropColumnQuantityMProductStock1606558994997 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.dropColumn('m_product_stock', 'quantity');
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
