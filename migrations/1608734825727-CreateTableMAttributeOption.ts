import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTableMAttributeOption1608734825727 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(new Table({
            name: 'm_attribute_option',
            columns: [
                {
                    name: 'attribute_id',
                    type: 'int',
                    isNullable: false
                },
                {
                    name: 'name',
                    type: 'varchar',
                    isNullable: false
                }
            ]
          }), true)
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.dropTable('m_attribute_option');
    }

}
