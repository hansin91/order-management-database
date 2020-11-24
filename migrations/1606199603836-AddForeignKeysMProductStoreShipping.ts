import {MigrationInterface, QueryRunner, TableForeignKey} from "typeorm";

export class AddForeignKeysMProductStoreShipping1606199603836 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createForeignKey('m_product_store_shipping',
        new TableForeignKey({
                columnNames: [ 'product_store_id' ],
                referencedColumnNames: [ 'id' ],
                referencedTableName: 'm_product_store',
                onDelete: 'RESTRICT',
                onUpdate: 'RESTRICT'
            })
        );

        await queryRunner.createForeignKey('m_product_store_shipping',
        new TableForeignKey({
                columnNames: [ 'shipping_source_id' ],
                referencedColumnNames: [ 'id' ],
                referencedTableName: 'm_shipping_source',
                onDelete: 'RESTRICT',
                onUpdate: 'RESTRICT'
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        const table = await queryRunner.getTable('m_product_store_shipping');
        let foreignKey = table.foreignKeys.find((fk) => fk.columnNames.indexOf('product_store_id') !== -1);
        await queryRunner.dropForeignKey('m_product_store_shipping', foreignKey);
        foreignKey = table.foreignKeys.find((fk) => fk.columnNames.indexOf('shipping_source_id') !== -1);
        await queryRunner.dropForeignKey('m_product_store_shipping', foreignKey);
    }

}
