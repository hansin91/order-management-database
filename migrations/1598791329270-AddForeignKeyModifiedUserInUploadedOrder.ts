import {MigrationInterface, QueryRunner, TableForeignKey} from "typeorm";

export class AddForeignKeyModifiedUserInUploadedOrder1598791329270 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createForeignKey('m_uploaded_order',
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
        const table = await queryRunner.getTable('m_uploaded_order');
        const foreignKey = table.foreignKeys.find((fk) => fk.columnNames.indexOf('modified_user') !== -1);
        await queryRunner.dropForeignKey('m_uploaded_order', foreignKey);
    }

}
