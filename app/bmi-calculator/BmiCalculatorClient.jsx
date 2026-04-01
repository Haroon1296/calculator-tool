
"use client";

import { useState } from "react";
import CalculatorLayout from "../../components/CalculatorLayout";
import InputField from "../../components/InputField";
import ResultCard from "../../components/ResultCard";

const formatNumber = (value, decimals = 1) => {
  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits: decimals
  }).format(value);
};

const getCategory = (bmi) => {
  if (bmi < 18.5) return "Underweight";
  if (bmi < 25) return "Normal";
  if (bmi < 30) return "Overweight";
  return "Obese";
};

export default function BmiCalculatorClient() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleCalculate = () => {
    setError("");
    setResult(null);

    if (height === "" || weight === "") {
      setError("Please enter both height and weight.");
      return;
    }

    const heightCm = Number(height);
    const weightKg = Number(weight);

    if (heightCm <= 0 || weightKg <= 0) {
      setError("Values must be greater than zero.");
      return;
    }

    const heightM = heightCm / 100;
    const bmi = weightKg / (heightM * heightM);
    setResult({ bmi, category: getCategory(bmi) });
  };

  return (
    <CalculatorLayout
      title="BMI Calculator"
      subtitle="Calculate your body mass index and see the health category instantly."
    >
      <section className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2">
          <InputField
            label="Height (cm)"
            id="height"
            type="number"
            value={height}
            onChange={(event) => setHeight(event.target.value)}
            placeholder="e.g., 172"
            min="0"
            step="0.1"
            required
          />
          <InputField
            label="Weight (kg)"
            id="weight"
            type="number"
            value={weight}
            onChange={(event) => setWeight(event.target.value)}
            placeholder="e.g., 68"
            min="0"
            step="0.1"
            required
          />
        </div>
        {error ? <p className="text-sm text-rose-500">{error}</p> : null}
        <button
          type="button"
          onClick={handleCalculate}
          className="w-full rounded-xl bg-sky-600 px-6 py-3 text-base font-semibold text-white transition-colors duration-300 hover:bg-sky-700"
        >
          Calculate BMI
        </button>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <ResultCard title="BMI">{result ? formatNumber(result.bmi, 1) : "--"}</ResultCard>
        <ResultCard title="Category">{result ? result.category : "--"}</ResultCard>
      </section>

      <section className="space-y-5 text-base leading-relaxed text-slate-600 dark:text-slate-300">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Understanding your BMI result</h2>
        <p>
          Body Mass Index (BMI) is a widely used screening tool that compares weight to height. It
          helps estimate whether someone is underweight, at a healthy weight, overweight, or obese.
          BMI does not measure body fat directly, but it provides a quick and consistent way to
          evaluate weight status across large groups of people. This calculator uses your height in
          centimeters and weight in kilograms to compute the BMI using the standard formula.
        </p>
        <p>
          The result is paired with a category range so you can interpret the number immediately.
          Underweight is below 18.5, normal is 18.5 to 24.9, overweight is 25 to 29.9, and obese is
          30 and above. These ranges are common guidelines used by health professionals. The tool
          also validates inputs to prevent empty fields or negative values, which keeps the output
          accurate and reliable.
        </p>
        <p>
          Use this BMI calculator as a quick reference point for wellness planning, fitness goals,
          and general health check-ins. It is helpful for tracking changes over time or discussing
          targets with a coach or healthcare provider. While BMI does not account for muscle mass or
          body composition, it is still a useful baseline metric when used alongside other health
          indicators.
        </p>
      <p>
          Consistency matters when tracking BMI. Try to use the same measurement units and similar timing for weigh ins to make comparisons fair. Small changes in height or weight can shift the final number, so accurate input is important. This calculator keeps the workflow simple so you can check progress regularly without extra steps, and the category label helps you interpret the number at a glance.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Frequently asked questions</h2>
        <dl className="space-y-4 text-base text-slate-600 dark:text-slate-300">
          <div>
            <dt className="font-semibold text-slate-900 dark:text-white">Is BMI a medical diagnosis?</dt>
            <dd>No. BMI is a screening tool and should be combined with other health metrics.</dd>
          </div>
          <div>
            <dt className="font-semibold text-slate-900 dark:text-white">Which units does this calculator use?</dt>
            <dd>It uses centimeters for height and kilograms for weight.</dd>
          </div>
          <div>
            <dt className="font-semibold text-slate-900 dark:text-white">Why is my BMI different from how I feel?</dt>
            <dd>Muscle mass and body composition can influence BMI, so it is not the only measure.</dd>
          </div>
        </dl>
      </section>
    </CalculatorLayout>
  );
}

