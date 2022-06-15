/*
  Warnings:

  - Changed the type of `zipcode` on the `farmacias` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "farmacias" DROP COLUMN "zipcode",
ADD COLUMN     "zipcode" INTEGER NOT NULL;
