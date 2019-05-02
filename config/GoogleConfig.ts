import { GoogleSecrets, } from './GoogleSecrets';

export class GoogleConfig {
  public googleAccountsUrl: string | undefined;
  public googleDocsUrl: string | undefined;
  public googleDriveUrl: string | undefined;
  public googleSecrets: GoogleSecrets = new GoogleSecrets();
}
