export const createButton = ({
                                 label,
                                 type = 'primary' | 'secondary' | 'tertiary',
                                 icon
                             }) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    if(icon) {
        btn.innerHTML = `<span class="material-symbols-outlined">${icon}</span>${label}`;
    } else {
        btn.innerText = label;
    }

    let classes = [];
    if (type == 'primary') {
        const primary_classes = [
            'tw-btn-primary'
        ];
        classes = classes.concat(primary_classes);
    }

    if (type == 'secondary') {
        const secondary_classes = [
            'tw-btn-secondary'
        ];
        classes = classes.concat(secondary_classes);
    }

    btn.className = classes.join(' ');

    /*var r = document.querySelector(':root');
    if (primaryColor) {
        r.style.setProperty('--em-profile-color', primaryColor);
    }*/
    return btn;
};
