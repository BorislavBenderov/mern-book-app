module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        screens: {
            '2xl': { 'max': '1535px' },
            // => @media (max-width: 1535px) { ... }

            'xl': { 'max': '1279px' },
            // => @media (max-width: 1279px) { ... }

            'lg': { 'max': '1050px' },
            // => @media (max-width: 1050px) { ... }

            'md': { 'max': '880px' },
            // => @media (max-width: 880px) { ... }

            'sm': { 'max': '775px' },
            // => @media (max-width: 775px) { ... }

            'vsm': { 'max': '455px' },
            // => @media (max-width: 455px) { ... }
        },
        extend: {
            gridTemplateColumns: {
                // added new 4 column grid as new4
                'auto': 'repeat(auto-fill, minmax(140px, 7fr))'
            }
        }
    },
    plugins: [],
}