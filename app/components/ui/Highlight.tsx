type HighlightProps = {
  children: React.ReactNode;
  variant?: 'accent' | 'tech' | 'success' | 'warning';
};

export function Highlight({ children, variant = 'accent' }: HighlightProps) {
  const styles = {
    accent: 'font-semibold text-[var(--color-accent)]',
    tech: 'font-bold text-blue-400',
    success: 'font-semibold text-green-500',
    warning: 'font-semibold text-orange-500',
  };

  return (
    <span className={styles[variant]}>
      {children}
    </span>
  );
}