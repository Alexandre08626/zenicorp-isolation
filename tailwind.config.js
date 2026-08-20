/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        zenicorp: {
          // Core Brand Colors - Ultra Premium
          black: '#0A0A0A',
          white: '#FEFEFE',
          gold: {
            50: '#FFFDF7',
            100: '#FEF9E7',
            200: '#FDF2C7',
            300: '#FCE96A',
            400: '#FADC12',
            500: '#D4AF37', // Original Gold
            600: '#B8941F',
            700: '#9C7A0A',
            800: '#7D6208',
            900: '#654F07',
            950: '#3D2F04',
          },
          // Isolation Theme - Eco Green
          green: {
            50: '#F0FDF4',
            100: '#DCFCE7',
            200: '#BBF7D0',
            300: '#86EFAC',
            400: '#4ADE80',
            500: '#166534', // Theme Principal
            600: '#15803D',
            700: '#166534',
            800: '#14532D',
            900: '#14432A',
            950: '#052E16',
          },
          // Modern Grays
          gray: {
            50: '#FAFAFA',
            100: '#F4F4F5',
            200: '#E4E4E7',
            300: '#D1D5DB',
            400: '#9CA3AF',
            500: '#6B7280',
            600: '#4B5563',
            700: '#374151',
            800: '#1F2937',
            900: '#111827',
            950: '#030712',
          },
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-playfair)', 'serif'],
        mono: ['var(--font-mono)', 'Consolas', 'monospace'],
      },
      backgroundImage: {
        'eco-gradient': 'linear-gradient(135deg, #166534 0%, #4ADE80 50%, #166534 100%)',
        'premium-gradient': 'linear-gradient(135deg, #D4AF37 0%, #F4E09C 50%, #D4AF37 100%)',
        'nature-gradient': 'linear-gradient(135deg, #052E16 0%, #166534 50%, #4ADE80 100%)',
      },
      boxShadow: {
        'premium': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'eco': '0 10px 25px -3px rgba(22, 101, 52, 0.1), 0 4px 6px -2px rgba(22, 101, 52, 0.05)',
        'glow-green': '0 0 20px rgba(22, 101, 52, 0.3)',
        'glow-gold': '0 0 20px rgba(212, 175, 55, 0.3)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-eco': 'pulseEco 2s ease-in-out infinite',
        'slide-up': 'slideUp 0.8s ease-out',
        'fade-in': 'fadeIn 1s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseEco: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        slideUp: {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}