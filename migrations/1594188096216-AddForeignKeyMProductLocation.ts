import {MigrationInterface, QueryRunner, TableForeignKey} from 'typeorm';

export class AddForeignKeyMProductLocation1594188096216 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createForeignKey('m_product_location',
        new TableForeignKey({
            columnNames: [ 'product_id' ],
            referencedColumnNames: [ 'id' ],
            referencedTableName: 'm_product',
            onDelete: 'CASCADE'
            })
        );

        await queryRunner.createForeignKey('m_product_location',
        new TableForeignKey({
            columnNames: [ 'location_id' ],
            referencedColumnNames: [ 'id' ],
            referencedTableName: 'm_location',
            onDelete: 'CASCADE'
            })
        );

        await queryRunner.createForeignKey('m_product_location',
        new TableForeignKey({
            columnNames: [ 'created_user' ],
            referencedColumnNames: [ 'id' ],
            referencedTableName: 'm_user',
            onDelete: 'CASCADE'
            })
        );

        await queryRunner.createForeignKey('m_product_location',
        new TableForeignKey({
            columnNames: [ 'modified_user' ],
            referencedColumnNames: [ 'id' ],
            referencedTableName: 'm_user',
            onDelete: 'CASCADE'
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        const table = await queryRunner.getTable('m_product_location');
        let foreignKey = table.foreignKeys.find((fk) => fk.columnNames.indexOf('product_id') !== -1);
        await queryRunner.dropForeignKey('m_product_location', foreignKey);
        foreignKey = table.foreignKeys.find((fk) => fk.columnNames.indexOf('location_id') !== -1);
        await queryRunner.dropForeignKey('m_product_location', foreignKey);
        foreignKey = table.foreignKeys.find((fk) => fk.columnNames.indexOf('created_user') !== -1);
        await queryRunner.dropForeignKey('m_product_location', foreignKey);
        foreignKey = table.foreignKeys.find((fk) => fk.columnNames.indexOf('modified_user') !== -1);
        await queryRunner.dropForeignKey('m_product_location', foreignKey);
    }

}
