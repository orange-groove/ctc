import { extendTheme } from '@chakra-ui/react'

const colors = {
  // Primary brand colors
  brand: {
    50: '#f0f4ff',
    100: '#e0e9ff',
    200: '#c7d7ff',
    300: '#a3bfff',
    400: '#7a9eff',
    500: '#5a7cff', // Primary blue
    600: '#4a6bff',
    700: '#3d5aff',
    800: '#3549ff',
    900: '#2f3fff',
  },
  
  // Dark theme colors
  dark: {
    50: '#f8f9fa',
    100: '#e9ecef',
    200: '#dee2e6',
    300: '#ced4da',
    400: '#adb5bd',
    500: '#6c757d',
    600: '#495057',
    700: '#343a40',
    800: '#212529',
    900: '#0a0a1a', // Card background
    950: '#050512', // Main background
  },
  
  // Text colors
  text: {
    primary: '#ededed',    // Main text
    secondary: '#b8b8b8',  // Secondary text
    muted: '#8a8a8a',      // Muted text
    inverse: '#050512',    // Text on light backgrounds
  },
  
  // Semantic colors
  success: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#22c55e',
    600: '#16a34a',
    700: '#15803d',
    800: '#166534',
    900: '#14532d',
  },
  
  warning: {
    50: '#fffbeb',
    100: '#fef3c7',
    200: '#fde68a',
    300: '#fcd34d',
    400: '#fbbf24',
    500: '#f59e0b',
    600: '#d97706',
    700: '#b45309',
    800: '#92400e',
    900: '#78350f',
  },
  
  error: {
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ef4444',
    600: '#dc2626',
    700: '#b91c1c',
    800: '#991b1b',
    900: '#7f1d1d',
  },
  
  // Border colors
  border: {
    light: '#374151',
    medium: '#4b5563',
    dark: '#6b7280',
  },
  
  // Form colors
  form: {
    bg: '#0a0a1a',
    border: '#4b5563',
    placeholder: '#8a8a8a',
  }
}

const theme = extendTheme({
  colors,
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  styles: {
    global: {
      body: {
        bg: colors.dark[950],
        color: colors.text.primary,
      },
    },
  },
  components: {
    Button: {
      defaultProps: {
        colorScheme: 'brand',
      },
      variants: {
        solid: {
          bg: colors.brand[500],
          color: 'white',
          _hover: {
            bg: colors.brand[600],
          },
        },
      },
    },
    Input: {
      defaultProps: {
        bg: colors.form.bg,
        borderColor: colors.form.border,
        color: colors.text.primary,
        _placeholder: {
          color: colors.form.placeholder,
        },
      },
    },
    Textarea: {
      defaultProps: {
        bg: colors.form.bg,
        borderColor: colors.form.border,
        color: colors.text.primary,
        _placeholder: {
          color: colors.form.placeholder,
        },
      },
    },
  },
})

export default theme 