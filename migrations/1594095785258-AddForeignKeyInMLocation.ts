import {MigrationInterface, QueryRunner, TableForeignKey} from 'typeorm';

export class AddForeignKeyInMLocation1594095785258 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createForeignKey('m_location',
        new TableForeignKey({
            columnNames: [ 'warehouse_id' ],
            referencedColumnNames: [ 'id' ],
            referencedTableName: 'm_warehouse',
            onDelete: 'CASCADE'
            })
        );

        await queryRunner.createForeignKey('m_location',
        new TableForeignKey({
            columnNames: [ 'room_id' ],
            referencedColumnNames: [ 'id' ],
            referencedTableName: 'm_room',
            onDelete: 'CASCADE'
            })
        );

        await queryRunner.createForeignKey('m_location',
        new TableForeignKey({
            columnNames: [ 'rack_id' ],
            referencedColumnNames: [ 'id' ],
            referencedTableName: 'm_rack',
            onDelete: 'CASCADE'
            })
        );

        await queryRunner.createForeignKey('m_location',
        new TableForeignKey({
            columnNames: [ 'created_user' ],
            referencedColumnNames: [ 'id' ],
            referencedTableName: 'm_user',
            onDelete: 'CASCADE'
            })
        );

        await queryRunner.createForeignKey('m_location',
        new TableForeignKey({
            columnNames: [ 'modified_user' ],
            referencedColumnNames: [ 'id' ],
            referencedTableName: 'm_user',
            onDelete: 'CASCADE'
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        const table = await queryRunner.getTable('m_location');
        let foreignKey = table.foreignKeys.find((fk) => fk.columnNames.indexOf('warehouse_id') !== -1);
        await queryRunner.dropForeignKey('m_location', foreignKey);
        foreignKey = table.foreignKeys.find((fk) => fk.columnNames.indexOf('room_id') !== -1);
        await queryRunner.dropForeignKey('m_location', foreignKey);
        foreignKey = table.foreignKeys.find((fk) => fk.columnNames.indexOf('rack_id') !== -1);
        await queryRunner.dropForeignKey('m_location', foreignKey);
        foreignKey = table.foreignKeys.find((fk) => fk.columnNames.indexOf('created_user') !== -1);
        await queryRunner.dropForeignKey('m_location', foreignKey);
        foreignKey = table.foreignKeys.find((fk) => fk.columnNames.indexOf('modified_user') !== -1);
        await queryRunner.dropForeignKey('m_location', foreignKey);
    }

}
