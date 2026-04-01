"use client";

export default function InputField({
  label,
  id,
  type = "text",
  value,
  onChange,
  placeholder,
  min,
  step,
  error,
  required,
  hint
}) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label htmlFor={id} className="text-sm font-medium text-slate-700 dark:text-slate-200">
          {label} {required ? <span className="text-rose-500">*</span> : null}
        </label>
        {hint ? <span className="text-xs text-slate-500 dark:text-slate-400">{hint}</span> : null}
      </div>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        min={min}
        step={step}
        className="w-full rounded-xl border border-slate-200 bg-white/90 px-4 py-3 text-base text-slate-900 shadow-sm outline-none transition-colors duration-300 focus:border-sky-400 focus:ring-2 focus:ring-sky-200 dark:border-gray-700 dark:bg-gray-900/60 dark:text-white dark:focus:border-sky-500 dark:focus:ring-sky-500/30"
      />
      {error ? <p className="text-sm text-rose-500">{error}</p> : null}
    </div>
  );
}
