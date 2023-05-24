/*
  Warnings:

  - You are about to drop the column `url` on the `WishList` table. All the data in the column will be lost.
  - Added the required column `buy` to the `WishList` table without a default value. This is not possible if the table is not empty.
  - Added the required column `img` to the `WishList` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `WishList` DROP COLUMN `url`,
    ADD COLUMN `buy` VARCHAR(191) NOT NULL,
    ADD COLUMN `img` VARCHAR(191) NOT NULL;
