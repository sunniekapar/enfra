import { eq } from 'drizzle-orm';
import { db } from '@/db';
import { InsertUser, userTable } from './schema';

export async function getUserByUsername(username: string) {
  const user = await db
    .selectDistinct()
    .from(userTable)
    .where(eq(userTable.username, username));
  if (!user) return null;
  return user[0];
}

export async function insertUser(values: InsertUser) {
  return db.insert(userTable).values(values).returning();
}
