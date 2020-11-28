import {MigrationInterface, QueryRunner} from "typeorm";

export class DropColumnStockIdMProductStock1606557597330 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.dropForeignKey('m_product_stock', 'FK_098673030678200fd4df328565b');
      await queryRunner.dropColumn('m_product_stock', 'stock_id');
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
