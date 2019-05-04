import { GoogleSecrets, } from './GoogleSecrets';

export interface GoogleConfig {
  googleAccountsUrl: string | undefined;
  googleDocsUrl: string | undefined;
  googleDriveUrl: string | undefined;
  googleSecrets: GoogleSecrets;
}
