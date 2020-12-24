import Button from './Button.svelte';

export default {
    title: 'Example/Button',
    component: Button,
    argTypes: {
        disabled: { control: 'boolean' },
        label: { control: 'text' },
        loading: { control: 'boolean' },
        onClick: { action: 'onClick' },
        type: { control: 'text' },
    },
};

const Template = ({ onClick, ...args }) => ({
    Component: Button,
    props: args,
    on: {
        click: onClick,
    },
});

export const Plain = Template.bind({});
Plain.args = {
    label: 'Button',
    loading: false,
    type: 'button',
};
