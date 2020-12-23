import {MigrationInterface, QueryRunner, TableColumn, TableIndex} from "typeorm";

export class UpdateTableMAttribute1608731105362 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.dropColumn('m_attribute', 'category_id');
      await queryRunner.addColumn('m_attribute', new TableColumn({
        name: 'id',
        type: 'int',
        isGenerated: true,
        isPrimary: true,
        isNullable: false,
        generationStrategy: 'increment'
      }))
      await queryRunner.createIndex('m_attribute', new TableIndex({
          name: 'unique_attribute_name',
          columnNames: ['attribute_name'],
          isUnique: true
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.dropColumn('m_attribute', 'id');
    }

}
