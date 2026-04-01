import EmiCalculatorClient from "./EmiCalculatorClient";

export const metadata = {
  title: "EMI Calculator | Loan Monthly Payment",
  description:
    "Calculate monthly EMI for loans using principal, annual interest rate, and time in months with a clean EMI calculator."
};

export default function EmiCalculatorPage() {
  return <EmiCalculatorClient />;
}
