import AgeCalculatorClient from "./AgeCalculatorClient";

export const metadata = {
  title: "Age Calculator | Exact Age in Years, Months, and Days",
  description:
    "Calculate your exact age in years, months, and days with a fast, accurate age calculator. Includes clear inputs, results, and helpful FAQs."
};

export default function AgeCalculatorPage() {
  return <AgeCalculatorClient />;
}
