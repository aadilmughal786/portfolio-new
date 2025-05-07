export type LanguageName =
  | 'JavaScript'
  | 'TypeScript'
  | 'Python'
  | 'HTML'
  | 'CSS'
  | 'Java'
  | 'Go'
  | 'Ruby'
  | 'PHP'
  | 'C'
  | 'C++'
  | 'C#'
  | 'Swift'
  | 'Kotlin'
  | 'Rust'
  | 'Dart'
  | 'Scala'
  | 'Haskell';
// Add more languages here as needed

export const languageColors: Record<LanguageName, string> = {
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  Python: '#3572A5',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Java: '#b07219',
  Go: '#00ADD8',
  Ruby: '#701516',
  PHP: '#4F5D95',
  C: '#555555',
  'C++': '#f34b7d',
  'C#': '#178600',
  Swift: '#ffac45',
  Kotlin: '#A97BFF',
  Rust: '#dea584',
  Dart: '#00B4AB',
  Scala: '#c22d40',
  Haskell: '#5e5086',
};

export const statusStyles: Record<string, string> = {
  active: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100',
  completed: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100',
  archived: 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100',
  'in-progress': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100',
};

export const generateRandomGradient = () => {
  // Function to generate a random color in hex format
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  // Generate two random colors
  const color1 = getRandomColor();
  const color2 = getRandomColor();

  // Return the gradient string with opacity
  return `linear-gradient(to right, ${color1}, ${color2})`;
};
