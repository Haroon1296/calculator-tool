export default function CalculatorLayout({ title, subtitle, children }) {
  return (
    <main className="flex flex-1 items-center justify-center px-4 py-12">
      <div className="w-full max-w-3xl rounded-3xl border border-slate-200/70 bg-white/85 p-8 shadow-soft-xl transition-colors duration-300 dark:border-gray-700/70 dark:bg-gray-900/70">
        <div className="space-y-3">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
            {title}
          </h1>
          {subtitle ? (
            <p className="text-base text-slate-600 dark:text-slate-300">{subtitle}</p>
          ) : null}
        </div>
        <div className="mt-8 space-y-8">{children}</div>
      </div>
    </main>
  );
}
