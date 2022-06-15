-- CreateTable
CREATE TABLE "farmacias" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "urllogo" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "whatsapp" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "zipcode" TEXT NOT NULL,
    "neighborhood" TEXT NOT NULL,
    "lat" TEXT NOT NULL,
    "lng" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "farmacias_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "plantoes" (
    "id" TEXT NOT NULL,
    "datetimestart" TIMESTAMP(3) NOT NULL,
    "datetimeend" TIMESTAMP(3) NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "farmaciaId" TEXT,

    CONSTRAINT "plantoes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "plantoes" ADD CONSTRAINT "plantoes_farmaciaId_fkey" FOREIGN KEY ("farmaciaId") REFERENCES "farmacias"("id") ON DELETE SET NULL ON UPDATE CASCADE;
