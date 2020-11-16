import { Meta, Story } from '@storybook/react/types-6-0'
import Main from '.'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'Title Basic',
    description: 'Description Basic'
  }
} as Meta

export const Basic: Story = (args) => <Main {...args} />

export const Default: Story = (args) => <Main {...args} />
Default.args = {
  title: 'Title Default',
  description: 'Description Default'
}
