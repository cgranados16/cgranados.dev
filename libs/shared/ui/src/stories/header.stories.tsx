import type { Meta, StoryObj } from '@storybook/react';
import { Header } from '../components/header';

const meta: Meta<typeof Header> = {
  component: Header,
  title: 'Layout/Header',
};
export default meta;
type Story = StoryObj<typeof Header>;

export const Primary: Story = {};
