import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddColumnBucketKeyProductImage1607580899601 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.addColumn('m_product_image', new TableColumn({
        name: 'bucket',
        type: 'varchar',
        isNullable: true
      }))

      await queryRunner.addColumn('m_product_image', new TableColumn({
        name: 'key',
        type: 'varchar',
        isNullable: true
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.dropColumn('m_product_image', 'bucket');
      await queryRunner.dropColumn('m_product_image', 'key');
    }

}
