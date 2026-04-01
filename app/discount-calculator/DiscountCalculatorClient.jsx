
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

export default function DiscountCalculatorClient() {
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleCalculate = () => {
    setError("");
    setResult(null);

    if (price === "" || discount === "") {
      setError("Please enter both values.");
      return;
    }

    const original = Number(price);
    const discountPercent = Number(discount);

    if (original < 0 || discountPercent < 0) {
      setError("Values cannot be negative.");
      return;
    }

    if (discountPercent > 100) {
      setError("Discount cannot exceed 100%.");
      return;
    }

    const saved = (discountPercent / 100) * original;
    const finalPrice = original - saved;

    setResult({ saved, finalPrice });
  };

  return (
    <CalculatorLayout
      title="Discount Calculator"
      subtitle="Calculate the final price and total savings after any discount."
    >
      <section className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2">
          <InputField
            label="Original price"
            id="price"
            type="number"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
            placeholder="e.g., 199.99"
            min="0"
            step="0.01"
            required
          />
          <InputField
            label="Discount %"
            id="discount"
            type="number"
            value={discount}
            onChange={(event) => setDiscount(event.target.value)}
            placeholder="e.g., 20"
            min="0"
            step="0.01"
            required
          />
        </div>
        {error ? <p className="text-sm text-rose-500">{error}</p> : null}
        <button
          type="button"
          onClick={handleCalculate}
          className="w-full rounded-xl bg-sky-600 px-6 py-3 text-base font-semibold text-white transition-colors duration-300 hover:bg-sky-700"
        >
          Calculate Discount
        </button>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <ResultCard title="Final price">{result ? formatCurrency(result.finalPrice) : "--"}</ResultCard>
        <ResultCard title="You save">{result ? formatCurrency(result.saved) : "--"}</ResultCard>
      </section>

      <section className="space-y-5 text-base leading-relaxed text-slate-600 dark:text-slate-300">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Know the real price before you buy</h2>
        <p>
          Discounts look simple, but calculating the actual amount you save and the final price can
          take time, especially when numbers are not round. This discount calculator gives you the
          final price and savings instantly so you can make clear purchasing decisions. Enter the
          original price and the discount percentage, and the tool handles the rest with clean
          formatting and quick validation.
        </p>
        <p>
          The calculator uses the standard formula: savings equals the original price multiplied by
          the discount percentage, and the final price is the original price minus the savings. It
          also checks for negative values and prevents discount rates over 100 percent. These
          safeguards make the results reliable for shopping, business pricing, or quick estimates
          during negotiations.
        </p>
        <p>
          Use this page to compare promotions, estimate margins, or plan budget-friendly purchases.
          The interface stays focused and responsive with large fields, a single action button, and
          a results card that displays both the final amount and your total savings. It is a simple
          but essential calculator that saves time every day.
        </p>
      <p>
          Businesses can also use this calculator to check promotional margins and ensure discounts still meet profitability goals. By seeing the saved amount alongside the final price, you can communicate value clearly to customers or stakeholders. The formatted output keeps the numbers readable, which is especially helpful when comparing multiple offers side by side.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Frequently asked questions</h2>
        <dl className="space-y-4 text-base text-slate-600 dark:text-slate-300">
          <div>
            <dt className="font-semibold text-slate-900 dark:text-white">Can I use this for multiple discounts?</dt>
            <dd>This calculator handles a single discount. For stacked discounts, apply them one at a time.</dd>
          </div>
          <div>
            <dt className="font-semibold text-slate-900 dark:text-white">Why is the final price different from my receipt?</dt>
            <dd>Taxes and fees are not included here, so your total may differ at checkout.</dd>
          </div>
          <div>
            <dt className="font-semibold text-slate-900 dark:text-white">Does it work for wholesale pricing?</dt>
            <dd>Yes. It works for any price and percentage where a discount is applied.</dd>
          </div>
        </dl>
      </section>
    </CalculatorLayout>
  );
}

