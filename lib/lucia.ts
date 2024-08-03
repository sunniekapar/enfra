import { DrizzleSQLiteAdapter } from '@lucia-auth/adapter-drizzle';
import { db } from '@/db';
import { sessionTable, userTable } from '@/db/schema';
import { Lucia } from 'lucia';

const adapter = new DrizzleSQLiteAdapter(db, sessionTable, userTable);

export const lucia = new Lucia(adapter, {
  sessionCookie: {
    expires: false,
  },
});

declare module "lucia" {
	interface Register {
		Lucia: typeof lucia;
		UserId: number;
	}
}
