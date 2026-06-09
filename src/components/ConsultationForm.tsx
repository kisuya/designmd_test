"use client";

import { useState } from "react";
import {
  consultationSchema,
  type ConsultationField,
} from "@/lib/consultation-schema";

type FieldErrors = Partial<Record<ConsultationField, string>>;
type Status = "idle" | "submitting" | "success" | "error";

const spaceOptions = ["거실", "사무실", "카페·매장", "전시·로비", "기타"];
const budgetOptions = [
  "3만원 이하",
  "3~5만원",
  "5~10만원",
  "10만원 이상",
];

const emptyForm = {
  name: "",
  contact: "",
  spaceType: "",
  budget: "",
  message: "",
};

/** design.md §4 입력 스타일을 그대로 적용한 공통 입력 베이스 클래스 */
const fieldBase =
  "w-full rounded-md border border-grey-400 bg-white px-4 py-3 text-[15px] text-grey-1000 outline-none transition-shadow placeholder:text-grey-600 focus:border-grey-1000 focus:[box-shadow:0_0_0_1px_#222222]";

export function ConsultationForm() {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState<string | null>(null);

  const update = (field: ConsultationField, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setServerError(null);

    const parsed = consultationSchema.safeParse(form);
    if (!parsed.success) {
      const flat = parsed.error.flatten().fieldErrors;
      const next: FieldErrors = {};
      (Object.keys(flat) as ConsultationField[]).forEach((key) => {
        const message = flat[key]?.[0];
        if (message) next[key] = message;
      });
      setErrors(next);
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/consultations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      const payload = await res.json();

      if (!res.ok || !payload.success) {
        if (payload.fields) {
          const next: FieldErrors = {};
          (Object.keys(payload.fields) as ConsultationField[]).forEach(
            (key) => {
              const message = payload.fields[key]?.[0];
              if (message) next[key] = message;
            },
          );
          setErrors(next);
        }
        setServerError(payload.error ?? "상담 신청에 실패했습니다");
        setStatus("error");
        return;
      }

      setForm(emptyForm);
      setErrors({});
      setStatus("success");
    } catch {
      setServerError("네트워크 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div
        className="flex flex-col items-center gap-3 rounded-xl bg-white p-10 text-center"
        style={{ boxShadow: "var(--elevation-secondary)" }}
      >
        <span
          className="grid h-12 w-12 place-items-center rounded-pill text-white"
          style={{ background: "var(--palette-spruce)" }}
          aria-hidden
        >
          ✓
        </span>
        <h3 className="text-[22px] font-semibold text-grey-1000">
          상담 신청이 접수되었어요
        </h3>
        <p className="max-w-[36ch] text-[15px] text-text-secondary">
          큐레이터가 영업일 기준 1일 이내에 남겨주신 연락처로 회신드립니다.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-2 rounded-md border border-grey-400 bg-white px-5 py-3 text-[14px] font-medium text-hof transition-colors hover:border-grey-1000 hover:bg-faint"
        >
          새 상담 신청
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="flex flex-col gap-5 rounded-xl bg-white p-6 sm:p-8"
      style={{ boxShadow: "var(--elevation-secondary)" }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="이름" error={errors.name}>
          <input
            className={fieldBase}
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder="홍길동"
            autoComplete="name"
          />
        </Field>
        <Field label="연락처" error={errors.contact}>
          <input
            className={fieldBase}
            value={form.contact}
            onChange={(e) => update("contact", e.target.value)}
            placeholder="이메일 또는 전화번호"
            autoComplete="email"
          />
        </Field>
        <Field label="공간 유형" optional error={errors.spaceType}>
          <select
            className={fieldBase}
            value={form.spaceType}
            onChange={(e) => update("spaceType", e.target.value)}
          >
            <option value="">선택 안 함</option>
            {spaceOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </Field>
        <Field label="월 예산" optional error={errors.budget}>
          <select
            className={fieldBase}
            value={form.budget}
            onChange={(e) => update("budget", e.target.value)}
          >
            <option value="">선택 안 함</option>
            {budgetOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="상담 내용" error={errors.message}>
        <textarea
          className={`${fieldBase} min-h-32 resize-y`}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          placeholder="원하시는 분위기, 공간 사진, 일정 등을 자유롭게 적어 주세요."
          rows={4}
        />
      </Field>

      {serverError && (
        <p
          className="rounded-md px-4 py-3 text-[14px]"
          style={{
            color: "var(--palette-arches)",
            background: "rgba(193,53,21,0.08)",
          }}
          role="alert"
        >
          {serverError}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center rounded-md px-6 text-[16px] font-medium text-white transition-[transform,background] duration-150 hover:bg-product-rausch active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70"
        style={{
          background: "var(--palette-rausch)",
          minHeight: "48px",
          boxShadow: "var(--elevation-primary)",
        }}
      >
        {status === "submitting" ? "신청 중…" : "상담 신청하기"}
      </button>
    </form>
  );
}

function Field({
  label,
  optional,
  error,
  children,
}: {
  readonly label: string;
  readonly optional?: boolean;
  readonly error?: string;
  readonly children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-[14px] font-semibold text-hof">
        {label}
        {optional && (
          <span className="ml-1 font-normal text-text-secondary">(선택)</span>
        )}
      </span>
      {children}
      {error && (
        <span className="text-[13px]" style={{ color: "var(--palette-arches)" }}>
          {error}
        </span>
      )}
    </label>
  );
}
