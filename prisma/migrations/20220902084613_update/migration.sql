/*
  Warnings:

  - You are about to drop the column `password` on the `user` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `user` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `p_hash` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "user" DROP COLUMN "password",
ADD COLUMN     "p_hash" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");
