import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateCar1728223631207 implements MigrationInterface {
    name = 'CreateCar1728223631207'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "car" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "model" varchar NOT NULL, "color" varchar NOT NULL, "year" integer NOT NULL, "valuePerDay" integer NOT NULL, "acessories" varchar NOT NULL, "numberOfPassengers" integer NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "car"`);
    }

}
