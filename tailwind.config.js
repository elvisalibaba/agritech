/** @type {import('tailwindcss').Config} */
module.exports = {
  // ... autres configurations
  theme: {
    extend: {
      keyframes: {
        // Définition de l'animation de rotation simple
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        // Permet d'utiliser animate-[spin_6s_linear_infinite_reverse]
        'spin-slow': 'spin 6s linear infinite',
      },
    },
  },
  // ... autres configurations
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ... vos chemins existants
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Assurez-vous que votre répertoire 'app' est inclus
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: { // Pour les éléments qui glissent du bas
          '0%': { opacity: '0', transform: 'translateY(50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        // Ajoutez d'autres keyframes si besoin
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards', // 'forwards' maintient l'état final
        'slide-up': 'slideUp 0.8s ease-out forwards',
        // 'slide-up-delay-1': 'slideUp 0.8s ease-out 0.2s forwards', // Exemple de délai
      },
    },
  },
  plugins: [],
}