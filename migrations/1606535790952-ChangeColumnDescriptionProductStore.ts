import {MigrationInterface, QueryRunner} from "typeorm";

export class ChangeColumnDescriptionProductStore1606535790952 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE m_product_store change description description LONGBLOB NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
