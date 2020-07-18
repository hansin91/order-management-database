import {MigrationInterface, QueryRunner, TableForeignKey} from "typeorm";

export class AddForeignKeyOrderDetailInTProduckStock1595051745106 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createForeignKey('t_product_stock',
        new TableForeignKey({
             columnNames: [ 'order_detail_id' ],
             referencedColumnNames: [ 'id' ],
             referencedTableName: 't_order_detail',
             onDelete: 'RESTRICT',
             onUpdate: 'RESTRICT'
          })
       );
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        const table = await queryRunner.getTable('t_product_stock');
        const foreignKey = table.foreignKeys.find((fk) => fk.columnNames.indexOf('order_detail_id') !== -1);
        await queryRunner.dropForeignKey('t_product_stock', foreignKey);
    }

}
