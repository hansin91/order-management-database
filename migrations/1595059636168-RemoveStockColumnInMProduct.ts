import {MigrationInterface, QueryRunner} from "typeorm";

export class RemoveStockColumnInMProduct1595059636168 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.dropColumn('m_product', 'stock');
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
