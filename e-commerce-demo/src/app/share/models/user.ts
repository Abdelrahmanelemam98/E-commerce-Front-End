export class User {
  constructor(
    public userName: string,
    public password: string,
    public confirmPassword: string,
    public email: string
  ) {}
}
