import {MigrationInterface, QueryRunner} from "typeorm";

export class DeleteColumnAttributeId1608731924154 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.dropColumn('m_attribute', 'attribute_id');
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
