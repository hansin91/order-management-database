import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddColumnLocationIdInMProductStock1595177388579 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.addColumn('m_product_stock', new TableColumn({
        name: 'location_id',
        type: 'int',
        isNullable: false
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.dropColumn('m_product_stock', 'location_id')
    }

}
