import { addons } from '@storybook/manager-api';
import emundusTheme from "./emundusTheme";

addons.setConfig({
    theme: emundusTheme,
    sidebar: {
        showRoots: false,
        collapsedRoots: [],
    },
});