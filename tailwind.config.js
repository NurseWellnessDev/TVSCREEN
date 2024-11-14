// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundSize: {
        "400%": "400%"
      },
      keyframes: {
        gradientShift: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" }
        },
        autoScroll: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-50%)" }
        }
      },
      animation: {
        gradientShift: "gradientShift 6s ease infinite",
        autoScroll: "autoScroll 120s linear infinite"
      }
    }
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".hide-scrollbar": {
          /* For Chrome, Safari, and Edge */
          "-webkit-overflow-scrolling": "touch",
          "scrollbar-width": "none", // Firefox
          "&::-webkit-scrollbar": {
            display: "none" // Chrome, Safari, Edge
          }
        }
      });
    }
  ]
};