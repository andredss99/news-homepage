/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
        fontFamily: {
            'inter': ["Inter"]
        },
        maxWidth: {
            'prose': '40ch'
        },
        gridTemplateRows: {
            'layout': 'auto 16rem 8rem'
        },
        backgroundImage: {
            'main-post': "url('../assets/images/image-web-3-desktop.jpg')"
        }
    },
    colors: {
        'orange-200': 'hsl(35, 77%, 62%)',
        'red-200': 'hsl(5, 85%, 63%)',
        'white-100': 'hsl(36, 100%, 99%)',
        'grayish-blue-400': 'hsl(233, 8%, 79%)',
        'grayish-blue-600': 'hsl(236, 13%, 42%)',
        'blue-800': 'hsl(240, 100%, 5%)'
    },
    letterSpacing: {
        'widest': '0.25em'
    }
  },
  plugins: [],
}
