import type { Meta, StoryObj } from '@storybook/react';
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from './PageHeader';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { render } from 'react-dom';

const meta: Meta<typeof PageHeader> = {
  component: PageHeader,
  title: 'PageHeader',
};
export default meta;
type Story = StoryObj<typeof PageHeader>;

export const Primary = {
  args: {},
  render: () => (
    <PageHeader>
      <PageHeaderHeading>Heading</PageHeaderHeading>
      <PageHeaderDescription>Description</PageHeaderDescription>
    </PageHeader>
  ),
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to PageHeader!/gi)).toBeTruthy();
  },
};
