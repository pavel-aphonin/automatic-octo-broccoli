/*
  Warnings:

  - Added the required column `organisation_id` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "user" ADD COLUMN     "organisation_id" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "organisation" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "name" TEXT NOT NULL,

    CONSTRAINT "organisation_pkey" PRIMARY KEY ("id")
);
