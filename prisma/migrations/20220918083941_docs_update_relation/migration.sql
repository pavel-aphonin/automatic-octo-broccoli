/*
  Warnings:

  - The values [TEST_KEYS] on the enum `Relation` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Relation_new" AS ENUM ('CATALOG', 'TEST', 'STEP');
ALTER TABLE "docs" ALTER COLUMN "relation" DROP DEFAULT;
ALTER TABLE "docs" ALTER COLUMN "relation" TYPE "Relation_new" USING ("relation"::text::"Relation_new");
ALTER TYPE "Relation" RENAME TO "Relation_old";
ALTER TYPE "Relation_new" RENAME TO "Relation";
DROP TYPE "Relation_old";
ALTER TABLE "docs" ALTER COLUMN "relation" SET DEFAULT 'STEP';
COMMIT;
