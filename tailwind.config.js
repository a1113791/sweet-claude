/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#3F5D45',
        secondary: '#FFE180',
        'bg-base': '#FFFFFF',
        'bg-alt': '#EAF0ED',
        'text-main': '#3F5D45',
        'text-secondary': '#8DA291',
        'text-on-dark': '#FFFFFF',
        'text-on-dark-secondary': '#EAF0ED',
        border: '#8DA291',
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
      fontFamily: {
        nav: [
          '"PingFang TC"',
          '"Microsoft JhengHei"',
          '"Heiti TC"',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
}
