// .storybook/manager.ts
import { addons } from '@storybook/manager-api';
import theme from './theme';

addons.setConfig({
  // Apply custom theme
  theme,
});