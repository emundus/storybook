import { fn } from '@storybook/test';
import icons from '/public/icons.json';

import { createTab } from './Tab';
import {useGlobals} from "@storybook/manager-api";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Components/Tab',
  tags: ['autodocs'],
  render: ({ label, ...args }) => {
    return createTab({ label, ...args });
  },
  argTypes: {
    label: {
      name: 'Label',
      control: 'text',
      description: 'The tab label',
    },
    state: {
      name: 'State',
      control: 'select',
      description: 'The tab state',
      options: ['active', 'inactive']
    },
    icon: {
      name: 'Icon',
      control: 'select',
      description: 'The tab icon',
      options: icons.icons
    },
    count: {
        name: 'Count',
        control: 'number',
        description: 'The tab count',
        value: 3
    }
  },
  args: {
    count: 3
  }
};

export const DefaultTab = {
  args: {
    label: '',
    state: 'active',
    icon: ''
  }
};
export const WithIcon = {
  args: {
    label: '',
    state: 'active',
    icon: 'history'
  }
};

