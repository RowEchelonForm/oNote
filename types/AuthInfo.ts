export enum AuthType {
  None,
  Google
}

export interface AuthInfo {
  type: AuthType;
  authObject: any | undefined;
}
