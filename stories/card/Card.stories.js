import { createCard } from './Card';

export default {
    title: 'Components/Card',
    tags: ['autodocs'],
    render: ({ label, ...args }) => {
        return createCard({label, ...args});
    },
    argTypes: {
        label: {
            name: 'Label',
            control: 'text',
            description: 'The card label',
        },
        tags: {
            name: 'Tags',
            control: 'array',
            description: 'The card tags',
            value: ['tag1', 'tag2']
        },
        actions: {
            name: 'Actions',
            control: 'array',
            description: 'The card actions',
            value: ['edit', 'delete']
        },
        count: {
            name: 'Count',
            control: 'number',
            description: 'The card count',
            value: 3
        }
    },
    args: {
        count: 3
    }
};
