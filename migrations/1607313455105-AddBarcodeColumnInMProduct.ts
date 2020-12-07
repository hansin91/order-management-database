import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddBarcodeColumnInMProduct1607313455105 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.addColumn('m_product', new TableColumn({
        name: 'barcode',
        type: 'varchar',
        isNullable: true,
        isUnique: true
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.dropColumn('m_product', 'barcode')
    }

}
