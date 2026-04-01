
"use client";

import { useState } from "react";
import CalculatorLayout from "../../components/CalculatorLayout";
import InputField from "../../components/InputField";
import ResultCard from "../../components/ResultCard";

const formatNumber = (value, decimals = 2) => {
  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits: decimals
  }).format(value);
};

export default function PercentageCalculatorClient() {
  const [percentValue, setPercentValue] = useState("");
  const [baseValue, setBaseValue] = useState("");
  const [percentOfResult, setPercentOfResult] = useState(null);
  const [percentOfError, setPercentOfError] = useState("");

  const [partValue, setPartValue] = useState("");
  const [wholeValue, setWholeValue] = useState("");
  const [ratioResult, setRatioResult] = useState(null);
  const [ratioError, setRatioError] = useState("");

  const [fromValue, setFromValue] = useState("");
  const [toValue, setToValue] = useState("");
  const [changeResult, setChangeResult] = useState(null);
  const [changeError, setChangeError] = useState("");

  const handlePercentOf = () => {
    setPercentOfError("");
    setPercentOfResult(null);

    if (percentValue === "" || baseValue === "") {
      setPercentOfError("Please enter both values.");
      return;
    }

    const percent = Number(percentValue);
    const base = Number(baseValue);

    if (percent < 0 || base < 0) {
      setPercentOfError("Values cannot be negative.");
      return;
    }

    const result = (percent / 100) * base;
    setPercentOfResult(result);
  };

  const handleRatio = () => {
    setRatioError("");
    setRatioResult(null);

    if (partValue === "" || wholeValue === "") {
      setRatioError("Please enter both values.");
      return;
    }

    const part = Number(partValue);
    const whole = Number(wholeValue);

    if (part < 0 || whole < 0) {
      setRatioError("Values cannot be negative.");
      return;
    }

    if (whole === 0) {
      setRatioError("The whole value cannot be zero.");
      return;
    }

    const result = (part / whole) * 100;
    setRatioResult(result);
  };

  const handleChange = () => {
    setChangeError("");
    setChangeResult(null);

    if (fromValue === "" || toValue === "") {
      setChangeError("Please enter both values.");
      return;
    }

    const from = Number(fromValue);
    const to = Number(toValue);

    if (from < 0 || to < 0) {
      setChangeError("Values cannot be negative.");
      return;
    }

    if (from === 0) {
      setChangeError("The starting value must be greater than zero.");
      return;
    }

    const result = ((to - from) / from) * 100;
    setChangeResult(result);
  };

  return (
    <CalculatorLayout
      title="Percentage Calculator"
      subtitle="Solve percentage of a value, ratios, and percentage change in one place."
    >
      <section className="space-y-5">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">X% of Y</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <InputField
            label="Percentage (X)"
            id="percent-value"
            type="number"
            value={percentValue}
            onChange={(event) => setPercentValue(event.target.value)}
            placeholder="e.g., 15"
            min="0"
            step="0.01"
            required
          />
          <InputField
            label="Base value (Y)"
            id="base-value"
            type="number"
            value={baseValue}
            onChange={(event) => setBaseValue(event.target.value)}
            placeholder="e.g., 240"
            min="0"
            step="0.01"
            required
          />
        </div>
        {percentOfError ? <p className="text-sm text-rose-500">{percentOfError}</p> : null}
        <button
          type="button"
          onClick={handlePercentOf}
          className="rounded-xl bg-sky-600 px-6 py-3 text-base font-semibold text-white transition-colors duration-300 hover:bg-sky-700"
        >
          Calculate Percentage of Value
        </button>
        <ResultCard title="Result">
          {percentOfResult !== null ? formatNumber(percentOfResult, 2) : "--"}
        </ResultCard>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">What % is X of Y</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <InputField
            label="Part (X)"
            id="part-value"
            type="number"
            value={partValue}
            onChange={(event) => setPartValue(event.target.value)}
            placeholder="e.g., 45"
            min="0"
            step="0.01"
            required
          />
          <InputField
            label="Whole (Y)"
            id="whole-value"
            type="number"
            value={wholeValue}
            onChange={(event) => setWholeValue(event.target.value)}
            placeholder="e.g., 120"
            min="0"
            step="0.01"
            required
          />
        </div>
        {ratioError ? <p className="text-sm text-rose-500">{ratioError}</p> : null}
        <button
          type="button"
          onClick={handleRatio}
          className="rounded-xl bg-sky-600 px-6 py-3 text-base font-semibold text-white transition-colors duration-300 hover:bg-sky-700"
        >
          Calculate Percentage Ratio
        </button>
        <ResultCard title="Result">
          {ratioResult !== null ? `${formatNumber(ratioResult, 2)}%` : "--"}
        </ResultCard>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Percentage increase or decrease</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <InputField
            label="Starting value"
            id="from-value"
            type="number"
            value={fromValue}
            onChange={(event) => setFromValue(event.target.value)}
            placeholder="e.g., 80"
            min="0"
            step="0.01"
            required
          />
          <InputField
            label="New value"
            id="to-value"
            type="number"
            value={toValue}
            onChange={(event) => setToValue(event.target.value)}
            placeholder="e.g., 120"
            min="0"
            step="0.01"
            required
          />
        </div>
        {changeError ? <p className="text-sm text-rose-500">{changeError}</p> : null}
        <button
          type="button"
          onClick={handleChange}
          className="rounded-xl bg-sky-600 px-6 py-3 text-base font-semibold text-white transition-colors duration-300 hover:bg-sky-700"
        >
          Calculate Percentage Change
        </button>
        <ResultCard title="Result">
          {changeResult !== null ? `${formatNumber(changeResult, 2)}%` : "--"}
        </ResultCard>
      </section>

      <section className="space-y-5 text-base leading-relaxed text-slate-600 dark:text-slate-300">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Why use a percentage calculator?</h2>
        <p>
          Percentages are a universal way to compare values, track change, and communicate ratios.
          Yet doing the math quickly can be surprisingly error prone, especially when multiple
          steps are involved. This percentage calculator bundles the most common scenarios into one
          clean interface: finding X percent of Y, determining what percent X is of Y, and measuring
          percentage increase or decrease. Each section has dedicated inputs and a focused result
          card so you can solve the exact problem you are facing without extra clutter.
        </p>
        <p>
          The calculator uses straightforward formulas that are easy to verify. For a percent of a
          value, it multiplies the base by the percentage divided by 100. For percentage ratios, it
          divides the part by the whole and converts it into a percent. For change, it compares the
          new value to the starting value and reports the difference relative to the starting point.
          Because we validate for empty inputs, negative numbers, and divide by zero, the results
          stay trustworthy and predictable.
        </p>
        <p>
          These calculations are essential for budgeting, sales analysis, marketing metrics, and
          everyday planning. You can check growth rates, measure discounts, or calculate progress
          toward a goal in seconds. The design keeps the focus on clarity: large fields, clear
          labels, and a single action button for each scenario. Whether you are working on a
          business dashboard or simply checking a quick ratio, this tool is ready for reliable use.
        </p>
      <p>
          If you work with analytics or pricing, percentages appear everywhere: conversion rates, churn, profit margins, and growth targets. Having a calculator that separates each scenario keeps the results easy to explain to teammates and clients. Use the percent of value section for commissions and discounts, the ratio section for performance reporting, and the change section for month to month comparisons. The results are formatted clearly so you can copy them into reports or presentations without extra cleanup.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Frequently asked questions</h2>
        <dl className="space-y-4 text-base text-slate-600 dark:text-slate-300">
          <div>
            <dt className="font-semibold text-slate-900 dark:text-white">Can I use decimals for percent values?</dt>
            <dd>Yes. Enter decimals like 12.5 for precise calculations.</dd>
          </div>
          <div>
            <dt className="font-semibold text-slate-900 dark:text-white">What happens if I enter a zero base value?</dt>
            <dd>The tool blocks divide by zero cases and prompts you to enter a valid value.</dd>
          </div>
          <div>
            <dt className="font-semibold text-slate-900 dark:text-white">Is this useful for business metrics?</dt>
            <dd>Absolutely. Use it for growth rates, conversion rates, and pricing changes.</dd>
          </div>
        </dl>
      </section>
    </CalculatorLayout>
  );
}

