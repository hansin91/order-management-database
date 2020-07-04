import {MigrationInterface, QueryRunner, TableForeignKey} from 'typeorm';

export class AddForeingKeyUserCreatedUserModifiedInStore1593877885479 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.createForeignKey('m_store',
        new TableForeignKey({
            columnNames: [ 'user_created' ],
            referencedColumnNames: [ 'id' ],
            referencedTableName: 'm_user',
            onDelete: 'CASCADE'
         })
      );

      await queryRunner.createForeignKey('m_store',
        new TableForeignKey({
            columnNames: [ 'user_modified' ],
            referencedColumnNames: [ 'id' ],
            referencedTableName: 'm_user',
            onDelete: 'CASCADE'
         })
	    );
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      const table = await queryRunner.getTable('m_store');
			let foreignKey = table.foreignKeys.find((fk) => fk.columnNames.indexOf('user_created') !== -1);
      await queryRunner.dropForeignKey('m_store', foreignKey);
      foreignKey = table.foreignKeys.find((fk) => fk.columnNames.indexOf('user_modified') !== -1);
			await queryRunner.dropForeignKey('m_store', foreignKey);
    }

}
