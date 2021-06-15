/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
const { nodeExternalsPlugin } = require('esbuild-node-externals');

// default export should be an array of plugins
module.exports = [nodeExternalsPlugin({dependencies: true})];
