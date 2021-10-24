enum LoginFormComponents {
  AccountLoginForm,
  PhoneLoginForm,
  QRCodeLoginForm,
  RegisterForm,
}
enum Gender {
  MALE,
  FEMALE,
}

enum Role {
  NORMAL,
  SUPER_ACCOUNT,
  ROOT,
}

class User {
  constructor(
    readonly account: string,
    readonly username: string,
    readonly sex: Gender,
    readonly role: Role,
    readonly avater: string
  ) {}
}

export { LoginFormComponents, Role, Gender, User };
