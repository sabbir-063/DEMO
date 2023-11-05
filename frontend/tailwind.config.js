/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
    ],
    theme: {
        extend: {
            colors: {
                'neutralSilver': '#F5F7FA',
                'neutralDGray': '#4D4D4D',
                'brandPrimary': '#4CAF4F',
                'neutralGrey': '#717171',
                'grey900': '#18191F',
                'hello': '#263238'
            }
        },
    },
    plugins: [require('flowbite/plugin')],
}
