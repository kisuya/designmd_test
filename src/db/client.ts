import { neon } from "@neondatabase/serverless";
import { drizzle, type NeonHttpDatabase } from "drizzle-orm/neon-http";
import * as schema from "./schema";

let cached: NeonHttpDatabase<typeof schema> | null = null;

/**
 * 서버 전용 Drizzle 클라이언트 (지연 초기화).
 * 빌드 시점에 연결을 시도하지 않도록 최초 호출 때 생성한다.
 * 프론트엔드에서 직접 import 금지.
 */
export function getDb(): NeonHttpDatabase<typeof schema> {
  if (cached) return cached;

  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    throw new Error(
      "DATABASE_URL이 설정되지 않았습니다. Neon 연동 후 `vercel env pull`로 동기화하세요.",
    );
  }

  cached = drizzle(neon(databaseUrl), { schema });
  return cached;
}
