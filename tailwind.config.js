/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
		 screens: {
    //   "2xl": { min: "1535px" },
    //   // => @media (min-width: 1535px) { ... }
    //   "1.5xl": { min: "1450px" },
    //   // => @media (min-width: 1379px) { ... }
    //   xl: { min: "1379px" },
    //   // => @media (min-width: 1379px) { ... }
    //   "0.5xl": { min: "1336px" },
    //   // => @media (min-width: 1336px) { ... }
    //   lg4: { min: "1280px" },
    //   lg3: { min: "1250px" },
    //   // => @media (min-width: 1250px) { ... }
    //   'lg2.5': { min: "1127px" },
    //   // => @media (min-width: 1127px) { ... }
    //   lg2: { min: "1096px" },
    //   // => @media (min-width: 1096px) { ... }

    //   lg: { min: "1024px" },
    //   // => @media (min-width: 1023px) { ... }

    //   md2: { min: "900px" },
    //   // => @media (min-width: 900px) { ... }

    //   md: { min: "850px" },
    //   // => @media (min-width: 850px) { ... }

    //   sm2: { min: "750px" },
    //   // => @media (min-width: 750px) { ... }

    //   sm: { min: "639px" },
    //   // => @media (min-width: 639px) { ... }

    //   xs3: { min: "550px" },
    //   // => @media (min-width: 550px) { ... }

    //   xs2: { min: "450px" },
    //   // => @media (min-width: 450px) { ... }
    //   xs12:{min:"414px"},
    //   xs: { min: "490px" },
    //   // => @media (max-width: 420px) { ... }
	//   xxs:{min:"360px"},
	//   xxxs:{min:"320px"},
	 xxxs: "320px",   // very small android
        xxs: "360px",    // common samsung size
        xs: "414px",     // iPhone 11/12/13/14 Pro Max

        // Small tablets & large phones
        sm: "640px",

        // Tablets
        md: "768px",
        md2: "853px",
        md3: "900px",    // custom mid tablet breakpoint

        // Laptops
        lg: "1024px",
        lg2: "1096px",
        lg2_5: "1127px",
        lg3: "1250px",
        lg4: "1280px",

        // Large desktops
        xl: "1379px",
        xl_1_5: "1450px",
        "2xl": "1536px",
    },	
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
