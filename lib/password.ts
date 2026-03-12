import argon2 from "argon2";

const PEPPER = process.env.PEPPER!;

export async function hashPassword(password: string) {
  return await argon2.hash(password + PEPPER);
}

export async function verifyPassword(password: string, hash: string) {
  return await argon2.verify(hash, password + PEPPER);
}