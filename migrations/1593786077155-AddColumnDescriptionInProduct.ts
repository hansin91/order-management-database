import {MigrationInterface, QueryRunner, TableColumn} from 'typeorm';

export class AddColumnDescriptionInProduct1593786077155 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.addColumn('m_product', new TableColumn({
        name: 'description',
        type: 'text',
        isNullable: true
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.dropColumn('m_product', 'description');
    }

}
