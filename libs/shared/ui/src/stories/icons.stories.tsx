import type { Meta, StoryObj } from '@storybook/react';
import { Icons } from '../components/icons';

const meta: Meta<typeof Icons> = {
  component: Icons,
  title: 'ui/Icons',
};
export default meta;
type Story = StoryObj<typeof Icons>;

export const GitHub: Story = {
  name: 'GitHub',
  args: {},
  render: () => <Icons.GitHub className="h-6 w-6" />,
};
