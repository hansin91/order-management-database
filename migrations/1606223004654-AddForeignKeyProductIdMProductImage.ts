import {MigrationInterface, QueryRunner, TableForeignKey} from "typeorm";

export class AddForeignKeyProductIdMProductImage1606223004654 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createForeignKey('m_product_image',
        new TableForeignKey({
                columnNames: [ 'product_id' ],
                referencedColumnNames: [ 'id' ],
                referencedTableName: 'm_product',
                onDelete: 'RESTRICT',
                onUpdate: 'RESTRICT'
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        const table = await queryRunner.getTable('m_product_image');
        const foreignKey = table.foreignKeys.find((fk) => fk.columnNames.indexOf('product_id') !== -1);
        await queryRunner.dropForeignKey('m_product_image', foreignKey);
    }

}
