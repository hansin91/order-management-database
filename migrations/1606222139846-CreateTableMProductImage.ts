import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTableMProductImage1606222139846 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.createTable(new Table({
        name: 'm_product_image',
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
            name: 'product_id',
            type: 'int',
            isNullable: false
          },
          {
            name: 'url_path',
            type: 'text',
            isNullable: false
          }
        ]
      }), true)
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.dropTable('m_product_image');
    }

}
