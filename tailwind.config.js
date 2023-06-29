/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0788ff',
          indigo: '#6610f2',
          purple: '#6f42c1',
          pink: '#d63384',
          red: '#dc3545',
          orange: '#fd7e14',
          yellow: '#ffc107',
          green: '#37a806',
          teal: '#20c997',
          cyan: '#0dcaf0',
          white: '#fff',
          gray: '#6e6e6e',
          'gray-dark': '#343a40',
          primary: '#6933ff',
          secondary: '#6e6e6e',
          success: '#37a806',
          info: '#0dcaf0',
          warning: '#ffc107',
          danger: '#dc3545',
          light: '#f8f9fa',
          dark: '#212529',
          black: '#000',
          'electric-purple': '#6933ff',
          'deep-purple': '#190f33',
          'dark-blue': '#0037a5',
          'cloud-blue': '#0788ff',
          'iridescent-blue': '#00fced',
          'gray-f4': '#f4f4f4',
          'neutral-400': '#c0c6d9',
          'bright-turquoise': '#1bf8ec',
          'cerebral-grey': '#ccc',
          'starfleet-blue': '#0496ff',
          'gray-b': '#bebbce',
          'white-smoke': '#f5f5f5',
          'hidden-sapphire': '#475872',
          'narwhal-grey': '#060c12',
          'evening-hush': '#7e89a9',
          'chaos-black': '#101010',
          'not-tonight': '#0b0717',
          focus: '#c7b3ff',
        },
        empblue: {
          // Primary
          light: "#0072ce",
          dark: "#00558c",
          // Secondary
          100: "#338ed8",
          200: "#66aae2",
          300: "#99c7eb",
          400: "#cce3f5",
        },
        empyellow: {
          // Primary
          light: "#f1b400",
          dark: "#f1b434",
          // Secondary
          100: "#f4c35d",
          200: "#f7d285",
          300: "#f9e1ae",
          400: "#fcf0d6",
        },
        emppurple: {
          // Primary
          light: "#833177",
          dark: "#642f6c",
          // Secondary
          100: "#9c5a92",
          200: "#b583ad",
          300: "#cdadc9",
          400: "#e6d6e4",
        },
        empred: {
          // Primary
          light: "#bf0d3e",
          dark: "#9b2743",
          // Secondary
          100: "#cc3d65",
          200: "#d96e8b",
          300: "#e59eb2",
          400: "#f2cfd8",
        },
        banner: {
          light: "#f7f7f7",
          dark: "#efeae2",
        },
        emp: {
          normal: "#4a4a4a",
          light: "#ffffff",
        }
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            '*': {
              color: theme('colors.emp-normal')
            }
          }
        }
      })
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
