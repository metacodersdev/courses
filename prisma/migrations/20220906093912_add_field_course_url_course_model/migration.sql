/*
  Warnings:

  - Added the required column `course_url` to the `Course` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Course` ADD COLUMN `course_url` VARCHAR(191) NOT NULL;
