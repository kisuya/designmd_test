import { NextResponse } from "next/server";
import { consultationSchema } from "@/lib/consultation-schema";
import { getDb } from "@/db/client";
import { consultations } from "@/db/schema";

/** 상담 신청을 받아 검증 후 DB에 저장한다. (프론트 → 백엔드 단일 진입점) */
export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "잘못된 요청 형식입니다" },
      { status: 400 },
    );
  }

  const parsed = consultationSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        success: false,
        error: "입력값을 확인해 주세요",
        fields: parsed.error.flatten().fieldErrors,
      },
      { status: 400 },
    );
  }

  try {
    const [row] = await getDb()
      .insert(consultations)
      .values(parsed.data)
      .returning({ id: consultations.id });

    return NextResponse.json(
      { success: true, data: { id: row.id } },
      { status: 201 },
    );
  } catch (error) {
    // 민감 정보 노출 없이 서버 로그에만 상세 기록
    console.error("Failed to save consultation:", error);
    return NextResponse.json(
      {
        success: false,
        error: "상담 신청을 저장하지 못했습니다. 잠시 후 다시 시도해 주세요.",
      },
      { status: 500 },
    );
  }
}
