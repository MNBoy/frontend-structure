import { nextui } from '@nextui-org/react';
import type { Config } from 'tailwindcss';

const config: Config = {
  important: true,
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6B37FF',
        secondary: '#202020',
        surface: '#F7F7F7',
        'on-surface': '#A1A1A1',
      },
      backgroundColor: {
        'primary-background': '#FFFFFF',
        'secondary-background': '#F7F8FA',
        'on-secondary-background': '#F1F1F2',
      },
      backgroundImage: {
        'gradient-primary': `linear-gradient(216.56deg, #383FDE 5.32%, #8444D5 94.32%)`,
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
};
export default config;
