import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateMPriceTable1594889465402 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.createTable(new Table({
          name: 'm_price',
          columns:[
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
                length: '100',
                isNullable: false,
                isUnique: true
            },
            {
                name: 'code',
                type: 'varchar',
                length: '20',
                isNullable: false,
                isUnique: true
            }
          ]
      }),true)
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.dropTable('m_price')
    }

}
