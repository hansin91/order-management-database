import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddColumnIdProductStock1607500795194 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.addColumn('m_product_stock', new TableColumn({
        name: 'id',
        type: 'int',
        isGenerated: true,
        isPrimary: true,
        isNullable: false,
        generationStrategy: 'increment'
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.dropColumn('m_product_stock', 'id');
    }

}
