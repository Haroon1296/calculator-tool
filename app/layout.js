import "./globals.css";
import Link from "next/link";
import { Space_Grotesk } from "next/font/google";
import ThemeToggle from "../components/ThemeToggle";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk"
});

const themeScript = `
(function() {
  try {
    var storedTheme = localStorage.getItem('theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var theme = storedTheme ? storedTheme : (prefersDark ? 'dark' : 'light');
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  } catch (e) {}
})();
`;

export const metadata = {
  title: "Micro SaaS Calculators",
  description:
    "Fast, clean, and SEO-optimized calculators for age, percentage, BMI, discounts, and EMI. Built for speed, clarity, and modern UX."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={spaceGrotesk.variable}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-screen font-sans gradient-bg">
        <div className="flex min-h-screen flex-col">
          <header className="border-b border-slate-200/60 bg-white/70 backdrop-blur dark:border-gray-800/70 dark:bg-gray-900/70">
            <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
              <Link href="/" className="text-lg font-semibold tracking-tight">
                Micro SaaS Calculators
              </Link>
              <ThemeToggle />
            </div>
          </header>

          {children}
        </div>
      </body>
    </html>
  );
}
