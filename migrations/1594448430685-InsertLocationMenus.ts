import {MigrationInterface, QueryRunner} from 'typeorm';

export class InsertLocationMenus1594448430685 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`INSERT INTO OrderManagement.m_menu
        (name, parent, url, date_created, date_modified, user_created, user_modified, level, class, icon, is_visible, sequence)
        VALUES ('Location', 0, '/location', NOW(), NOW(), 1, 1, 0, NULL, 'far fa-map', 1,
        (SELECT sequence FROM (SELECT MAX(OrderManagement.m_menu.sequence) + 1 as sequence FROM OrderManagement.m_menu) as X))
        `);

        await queryRunner.query(`INSERT INTO OrderManagement.m_menu
        (name, parent, url, date_created, date_modified, user_created, user_modified, level, icon, is_visible, sequence)
        VALUES ('Locations', (SELECT id FROM (SELECT id FROM OrderManagement.m_menu where url = '/location') as Y),
        '/location/locations', NOW(), NOW(), 1, 1, 1, NULL,1,
        (SELECT sequence FROM (SELECT MAX(OrderManagement.m_menu.sequence) + 1 as sequence FROM OrderManagement.m_menu) as X))
        `);

        await queryRunner.query(`INSERT INTO OrderManagement.m_menu
        (name, parent, url, date_created, date_modified, user_created, user_modified, level, icon, is_visible, sequence)
        VALUES ('Warehouses', (SELECT id FROM (SELECT id FROM OrderManagement.m_menu where url = '/location') as Y),
        '/location/warehouses', NOW(), NOW(), 1, 1, 1, NULL,1,
        (SELECT sequence FROM (SELECT MAX(OrderManagement.m_menu.sequence) + 1 as sequence FROM OrderManagement.m_menu) as X))
        `);

        await queryRunner.query(`INSERT INTO OrderManagement.m_menu
        (name, parent, url, date_created, date_modified, user_created, user_modified, level, icon, is_visible, sequence)
        VALUES ('Rooms', (SELECT id FROM (SELECT id FROM OrderManagement.m_menu where url = '/location') as Y),
        '/location/rooms', NOW(), NOW(), 1, 1, 1, NULL,1,
        (SELECT sequence FROM (SELECT MAX(OrderManagement.m_menu.sequence) + 1 as sequence FROM OrderManagement.m_menu) as X))
        `);

        await queryRunner.query(`INSERT INTO OrderManagement.m_menu
        (name, parent, url, date_created, date_modified, user_created, user_modified, level, icon, is_visible, sequence)
        VALUES ('Racks', (SELECT id FROM (SELECT id FROM OrderManagement.m_menu where url = '/location') as Y),
        '/location/racks', NOW(), NOW(), 1, 1, 1, NULL,1,
        (SELECT sequence FROM (SELECT MAX(OrderManagement.m_menu.sequence) + 1 as sequence FROM OrderManagement.m_menu) as X))
        `);

        await queryRunner.query(`UPDATE OrderManagement.m_role
          SET menu_ids = (SELECT GROUP_CONCAT(id) as ids FROM OrderManagement.m_menu) WHERE id=1`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
