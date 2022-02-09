-- AlterTable
ALTER TABLE "User" ALTER COLUMN "id" SET DEFAULT public.gen_random_uuid();
