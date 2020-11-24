import {MigrationInterface, QueryRunner, TableForeignKey} from "typeorm";

export class AddForeignKeyMProductAttribute1606206286048 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createForeignKey('m_product_attribute',
        new TableForeignKey({
                columnNames: [ 'product_id' ],
                referencedColumnNames: [ 'id' ],
                referencedTableName: 'm_product',
                onDelete: 'RESTRICT',
                onUpdate: 'RESTRICT'
            })
        );

        await queryRunner.createForeignKey('m_product_attribute',
        new TableForeignKey({
                columnNames: [ 'attribute_id' ],
                referencedColumnNames: [ 'id' ],
                referencedTableName: 'm_attribute',
                onDelete: 'RESTRICT',
                onUpdate: 'RESTRICT'
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        const table = await queryRunner.getTable('m_product_attribute');
        let foreignKey = table.foreignKeys.find((fk) => fk.columnNames.indexOf('product_id') !== -1);
        await queryRunner.dropForeignKey('m_product_attribute', foreignKey);
        foreignKey = table.foreignKeys.find((fk) => fk.columnNames.indexOf('attribute_id') !== -1);
        await queryRunner.dropForeignKey('m_product_attribute', foreignKey);
    }

}
