import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';
import { z } from 'zod';

export const userTable = sqliteTable('user', {
  id: integer('id', { mode: 'number' }).primaryKey(),
  username: text('username').notNull().unique(),
  password: text('password').notNull(),
});

export const sessionTable = sqliteTable('session', {
  id: text('id').primaryKey(),
  userId: integer('user_id')
    .notNull()
    .references(() => userTable.id),
  expiresAt: integer('expires_at').notNull(),
});

export type InsertUser = typeof userTable.$inferInsert;
export type SelectUser = typeof userTable.$inferSelect;

export const loginFormSchema = createSelectSchema(userTable, {
  id: z.string().optional(),
});

export const signupFormSchema = createInsertSchema(userTable, {
  username: z
    .string()
    .min(6, {
      message: 'Username must be at least 6 characters long',
    })
    .max(20, {
      message: 'Username must between 6-20 characters',
    }),
  password: z.string().min(8, {
    message: 'password must be at least 8 characters long',
  }),
});
