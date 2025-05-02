// types/languageColors.ts

export type LanguageName =
  | "JavaScript"
  | "TypeScript"
  | "Python"
  | "HTML"
  | "CSS"
  | "Java"
  | "Go"
  | "Ruby"
  | "PHP"
  | "C"
  | "C++"
  | "C#"
  | "Swift"
  | "Kotlin"
  | "Rust"
  | "Dart"
  | "Scala"
  | "Haskell";
// Add more languages here as needed

const LanguageColors: Record<LanguageName, string> = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  Python: "#3572A5",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Java: "#b07219",
  Go: "#00ADD8",
  Ruby: "#701516",
  PHP: "#4F5D95",
  C: "#555555",
  "C++": "#f34b7d",
  "C#": "#178600",
  Swift: "#ffac45",
  Kotlin: "#A97BFF",
  Rust: "#dea584",
  Dart: "#00B4AB",
  Scala: "#c22d40",
  Haskell: "#5e5086",
};

export default LanguageColors;
