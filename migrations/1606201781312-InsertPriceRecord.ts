import {MigrationInterface, QueryRunner} from "typeorm";

export class InsertPriceRecord1606201781312 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.query(`INSERT INTO m_price (name, code, input_name) VALUES ('Wholesale Price', 'WP', 'wholesalePrice')`);
      await queryRunner.query(`INSERT INTO m_price (name, code, input_name) VALUES ('Promo Price', 'PP',  'promoPrice')`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
