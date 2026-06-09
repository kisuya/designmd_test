import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";

// Vercel이 내려주는 .env.local을 우선 로드 (없으면 .env)
config({ path: [".env.local", ".env"] });

export default defineConfig({
  schema: "./src/db/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
