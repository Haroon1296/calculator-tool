
"use client";

import { useMemo, useState } from "react";
import CalculatorLayout from "../../components/CalculatorLayout";
import InputField from "../../components/InputField";
import ResultCard from "../../components/ResultCard";

const formatNumber = (value) => {
  return new Intl.NumberFormat("en-US").format(value);
};

const pluralize = (value, label) => {
  return `${formatNumber(value)} ${label}${value === 1 ? "" : "s"}`;
};

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

export default function AgeCalculatorClient() {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const dayOptions = useMemo(() => Array.from({ length: 31 }, (_, index) => index + 1), []);

  const handleCalculate = () => {
    setError("");
    setResult(null);

    if (!day || !month || !year) {
      setError("Please select day, month, and year.");
      return;
    }

    const dayValue = Number(day);
    const monthValue = Number(month);
    const yearValue = Number(year);

    if (!Number.isInteger(dayValue) || !Number.isInteger(monthValue) || !Number.isInteger(yearValue)) {
      setError("Please enter valid numeric values.");
      return;
    }

    if (yearValue < 1900 || yearValue > new Date().getFullYear()) {
      setError("Please enter a valid year.");
      return;
    }

    if (monthValue < 1 || monthValue > 12) {
      setError("Month must be between 1 and 12.");
      return;
    }

    const maxDays = new Date(yearValue, monthValue, 0).getDate();
    if (dayValue < 1 || dayValue > maxDays) {
      setError(`Day must be between 1 and ${maxDays}.`);
      return;
    }

    const birthDate = new Date(yearValue, monthValue - 1, dayValue);
    const today = new Date();

    if (Number.isNaN(birthDate.getTime())) {
      setError("Please enter a valid date.");
      return;
    }

    if (birthDate > today) {
      setError("Date of birth cannot be in the future.");
      return;
    }

    let years = today.getFullYear() - birthDate.getFullYear();
    let monthsDiff = today.getMonth() - birthDate.getMonth();
    let daysDiff = today.getDate() - birthDate.getDate();

    if (daysDiff < 0) {
      monthsDiff -= 1;
      const daysInPrevMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
      daysDiff += daysInPrevMonth;
    }

    if (monthsDiff < 0) {
      years -= 1;
      monthsDiff += 12;
    }

    const birthUtc = Date.UTC(birthDate.getFullYear(), birthDate.getMonth(), birthDate.getDate());
    const todayUtc = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate());
    const totalDays = Math.max(0, Math.floor((todayUtc - birthUtc) / 86400000));

    const totalMonths = years * 12 + monthsDiff;
    const totalWeeks = Math.floor(totalDays / 7);
    const remainingDays = totalDays % 7;
    const totalHours = totalDays * 24;
    const totalMinutes = totalHours * 60;
    const totalSeconds = totalMinutes * 60;

    setResult({
      years,
      months: monthsDiff,
      days: daysDiff,
      totalMonths,
      totalWeeks,
      remainingDays,
      totalDays,
      totalHours,
      totalMinutes,
      totalSeconds
    });
  };

  return (
    <CalculatorLayout
      title="Age Calculator"
      subtitle="Calculate your exact age in years, months, and days with a single input."
    >
      <section className="space-y-6">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="space-y-2">
            <label htmlFor="dob-day" className="text-sm font-medium text-slate-700 dark:text-slate-200">
              Day <span className="text-rose-500">*</span>
            </label>
            <select
              id="dob-day"
              value={day}
              onChange={(event) => setDay(event.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-white/90 px-4 py-3 text-base text-slate-900 shadow-sm outline-none transition-colors duration-300 focus:border-sky-400 focus:ring-2 focus:ring-sky-200 dark:border-gray-700 dark:bg-gray-900/60 dark:text-white dark:focus:border-sky-500 dark:focus:ring-sky-500/30"
            >
              <option value="">Day</option>
              {dayOptions.map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </div>
          <div className="space-y-2">
            <label htmlFor="dob-month" className="text-sm font-medium text-slate-700 dark:text-slate-200">
              Month <span className="text-rose-500">*</span>
            </label>
            <select
              id="dob-month"
              value={month}
              onChange={(event) => setMonth(event.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-white/90 px-4 py-3 text-base text-slate-900 shadow-sm outline-none transition-colors duration-300 focus:border-sky-400 focus:ring-2 focus:ring-sky-200 dark:border-gray-700 dark:bg-gray-900/60 dark:text-white dark:focus:border-sky-500 dark:focus:ring-sky-500/30"
            >
              <option value="">Month</option>
              {months.map((label, index) => (
                <option key={label} value={index + 1}>
                  {label}
                </option>
              ))}
            </select>
          </div>
          <InputField
            label="Year"
            id="dob-year"
            type="number"
            value={year}
            onChange={(event) => setYear(event.target.value)}
            placeholder="YYYY"
            min="1900"
            step="1"
            required
          />
        </div>
        {error ? <p className="text-sm text-rose-500">{error}</p> : null}
        <button
          type="button"
          onClick={handleCalculate}
          className="w-full rounded-xl bg-sky-600 px-6 py-3 text-base font-semibold text-white transition-colors duration-300 hover:bg-sky-700"
        >
          Calculate Age
        </button>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <ResultCard title="Years">{result ? formatNumber(result.years) : "--"}</ResultCard>
        <ResultCard title="Months">{result ? formatNumber(result.months) : "--"}</ResultCard>
        <ResultCard title="Days">{result ? formatNumber(result.days) : "--"}</ResultCard>
      </section>

      <section>
        <ResultCard title="Complete Breakdown">
          {result ? (
            <ul className="space-y-2 text-base text-slate-700 dark:text-slate-200">
              <li>
                {pluralize(result.years, "year")} {pluralize(result.months, "month")} {pluralize(result.days, "day")}
              </li>
              <li>
                {pluralize(result.totalMonths, "month")} {pluralize(result.days, "day")}
              </li>
              <li>
                {pluralize(result.totalWeeks, "week")} {pluralize(result.remainingDays, "day")}
              </li>
              <li>{pluralize(result.totalDays, "day")}</li>
              <li>{pluralize(result.totalHours, "hour")}</li>
              <li>{pluralize(result.totalMinutes, "minute")}</li>
              <li>{pluralize(result.totalSeconds, "second")}</li>
            </ul>
          ) : (
            <span className="text-slate-500 dark:text-slate-300">--</span>
          )}
        </ResultCard>
      </section>

      <section className="space-y-5 text-base leading-relaxed text-slate-600 dark:text-slate-300">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">How the age calculator works</h2>
        <p>
          The age calculator gives you a precise breakdown of time since your birth date. Instead
          of showing only the number of years, it also reports the remaining months and days. This
          is helpful for personal milestones, legal documents, medical records, and any task that
          needs a clear age calculation. The logic follows the calendar in the same way you would
          count manually: compare today to your birth date, borrow days from the previous month when
          needed, and then adjust months accordingly.
        </p>
        <p>
          Because months have different lengths, a simple day count can be misleading. This tool
          handles that by using real month lengths and leap years. That means a birthday on February
          29 is handled correctly, and the result stays accurate no matter when you run the
          calculation. Inputs are validated so you do not submit an empty field or a future date,
          keeping the output dependable for official or personal use.
        </p>
        <p>
          Use this calculator to verify your age for forms, compare ages between people, or plan
          events like birthdays and anniversaries. The interface stays focused: one large date
          input, a single action button, and a results panel that updates instantly. The combination
          of speed, accuracy, and clarity is what makes this a strong micro SaaS calculator.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Frequently asked questions</h2>
        <dl className="space-y-4 text-base text-slate-600 dark:text-slate-300">
          <div>
            <dt className="font-semibold text-slate-900 dark:text-white">Does the calculator account for leap years?</dt>
            <dd>Yes. The calculation uses the real calendar and respects leap years automatically.</dd>
          </div>
          <div>
            <dt className="font-semibold text-slate-900 dark:text-white">Why do the months and days vary?</dt>
            <dd>Months have different lengths, so the calculator borrows days from the previous month when needed.</dd>
          </div>
          <div>
            <dt className="font-semibold text-slate-900 dark:text-white">Can I use this for legal or official forms?</dt>
            <dd>The result matches standard calendar counting and is suitable for most official uses.</dd>
          </div>
        </dl>
      </section>
    </CalculatorLayout>
  );
}
