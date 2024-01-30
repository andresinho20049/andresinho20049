const { url } = require("inspector");
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.{js, ts}",
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/content/**/*.{md,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      green: colors.green,
      purple: colors.purple,
      yellow: colors.yellow,
      amber: colors.amber,
      red: colors.red,
      pink: colors.pink,
      neutral: colors.neutral,
      primary: colors.cyan,
      secondary: colors.pink,
      zinc: colors.zinc,
      cyan: colors.cyan,
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            "code::before": {
              content: '""',
            },
            "code::after": {
              content: '""',
            },
          },
        },
        quoteless: {
          css: {
            "blockquote p:first-of-type::before": { content: "none" },
            "blockquote p:first-of-type::after": { content: "none" },
          },
        },
      },
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(50% 50% at 50% 50%, var(--tw-gradient-stops))",
        art_andresinho_bg: "url('../../public/background/homeBg.png')",
        art_andresinho_mobile_bg:
          "url('../../public/background/homeBg_mobile.png')",
      },
      animation: {
        "fade-in": "fade-in 3s ease-in-out forwards",
        title: "title 3s ease-out forwards",
        "fade-left": "fade-left 3s ease-in-out forwards",
        "fade-right": "fade-right 3s ease-in-out forwards",
        typing: "typing 2s steps(20) normal forwards, blink .7s infinite",
        transformOpacity: "transformOpacity 5s infinite alternate-reverse",
        sizeOpacity:
          "ping 3s infinite alternate-reverse, opacityEffect 8s infinite alternate-reverse",
        bounceOpacityLeft:
          "bounce 1s infinite, fade-left 8s infinite alternate-reverse",
        bounceOpacityRight:
          "bounce 1s infinite, fade-right 8s infinite alternate-reverse",
        bounceOpacity:
          "bounce 1s infinite, opacityEffect 8s infinite alternate",
        pulseOpacity:
          "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite, skewEffect 3s linear infinite alternate, opacityEffect 5s infinite alternate ",
        fadeOutRight:
          "fade-in 3s ease-in-out backwards,  fade-right 5s forwards 3 alternate",
        fadeOutLeft:
          "fade-in 3s ease-in-out backwards,  fade-left 5s forwards 3 alternate",
        fadeOutSkew:
          "fade-in 3s ease-in-out forwards, skewEffect 3s infinite alternate, opacityEffect 5s 10 forwards ",
        skewEffect:
          "skewEffect 2s cubic-bezier(0.4, 0, 0.6, 1) infinite, opacityEffect 5s infinite alternate-reverse ",
      },
      keyframes: {
        "fade-in": {
          "0%": {
            opacity: "0%",
          },
          "75%": {
            opacity: "0%",
          },
          "100%": {
            opacity: "100%",
          },
        },
        "fade-left": {
          "0%": {
            transform: "translateX(100%)",
            opacity: "0%",
          },

          "30%": {
            transform: "translateX(0%)",
            opacity: "100%",
          },
          "100%": {
            opacity: "0%",
          },
        },
        "fade-right": {
          "0%": {
            transform: "translateX(-100%)",
            opacity: "0%",
          },

          "30%": {
            transform: "translateX(0%)",
            opacity: "100%",
          },
          "100%": {
            opacity: "0%",
          },
        },
        title: {
          "0%": {
            "line-height": "0%",
            "letter-spacing": "0.25em",
            opacity: "0",
          },
          "25%": {
            "line-height": "0%",
            opacity: "0%",
          },
          "80%": {
            opacity: "100%",
          },

          "100%": {
            "line-height": "100%",
            opacity: "100%",
          },
        },
        typing: {
          "0%": {
            width: "0%",
            opacity: "0%"
          },
          "10%": {
            opacity: "100%"
          },
          "100%": {
            width: "100%",
          },
        },
        blink: {
          "50%": {
            borderColor: "transparent",
          },
          // "100%": {
          //   borderColor: "white",
          // },
        },
        transformOpacity: {
          "0%": {
            transform: "translateX(-50%) translateY(0%) skewY(-6deg)",
          },
          "30%": {
            transform: "translateX(30%)  skewY(10deg)",
            opacity: "0%",
          },
          "75%": {
            opacity: "0%",
          },
          "100%": {
            transform: "translateY(50%) translateX(30%) skewY(6deg)",
          },
        },
        opacityEffect: {
          "0%": {
            opacity: "0%",
          },
          "10%": {
            opacity: "100%",
          },
          "20%": {
            opacity: "0%",
          },
          "100%": {
            opacity: "0%",
          },
        },
        skewEffect: {
          "30%": {
            transform: "skewY(-10deg)",
          },
          "75%": {
            transform: "skewY(10deg)",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("flowbite/plugin")],
};
