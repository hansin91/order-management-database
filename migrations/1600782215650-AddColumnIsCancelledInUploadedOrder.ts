import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddColumnIsCancelledInUploadedOrder1600782215650 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.addColumn('m_uploaded_order', new TableColumn({
            name: 'is_cancelled',
            type: 'boolean',
            isNullable: false,
            default: false
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropColumn('m_uploaded_order', 'is_cancelled')
    }

}
