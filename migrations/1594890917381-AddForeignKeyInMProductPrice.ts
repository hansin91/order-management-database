import {MigrationInterface, QueryRunner, TableForeignKey} from "typeorm";

export class AddForeignKeyInMProductPrice1594890917381 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.createForeignKey('m_product_price',
       new TableForeignKey({
            columnNames: [ 'product_id' ],
            referencedColumnNames: [ 'id' ],
            referencedTableName: 'm_product',
            onDelete: 'RESTRICT',
         })
      );

      await queryRunner.createForeignKey('m_product_price',
       new TableForeignKey({
            columnNames: [ 'price_id' ],
            referencedColumnNames: [ 'id' ],
            referencedTableName: 'm_price',
            onDelete: 'RESTRICT'
         })
      );

      await queryRunner.createForeignKey('m_product_price',
       new TableForeignKey({
            columnNames: [ 'created_user' ],
            referencedColumnNames: [ 'id' ],
            referencedTableName: 'm_user',
            onDelete: 'RESTRICT'
         })
      );

      await queryRunner.createForeignKey('m_product_price',
        new TableForeignKey({
            columnNames: [ 'modified_user' ],
            referencedColumnNames: [ 'id' ],
            referencedTableName: 'm_user',
            onDelete: 'RESTRICT'
          })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        const table = await queryRunner.getTable('m_product_price');
        let foreignKey = table.foreignKeys.find((fk) => fk.columnNames.indexOf('created_user') !== -1);
        await queryRunner.dropForeignKey('m_product_price', foreignKey);
        foreignKey = table.foreignKeys.find((fk) => fk.columnNames.indexOf('modified_user') !== -1);
        await queryRunner.dropForeignKey('m_product_price', foreignKey);
        foreignKey = table.foreignKeys.find((fk) => fk.columnNames.indexOf('product_id') !== -1);
        await queryRunner.dropForeignKey('m_product_price', foreignKey);
        foreignKey = table.foreignKeys.find((fk) => fk.columnNames.indexOf('price_id') !== -1);
        await queryRunner.dropForeignKey('m_product_price', foreignKey);
    }

}
