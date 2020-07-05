import {MigrationInterface, QueryRunner, TableColumn} from 'typeorm';

export class AddColumnDescriptionInProductStore1593917899826 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.addColumn('m_product_store', new TableColumn({
        name: 'description',
        type: 'text',
        isNullable: true
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.dropColumn('m_product_store', 'description');
    }

}
