import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddColumnsInMProductStore1598976512407 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.addColumn('m_product_store', new TableColumn({
        name: 'variation_id',
        type: 'int',
        isNullable: true
      }))

      await queryRunner.addColumn('m_product_store', new TableColumn({
        name: 'item_id',
        type: 'int',
        isNullable: true
      }))

      await queryRunner.addColumn('m_product_store', new TableColumn({
        name: 'weight',
        type: 'decimal',
        precision: 10,
        scale: 2,
        isNullable: true
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.dropColumn('m_product_store', 'variation_id')
      await queryRunner.dropColumn('m_product_store', 'item_id')
      await queryRunner.dropColumn('m_product_store', 'weight')
    }

}
