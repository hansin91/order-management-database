import {MigrationInterface, QueryRunner, TableForeignKey} from "typeorm";

export class AddForeignKeyMProductStock1595054085878 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createForeignKey('m_product_stock',
        new TableForeignKey({
             columnNames: [ 'product_id' ],
             referencedColumnNames: [ 'id' ],
             referencedTableName: 'm_product',
             onDelete: 'RESTRICT',
             onUpdate: 'RESTRICT'
          })
       );

       await queryRunner.createForeignKey('m_product_stock',
        new TableForeignKey({
             columnNames: [ 'stock_id' ],
             referencedColumnNames: [ 'id' ],
             referencedTableName: 'm_stock',
             onDelete: 'RESTRICT',
             onUpdate: 'RESTRICT'
          })
       );

       await queryRunner.createForeignKey('m_product_stock',
        new TableForeignKey({
             columnNames: [ 'created_user' ],
             referencedColumnNames: [ 'id' ],
             referencedTableName: 'm_user',
             onDelete: 'RESTRICT',
             onUpdate: 'RESTRICT'
          })
       );

       await queryRunner.createForeignKey('m_product_stock',
         new TableForeignKey({
             columnNames: [ 'modified_user' ],
             referencedColumnNames: [ 'id' ],
             referencedTableName: 'm_user',
             onDelete: 'RESTRICT',
             onUpdate: 'RESTRICT'
           })
         );
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        const table = await queryRunner.getTable('m_product_stock');
        let foreignKey = table.foreignKeys.find((fk) => fk.columnNames.indexOf('created_user') !== -1);
        await queryRunner.dropForeignKey('m_product_stock', foreignKey);
        foreignKey = table.foreignKeys.find((fk) => fk.columnNames.indexOf('modified_user') !== -1);
        await queryRunner.dropForeignKey('m_product_stock', foreignKey);
        foreignKey = table.foreignKeys.find((fk) => fk.columnNames.indexOf('product_id') !== -1);
        await queryRunner.dropForeignKey('m_product_stock', foreignKey);
        foreignKey = table.foreignKeys.find((fk) => fk.columnNames.indexOf('stock_id') !== -1);
        await queryRunner.dropForeignKey('m_product_stock', foreignKey);
    }

}
