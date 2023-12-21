import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from '../components/Footer';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Footer> = {
  component: Footer,
  title: 'Layout/Footer',
};
export default meta;
type Story = StoryObj<typeof Footer>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Footer!/gi)).toBeTruthy();
  },
};
