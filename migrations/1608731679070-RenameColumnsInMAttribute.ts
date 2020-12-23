import {MigrationInterface, QueryRunner} from "typeorm";

export class RenameColumnsInMAttribute1608731679070 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.renameColumn('m_attribute', 'attribute_name', 'name');
      await queryRunner.renameColumn('m_attribute', 'attribute_type', 'type');
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.renameColumn('m_attribute', 'name', 'attribute_name');
      await queryRunner.renameColumn('m_attribute', 'type', 'attribute_type');
    }

}
