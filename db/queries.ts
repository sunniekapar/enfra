import { eq } from 'drizzle-orm';
import { db } from '@/db';
import { InsertUser, signupFormSchema, userTable } from './schema';
import { z } from 'zod';

export async function getUserByUsername(username: string) {
  return await db
    .selectDistinct()
    .from(userTable)
    .where(eq(userTable.username, username))
    .get();
}

export async function insertUser(values: InsertUser) {
  return await db.insert(userTable).values(values).returning();
}
