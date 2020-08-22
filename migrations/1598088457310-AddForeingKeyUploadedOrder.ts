import {MigrationInterface, QueryRunner, TableForeignKey} from "typeorm";

export class AddForeingKeyUploadedOrder1598088457310 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.createForeignKey('m_uploaded_order',
        new TableForeignKey({
             columnNames: [ 'store_id' ],
             referencedColumnNames: [ 'id' ],
             referencedTableName: 'm_store',
             onDelete: 'RESTRICT',
             onUpdate: 'RESTRICT'
          })
       );

     await queryRunner.createForeignKey('m_uploaded_order',
       new TableForeignKey({
            columnNames: [ 'created_user' ],
            referencedColumnNames: [ 'id' ],
            referencedTableName: 'm_user',
            onDelete: 'RESTRICT',
            onUpdate: 'RESTRICT'
         })
      );
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        const table = await queryRunner.getTable('m_uploaded_order');
        let foreignKey = table.foreignKeys.find((fk) => fk.columnNames.indexOf('store_id') !== -1);
        await queryRunner.dropForeignKey('m_uploaded_order', foreignKey);
        foreignKey = table.foreignKeys.find((fk) => fk.columnNames.indexOf('created_user') !== -1);
    }

}
