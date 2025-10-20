import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./drizzle",
  schema: "./src/db/schema/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://postgres.lhpatgbvueufxtyeacdh:Capgemini3080@aws-1-us-east-2.pooler.supabase.com:6543/postgres",
  },
});
// important commands - npx drizzle-kit push
// npx drizzle-kit generate
