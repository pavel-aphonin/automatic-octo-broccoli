-- CreateEnum
CREATE TYPE "State" AS ENUM ('CREATED', 'ACTIVE', 'INACTIVE');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('DRAFT', 'WIP', 'FINISHED');

-- AlterTable
ALTER TABLE "organisation" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "project" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "user" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "state" "State" NOT NULL DEFAULT 'CREATED';

-- CreateTable
CREATE TABLE "docs" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'DRAFT',
    "is_checked" BOOLEAN NOT NULL,
    "created_by" INTEGER NOT NULL,

    CONSTRAINT "docs_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "docs" ADD CONSTRAINT "docs_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
