import { Meta, StoryObj } from '@storybook/react';

import { FeaturesCard } from './card';

const meta: Meta<typeof FeaturesCard> = {
  title: 'Features/Card',
  component: FeaturesCard,
  tags: ['autodocs'],
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof FeaturesCard>;

export const Base: Story = {
  render: (args) => (
    <div className="w-32">
      <FeaturesCard title="Largest Contentful Paint">
        <span className="text-red-600">Hello World</span>
      </FeaturesCard>
    </div>
  ),
  args: {},
};
