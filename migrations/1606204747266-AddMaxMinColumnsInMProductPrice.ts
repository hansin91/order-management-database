import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddMaxMinColumnsInMProductPrice1606204747266 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.addColumn('m_product_price', new TableColumn({
        name: 'max_qty',
        type: 'int',
        isNullable: true
      }))

      await queryRunner.addColumn('m_product_price', new TableColumn({
        name: 'min_qty',
        type: 'int',
        isNullable: true
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.dropColumn('m_product_price', 'max_qty');
      await queryRunner.dropColumn('m_product_price', 'min_qty');
    }

}
