/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Zend brand colors
        'void-black': '#050510',
        'digital-night': '#0A0A1F',
        'deep-charcoal': '#121212',
        'card-bg': '#141428',
        'card-bg-dark': '#0F0F1F',
        'focus-green': '#33DD55',
        'focus-green-light': '#4BFFB0',
        'focus-green-dark': '#1BE58A',
        'recovery-gold': '#FFC94A',
        'alert-orange': '#FF8C00',
        'light-blue': '#E0FFFF',
        'vibrant-teal': '#66E6FF',
        'text-secondary': '#E0FFFF',
        'text-tertiary': '#B0B0B0',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'mesh-gradient': 'linear-gradient(135deg, #151540 0%, #0F2010 100%)',
      },
    },
  },
  plugins: [],
}

