import {MigrationInterface, QueryRunner, TableForeignKey} from "typeorm";

export class CreateForeignKeyMProductAttribute1608737693914 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createForeignKey('m_product_attribute', new TableForeignKey({
            name: 'foreign_key_category_attribute_id',
            columnNames: ['category_attribute_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'm_category_attribute',
            onDelete: 'RESTRICT'
          }))
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.dropForeignKey('m_product_attribute', 'foreign_key_category_attribute_id');
    }

}
