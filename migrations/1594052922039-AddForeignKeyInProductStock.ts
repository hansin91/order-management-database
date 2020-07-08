import {MigrationInterface, QueryRunner, TableForeignKey} from 'typeorm';

export class AddForeignKeyInProductStock1594052922039 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.createForeignKey('t_product_stock',
        new TableForeignKey({
            columnNames: [ 'product_id' ],
            referencedColumnNames: [ 'id' ],
            referencedTableName: 'm_product',
            onDelete: 'CASCADE'
         })
      );

      await queryRunner.createForeignKey('t_product_stock',
        new TableForeignKey({
            columnNames: [ 'stock_id' ],
            referencedColumnNames: [ 'id' ],
            referencedTableName: 'm_stock',
            onDelete: 'CASCADE'
         })
      );

      await queryRunner.createForeignKey('t_product_stock',
        new TableForeignKey({
            columnNames: [ 'created_user' ],
            referencedColumnNames: [ 'id' ],
            referencedTableName: 'm_user',
            onDelete: 'CASCADE'
         })
      );

      await queryRunner.createForeignKey('t_product_stock',
        new TableForeignKey({
            columnNames: [ 'modified_user' ],
            referencedColumnNames: [ 'id' ],
            referencedTableName: 'm_user',
            onDelete: 'CASCADE'
         })
	  );
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        const table = await queryRunner.getTable('t_product_stock');
        let foreignKey = table.foreignKeys.find((fk) => fk.columnNames.indexOf('product_id') !== -1);
        await queryRunner.dropForeignKey('t_product_stock', foreignKey);
        foreignKey = table.foreignKeys.find((fk) => fk.columnNames.indexOf('stock_id') !== -1);
        await queryRunner.dropForeignKey('t_product_stock', foreignKey);
        foreignKey = table.foreignKeys.find((fk) => fk.columnNames.indexOf('created_user') !== -1);
        await queryRunner.dropForeignKey('t_product_stock', foreignKey);
        foreignKey = table.foreignKeys.find((fk) => fk.columnNames.indexOf('modified_user') !== -1);
        await queryRunner.dropForeignKey('t_product_stock', foreignKey);
    }

}
