import { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'dark' | 'light';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  mounted: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    // Return default values during initial render or when context is not available
    return {
      theme: 'dark' as Theme,
      toggleTheme: () => {},
      mounted: false
    };
  }
  return context;
}

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check for saved theme preference or default to dark theme
    const savedTheme = localStorage.getItem('theme') as Theme;
    const systemPreference = 'dark'; // Always default to dark for this portfolio

    const initialTheme = savedTheme || systemPreference;
    setTheme(initialTheme);

    // Apply theme to document
    if (initialTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);

    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  // Don't render until theme is properly initialized to prevent hydration mismatch
  if (!mounted) {
    return (
      <ThemeContext.Provider value={{
        theme: 'dark' as Theme,
        toggleTheme: () => {},
        mounted: false
      }}>
        <div className="min-h-screen bg-black text-white">
          {/* Loading state - simple theme toggle placeholder */}
          <div className="fixed top-4 right-4 z-50">
            <button className="p-2 rounded-full bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors">
              <div className="w-5 h-5" />
            </button>
          </div>
          {children}
        </div>
      </ThemeContext.Provider>
    );
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, mounted }}>
      {children}
    </ThemeContext.Provider>
  );
}
