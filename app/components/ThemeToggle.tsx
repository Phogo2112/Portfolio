// app/components/ThemeToggle.tsx
'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [showBadge, setShowBadge] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Vérifie si l'utilisateur a déjà cliqué sur le toggle
    const hasUsedThemeToggle = localStorage.getItem('hasUsedThemeToggle');
    if (!hasUsedThemeToggle) {
      setShowBadge(true);
    }
  }, []);

  const handleToggle = () => {
    const currentTheme = theme === 'system' ? systemTheme : theme;
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');

    // Enlève le badge après le premier clic
    if (showBadge) {
      setShowBadge(false);
      localStorage.setItem('hasUsedThemeToggle', 'true');
    }
  };

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-lg bg-gray-200 dark:bg-gray-800 animate-pulse" />
    );
  }

  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <div className="relative">
      {/* Badge "NEW" animé */}
      <AnimatePresence>
        {showBadge && (
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{
              scale: 1,
              rotate: 0,
              y: [0, -3, 0] // Animation de rebond
            }}
            exit={{ scale: 0, rotate: 180 }}
            transition={{
              duration: 0.5,
              y: {
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut"
              }
            }}
            className="absolute -top-2 -right-2 z-10"
          >
            <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white text-[9px] font-bold px-2 py-0.5 rounded-full shadow-lg border-2 border-white dark:border-gray-800">
              NEW
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bouton toggle avec effet de pulsation si badge visible */}
      <motion.button
        onClick={handleToggle}
        animate={showBadge ? {
          boxShadow: [
            "0 0 0 0 rgba(59, 130, 246, 0.4)",
            "0 0 0 10px rgba(59, 130, 246, 0)",
          ]
        } : {}}
        transition={{
          duration: 1.5,
          repeat: showBadge ? Infinity : 0,
        }}
        className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
        aria-label="Toggle theme"
        title={currentTheme === 'dark' ? 'Mode clair' : 'Mode sombre'}
      >
        {currentTheme === 'dark' ? (
          <Sun className="w-5 h-5 text-yellow-500" />
        ) : (
          <Moon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
        )}
      </motion.button>
    </div>
  );
}