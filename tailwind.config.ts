import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        trueblue: '#0273DD',
        trueblue2: '#1643A2',
        metallicorange: '#DD6C02',
        deepkoamaru: '#293F6A',
        philippinesilver: '#B7B6B7',
        ghostwhite: '#FBFAF9',
        iceberg: '#72A3CE',
        sunray: '#E9BC5D',
        yankeesblue: '#1F2937',
      },
    },
  },
  plugins: [],
}
export default config
