import 'tailwindcss/tailwind.css'
import '../assets/variable.css'
import '../assets/style.css'

/** @type { import('@storybook/html').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: ['Introduction', 'Get started developing','Changelog','Design Tokens'],
      },
    },
  }
};

export default preview;
