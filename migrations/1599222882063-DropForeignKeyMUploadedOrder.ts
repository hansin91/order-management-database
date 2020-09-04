import {MigrationInterface, QueryRunner} from "typeorm";

export class DropForeignKeyMUploadedOrder1599222882063 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        const table = await queryRunner.getTable('m_uploaded_file');
        let foreignKey = table.foreignKeys.find((fk) => fk.columnNames.indexOf('created_user') !== -1);
        await queryRunner.dropForeignKey('m_uploaded_file', foreignKey);
        foreignKey = table.foreignKeys.find((fk) => fk.columnNames.indexOf('modified_user') !== -1);
        await queryRunner.dropForeignKey('m_uploaded_file', foreignKey);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
