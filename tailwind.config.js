module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                dark: "#494848",
                pickle: "#0faad5",
                bg: "#2B2B2B",
            },

            fontFamily: {
                'schwifty': 'get schwifty'
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}