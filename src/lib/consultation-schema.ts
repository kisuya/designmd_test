import { z } from "zod";

/** 이메일 또는 전화번호 형식을 느슨하게 허용한다. */
const emailLike = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneLike = /^[+\d][\d\s().-]{7,}$/;

const optionalText = (max: number) =>
  z
    .string()
    .trim()
    .max(max)
    .optional()
    .or(z.literal(""))
    .transform((value) => (value && value.length > 0 ? value : null));

/**
 * 상담 신청 입력 검증 스키마.
 * 클라이언트(즉시 피드백)와 서버(최종 강제) 양쪽에서 동일하게 사용한다.
 */
export const consultationSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "이름을 입력해 주세요")
    .max(60, "이름이 너무 깁니다"),
  contact: z
    .string()
    .trim()
    .min(1, "연락처를 입력해 주세요")
    .max(120)
    .refine(
      (value) => emailLike.test(value) || phoneLike.test(value),
      "이메일 또는 전화번호 형식으로 입력해 주세요",
    ),
  spaceType: optionalText(40),
  budget: optionalText(40),
  message: z
    .string()
    .trim()
    .min(5, "상담 내용을 5자 이상 입력해 주세요")
    .max(2000, "상담 내용이 너무 깁니다"),
});

export type ConsultationInput = z.infer<typeof consultationSchema>;

/** 폼 필드 키 — 클라이언트 상태/에러 매핑에 사용 */
export const consultationFields = [
  "name",
  "contact",
  "spaceType",
  "budget",
  "message",
] as const;

export type ConsultationField = (typeof consultationFields)[number];
