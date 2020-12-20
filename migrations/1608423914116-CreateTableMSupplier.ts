import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTableMSupplier1608423914116 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.createTable(new Table({
        name: 'm_supplier',
        columns: [
          {
            name: 'id',
            type: 'int',
            isGenerated: true,
            isPrimary: true,
            isNullable: false,
            generationStrategy: 'increment'
          },
          {
            name: 'name',
            type: 'varchar',
            isNullable: false
          },
          {
            name: 'address',
            type: 'text',
            isNullable: false
          },
          {
            name: 'phone_number',
            type: 'varchar',
            isNullable: false
          },
          {
            name: 'NPWP',
            type: 'varchar',
            isNullable: false
          }
        ]
      }),true)
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.dropTable('m_supplier');
    }

}
