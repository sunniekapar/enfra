'use server';

import { getUserByUsername, insertUser } from '@/db/queries';
import { loginFormSchema, signupFormSchema } from '@/db/schema';
import { FormResponse } from '@/lib/types';
import { z } from 'zod';

export async function login(
  values: z.infer<typeof loginFormSchema>
): Promise<FormResponse> {
  return { success: values.username };
}

export async function signup(
  values: z.infer<typeof signupFormSchema>
): Promise<FormResponse> {
  try {
    const existingUser = await getUserByUsername(values.username);
    if (existingUser)
      return { error: 'User already exists with that username' };
    // hash password here
    const newUser = await insertUser({
      ...values,
      password: values.password,
    });
    console.log(newUser);
    return { success: 'User inserted successfully' };
  } catch (error) {
    return { error: 'Error inserting user in the database' };
  }
}
