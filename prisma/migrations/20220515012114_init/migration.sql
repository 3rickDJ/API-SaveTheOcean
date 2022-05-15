-- CreateTable
CREATE TABLE "Animal" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "scientificName" VARCHAR(255) NOT NULL,
    "type" VARCHAR(255) NOT NULL,
    "amountAlive" INTEGER NOT NULL,
    "info" VARCHAR(255) NOT NULL,
    "location" VARCHAR(255) NOT NULL,

    CONSTRAINT "Animal_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Animal_name_key" ON "Animal"("name");
