import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-docs",
    "@storybook/addon-onboarding"
  ],
  "framework": {
    "name": "@storybook/react-vite",
    "options": {}
  },
  "viteFinal": async (config) => {
    // Configure Vite to handle Linaria CSS-in-JS
    config.define = {
      ...config.define,
      'process.env.NODE_ENV': JSON.stringify('development'),
    };
    
    // Add Linaria plugin configuration
    config.plugins = config.plugins || [];
    
    // Ensure CSS is processed correctly
    config.css = config.css || {};
    config.css.postcss = {
      plugins: [
        require('postcss-import'),
        require('autoprefixer'),
      ],
    };
    
    return config;
  },
};
export default config;