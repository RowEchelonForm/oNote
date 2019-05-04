import { AppConfig, } from './AppConfig';

function getConfig(): AppConfig {
  return {
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
  }
};

function getOverrideConfig(): AppConfig {
  let overrideConfig: AppConfig;
  try {
    // These are per user customized config values; config.override.js should be in .gitignore
    overrideConfig = require('./config.override');
  } 
  catch (ex) {
    console.log('No override config found');
    overrideConfig = {} as AppConfig;
  }
  return overrideConfig;
}

const config: AppConfig = getConfig();
const overrideConfig: AppConfig = getOverrideConfig();

// Deep merge overrideConfig to config
const merge = require('lodash.merge');
merge(config, overrideConfig);


export default config;
