import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddColumnsInMProductStore1606213636574 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.addColumn('m_product_store', new TableColumn({
        name:  'width',
        type: 'decimal',
        precision: 10,
        scale: 2,
        isNullable: true
      }))

      await queryRunner.addColumn('m_product_store', new TableColumn({
        name:  'length',
        type: 'decimal',
        precision: 10,
        scale: 2,
        isNullable: true
      }))

      await queryRunner.addColumn('m_product_store', new TableColumn({
        name:  'height',
        type: 'decimal',
        precision: 10,
        scale: 2,
        isNullable: true
      }))

      await queryRunner.addColumn('m_product_store', new TableColumn({
        name: 'days_to_ship',
        type: 'int',
        isNullable: true
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.dropColumn('m_product_store', 'width');
      await queryRunner.dropColumn('m_product_store', 'length');
      await queryRunner.dropColumn('m_product_store', 'height');
      await queryRunner.dropColumn('m_product_store', 'days_to_ship');
    }

}
