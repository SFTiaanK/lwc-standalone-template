const path = require('path');
const lwcRollupPlugin = require('@lwc/rollup-plugin');
const replace = require('rollup-plugin-replace');

const input = path.resolve(__dirname, 'src/index.js');
const outputDir = path.resolve(__dirname, 'public');

module.exports = {
    input,
    output: {
        file: path.join(outputDir, 'app.js'),
        format: 'esm'
    },
    plugins: [
        lwcRollupPlugin({
            modules: [
                { npm: 'lwc-components-lightning' },
                { npm: '@salesforce-ux/design-system' },
            ],
        }),
        replace({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        }),
    ].filter(Boolean),
    watch: {
        exclude: ['node_modules/**']
    }        
};
