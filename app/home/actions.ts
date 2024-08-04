'use server';

import { insertBuilding } from '@/db/queries';
import { InsertBuilding } from '@/db/schema';
import { getUser } from '@/lib/lucia';

export async function createBuilding(values: InsertBuilding) {
  return await insertBuilding(values)
}

export async function getCurrentUser() {
  return await getUser();
}
