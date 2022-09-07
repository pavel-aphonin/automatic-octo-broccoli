-- CreateEnum
CREATE TYPE "State" AS ENUM ('CREATED', 'ACTIVE', 'INACTIVE');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('DRAFT', 'WIP', 'FINISHED');

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "state" "State" NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "blocks" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "name" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "created_by" INTEGER NOT NULL,

    CONSTRAINT "blocks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "children" (
    "id" SERIAL NOT NULL,
    "blocks_id" INTEGER NOT NULL,
    "children_id" INTEGER NOT NULL,

    CONSTRAINT "children_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "attributes" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "attributes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "attributes_value" (
    "id" SERIAL NOT NULL,
    "blocks_id" INTEGER NOT NULL,
    "attribute_id" INTEGER NOT NULL,
    "value" TEXT NOT NULL,

    CONSTRAINT "attributes_value_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "docs" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "created_by" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "status" "Status" NOT NULL,
    "is_checked" BOOLEAN NOT NULL,

    CONSTRAINT "docs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "docs_children" (
    "id" SERIAL NOT NULL,
    "dock_id" INTEGER NOT NULL,
    "children_id" INTEGER NOT NULL,

    CONSTRAINT "docs_children_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "docs_attributes" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "docs_attributes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "docs_attributes_value" (
    "id" SERIAL NOT NULL,
    "docs_id" INTEGER NOT NULL,
    "docs_attribute_id" INTEGER NOT NULL,
    "value" TEXT NOT NULL,

    CONSTRAINT "docs_attributes_value_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "docs_comment" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "blocks_id" INTEGER NOT NULL,
    "comment" TEXT NOT NULL,

    CONSTRAINT "docs_comment_pkey" PRIMARY KEY ("id")
);
