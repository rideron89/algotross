import AlgorithmSnapshot from './AlgorithmSnapshot.svelte';

export default {
    title: 'Example/AlgorithmSnapshot',
    component: AlgorithmSnapshot,
    argTypes: {
        hasOpenTrade: { control: 'boolean' },
    },
};

const Template = ({ onClick, ...args }) => ({
    Component: AlgorithmSnapshot,
    props: args,
});

export const AllClosed = Template.bind({});
AllClosed.args = {
    hasOpenTrade: false,
};

export const OneOpen = Template.bind({});
OneOpen.args = {
    hasOpenTrade: true,
};
