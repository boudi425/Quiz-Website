# Quiz Website

A modern, science-focused quiz web application where users can personalize their experience, choose from a wide range of subjects and topics, and test their knowledge with adaptive difficulty and instant feedback.

---

## What This Project Does

This project is a **science quiz platform** built as a single-page application. Users start by signing up with a username and selecting which science subjects they want to study. They then pick specific topics (e.g., Quantum Mechanics, Genetics, Calculus) and a difficulty level. The app generates a quiz of up to 20 questions drawn from the selected topics, supports in-question hints and math notation, and at the end shows a score and the option to review every question and answer. It’s designed for learners who want a structured, subject-based way to practice and improve in science and math.

---

## Features

- **Sign up & onboarding** — Enter a username, select one or more main subjects (Physics, Mathematics, Biology, Chemistry, Earth Science, Computer Science), and choose difficulty (Easy, Medium, Hard).
- **Personalized home** — Greeting with your name and a list of sub-topics based on your chosen subjects. Select one or more topics and start a quiz with one click.
- **Rich quiz experience** — Up to 20 questions per quiz, shuffled and split across selected topics. Per-question hints, previous/next navigation, and a confirmation step before submitting.
- **Math & LaTeX support** — Questions and options can include inline math using `$...$` syntax, rendered with KaTeX for a clear, readable experience.
- **Results & review** — Score shown in a circular progress indicator and as “X out of Y.” Options to restart the same quiz, go home, or open a full answer review (questions, your answers, and correct answers).
- **Settings** — Update username, upload a profile picture, change selected subjects, and switch difficulty from a settings panel (e.g. from the home or result page).
- **Dark mode** — Themed UI with light and dark color schemes for comfortable use in any environment.
- **Responsive layout** — Layout and typography adapt to different screen sizes.
- **Persistent preferences** — User data and quiz progress are stored in the browser (e.g. via `localStorage`) so your choices and state are kept between sessions.

---

## Tech Stack

| Category        | Technology |
|----------------|------------|
| **Framework**  | React 19   |
| **Language**   | TypeScript |
| **Build tool** | Vite 7     |
| **Routing**    | React Router DOM 7 |
| **Styling**    | Tailwind CSS 4     |
| **UI components** | Headless UI (e.g. Combobox), Heroicons |
| **Math rendering** | KaTeX, react-katex |

---

## Getting Started

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run the development server**
   ```bash
   npm run dev
   ```

3. **Build for production**
   ```bash
   npm run build
   ```

4. **Preview production build**
   ```bash
   npm run preview
   ```

---

## Try It Online

You can try the live version of this quiz app here. Feel free to explore the subjects, change difficulty, and use the answer review to see how it works.

**[(https://quiz-website-opal.vercel.app/)]**

---

## Upcoming Features

- **Arabic language** — Full UI and content support in Arabic.
- **Quadrat questions** — New question set focused on quadratic equations and related math.
- **Upcoming section** — A dedicated section on the site for upcoming features, content, and news.

---

## License

This project is private. All rights reserved.
