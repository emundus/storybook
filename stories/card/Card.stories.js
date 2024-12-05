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
        description: {
            name: 'Description',
            control: 'text',
            description: 'The card description',
        },
        tags: {
            name: 'Tags',
            control: 'array',
            description: 'The card tags'
        },
        count: {
            name: 'Count',
            control: 'number',
            description: 'The card count',
            value: 1
        }
    },
    args: {
        count: 3
    }
};

export const DefaultCard = {
    args: {
        label: 'Title',
        description: 'Description',
        tags: [
            {
                label: 'tag1',
                type: 'primary'
            },
            {
                label: 'tag2',
                type: 'secondary'
            },
        ],
        count: 3
    }
};