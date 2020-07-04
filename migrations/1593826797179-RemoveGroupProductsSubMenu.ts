import {MigrationInterface, QueryRunner} from 'typeorm';

export class RemoveGroupProductsSubMenu1593826797179 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.query(`DELETE FROM OrderManagement.m_menu where url ='/group/products' `);
      await queryRunner.query(`UPDATE OrderManagement.m_role
      SET menu_ids = (SELECT GROUP_CONCAT(id) as ids FROM OrderManagement.m_menu) WHERE id=1`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
