export default function ResultCard({ title, children }) {
  return (
    <div className="rounded-2xl border border-slate-200/70 bg-white/90 p-5 shadow-sm transition-colors duration-300 dark:border-gray-700/70 dark:bg-gray-800/80">
      <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-300">
        {title}
      </h3>
      <div className="mt-3 text-lg font-semibold text-slate-900 dark:text-white">
        {children}
      </div>
    </div>
  );
}
