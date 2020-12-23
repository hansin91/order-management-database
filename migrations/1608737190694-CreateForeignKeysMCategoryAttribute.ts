import {MigrationInterface, QueryRunner, TableForeignKey} from "typeorm";

export class CreateForeignKeysMCategoryAttribute1608737190694 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.createForeignKey('m_category_attribute', new TableForeignKey({
        name: 'foreign_key_category_id',
        columnNames: ['category_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'm_category',
        onDelete: 'RESTRICT'
      }))

      await queryRunner.createForeignKey('m_category_attribute', new TableForeignKey({
        name: 'foreign_key_attribute_id',
        columnNames: ['attribute_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'm_attribute',
        onDelete: 'RESTRICT'
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.dropForeignKey('m_category_attribute', 'foreign_key_category_id');
      await queryRunner.dropForeignKey('m_category_attribute', 'foreign_key_attribute_id');
    }

}
