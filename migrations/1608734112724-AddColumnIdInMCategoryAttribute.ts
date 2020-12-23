import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddColumnIdInMCategoryAttribute1608734112724 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.addColumn('m_category_attribute', new TableColumn({
            name: 'id',
            type: 'int',
            isGenerated: true,
            isPrimary: true,
            isNullable: false,
            generationStrategy: 'increment'
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.dropColumn('m_category_attribute', 'id');
    }

}
