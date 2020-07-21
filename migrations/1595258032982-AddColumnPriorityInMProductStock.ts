import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddColumnPriorityInMProductStock1595258032982 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.addColumn('m_product_stock', new TableColumn({
        name: 'priority',
        type: 'int',
        isNullable: false
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.dropColumn('m_product_stock', 'priority');
    }

}
