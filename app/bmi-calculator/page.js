import BmiCalculatorClient from "./BmiCalculatorClient";

export const metadata = {
  title: "BMI Calculator | Body Mass Index and Category",
  description:
    "Calculate your BMI using height and weight, plus see the category with a clean and accurate BMI calculator."
};

export default function BmiCalculatorPage() {
  return <BmiCalculatorClient />;
}
