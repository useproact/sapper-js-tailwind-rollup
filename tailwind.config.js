module.exports = {
    purge: {
        content: ['./src/**/*.svelte', './src/**/*.html'],
        options: {
            whitelist: [/svelte-/],
            /* eslint-disable no-unused-vars */
            defaultExtractor: content =>
                [...content.matchAll(/(?:class:)*([\w\d-/:%.]+)/gm)].map(
                    ([_match, group, ..._rest]) => group,
                ),
        },
    },
    theme: {
        fontFamily: {
            sans: ['Noto Sans', 'sans-serif'],
        },
        extend: {
            inset: {
                '-16': '-4rem',
                '-35': '-8.75rem',
            },
            zIndex: {
                75: 75,
                100: 100,
                125: 125,
                150: 150,
            },
            spacing: {
                15: '3.75rem',
                30: '7.5rem',
                50: '12.5rem',
                72: '18rem',
                75: '18.75rem',
                84: '21rem',
                90: '22.5rem',
                96: '24rem',
                112: '28rem',
                270: '67.5rem',
            },
            maxWidth: {
                // '270': '67.5rem',
                400: '25rem',
                544: '34rem',
            },
        },
    },
    variants: {},
    plugins: [],
};
