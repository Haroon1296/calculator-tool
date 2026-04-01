# Micro SaaS Calculators

A fast, SEO-optimized calculator suite built with Next.js App Router and Tailwind CSS. Includes age, percentage, BMI, discount, and EMI calculators with dark mode and clean, responsive UI.

## Features
- 5 calculators: Age, Percentage, BMI, Discount, EMI
- App Router structure with SEO-friendly pages
- Dark mode with system preference + localStorage override
- Mobile-first, responsive layout
- Clean inputs, validation, and formatted outputs

## Tech Stack
- Next.js (App Router)
- React (JavaScript)
- Tailwind CSS

## Routes
- `/` Home
- `/about` About
- `/age-calculator`
- `/percentage-calculator`
- `/bmi-calculator`
- `/discount-calculator`
- `/emi-calculator`

## Project Structure
```
app/
  layout.js
  page.js
  about/page.js
  age-calculator/
  percentage-calculator/
  bmi-calculator/
  discount-calculator/
  emi-calculator/
components/
  CalculatorLayout.jsx
  InputField.jsx
  ResultCard.jsx
  ThemeToggle.jsx
hooks/
  useTheme.js
```

## Getting Started
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm start
```

## Notes
- No backend or external APIs
- Uses `useState` for all state handling
- Dark mode class is applied on `<html>` before render to prevent flicker

## License
MIT
