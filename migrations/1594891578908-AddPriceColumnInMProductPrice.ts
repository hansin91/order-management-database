import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddPriceColumnInMProductPrice1594891578908 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.addColumn('m_product_price', new TableColumn({
        name: 'amount',
        type: 'decimal',
        isNullable: false,
        precision: 10,
        scale: 2
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
