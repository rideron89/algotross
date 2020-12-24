import Input from './Input.svelte';

export default {
    title: 'Example/Input',
    component: Input,
    argTypes: {
        disabled: { control: 'boolean' },
        icon: {
            control: {
                type: 'select',
                options: ['none', 'search'],
            },
        },
        label: { control: 'text' },
        placeholder: { control: 'text' },
        type: {
            control: {
                type: 'select',
                options: ['number', 'password', 'text'],
            },
        },
    },
};

const Template = ({ onClick, ...args }) => ({
    Component: Input,
    props: args,
    on: {
        click: onClick,
    },
});

export const Text = Template.bind({});
Text.args = {
    disabled: false,
    label: 'Username',
    type: 'text',
};

export const Icon = Template.bind({});
Icon.args = {
    disabled: false,
    icon: 'search',
    label: 'Search',
    type: 'text',
};

export const Disabled = Template.bind({});
Disabled.args = {
    disabled: true,
    label: 'Username',
    type: 'text',
};
