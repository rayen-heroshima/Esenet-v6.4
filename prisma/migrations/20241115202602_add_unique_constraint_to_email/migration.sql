/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `registration` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "registration_email_key" ON "registration"("email");
