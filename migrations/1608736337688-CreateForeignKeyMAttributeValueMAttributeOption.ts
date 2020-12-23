import {MigrationInterface, QueryRunner, TableForeignKey} from "typeorm";

export class CreateForeignKeyMAttributeValueMAttributeOption1608736337688 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.createForeignKey('m_attribute_value', new TableForeignKey({
          name: 'foreign_key_value_attribute_id',
          columnNames: ['attribute_id'],
          referencedTableName: 'm_attribute',
          referencedColumnNames: ['id'],
          onDelete: 'RESTRICT'
      }))

      await queryRunner.createForeignKey('m_attribute_option', new TableForeignKey({
        name: 'foreign_key_option_attribute_id',
        columnNames: ['attribute_id'],
        referencedTableName: 'm_attribute',
        referencedColumnNames: ['id'],
        onDelete: 'RESTRICT'
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.dropForeignKey('m_attribute_value', 'foreign_key_attribute_id');
      await queryRunner.dropForeignKey('m_attribute_option', 'foreign_key_option_attribute_id');
    }

}
