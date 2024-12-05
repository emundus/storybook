export const createCard = ({
    label,
    tags,
    actions,
    count
}) => {
    const cardsWrapper = document.createElement('div');
    cardsWrapper.className = 'tw-flex tw-flex-wrap tw-gap-3 tw-justify-center';

    /*for (let i = 0; i < count; i++) {
        let card = document.createElement('div');
        card.className = 'tw-border tw-border-gray-200 tw-rounded-[15px] tw-bg-white tw-mb-6 tw-gap-3 tw-shadow';
        card.style.width = '300px';
        card.style.height = '300px';

        let cardTitle = document.createElement('div');
        cardTitle.className = 'tw-text-lg tw-font-bold tw-p-3';
        cardTitle.innerText = label;
        card.appendChild(cardTitle);

        cardsWrapper.appendChild(card);
    }*/

    return cardsWrapper;
};
