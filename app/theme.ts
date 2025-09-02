import { extendTheme } from '@chakra-ui/react'

const colors = {
  // Primary brand colors - Red theme for Cole Tree Care
  brand: {
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ff0000', // Pure red
    600: '#dc2626',
    700: '#b91c1c',
    800: '#991b1b',
    900: '#7f1d1d',
  },

  background: {
    primary: '#ffffff',
    secondary: '#f8f9fa',
  },
  
  // Text colors
  text: {
    primary: '#1a202c',    // Main text - dark for white background
    secondary: '#4a5568',  // Secondary text
    muted: '#718096',      // Muted text
    inverse: '#ffffff',    // Text on dark backgrounds
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
    light: '#e2e8f0',
    medium: '#cbd5e0',
    dark: '#a0aec0',
  },
  
  // Form colors
  form: {
    bg: 'background.secondary',
    border: 'border.medium',
    placeholder: '#718096',
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
          color: '#a0a0a0',
        },
      },
    },
    Textarea: {
      defaultProps: {
        bg: 'background.primary',
        borderColor: 'border.medium',
        color: 'text.primary',
        _placeholder: {
          color: '#a0a0a0',
        },
      },
    },
  },
})

export default theme 