import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddColumnFilenameProductImage1607510315636 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.addColumn('m_product_image', new TableColumn({
        name: 'filename',
        type: 'varchar',
        isNullable: true,
        isUnique: true
      }))

      await queryRunner.addColumn('m_product_image', new TableColumn({
        name: 'extension',
        type: 'varchar',
        isNullable: true
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.dropColumn('m_product_image', 'filename')
      await queryRunner.dropColumn('m_product_image', 'extension')
    }
}
