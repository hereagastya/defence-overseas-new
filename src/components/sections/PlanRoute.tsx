"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { COUNTRIES, COURSES } from "@/content/forms";
import { ArrowRight, Chevron } from "@/components/ui/icons";

const WHO = ["A student", "A parent", "An ex-serviceman or family"] as const;

const COURSE_ROUTES: Record<string, string> = {
  "German language training": "/learn-german",
  "Ex-servicemen / Agniveer programme": "/ex-servicemen",
};

function Select({
  label,
  value,
  onChange,
  options,
  id,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: readonly string[];
  id: string;
}) {
  return (
    <div className="relative min-w-0 flex-1 px-6 py-4 lg:py-3.5">
      <label htmlFor={id} className="block text-[12px] font-semibold uppercase tracking-[0.14em] text-muted">
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-0.5 w-full cursor-pointer appearance-none truncate bg-transparent pr-7 font-display text-[19px] font-semibold text-forest focus:outline-none"
      >
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      <Chevron className="pointer-events-none absolute right-6 top-1/2 h-5 w-5 -translate-y-1/2 text-forest" />
    </div>
  );
}

/**
 * The hero's working tool: pick a course, a destination and who you are, and
 * land on the right page with the form already filled in.
 */
export function PlanRoute() {
  const router = useRouter();
  const [course, setCourse] = useState<string>(COURSES[0]);
  const [country, setCountry] = useState<string>(COUNTRIES[0]);
  const [who, setWho] = useState<string>(WHO[0]);

  function go(event: React.FormEvent) {
    event.preventDefault();
    if (who === WHO[2]) return router.push("/ex-servicemen");
    if (COURSE_ROUTES[course]) return router.push(COURSE_ROUTES[course]);
    const q = new URLSearchParams({ course, country }).toString();
    router.push(`/contact?${q}#counselling`);
  }

  return (
    <form
      onSubmit={go}
      aria-label="Plan your route abroad"
      className="mx-auto flex w-full max-w-[1000px] flex-col overflow-hidden rounded-[28px] bg-white text-ink shadow-lift lg:flex-row lg:items-stretch lg:rounded-full"
    >
      <Select id="plan-who" label="I am" value={who} onChange={setWho} options={WHO} />
      <span aria-hidden="true" className="mx-6 h-px bg-line lg:mx-0 lg:h-auto lg:w-px lg:self-stretch lg:py-3" />
      <Select id="plan-course" label="I want to study" value={course} onChange={setCourse} options={COURSES} />
      <span aria-hidden="true" className="mx-6 h-px bg-line lg:mx-0 lg:h-auto lg:w-px lg:self-stretch lg:py-3" />
      <Select id="plan-country" label="Going to" value={country} onChange={setCountry} options={COUNTRIES} />
      <div className="p-3 lg:p-2.5">
        <button
          type="submit"
          className="group/btn flex h-full w-full items-center justify-center gap-2.5 rounded-full bg-gold px-8 py-4 text-base font-semibold text-forest-deep transition-[background-color,transform] duration-300 ease-[var(--ease-out-expo)] hover:bg-forest hover:text-on-forest active:scale-[0.98] lg:w-auto"
        >
          Plan my route
          <ArrowRight className="h-5 w-5 transition-transform duration-300 ease-[var(--ease-out-expo)] group-hover/btn:translate-x-1" />
        </button>
      </div>
    </form>
  );
}
