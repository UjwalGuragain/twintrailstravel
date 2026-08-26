export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#123F8C',
          deep: '#0B2F6B',
          orange: '#F58220',
          light: '#F7F9FC',
          dark: '#172033',
          muted: '#667085',
        },
      },
      boxShadow: {
        soft: '0 18px 45px rgba(17, 31, 58, 0.12)',
      },
    },
  },
  plugins: [],
};
