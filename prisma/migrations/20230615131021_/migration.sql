-- CreateEnum
CREATE TYPE "ArticleStatus" AS ENUM ('draft', 'published');

-- CreateTable
CREATE TABLE "Area" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(32) NOT NULL,
    "description" TEXT,
    "created_at" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Area_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Shop" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(128) NOT NULL,
    "area_id" INTEGER NOT NULL,
    "address" VARCHAR(128),
    "tel" VARCHAR(128),
    "access" TEXT,
    "localton" INTEGER NOT NULL,
    "url" TEXT NOT NULL,
    "created_at" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Shop_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Shop_Article" (
    "id" SERIAL NOT NULL,
    "status" "ArticleStatus",
    "published_at" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT,
    "image_url" TEXT,
    "shop_id" INTEGER,
    "created_at" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Shop_Article_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Shop_Article_Image" (
    "shop_article_id" INTEGER NOT NULL,
    "order" INTEGER NOT NULL,
    "image_url" TEXT NOT NULL,
    "created_at" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Shop_Article_Image_pkey" PRIMARY KEY ("shop_article_id","order")
);

-- CreateIndex
CREATE INDEX "Shop_Article_shop_id_idx" ON "Shop_Article"("shop_id");

-- CreateIndex
CREATE INDEX "idx_shop_article_published_at" ON "Shop_Article"("published_at");

-- AddForeignKey
ALTER TABLE "Shop" ADD CONSTRAINT "Shop_area_id_fkey" FOREIGN KEY ("area_id") REFERENCES "Area"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Shop_Article" ADD CONSTRAINT "Shop_Article_shop_id_fkey" FOREIGN KEY ("shop_id") REFERENCES "Shop"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Shop_Article_Image" ADD CONSTRAINT "Shop_Article_Image_shop_article_id_fkey" FOREIGN KEY ("shop_article_id") REFERENCES "Shop_Article"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
