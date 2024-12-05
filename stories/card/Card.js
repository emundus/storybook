export const createCard = ({
    label,
    description,
    tags,
    count
}) => {
    const cardsWrapper = document.createElement('div');
    cardsWrapper.className = 'tw-flex tw-flex-wrap tw-gap-3 tw-justify-center';

    for (let i = 0; i < count; i++) {
        let card = document.createElement('div');
        card.className = 'tw-border tw-border-gray-200 tw-rounded-[15px] tw-bg-white tw-mb-6 tw-gap-3 tw-shadow tw-cursor-pointer';
        card.style.width = '350px';
        card.style.height = '200px';

        let cardHeader = document.createElement('div');
        cardHeader.className = 'tw-flex tw-justify-between tw-items-center';

        let cardTitle = document.createElement('div');
        cardTitle.className = 'tw-text-lg tw-font-bold tw-p-3';
        cardTitle.innerText = label;
        cardHeader.appendChild(cardTitle);

        let cartActionsIcon = document.createElement('span');
        cartActionsIcon.className = 'material-symbols-outlined tw-mr-2';
        cartActionsIcon.innerText = 'more_vert';

        cardHeader.appendChild(cartActionsIcon);
        card.appendChild(cardHeader);


        let cardDescription = document.createElement('p');
        cardDescription.className = 'tw-text-sm tw-p-3';
        cardDescription.innerText = description;
        card.appendChild(cardDescription);

        const tagsWrapper = document.createElement('div');
        tagsWrapper.className = 'tw-flex tw-justify-left tw-gap-2 tw-p-3';

        tags.forEach((tag) => {
            let cardTag = document.createElement('span');
            cardTag.className = 'tw-text-xs tw-bg-gray-200 tw-px-2 tw-py-1 tw-mr-1 tw-rounded';

            switch (tag.type) {
                case 'secondary':
                    cardTag.classList.add('tw-bg-secondary-100', 'tw-text-secondary-500');
                    break;
                case 'primary':
                default:
                    cardTag.classList.add('tw-bg-main-500', 'tw-text-white');
                    break;
            }


            cardTag.innerText = tag.label;
            tagsWrapper.appendChild(cardTag);
        });
        card.append(tagsWrapper);

        cardsWrapper.appendChild(card);
    }

    return cardsWrapper;
};
