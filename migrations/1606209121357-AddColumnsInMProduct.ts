import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddColumnsInMProduct1606209121357 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.addColumn('m_product', new TableColumn({
        name: 'width',
        type: 'decimal',
        precision: 10,
        scale: 2,
        isNullable: true
      }))

      await queryRunner.addColumn('m_product', new TableColumn({
        name: 'length',
        type: 'decimal',
        precision: 10,
        scale: 2,
        isNullable: true
      }))

      await queryRunner.addColumn('m_product', new TableColumn({
        name: 'height',
        type: 'decimal',
        precision: 10,
        scale: 2,
        isNullable: true
      }))

      await queryRunner.addColumn('m_product', new TableColumn({
        name: 'weight',
        type: 'decimal',
        precision: 10,
        scale: 2,
        isNullable: true
      }))

      await queryRunner.addColumn('m_product', new TableColumn({
        name: 'variant_sku',
        type: 'varchar',
        isNullable: true
      }))

      await queryRunner.addColumn('m_product', new TableColumn({
        name: 'days_to_ship',
        type: 'int',
        isNullable: true
      }))

      await queryRunner.addColumn('m_product', new TableColumn({
        name: 'item_id',
        type: 'text',
        isNullable: true
      }))

      await queryRunner.addColumn('m_product', new TableColumn({
        name: 'discount_id',
        type: 'text',
        isNullable: true
      }))

      await queryRunner.addColumn('m_product', new TableColumn({
        name: 'variant_id',
        type: 'text',
        isNullable: true
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.dropColumn('m_product', 'width');
      await queryRunner.dropColumn('m_product', 'length');
      await queryRunner.dropColumn('m_product', 'height');
      await queryRunner.dropColumn('m_product', 'weight');
      await queryRunner.dropColumn('m_product', 'variant_sku');
      await queryRunner.dropColumn('m_product', 'days_to_ship');
      await queryRunner.dropColumn('m_product', 'item_id');
      await queryRunner.dropColumn('m_product', 'discount_id');
      await queryRunner.dropColumn('m_product', 'variant_id');
    }

}
