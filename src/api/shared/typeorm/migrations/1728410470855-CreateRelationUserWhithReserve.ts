import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateRelationUserWhithReserve1728410470855 implements MigrationInterface {
    name = 'CreateRelationUserWhithReserve1728410470855'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "car" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "model" varchar NOT NULL, "color" varchar NOT NULL, "year" integer NOT NULL, "valuePerDay" integer NOT NULL, "acessories" varchar NOT NULL, "numberOfPassengers" integer NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')))`);
        await queryRunner.query(`CREATE TABLE "reservations" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "startDate" varchar NOT NULL, "endDate" varchar NOT NULL, "finalValue" varchar NOT NULL, "userId" integer, "carId" integer)`);
        await queryRunner.query(`CREATE TABLE "user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "cpf" varchar NOT NULL, "birth" datetime NOT NULL, "cep" varchar NOT NULL, "email" varchar NOT NULL, "password" varchar NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')))`);
        await queryRunner.query(`CREATE TABLE "temporary_reservations" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "startDate" varchar NOT NULL, "endDate" varchar NOT NULL, "finalValue" varchar NOT NULL, "userId" integer, "carId" integer, CONSTRAINT "FK_aa0e1cc2c4f54da32bf8282154c" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_585ea7e0e4fa121d3c15a557475" FOREIGN KEY ("carId") REFERENCES "car" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_reservations"("id", "startDate", "endDate", "finalValue", "userId", "carId") SELECT "id", "startDate", "endDate", "finalValue", "userId", "carId" FROM "reservations"`);
        await queryRunner.query(`DROP TABLE "reservations"`);
        await queryRunner.query(`ALTER TABLE "temporary_reservations" RENAME TO "reservations"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "reservations" RENAME TO "temporary_reservations"`);
        await queryRunner.query(`CREATE TABLE "reservations" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "startDate" varchar NOT NULL, "endDate" varchar NOT NULL, "finalValue" varchar NOT NULL, "userId" integer, "carId" integer)`);
        await queryRunner.query(`INSERT INTO "reservations"("id", "startDate", "endDate", "finalValue", "userId", "carId") SELECT "id", "startDate", "endDate", "finalValue", "userId", "carId" FROM "temporary_reservations"`);
        await queryRunner.query(`DROP TABLE "temporary_reservations"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "reservations"`);
        await queryRunner.query(`DROP TABLE "car"`);
    }

}
