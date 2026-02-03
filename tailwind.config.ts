import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Injoy custom colors
        cream: "hsl(var(--cream))",
        forest: "hsl(var(--forest))",
        sage: "hsl(var(--sage))",
        gold: "hsl(var(--gold))",
        "gold-light": "hsl(var(--gold-light))",
        "warm-gray": "hsl(var(--warm-gray))",
        // Dining page specific colors
        "zen-green": "hsl(var(--zen-green))",
        "zen-green-dark": "hsl(var(--zen-green-dark))",
        "zen-beige": "hsl(var(--zen-beige))",
      },
      fontFamily: {
        serif: ['Noto Serif TC', 'Playfair Display', 'serif'],
        sans: ['GenSenRounded', 'Noto Sans TC', 'Lato', 'sans-serif'],
        noto: ['Noto Sans TC', 'Lato', 'sans-serif'],
        iansui: ['Iansui', 'Noto Sans TC', 'sans-serif'],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        blob: "60% 40% 30% 70% / 60% 30% 70% 40%",
        "blob-2": "40% 60% 70% 30% / 30% 70% 40% 60%",
        oval: "50% 50% 45% 55% / 70% 70% 30% 30%",
        arch: "50% 50% 0% 0% / 100% 100% 0% 0%",
      },
      boxShadow: {
        soft: "0 4px 30px -8px hsl(45 20% 70% / 0.4)",
        organic: "0 8px 40px -12px hsl(120 21% 36% / 0.15)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        flow: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(1deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "bounce-gentle": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(5px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        flow: "flow 8s ease-in-out infinite",
        float: "float 4s ease-in-out infinite",
        "bounce-gentle": "bounce-gentle 2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
