import {MigrationInterface, QueryRunner} from "typeorm";

export class InsertSubmenuMappingProducts1608109397799 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`INSERT INTO OrderManagement.m_menu
        (name, parent, url, date_created, date_modified, user_created, user_modified, level, icon, is_visible, sequence)
        VALUES ('Unmapped', (SELECT id FROM (SELECT id FROM OrderManagement.m_menu where url = '/product') as Y),
        '/product/unmapped', NOW(), NOW(), 1, 1, 1, NULL,1,
        (SELECT sequence FROM (SELECT MAX(OrderManagement.m_menu.sequence) + 1 as sequence FROM OrderManagement.m_menu) as X))
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
