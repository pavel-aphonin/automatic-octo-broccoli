/*
  Warnings:

  - You are about to drop the column `children_id` on the `docs` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "docs" DROP COLUMN "children_id",
ADD COLUMN     "parent_id" INTEGER;
