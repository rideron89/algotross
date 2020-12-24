const colors = require('tailwindcss/colors');

module.exports = {
    purge: {
        content: ['./src/**/*.svelte'],
    },
    theme: {
        colors: {
            current: 'currentColor',
            gray: colors.gray,
            indigo: colors.indigo,
            transparent: 'transparent',
            yellow: colors.yellow,
            white: colors.white,
        },
        extend: {
            animation: {
                spin: 'spin 1.5s linear infinite',
            },
            cursor: {
                help: 'help',
            },
        },
    },
    variants: {},
    plugins: [],
};
