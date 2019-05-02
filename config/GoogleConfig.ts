import { GoogleSecrets, } from './GoogleSecrets';

export class GoogleConfig {
  public googleAccountsUrl: string | null = null;
  public googleDocsUrl: string | null = null;
  public googleDriveUrl: string | null = null;
  public googleSecrets: GoogleSecrets = new GoogleSecrets();
}
