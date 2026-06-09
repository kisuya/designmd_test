import { pgTable, uuid, text, timestamp } from "drizzle-orm/pg-core";

/** 상담 신청 저장 테이블 */
export const consultations = pgTable("consultations", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
  contact: text("contact").notNull(),
  spaceType: text("space_type"),
  budget: text("budget"),
  message: text("message").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});

export type Consultation = typeof consultations.$inferSelect;
export type NewConsultation = typeof consultations.$inferInsert;
