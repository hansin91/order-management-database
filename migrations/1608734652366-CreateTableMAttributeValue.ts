import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTableMAttributeValue1608734652366 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.createTable(new Table({
        name: 'm_attribute_value',
        columns: [
            {
                name: 'attribute_id',
                type: 'int',
                isNullable: false
            },
            {
                name: 'original_value',
                type: 'varchar',
                isNullable: false
            },
            {
                name: 'translate_value',
                type: 'varchar',
                isNullable: false
            }
        ]
      }), true)
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable('m_attribute_value');
    }

}
