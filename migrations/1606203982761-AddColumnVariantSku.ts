import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddColumnVariantSku1606203982761 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.addColumn('m_product_store', new TableColumn({
        name: 'variant_sku',
        type: 'text',
        isNullable: true
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.dropColumn('m_product_store', 'variant_sku')
    }

}
