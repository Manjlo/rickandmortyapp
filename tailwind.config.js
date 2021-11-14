module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: 'class', 
    theme: {
        extend: {
            colors: {
                dark: "#494848",
                pickle: "#0faad5",
                bg: "#2B2B2B",
            },

        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}