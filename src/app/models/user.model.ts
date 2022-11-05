export class User {
  public constructor(init?: Partial<User>) {
    Object.assign(this, init);
  }

  public access_token: string | undefined;
  public expires_in: number | undefined;
  public refresh_expires_in: number | undefined;
  public token_type: string | undefined;
  public scope: string | undefined;
}
