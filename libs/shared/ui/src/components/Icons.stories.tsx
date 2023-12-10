import type { Meta, StoryObj } from '@storybook/react';
import { Icons } from './Icons';

const meta: Meta<typeof Icons> = {
  component: Icons,
  title: 'Icons',
};
export default meta;
type Story = StoryObj<typeof Icons>;

export const GitHub: Story = {
  name: 'GitHub',
  args: {},
  render: () => <Icons.GitHub className="h-6 w-6" />,
};
