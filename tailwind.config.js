module.exports = {
    purge: {
        content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
        safelist: [
            'text-red-500',
            'text-green-400',
            'bg-red-500',
            'bg-green-400'
        ]
    
    },
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