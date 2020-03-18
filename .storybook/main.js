const path = require('path');

module.exports = {
    addons: [
    {
            name: '@storybook/addon-docs',
            options: {
              configureJSX: true,
              babelOptions: {},
            },
    },
    'storybook-addon-jsx/register'
],
};