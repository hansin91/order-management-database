import {MigrationInterface, QueryRunner} from 'typeorm';

export class ChangeGroupMenuIntoCatalogMenu1593940253877 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`UPDATE OrderManagement.m_menu SET url ='/catalog', name= 'Catalog' WHERE  url ='/group'`)
        await queryRunner.query(`UPDATE OrderManagement.m_menu SET url ='/catalog/groups' WHERE  url ='/group/groups'`)
        await queryRunner.query(`UPDATE OrderManagement.m_role
          SET menu_ids = (SELECT GROUP_CONCAT(id) as ids FROM OrderManagement.m_menu) WHERE id=1`)
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
