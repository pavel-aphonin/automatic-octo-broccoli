/*
  Warnings:

  - Added the required column `project_id` to the `docs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "docs" ADD COLUMN     "project_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "docs" ADD CONSTRAINT "docs_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
