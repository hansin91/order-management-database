import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddColumnsInMRack1594540463063 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.addColumn('m_rack', new TableColumn({
            name: 'created_date',
            type: 'datetime',
            isNullable: false,
            default: 'CURRENT_TIMESTAMP'
        }))

        await queryRunner.addColumn('m_rack', new TableColumn({
            name: 'modified_date',
            type: 'datetime',
            isNullable: false,
            default: 'CURRENT_TIMESTAMP'
        }))

        await queryRunner.addColumn('m_rack', new TableColumn({
            name: 'created_user',
            type: 'int',
            isNullable: false,
            default: 1
        }))

        await queryRunner.addColumn('m_rack', new TableColumn({
            name: 'modified_user',
            type: 'int',
            isNullable: false,
            default: 1
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropColumn('m_rack', 'created_date')
        await queryRunner.dropColumn('m_rack', 'modified_date')
        await queryRunner.dropColumn('m_rack', 'created_user')
        await queryRunner.dropColumn('m_rack', 'modified_user')
    }

}
