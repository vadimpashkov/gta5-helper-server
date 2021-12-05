import {MigrationInterface, QueryRunner} from "typeorm";

export class AddSettings1638729764651 implements MigrationInterface {
    name = 'AddSettings1638729764651'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "openInventoryKey" integer NOT NULL DEFAULT '62'`);
        await queryRunner.query(`ALTER TABLE "user" ADD "openTrunkKey" integer NOT NULL DEFAULT '61'`);
        await queryRunner.query(`ALTER TABLE "user" ADD "lookingForBackpack" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "user" ADD "lookingForBoat" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "user" ADD "fishingRodKey" integer NOT NULL DEFAULT '1'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "fishingRodKey"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "lookingForBoat"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "lookingForBackpack"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "openTrunkKey"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "openInventoryKey"`);
    }

}
