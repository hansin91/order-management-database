import {MigrationInterface, QueryRunner, TableForeignKey} from "typeorm";

export class AddForeignKeyAttributeId1609135106542 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createForeignKey('m_product_attribute', new TableForeignKey({
          name: 'foreign_key_attribute',
          columnNames: ['attribute_id'],
          referencedColumnNames: ['id'],
          referencedTableName: 'm_attribute',
          onDelete: 'RESTRICT',
          onUpdate: 'RESTRICT'
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropForeignKey('m_product_attribute', 'foreign_key_attribute')
    }

}
