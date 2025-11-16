type HighlightProps = {
  children: React.ReactNode;
  variant?: 'accent' | 'tech' | 'success' | 'warning';
};

export function Highlight({ children, variant = 'accent' }: HighlightProps) {
  const styles = {
    accent: 'font-semibold text-[var(--color-accent)]',
    tech: 'font-bold text-blue-700 dark:text-blue-400',
    success: 'font-semibold text-green-700 dark:text-green-400',
    warning: 'font-semibold text-orange-700 dark:text-orange-400',

  };

  return (
    <span className={styles[variant]}>
      {children}
    </span>
  );
}