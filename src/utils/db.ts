import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

export const drizzleInstance = () => {
  const client = postgres(process.env.DATABASE_URL!, { prepare: false });
  const db = drizzle({ client });
};
