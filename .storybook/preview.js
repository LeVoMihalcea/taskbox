import '../src/index.css';
import { createPinia } from 'pinia';
import {setup} from '@storybook/vue3'

setup((app) => {
  app.use(createPinia());
});

/** @type { import('@storybook/vue3').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
