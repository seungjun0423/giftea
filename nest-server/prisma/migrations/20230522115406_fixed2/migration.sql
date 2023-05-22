/*
  Warnings:

  - You are about to drop the column `buy` on the `WishList` table. All the data in the column will be lost.
  - Added the required column `buyUrl` to the `WishList` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `WishList` DROP COLUMN `buy`,
    ADD COLUMN `buyUrl` VARCHAR(191) NOT NULL;
