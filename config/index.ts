import { AppConfig, } from './AppConfig';

const config: AppConfig = {
  googleConfig: {
    googleAccountsUrl: 'https://apis.google.com/js/api.js?onload=googleJsLoaded',
    googleDocsUrl: undefined,
    googleDriveUrl: undefined,
    googleSecrets: {
      appId: undefined,
      clientId: undefined,
      googleDeveloperKey: undefined,
    },
  },
};
const overrideConfig = getOverrideConfig();

// Deep merge overrideConfig to config
const merge = require('lodash.merge');
merge(config, overrideConfig);


function getOverrideConfig(): AppConfig {
  let overrideConfig;
  try {
    // These are per user customized config values; config.override.js should be in .gitignore
    overrideConfig = require('./config.override');
  } catch (ex) {
    console.log('No override config found');
    overrideConfig = new AppConfig();
  }
  return overrideConfig;
}

export default config;
