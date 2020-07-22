import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddColumnSequenceInMProductStock1595382517992 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.addColumn('m_product_stock', new TableColumn({
        name: 'sequence',
        type: 'int',
        isNullable: false,
        default: 1
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.dropColumn('m_product_stock', 'sequence');
    }

}
