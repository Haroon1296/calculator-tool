import Link from "next/link";

const calculators = [
  {
    title: "Age Calculator",
    description: "Exact age in years, months, and days.",
    href: "/age-calculator",
    icon: "A"
  },
  {
    title: "Percentage Calculator",
    description: "Percent of a value, ratios, and change.",
    href: "/percentage-calculator",
    icon: "%"
  },
  {
    title: "BMI Calculator",
    description: "Body mass index with category insights.",
    href: "/bmi-calculator",
    icon: "BMI"
  },
  {
    title: "Discount Calculator",
    description: "Final price and savings in seconds.",
    href: "/discount-calculator",
    icon: "$"
  },
  {
    title: "EMI Calculator",
    description: "Estimate monthly loan payments fast.",
    href: "/emi-calculator",
    icon: "EMI"
  }
];

const steps = [
  {
    title: "Pick a calculator",
    description: "Choose the tool that matches your goal."
  },
  {
    title: "Enter your numbers",
    description: "Use clear inputs with instant validation."
  },
  {
    title: "Get your answer",
    description: "See formatted results in a clean card."
  }
];

export default function HomePage() {
  return (
    <main className="relative flex-1 px-4 pb-12 pt-10">
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-12">
        <section className="rounded-3xl border border-slate-200/70 bg-white/85 p-10 shadow-soft-xl transition-colors duration-300 dark:border-gray-700/70 dark:bg-gray-900/70">
          <div className="max-w-2xl space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-300">
              Micro SaaS Calculators
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Find answers fast with focused calculators
            </h1>
            <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              Choose a tool, add your numbers, and get a clear result instantly. Built for speed,
              clarity, and everyday decisions.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#calculators"
                className="inline-flex items-center justify-center rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-sky-700"
              >
                Browse calculators
              </a>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition-colors duration-300 hover:border-slate-300 hover:text-slate-900 dark:border-gray-700 dark:text-slate-200 dark:hover:border-gray-500"
              >
                Learn about the toolkit
              </Link>
            </div>
          </div>
        </section>

        <section className="grid gap-4 sm:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.title}
              className="rounded-2xl border border-slate-200/70 bg-white/80 p-5 text-sm text-slate-600 shadow-sm transition-colors duration-300 dark:border-gray-700/70 dark:bg-gray-900/60 dark:text-slate-300"
            >
              <p className="text-base font-semibold text-slate-900 dark:text-white">{step.title}</p>
              <p className="mt-2 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </section>

        <section id="calculators" className="space-y-6">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Choose a calculator</h2>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                Pick the tool you need and start calculating right away.
              </p>
            </div>
            <Link
              href="/about"
              className="text-sm font-semibold text-slate-500 transition-colors duration-300 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
            >
              About →
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {calculators.map((calculator) => (
              <Link
                key={calculator.title}
                href={calculator.href}
                className="group flex h-full min-h-[220px] flex-col justify-between rounded-2xl border border-slate-200/70 bg-white/85 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-lg dark:border-gray-700/70 dark:bg-gray-900/70 dark:hover:border-sky-500/40"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-11 min-w-11 items-center justify-center rounded-full bg-sky-50 px-2 text-sm font-semibold text-sky-700 transition-colors duration-300 group-hover:bg-sky-600 group-hover:text-white dark:bg-sky-500/10 dark:text-sky-200 dark:group-hover:bg-sky-400 dark:group-hover:text-slate-900">
                    {calculator.icon}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500">
                    Tool
                  </span>
                </div>
                <div className="mt-6 space-y-2">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                    {calculator.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {calculator.description}
                  </p>
                </div>
                <span className="mt-6 text-sm font-semibold text-slate-500 transition-colors duration-300 group-hover:text-sky-700 dark:text-slate-300 dark:group-hover:text-sky-300">
                  Open calculator →
                </span>
              </Link>
            ))}
          </div>
        </section>
      </section>

      <footer className="mx-auto mt-12 flex w-full max-w-6xl flex-col gap-3 border-t border-slate-200/70 pt-6 text-sm text-slate-500 dark:border-gray-700/70 dark:text-slate-300 sm:flex-row sm:items-center sm:justify-between">
        <span>Built for speed, clarity, and modern workflows.</span>
        <div className="flex gap-4">
          <Link href="/about" className="hover:text-slate-900 dark:hover:text-white">
            About
          </Link>
          <a href="mailto:hello@example.com" className="hover:text-slate-900 dark:hover:text-white">
            Contact
          </a>
        </div>
      </footer>
    </main>
  );
}
