import {MigrationInterface, QueryRunner, TableForeignKey} from 'typeorm';

export class AddForeignKeyCreateUserModifiedUserInMProductCategory1594216894775 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createForeignKey('m_product_category',
        new TableForeignKey({
            columnNames: [ 'created_user' ],
            referencedColumnNames: [ 'id' ],
            referencedTableName: 'm_user',
            onDelete: 'CASCADE'
            })
        );

        await queryRunner.createForeignKey('m_product_category',
        new TableForeignKey({
            columnNames: [ 'modified_user' ],
            referencedColumnNames: [ 'id' ],
            referencedTableName: 'm_user',
            onDelete: 'CASCADE'
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        const table = await queryRunner.getTable('m_product_category');
        let foreignKey = table.foreignKeys.find((fk) => fk.columnNames.indexOf('created_user') !== -1);
        await queryRunner.dropForeignKey('m_product_category', foreignKey);
        foreignKey = table.foreignKeys.find((fk) => fk.columnNames.indexOf('modified_user') !== -1);
        await queryRunner.dropForeignKey('m_product_category', foreignKey);
    }

}
