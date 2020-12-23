import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddColumnsMAttribute1608717706121 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
       await queryRunner.addColumn('m_attribute', new TableColumn({
        name: 'category_id',
        type: 'int',
        isNullable: false
       }))

       await queryRunner.addColumn('m_attribute', new TableColumn({
        name: 'attribute_id',
        type: 'int',
        isNullable: false
       }))

       await queryRunner.addColumn('m_attribute', new TableColumn({
        name: 'attribute_name',
        type: 'varchar',
        isNullable: false
       }))

       await queryRunner.addColumn('m_attribute', new TableColumn({
        name: 'is_mandatory',
        type: 'boolean',
        isNullable: false
       }))

       await queryRunner.addColumn('m_attribute', new TableColumn({
        name: 'attribute_type',
        type: 'varchar',
        isNullable: false
       }))

       await queryRunner.addColumn('m_attribute', new TableColumn({
        name: 'input_type',
        type: 'varchar',
        isNullable: false
       }))

       await queryRunner.addColumn('m_attribute', new TableColumn({
        name: 'options',
        type: 'text',
        isNullable: false
       }))

       await queryRunner.addColumn('m_attribute', new TableColumn({
        name: 'values',
        type: 'text',
        isNullable: false
       }))

       await queryRunner.dropColumn('m_attribute', 'id');
       await queryRunner.dropColumn('m_attribute', 'name');
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.dropColumn('m_attribute', 'category_id');
      await queryRunner.dropColumn('m_attribute', 'attribute_id');
      await queryRunner.dropColumn('m_attribute', 'attribute_name');
      await queryRunner.dropColumn('m_attribute', 'is_mandatory');
      await queryRunner.dropColumn('m_attribute', 'attribute_type');
      await queryRunner.dropColumn('m_attribute', 'input_type');
      await queryRunner.dropColumn('m_attribute', 'options');
      await queryRunner.dropColumn('m_attribute', 'values');
    }

}
