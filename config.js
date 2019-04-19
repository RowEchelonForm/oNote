// These are the default config values:
let config = {
  google: {
    googleAccountsUrl: '...',
    googleDocsUrl: '...',
    googleDriveUrl: '...',
  },
};


const overrideConfig = getOverrideConfig();

// Deep merge overrideConfig to config
let merge = require('lodash.merge');
merge(config, overrideConfig);


function getOverrideConfig() {
  let overrideConfig;
  try {
    // These are per user customized config values; config.override.js should be in .gitignore
    overrideConfig = require('./config.override.js');
  } catch (ex) {
    console.log('No override config found');
    overrideConfig = {};
  }
  return overrideConfig;
}


module.exports = config;
