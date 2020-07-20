import {MigrationInterface, QueryRunner, TableForeignKey} from "typeorm";

export class CreateForeignKeyLocationIdInMProductStock1595178132113 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createForeignKey('m_product_stock',
        new TableForeignKey({
             columnNames: [ 'location_id' ],
             referencedColumnNames: [ 'id' ],
             referencedTableName: 'm_location',
             onDelete: 'RESTRICT',
             onUpdate: 'RESTRICT'
          })
       );
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        const table = await queryRunner.getTable('m_product_stock');
        const foreignKey = table.foreignKeys.find((fk) => fk.columnNames.indexOf('location_id') !== -1);
        await queryRunner.dropForeignKey('m_product_stock', foreignKey);
    }

}
