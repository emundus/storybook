export const createTab = ({
                                 label,
                                 state = 'active' | 'inactive',
                                 icon,
                                 count
                             }) => {
    const tabs = document.createElement('div');
    tabs.className = 'tw-overflow-x-scroll tw-right-6 tw-flex tw-items-center tw-justify-end tw-gap-2 -tw-top-[36px]';

    for(let i = 0; i < count; i++) {
        const tab = document.createElement('div');

        const labelElt = document.createElement('span');
        if(!label) {
            labelElt.innerText = 'Tab ' + (i + 1);
        } else {
            labelElt.innerText = label;
        }

        let classes = ['tw-cursor-pointer', 'tw-rounded-t-lg', 'tw-flex', 'tw-items-center', 'tw-py-2', 'tw-px-4', 'tw-transition-colors', 'tw-duration-300', 'tw-border-x', 'tw-border-t'];

        let labelClasses = ['tw-whitespace-nowrap'];
        if (state == 'active' && i == 0) {
            classes.push('tw-bg-white tw-border-profile-full');
            labelClasses.push('tw-text-profile-full');
        } else {
            classes.push('tw-bg-neutral-200 tw-border-neutral-400');
            labelClasses.push('tw-text-neutral-700');
        }

        tab.className = classes.join(' ');
        labelElt.className = labelClasses.join(' ');

        if (icon) {
            const iconElt = document.createElement('span');
            iconElt.className = 'material-symbols-outlined tw-mr-2';
            iconElt.innerText = icon;
            if (state == 'active' && i == 0) {
                iconElt.classList.add('tw-text-profile-full');
            }
            tab.appendChild(iconElt);
        }
        tab.appendChild(labelElt);

        tabs.appendChild(tab);
    }

    return tabs;
};
