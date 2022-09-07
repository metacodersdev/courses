/*
  Warnings:

  - Added the required column `last_updated` to the `Course` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Course` ADD COLUMN `last_updated` VARCHAR(191) NOT NULL;
