import Form from './Form.svelte';

export default {
    title: 'Example/Form',
    component: Form,
    argTypes: {},
};

const Template = ({ onClick, ...args }) => ({
    Component: Form,
    props: args,
});

export const Default = Template.bind({});
Default.args = {};
