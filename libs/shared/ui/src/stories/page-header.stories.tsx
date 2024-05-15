import type { Meta, StoryObj } from '@storybook/react';
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '../components/page-header';

const meta: Meta<typeof PageHeader> = {
  component: PageHeader,
  tags: ['autodocs'],
  title: 'Layout/PageHeader',
};
export default meta;
type Story = StoryObj<typeof PageHeader>;

export const Primary: Story = {
  args: {},
  render: (args) => (
    <PageHeader {...args}>
      <PageHeaderHeading>Heading</PageHeaderHeading>
      <PageHeaderDescription>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
        voluptates, iste dolores labore id omnis eum necessitatibus temporibus
        laborum ratione porro eius, ea facilis, quis dignissimos reiciendis.
        Repellat, doloribus esse.
      </PageHeaderDescription>
    </PageHeader>
  ),
};
