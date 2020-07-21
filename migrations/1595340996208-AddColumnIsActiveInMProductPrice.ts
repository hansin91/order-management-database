import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddColumnIsActiveInMProductPrice1595340996208 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.addColumn('m_product_price', new TableColumn({
        name: 'is_active',
        type: 'boolean',
        isNullable: false,
        default: true
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.dropColumn('m_product_price', 'is_active')
    }

}
