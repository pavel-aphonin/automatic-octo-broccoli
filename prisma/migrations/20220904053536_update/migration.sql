/*
  Warnings:

  - You are about to drop the column `p_hash` on the `user` table. All the data in the column will be lost.
  - Added the required column `password` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "user" DROP COLUMN "p_hash",
ADD COLUMN     "password" TEXT NOT NULL;
