module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: 'media', // or 'media' or 'class'
    theme: {
        extend: {
            inset: {
                '1/6': '16.666667%'
            },

            height: {
                '11/12': '91.666667%'
            }
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
};
