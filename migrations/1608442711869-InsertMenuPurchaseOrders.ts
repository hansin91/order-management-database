import {MigrationInterface, QueryRunner} from "typeorm";

export class InsertMenuPurchaseOrders1608442711869 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`INSERT INTO OrderManagement.m_menu
        (name, parent, url, date_created, date_modified, user_created, user_modified, level, icon, is_visible, sequence)
        VALUES ('Purchase', 0, '/purchase', NOW(), NOW(), 1, 1, 0, 'fas fa-shopping-bag',1,
        (SELECT sequence FROM (SELECT MAX(OrderManagement.m_menu.sequence) + 1 as sequence FROM OrderManagement.m_menu) as X))
        `);

        await queryRunner.query(`INSERT INTO OrderManagement.m_menu
        (name, parent, url, date_created, date_modified, user_created, user_modified, level, icon, is_visible, sequence)
        VALUES ('Orders', (SELECT id FROM (SELECT id FROM OrderManagement.m_menu where url = '/purchase') as Y),
        '/purchase/orders', NOW(), NOW(), 1, 1, 1, NULL,1,
        (SELECT sequence FROM (SELECT MAX(OrderManagement.m_menu.sequence) + 1 as sequence FROM OrderManagement.m_menu) as X))
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
