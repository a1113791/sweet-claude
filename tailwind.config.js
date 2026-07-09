/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#3F4E3D',
        'primary-dark': '#2C3A2A',
        secondary: '#DCC06A',
        'bg-base': '#FFFFFF',
        'bg-alt': '#EDF1EA',
        'text-main': '#2C3A2A',
        'text-secondary': '#8A8A8A',
        'text-on-dark': '#F3F1EA',
        'text-on-dark-secondary': '#B9C2B4',
        border: '#E2E2E2',
      },
      borderRadius: {
        sm: '6px',
        md: '8px',
        lg: '12px',
      },
      boxShadow: {
        card: '0 4px 12px rgba(0, 0, 0, 0.06)',
        float: '0 2px 6px rgba(0, 0, 0, 0.1)',
      },
      fontSize: {
        display: ['36px', { fontWeight: '600' }],
        h2: ['26px', { fontWeight: '500' }],
        body: ['15px', { fontWeight: '400' }],
        label: ['13px', { fontWeight: '500', letterSpacing: '0.05em' }],
      },
    },
  },
  plugins: [],
}
