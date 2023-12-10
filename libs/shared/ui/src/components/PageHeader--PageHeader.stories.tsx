import type { Meta, StoryObj } from '@storybook/react';
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from './PageHeader';

const meta: Meta<typeof PageHeader> = {
  component: PageHeader,
  title: 'PageHeader',
};
export default meta;
type Story = StoryObj<typeof PageHeader>;

export const Primary: Story = {
  args: {},
  render: () => (
    <PageHeader>
      <PageHeaderHeading>Heading</PageHeaderHeading>
      <PageHeaderDescription>Description</PageHeaderDescription>
    </PageHeader>
  ),
};
