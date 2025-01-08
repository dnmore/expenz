import * as t from "drizzle-orm/pg-core";

export const income = t.pgTable("income", {
    id: t.integer().primaryKey().generatedAlwaysAsIdentity(),
    description: t.varchar("description").notNull(),
    amount: t.numeric("amount").notNull(),
    date:t.date("date").notNull(),
    category:t.varchar("category").notNull()
  })

  export const expense = t.pgTable("expense", {
    id: t.integer().primaryKey().generatedAlwaysAsIdentity(),
    description: t.varchar("description").notNull(),
    amount: t.numeric("amount").notNull(),
    date:t.date("date").notNull(),
    category:t.varchar("category").notNull()
  })