export type ThemeShadow = {
  color: string;
  opacity: number;
  radius: number;
  elevation: number;
  offset: { width: number; height: number };
};

export type AppTheme = {
  colors: {
    background: string;
    backgroundAlt: string;
    surface: string;
    surfaceAlt: string;
    border: string;
    text: string;
    textSecondary: string;
    primary: string;
    danger: string;
  };
  radius: {
    sm: number;
    md: number;
    lg: number;
  };
  spacing: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
  };
  shadow: {
    card: ThemeShadow;
  };
};

export const lightTheme: AppTheme = {
  colors: {
    background: '#F3F4F6',
    backgroundAlt: '#F9FAFB',
    surface: '#FFFFFF',
    surfaceAlt: '#F1F5F9',
    border: '#E5E7EB',
    text: '#1F2937',
    textSecondary: '#6B7280',
    primary: '#1E88E5',
    danger: '#D32F2F',
  },
  radius: {
    sm: 8,
    md: 12,
    lg: 20,
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
  },
  shadow: {
    card: {
      color: 'rgba(15, 23, 42, 0.18)',
      opacity: 0.12,
      radius: 12,
      elevation: 3,
      offset: { width: 0, height: 6 },
    },
  },
};
