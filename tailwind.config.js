/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{html,js,svelte,ts}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#f0f8ff',
        secondary: '#d8dfe6',
        tertiary: '#c0c6cc',
        quaternary: '#787c80'
      }
    }
  },
  plugins: []
};

