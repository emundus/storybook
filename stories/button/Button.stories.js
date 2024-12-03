import { fn } from '@storybook/test';
import icons from '/public/icons.json';

import { createButton } from './Button';
import {useGlobals} from "@storybook/manager-api";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Components/Button',
  tags: ['autodocs'],
  render: ({ label, ...args }) => {
    // You can either use a function to create DOM elements or use a plain html string!
    // return `<div>${label}</div>`;
    return createButton({ label, ...args });
  },
  argTypes: {
    label: {
      name: 'Label',
      control: 'text',
      description: 'The button label',
    },
    type: {
      name: 'Type',
      control: 'select',
      description: 'The button type',
      options: ['primary', 'secondary', 'tertiary']
    },
    icon: {
      name: 'Icon',
      control: 'select',
      description: 'The button icon',
      options: icons.icons
    }
  }
};

export const Primary = {
  args: {
    label: 'Button',
    type: 'primary'
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File",
    },
  },
};

export const Secondary = {
  args: {
    label: 'Button',
    type: 'secondary'
  },
};

