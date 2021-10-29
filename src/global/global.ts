import { RouteRecordName } from "vue-router";

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

interface MenuItem {
  title: string;
  key: string;
  icon?: string;
  children?: MenuItem[];
}

interface Route {
  name: RouteRecordName | null | undefined;
  path: string;
  children?: Route[];
  [propName: string]: any;
}

export { LoginFormComponents, Role, Gender, User, MenuItem, Route };
