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

  background: {
    primary: '#000000',
    secondary: '#050512',
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
    bg: 'background.primary',
    border: 'border.medium',
    placeholder: 'text.muted',
  }
}

const theme = extendTheme({
  colors,
  config: {
    useSystemColorMode: false,
  },
  styles: {
    global: {
      body: {
        bg: 'background.primary',
        color: 'text.primary',
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
          bg: 'brand.500',
          color: 'white',
          _hover: {
            bg: 'brand.600',
          },
        },
      },
    },
    Input: {
      defaultProps: {
        bg: 'background.primary',
        borderColor: 'border.medium',
        color: 'text.primary',
        _placeholder: {
          color: 'text.muted',
        },
      },
    },
    Textarea: {
      defaultProps: {
        bg: 'background.primary',
        borderColor: 'border.medium',
        color: 'text.primary',
        _placeholder: {
          color: 'text.muted',
        },
      },
    },
  },
})

export default theme 