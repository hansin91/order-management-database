import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddColumnsInMProductStock1606558512634 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.addColumn('m_product_stock', new TableColumn({
        name: 'initial_qty',
        type: 'int',
        isNullable: false
      }))

      await queryRunner.addColumn('m_product_stock', new TableColumn({
        name: 'max_qty',
        type: 'int',
        isNullable: false
      }))

      await queryRunner.addColumn('m_product_stock', new TableColumn({
        name: 'min_qty',
        type: 'int',
        isNullable: false
      }))

      await queryRunner.addColumn('m_product_stock', new TableColumn({
        name: 'final_qty',
        type: 'int',
        isNullable: false
      }))

      await queryRunner.addColumn('m_product_stock', new TableColumn({
        name: 'is_active',
        type: 'boolean',
        isNullable: false,
        default: true
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.dropColumn('m_product_stock', 'initial_qty')
      await queryRunner.dropColumn('m_product_stock', 'min_qty')
      await queryRunner.dropColumn('m_product_stock', 'max_qty')
      await queryRunner.dropColumn('m_product_stock', 'final_qty')
      await queryRunner.dropColumn('m_product_stock', 'is_active')
    }

}
