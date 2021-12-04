import {MigrationInterface, QueryRunner} from "typeorm";

export class ChangePasswordName1638652891738 implements MigrationInterface {
    name = 'ChangePasswordName1638652891738'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "passowrd" TO "password"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "password" TO "passowrd"`);
    }

}
