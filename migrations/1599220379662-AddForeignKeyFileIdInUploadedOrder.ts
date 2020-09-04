import {MigrationInterface, QueryRunner, TableForeignKey} from "typeorm";

export class AddForeignKeyFileIdInUploadedOrder1599220379662 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createForeignKey('m_uploaded_order',
        new TableForeignKey({
                columnNames: ['file_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'm_uploaded_file',
                onDelete: 'RESTRICT',
                onUpdate: 'RESTRICT'
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        const table = await queryRunner.getTable('m_uploaded_order');
        const foreignKey = table.foreignKeys.find((fk) => fk.columnNames.indexOf('file_id') !== -1);
        await queryRunner.dropForeignKey('m_uploaded_order', foreignKey);
    }

}
