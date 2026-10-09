-- Refuse to discard legacy records. Remediate any orphaned rows before retrying.
DO $$ BEGIN
  IF EXISTS (SELECT 1 FROM "Price" WHERE "activityId" IS NULL)
    OR EXISTS (SELECT 1 FROM "Availability" WHERE "activityId" IS NULL) THEN
    RAISE EXCEPTION 'Price/Availability contain orphaned rows. Assign an activity before migrating.';
  END IF;
END $$;

ALTER TABLE "Price" VALIDATE CONSTRAINT "Price_valid_dates_check";
ALTER TABLE "Availability" VALIDATE CONSTRAINT "Availability_dates_check";
ALTER TABLE "Availability" VALIDATE CONSTRAINT "Availability_capacity_check";
ALTER TABLE "Price" ADD CONSTRAINT "Price_amount_check" CHECK ("amount" > 0);

ALTER TABLE "Price" DROP CONSTRAINT "Price_activityId_fkey";
ALTER TABLE "Availability" DROP CONSTRAINT "Availability_activityId_fkey";
ALTER TABLE "Price" ALTER COLUMN "activityId" SET NOT NULL;
ALTER TABLE "Availability" ALTER COLUMN "activityId" SET NOT NULL;
ALTER TABLE "Price" ADD CONSTRAINT "Price_activityId_fkey" FOREIGN KEY ("activityId") REFERENCES "Activity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "Availability" ADD CONSTRAINT "Availability_activityId_fkey" FOREIGN KEY ("activityId") REFERENCES "Activity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

CREATE TYPE "EnquiryStatus" AS ENUM ('NEW', 'CONTACTED', 'CLOSED');
CREATE TABLE "Enquiry" (
  "id" TEXT NOT NULL,
  "requestId" TEXT NOT NULL,
  "name" TEXT NOT NULL,
  "email" TEXT NOT NULL,
  "phone" TEXT NOT NULL,
  "destination" TEXT NOT NULL,
  "message" TEXT NOT NULL,
  "source" TEXT NOT NULL DEFAULT 'website-contact',
  "status" "EnquiryStatus" NOT NULL DEFAULT 'NEW',
  "clientHash" TEXT NOT NULL,
  "notificationSentAt" TIMESTAMP(3),
  "notificationAttempts" INTEGER NOT NULL DEFAULT 0,
  "notificationNextAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "notificationError" TEXT,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "Enquiry_pkey" PRIMARY KEY ("id")
);
CREATE UNIQUE INDEX "Enquiry_requestId_key" ON "Enquiry"("requestId");
CREATE INDEX "Enquiry_createdAt_id_idx" ON "Enquiry"("createdAt", "id");
CREATE INDEX "Enquiry_email_createdAt_idx" ON "Enquiry"("email", "createdAt");
CREATE INDEX "Enquiry_clientHash_createdAt_idx" ON "Enquiry"("clientHash", "createdAt");
CREATE INDEX "Enquiry_notificationSentAt_notificationNextAt_idx" ON "Enquiry"("notificationSentAt", "notificationNextAt");
