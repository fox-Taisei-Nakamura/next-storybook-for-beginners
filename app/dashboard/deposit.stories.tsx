import { Meta, StoryObj } from '@storybook/react';

import Component from './deposit';

const meta = {
  title: 'dashboard/Deposit',
  component: Component,
  args: {
    data: {
      amount: 100,
      date: '2021-09-01',
    },
  },
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div className="w-[500px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Component>;
export default meta;

export const Deposit: StoryObj<typeof meta> = {};
