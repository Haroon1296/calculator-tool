
"use client";

import { useState } from "react";
import CalculatorLayout from "../../components/CalculatorLayout";
import InputField from "../../components/InputField";
import ResultCard from "../../components/ResultCard";

const formatCurrency = (value) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2
  }).format(value);
};

export default function EmiCalculatorClient() {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [months, setMonths] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleCalculate = () => {
    setError("");
    setResult(null);

    if (principal === "" || rate === "" || months === "") {
      setError("Please enter all fields.");
      return;
    }

    const principalValue = Number(principal);
    const rateValue = Number(rate);
    const monthsValue = Number(months);

    if (principalValue <= 0 || rateValue < 0 || monthsValue <= 0) {
      setError("Values must be greater than zero.");
      return;
    }

    const monthlyRate = rateValue / 12 / 100;
    let emi = 0;

    if (monthlyRate === 0) {
      emi = principalValue / monthsValue;
    } else {
      const numerator = principalValue * monthlyRate * Math.pow(1 + monthlyRate, monthsValue);
      const denominator = Math.pow(1 + monthlyRate, monthsValue) - 1;
      emi = numerator / denominator;
    }

    setResult(emi);
  };

  return (
    <CalculatorLayout
      title="EMI Calculator"
      subtitle="Estimate your monthly loan payment using principal, rate, and time."
    >
      <section className="space-y-6">
        <div className="grid gap-4 md:grid-cols-3">
          <InputField
            label="Loan amount (P)"
            id="principal"
            type="number"
            value={principal}
            onChange={(event) => setPrincipal(event.target.value)}
            placeholder="e.g., 25000"
            min="0"
            step="0.01"
            required
          />
          <InputField
            label="Annual interest %"
            id="rate"
            type="number"
            value={rate}
            onChange={(event) => setRate(event.target.value)}
            placeholder="e.g., 12"
            min="0"
            step="0.01"
            required
          />
          <InputField
            label="Time (months)"
            id="months"
            type="number"
            value={months}
            onChange={(event) => setMonths(event.target.value)}
            placeholder="e.g., 36"
            min="0"
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
          Calculate EMI
        </button>
      </section>

      <section>
        <ResultCard title="Monthly EMI">{result ? formatCurrency(result) : "--"}</ResultCard>
      </section>

      <section className="space-y-5 text-base leading-relaxed text-slate-600 dark:text-slate-300">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Plan loans with confidence</h2>
        <p>
          Equated Monthly Installment (EMI) is the fixed payment you make each month to repay a loan.
          This EMI calculator helps you estimate that payment based on three core inputs: the loan
          amount, the annual interest rate, and the repayment period in months. It converts the
          annual rate into a monthly rate and applies the standard EMI formula to give you a clear
          monthly figure.
        </p>
        <p>
          The formula accounts for compounding interest over time, which makes it more accurate
          than simple interest calculations. If the interest rate is zero, the calculator switches
          to a simple division so the result remains correct. Validation prevents empty inputs or
          negative values, which means you can rely on the output for planning, budgeting, and
          comparing loan offers.
        </p>
        <p>
          Use this calculator to estimate car loans, personal loans, or any fixed payment schedule.
          The clean interface makes it easy to adjust numbers and instantly see the effect on your
          monthly payment. It is an essential tool for anyone evaluating affordability or comparing
          lenders.
        </p>
      <p>
          Before committing to a loan, it helps to test different scenarios. Adjust the interest rate or the loan term to see how much the monthly payment changes. A slightly longer term can reduce the EMI, while a lower rate can improve affordability without extending the schedule. This calculator makes those what if checks fast and easy so you can plan with fewer surprises.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Frequently asked questions</h2>
        <dl className="space-y-4 text-base text-slate-600 dark:text-slate-300">
          <div>
            <dt className="font-semibold text-slate-900 dark:text-white">What if the interest rate is zero?</dt>
            <dd>The calculator divides the loan amount by the number of months for a correct EMI.</dd>
          </div>
          <div>
            <dt className="font-semibold text-slate-900 dark:text-white">Does the EMI include fees or insurance?</dt>
            <dd>No. It only calculates the payment based on principal, rate, and time.</dd>
          </div>
          <div>
            <dt className="font-semibold text-slate-900 dark:text-white">Can I use this for mortgages?</dt>
            <dd>Yes. Any fixed-rate installment loan can use the same formula.</dd>
          </div>
        </dl>
      </section>
    </CalculatorLayout>
  );
}

