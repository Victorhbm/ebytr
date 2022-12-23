// @type {import('tailwindcss').Config} 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        rotate: {
          from: { transform: 'rotate(180deg)' },
          to: { transform: 'rotate(0deg)' }
        },
        card: {
          from: { transform: 'translateX(-42px)', opacity: 0 },
          to: { transform: 'translateX(0)', opacity: 1 },
        }
      },
      animation: {
        rotate: 'rotate 0.5s ease',
        card: 'card 0.5s ease-in-out'
      }
    },
    colors: {
      'blue-one': '#F9F8F8',
      'blue-two': '#035AA6',
      'blue-three': '#023059',
      'blue-four': '#011526',
      'blue-five': '#0367A6',
      orange: '#F46036',
      green: '#42E2B8',
      'baby-blue': '#88CCF1'
    },
  },
}
