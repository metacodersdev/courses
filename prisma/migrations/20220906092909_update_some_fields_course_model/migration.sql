/*
  Warnings:

  - You are about to drop the column `vote` on the `Course` table. All the data in the column will be lost.
  - Added the required column `count_views` to the `Course` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Course` DROP COLUMN `vote`,
    ADD COLUMN `count_comment` VARCHAR(191) NULL,
    ADD COLUMN `count_like` VARCHAR(191) NULL,
    ADD COLUMN `count_reviews` INTEGER NULL,
    ADD COLUMN `count_views` INTEGER NOT NULL,
    ADD COLUMN `rating` INTEGER NULL,
    MODIFY `video_url` VARCHAR(191) NULL;
