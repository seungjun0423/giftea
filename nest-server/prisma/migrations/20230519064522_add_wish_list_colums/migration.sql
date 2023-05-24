/*
  Warnings:

  - Added the required column `description` to the `WishList` table without a default value. This is not possible if the table is not empty.
  - Added the required column `item` to the `WishList` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `WishList` table without a default value. This is not possible if the table is not empty.
  - Added the required column `url` to the `WishList` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `WishList` ADD COLUMN `description` VARCHAR(191) NOT NULL,
    ADD COLUMN `item` VARCHAR(191) NOT NULL,
    ADD COLUMN `price` INTEGER NOT NULL,
    ADD COLUMN `url` VARCHAR(191) NOT NULL;
