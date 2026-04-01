export const metadata = {
  title: "About | Micro SaaS Calculators",
  description:
    "Learn about the Micro SaaS Calculators toolkit, the design philosophy, and how these tools help you get fast, reliable answers."
};

export default function AboutPage() {
  return (
    <main className="flex-1 px-4 py-12">
      <section className="mx-auto w-full max-w-4xl space-y-10">
        <header className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-300">
            About
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white">
            A focused toolkit for fast, reliable calculations
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Micro SaaS Calculators is built for people who need answers without distractions. The
            goal is to keep every calculator lightweight, accurate, and easy to use on any device.
          </p>
        </header>

        <section className="space-y-5 text-base leading-relaxed text-slate-600 dark:text-slate-300">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Why this toolkit exists</h2>
          <p>
            Many online calculators are slow, cluttered, or overloaded with ads. This project
            focuses on the essentials: clear inputs, instant results, and explanations that help
            you understand the numbers. Each page is crafted with SEO-friendly copy so the tools
            are discoverable, but the interface stays minimal and performance-first.
          </p>
          <p>
            Every calculator is built with the same user-first pattern: a clean hero title, large
            input fields, a single action button, and a results panel that is easy to read. We
            validate inputs to avoid errors and format outputs so they are ready to use in real
            decisions, whether that is planning a loan, evaluating a discount, or tracking health
            metrics.
          </p>
          <p>
            Dark mode is supported by default and respects system preferences. We also store your
            choice locally when you toggle themes, so the experience stays consistent across
            sessions. The overall visual system uses modern typography, generous spacing, and soft
            surfaces to keep the tools approachable on both desktop and mobile.
          </p>
        </section>

        <section className="space-y-5 text-base leading-relaxed text-slate-600 dark:text-slate-300">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">What you can expect</h2>
          <p>
            This is a growing collection of focused utilities. Expect fast performance, accessible
            layouts, and thoughtful defaults. The calculators are built to be dependable, so you
            can trust the numbers and move on with your day.
          </p>
          <p>
            If you have feedback, feature requests, or want a specific calculator added, reach out
            anytime. The goal is to keep building tools that feel like they were made for your
            workflow.
          </p>
        </section>
      </section>
    </main>
  );
}
