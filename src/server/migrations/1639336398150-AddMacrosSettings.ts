import {MigrationInterface, QueryRunner} from "typeorm";

export class AddMacrosSettings1639336398150 implements MigrationInterface {
    name = 'AddMacrosSettings1639336398150'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "macroses" character varying NOT NULL DEFAULT '[]'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "macroses"`);
    }

}
