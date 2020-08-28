import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddRecapitulationDateColumnInUploadedOrder1598592388420 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.addColumn('m_uploaded_order', new TableColumn({
        name: 'recapitulation_date',
        type: 'date',
        isNullable: false
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.dropColumn('m_uploaded_order', 'recapitulation_date')
    }

}
