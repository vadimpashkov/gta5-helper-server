import {MigrationInterface, QueryRunner} from "typeorm";

export class ChangeWeightType1638723063325 implements MigrationInterface {
    name = 'ChangeWeightType1638723063325'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "found_fish" ("id" SERIAL NOT NULL, "catchDate" TIMESTAMP NOT NULL, "fishId" integer, "userId" integer, CONSTRAINT "PK_3e4f9d42f7de74c1f7f48717cde" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "available_fish" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "maxPrice" integer NOT NULL, "weight" numeric(8,2) NOT NULL, CONSTRAINT "PK_046e7ec69713f42267171bedf74" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "isActive"`);
        await queryRunner.query(`ALTER TABLE "found_fish" ADD CONSTRAINT "FK_92ad7fd1eb52fe79eb3605c753b" FOREIGN KEY ("fishId") REFERENCES "available_fish"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "found_fish" ADD CONSTRAINT "FK_6dba2d68c84989100b08e6fbf8c" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "found_fish" DROP CONSTRAINT "FK_6dba2d68c84989100b08e6fbf8c"`);
        await queryRunner.query(`ALTER TABLE "found_fish" DROP CONSTRAINT "FK_92ad7fd1eb52fe79eb3605c753b"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "isActive" boolean NOT NULL DEFAULT true`);
        await queryRunner.query(`DROP TABLE "available_fish"`);
        await queryRunner.query(`DROP TABLE "found_fish"`);
    }

}
