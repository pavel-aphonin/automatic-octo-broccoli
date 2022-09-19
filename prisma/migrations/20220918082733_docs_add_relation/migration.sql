-- CreateEnum
CREATE TYPE "Relation" AS ENUM ('CATALOG', 'TEST_KEYS', 'STEP');

-- AlterTable
ALTER TABLE "docs" ADD COLUMN     "relation" "Relation" NOT NULL DEFAULT 'STEP';
